import React, { useState, useEffect, useRef } from 'react';
import { 
  X,
  Zap,
  FolderOpen,
  ExternalLink, 
  BookOpen, 
  Volume2, 
  Sparkles, 
  HelpCircle, 
  Play, 
  Square,
  MessageSquare, 
  CheckCircle2, 
  Lightbulb, 
  FileText,
  Award,
  Layers,
  ArrowRight,
  Headphones,
  Mic,
  MicOff,
  Edit3,
  RotateCcw,
  Eye,
  EyeOff,
  Flame,
  Check,
  AlertCircle
} from 'lucide-react';

export default function LessonDetailModal({
  isOpen,
  onClose,
  unit,
  gradeName,
  textbookName,
  initialTab = 'vocabulary',
  onOpenFlashcard,
  onStartPractice
}) {
  const [activeTab, setActiveTab] = useState(initialTab || 'vocabulary');

  // When modal opens or initialTab changes, update activeTab
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, unit?.id]);

  // =========================================================================

  // =========================================================================
  // 5. PRACTICE QUIZ TAB STATE (Instant Interactive Exercises)
  // =========================================================================
  const [practiceAnswers, setPracticeAnswers] = useState({});
  const [practiceChecked, setPracticeChecked] = useState(false);
  const [practiceScore, setPracticeScore] = useState(null);

  const resetPracticeQuiz = () => {
    setPracticeAnswers({});
    setPracticeChecked(false);
    setPracticeScore(null);
  };

  useEffect(() => {
    resetPracticeQuiz();
  }, [unit?.id]);

  // 1. LISTENING STATE & HELPERS
  // =========================================================================
  const [isPlayingListening, setIsPlayingListening] = useState(false);
  const [listeningSpeed, setListeningSpeed] = useState(1.0);
  const [showScript, setShowScript] = useState(false);
  const [selectedListeningOption, setSelectedListeningOption] = useState(null);
  const [listeningChecked, setListeningChecked] = useState(false);

  const stopAllSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingListening(false);
    }
  };

  const playTextSpeech = (text, rate = 1.0, onEndCallback = null) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = rate;
      u.onend = () => {
        setIsPlayingListening(false);
        if (onEndCallback) onEndCallback();
      };
      u.onerror = () => {
        setIsPlayingListening(false);
      };
      setIsPlayingListening(true);
      window.speechSynthesis.speak(u);
    }
  };

  const handleToggleListeningPlay = () => {
    if (isPlayingListening) {
      stopAllSpeech();
    } else {
      const scriptToRead = unit?.listeningPractice?.script || unit?.overview || 'Welcome to our English lesson.';
      playTextSpeech(scriptToRead, listeningSpeed);
    }
  };

  // =========================================================================
  // 2. SPEAKING & AI VOICE RECOGNITION STATE
  // =========================================================================
  const [speakingIndex, setSpeakingIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [spokenTranscript, setSpokenTranscript] = useState('');
  const [speechScore, setSpeechScore] = useState(null);
  const [speechFeedback, setSpeechFeedback] = useState(null);
  const recognitionRef = useRef(null);

  const speakingList = unit?.speakingPractice && unit.speakingPractice.length > 0 
    ? unit.speakingPractice 
    : [{ phrase: unit?.sentencePatterns?.[0] || 'Hello, nice to meet you!', vi: 'Xin chào, rất vui được gặp bạn!' }];

  const currentSpeakingTarget = speakingList[speakingIndex] || speakingList[0];

  const calculatePronunciationScore = (targetText, recordedText) => {
    if (!recordedText) return { score: 0, feedback: 'Chưa nhận diện được giọng nói. Bạn hãy thử nói to và rõ hơn nhé!' };
    
    // Normalize texts: lower-case and strip punctuation
    const clean = (str) => str.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    const targetWords = clean(targetText).split(/\s+/).filter(Boolean);
    const spokenWords = clean(recordedText).split(/\s+/).filter(Boolean);

    if (targetWords.length === 0) return { score: 100, feedback: 'Tuyệt vời!' };

    let matched = 0;
    targetWords.forEach(tw => {
      if (spokenWords.includes(tw)) matched++;
    });

    const ratio = matched / targetWords.length;
    let score = Math.round(ratio * 100);

    // Boost if spoken contains majority of phrase
    if (clean(recordedText).includes(clean(targetText))) {
      score = 100;
    } else if (score > 90) {
      score = 95;
    }

    let feedback = '';
    if (score >= 85) {
      feedback = '🌟 Xuất sắc! Phát âm và ngữ điệu rất chuẩn xác, đạt chuẩn bản xứ!';
    } else if (score >= 60) {
      feedback = '👍 Khá tốt! Phát âm tương đối rõ, hãy chú ý nhấn âm và các phụ âm cuối.';
    } else {
      feedback = '💪 Cần cố gắng thêm! Hãy bấm loa nghe lại mẫu phát âm rồi luyện nói lại nhé.';
    }

    return { score, feedback };
  };

  const handleStartSpeakingRecord = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Trình duyệt của bạn chưa hỗ trợ Web Speech Recognition. Khuyên dùng Google Chrome hoặc Microsoft Edge!');
      return;
    }

    stopAllSpeech();
    setSpokenTranscript('');
    setSpeechScore(null);
    setSpeechFeedback(null);

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSpokenTranscript(transcript);
        const { score, feedback } = calculatePronunciationScore(currentSpeakingTarget.phrase, transcript);
        setSpeechScore(score);
        setSpeechFeedback(feedback);
      };

      recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error('Recognition start error:', err);
      setIsRecording(false);
    }
  };

  const handleStopSpeakingRecord = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (err) {
        // ignore
      }
    }
    setIsRecording(false);
  };

  // =========================================================================
  // 3. READING COMPREHENSION STATE
  // =========================================================================
  const [selectedReadingOption, setSelectedReadingOption] = useState(null);
  const [readingChecked, setReadingChecked] = useState(false);

  // =========================================================================
  // 4. WRITING & SENTENCE REARRANGEMENT STATE
  // =========================================================================
  const [scrambledPool, setScrambledPool] = useState([]);
  const [arrangedWords, setArrangedWords] = useState([]);
  const [writingChecked, setWritingChecked] = useState(false);

  // Initialize Scrambled words when unit changes
  useEffect(() => {
    if (unit?.writingPractice?.scrambledWords) {
      const initialChips = unit.writingPractice.scrambledWords.map((word, idx) => ({
        id: `chip_${idx}_${word}`,
        text: word,
        originalIdx: idx
      }));
      setScrambledPool(initialChips);
      setArrangedWords([]);
      setWritingChecked(false);
    } else {
      setScrambledPool([]);
      setArrangedWords([]);
      setWritingChecked(false);
    }

    // Reset other practices state
    setSelectedListeningOption(null);
    setListeningChecked(false);
    setSelectedReadingOption(null);
    setReadingChecked(false);
    setSpeakingIndex(0);
    setSpokenTranscript('');
    setSpeechScore(null);
    setSpeechFeedback(null);
    stopAllSpeech();
  }, [unit?.id]);

  const handlePickWordToArranged = (chip) => {
    setScrambledPool(prev => prev.filter(c => c.id !== chip.id));
    setArrangedWords(prev => [...prev, chip]);
    setWritingChecked(false);
  };

  const handleRemoveWordFromArranged = (chip) => {
    setArrangedWords(prev => prev.filter(c => c.id !== chip.id));
    setScrambledPool(prev => [...prev, chip]);
    setWritingChecked(false);
  };

  const handleResetWriting = () => {
    if (unit?.writingPractice?.scrambledWords) {
      const initialChips = unit.writingPractice.scrambledWords.map((word, idx) => ({
        id: `chip_${idx}_${word}`,
        text: word,
        originalIdx: idx
      }));
      setScrambledPool(initialChips);
      setArrangedWords([]);
      setWritingChecked(false);
    }
  };

  if (!isOpen || !unit) return null;

  const currentArrangedSentence = arrangedWords.map(w => w.text).join(' ');
  const targetCorrectSentence = unit.writingPractice?.correctSentence || '';
  const isWritingCorrect = currentArrangedSentence.trim().toLowerCase().replace(/[.,?!]/g, '') === 
                           targetCorrectSentence.trim().toLowerCase().replace(/[.,?!]/g, '');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[94vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* ========================================================================= */}
        {/* MODAL HEADER                                                              */}
        {/* ========================================================================= */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white p-4 sm:p-6 relative">
          <button
            type="button"
            onClick={() => {
              stopAllSpeech();
              onClose();
            }}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/30 text-[11px] font-extrabold uppercase tracking-wider">
              {gradeName || 'Tiếng Anh Phổ Thông'}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 text-[11px] font-semibold">
              {textbookName || 'SGK Global Success'}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
            {unit.title}
          </h2>
          <p className="text-xs sm:text-sm text-blue-200 mt-1 font-medium">
            {unit.vietnameseTitle}
          </p>

          {/* Navigation Tabs Bar inside Modal */}
          <div className="flex items-center gap-1.5 mt-5 border-b border-white/15 pb-1 overflow-x-auto no-scrollbar">
            
            {/* 1. Từ Vựng */}
            <button
              type="button"
              onClick={() => { stopAllSpeech(); setActiveTab('vocabulary'); }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'vocabulary'
                  ? 'bg-white text-blue-900 shadow-md font-extrabold'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Từ Vựng ({unit.vocabulary?.length || 0})</span>
            </button>

            {/* 2. Ngữ Pháp */}
            <button
              type="button"
              onClick={() => { stopAllSpeech(); setActiveTab('grammar'); }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'grammar'
                  ? 'bg-white text-blue-900 shadow-md font-extrabold'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Ngữ Pháp</span>
            </button>

            {/* 3. Luyện Nghe */}
            <button
              type="button"
              onClick={() => { stopAllSpeech(); setActiveTab('listening'); }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'listening'
                  ? 'bg-amber-400 text-slate-900 shadow-md font-extrabold'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <Headphones className="w-3.5 h-3.5 text-slate-900" />
              <span>🎧 Luyện Nghe</span>
            </button>

            {/* 4. Luyện Nói AI */}
            <button
              type="button"
              onClick={() => { stopAllSpeech(); setActiveTab('speaking'); }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'speaking'
                  ? 'bg-emerald-400 text-slate-900 shadow-md font-extrabold'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <Mic className="w-3.5 h-3.5 text-slate-900" />
              <span>🎙️ Luyện Nói AI</span>
            </button>

            {/* 5. Luyện Đọc */}
            <button
              type="button"
              onClick={() => { stopAllSpeech(); setActiveTab('reading'); }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'reading'
                  ? 'bg-sky-400 text-slate-900 shadow-md font-extrabold'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-slate-900" />
              <span>📖 Luyện Đọc</span>
            </button>

            {/* 6. Luyện Viết */}
            <button
              type="button"
              onClick={() => { stopAllSpeech(); setActiveTab('writing'); }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'writing'
                  ? 'bg-purple-400 text-slate-900 shadow-md font-extrabold'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5 text-slate-900" />
              <span>✍️ Luyện Viết</span>
            </button>

            {/* 7. Bài Tập & Trắc Nghiệm */}
            <button
              type="button"
              onClick={() => { stopAllSpeech(); setActiveTab('practice_quiz'); }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'practice_quiz'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-black ring-2 ring-white/50'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>📝 Bài Tập & Trắc Nghiệm</span>
            </button>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODAL BODY                                                                */}
        {/* ========================================================================= */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* ========================================================================= */}
          {/* TAB 1: TỪ VỰNG & FLASHCARDS                                               */}
          {/* ========================================================================= */}
          {activeTab === 'vocabulary' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                <div>
                  <h4 className="font-extrabold text-sm text-blue-900">
                    Bảng Từ Vựng Trọng Tâm Bám Sát Sách Giáo Khoa
                  </h4>
                  <p className="text-xs text-blue-700/90 mt-0.5">
                    Kèm phiên âm IPA chuẩn quốc tế, loại từ và câu ví dụ minh họa song ngữ Anh - Việt
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenFlashcard && onOpenFlashcard(unit)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-md shadow-blue-500/25 transition-all shrink-0 cursor-pointer active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>🎴 FLASHCARD LẬT 2 MẶT</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {unit.vocabulary?.map((v, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-black text-base text-slate-900">{v.word}</span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 uppercase">
                              {v.type}
                            </span>
                          </div>
                          <div className="text-xs font-mono text-blue-600">{v.ipa}</div>
                        </div>

                        <button
                          type="button"
                          onClick={() => playTextSpeech(v.word)}
                          className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-all cursor-pointer shrink-0"
                          title="Phát âm từ này (US/UK)"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-2 text-xs font-bold text-emerald-800 bg-emerald-50/70 p-2 rounded-lg border border-emerald-200/70">
                        👉 {v.meaning}
                      </div>
                    </div>

                    {v.example && (
                      <div className="pt-2 border-t border-slate-100 text-[11px] space-y-0.5">
                        <p className="font-medium text-slate-700 italic">"{v.example}"</p>
                        {v.exampleVi && <p className="text-slate-500">"{v.exampleVi}"</p>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: NGỮ PHÁP TRỌNG TÂM & MẸO NHỚ                                       */}
          {/* ========================================================================= */}
          {activeTab === 'grammar' && (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 space-y-3">
                <div className="flex items-center gap-2 text-indigo-900 font-extrabold text-sm sm:text-base">
                  <Lightbulb className="w-5 h-5 text-indigo-600 shrink-0" />
                  <span>Trọng Tâm Ngữ Pháp Bài Học (Grammar Focus)</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-indigo-200 text-xs sm:text-sm text-indigo-950 font-semibold leading-relaxed">
                  {unit.grammarFocus}
                </div>
              </div>

              {unit.tips && (
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs sm:text-sm uppercase tracking-wide">
                    <span>💡 Mẹo Học Nhanh & Tránh Bẫy Đề Thi</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {unit.tips}
                  </p>
                </div>
              )}

              {unit.sentencePatterns && unit.sentencePatterns.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-extrabold text-slate-900">
                    <MessageSquare className="w-4 h-4 text-teal-600" />
                    <span>Mẫu Câu Giao Tiếp Thông Dụng (Everyday English)</span>
                  </div>
                  <div className="space-y-2">
                    {unit.sentencePatterns.map((pat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs sm:text-sm"
                      >
                        <span className="font-medium text-slate-800">{pat}</span>
                        <button
                          type="button"
                          onClick={() => playTextSpeech(pat.split('(')[0].replace(/[-–]/g, ''))}
                          className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors shrink-0 cursor-pointer"
                          title="Nghe mẫu câu"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: 🎧 LUYỆN NGHE (LISTENING COMPREHENSION)                              */}
          {/* ========================================================================= */}
          {activeTab === 'listening' && (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-200/90 space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black uppercase tracking-wider">
                      Phần Luyện Nghe Hiểu (Listening Track)
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900 mt-1">
                      Nghe đoạn hội thoại / bài đọc và chọn phương án trả lời đúng
                    </h4>
                  </div>

                  {/* Audio Controls */}
                  <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-amber-200 shadow-xs">
                    <button
                      type="button"
                      onClick={handleToggleListeningPlay}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-xs transition-all cursor-pointer ${
                        isPlayingListening
                          ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse'
                          : 'bg-amber-500 hover:bg-amber-600 text-white shadow-xs'
                      }`}
                    >
                      {isPlayingListening ? (
                        <>
                          <Square className="w-3.5 h-3.5 fill-white" />
                          <span>DỪNG NGHE</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>BẬT AUDIO BẢN XỨ</span>
                        </>
                      )}
                    </button>

                    {/* Speed options */}
                    <div className="flex items-center gap-1 text-[11px] font-bold text-slate-600 border-l border-slate-200 pl-2">
                      <span className="text-[10px] text-slate-400">Tốc độ:</span>
                      {[0.8, 1.0, 1.2].map(speed => (
                        <button
                          key={speed}
                          type="button"
                          onClick={() => {
                            setListeningSpeed(speed);
                            if (isPlayingListening) {
                              const scriptToRead = unit.listeningPractice?.script || unit.overview || '';
                              playTextSpeech(scriptToRead, speed);
                            }
                          }}
                          className={`px-2 py-0.5 rounded-lg cursor-pointer ${
                            listeningSpeed === speed 
                              ? 'bg-amber-100 text-amber-900 font-black' 
                              : 'hover:bg-slate-100 text-slate-500'
                          }`}
                        >
                          {speed}x
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Audio Script Toggle */}
                <div className="flex items-center justify-between pt-2 border-t border-amber-200/60 text-xs">
                  <button
                    type="button"
                    onClick={() => setShowScript(prev => !prev)}
                    className="flex items-center gap-1.5 text-amber-800 font-bold hover:underline cursor-pointer"
                  >
                    {showScript ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    <span>{showScript ? 'Ẩn bản chép lời (Audio Script)' : 'Hiện bản chép lời (Audio Script)'}</span>
                  </button>

                  <span className="text-slate-500 text-[11px]">
                    Giọng đọc: American English chuẩn
                  </span>
                </div>

                {showScript && (
                  <div className="p-4 rounded-xl bg-white border border-amber-200 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed italic animate-in fade-in duration-200">
                    "{unit.listeningPractice?.script || unit.overview || 'Welcome to our English lesson today.'}"
                  </div>
                )}
              </div>

              {/* Listening Comprehension Question */}
              {unit.listeningPractice && (
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                      Câu hỏi kiểm tra khả năng nghe hiểu:
                    </span>
                    <h5 className="font-extrabold text-sm sm:text-base text-slate-900">
                      {unit.listeningPractice.question}
                    </h5>
                  </div>

                  <div className="space-y-2.5">
                    {unit.listeningPractice.options?.map((opt) => {
                      const isSelected = selectedListeningOption === opt.id;
                      let optionStyle = 'border-slate-200 hover:border-amber-300 hover:bg-amber-50/30';
                      
                      if (listeningChecked) {
                        if (opt.isCorrect) {
                          optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                        } else if (isSelected && !opt.isCorrect) {
                          optionStyle = 'border-rose-400 bg-rose-50 text-rose-900';
                        }
                      } else if (isSelected) {
                        optionStyle = 'border-amber-500 bg-amber-50/70 text-amber-950 font-bold';
                      }

                      return (
                        <div
                          key={opt.id}
                          onClick={() => {
                            if (!listeningChecked) setSelectedListeningOption(opt.id);
                          }}
                          className={`p-3.5 rounded-xl border-2 flex items-center justify-between gap-3 text-xs sm:text-sm transition-all cursor-pointer ${optionStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-xs shrink-0">
                              {opt.label}
                            </span>
                            <span>{opt.text}</span>
                          </div>

                          {listeningChecked && opt.isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-between">
                    {!listeningChecked ? (
                      <button
                        type="button"
                        disabled={!selectedListeningOption}
                        onClick={() => setListeningChecked(true)}
                        className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-extrabold text-xs shadow-md shadow-amber-500/20 transition-all cursor-pointer"
                      >
                        Kiểm tra kết quả
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setListeningChecked(false);
                          setSelectedListeningOption(null);
                        }}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Nghe & Làm lại</span>
                      </button>
                    )}
                  </div>

                  {/* Explanation card */}
                  {listeningChecked && (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                      <span className="font-bold text-slate-700">Giải thích chi tiết:</span>
                      <p className="text-slate-600">
                        {unit.listeningPractice.explanation || 'Hãy nghe kỹ từ khóa trong câu thoại để suy luận đáp án chính xác.'}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: 🎙️ LUYỆN NÓI AI (AI SPEAKING & PRONUNCIATION)                         */}
          {/* ========================================================================= */}
          {activeTab === 'speaking' && (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/5 border border-emerald-200/90 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-black uppercase tracking-wider">
                      Luyện Phát Âm Trí Tuệ Nhân Tạo (AI Speech Evaluation)
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900 mt-1">
                      Lắng nghe mẫu giọng bản ngữ rồi ấn nút Micro để thu âm chấm điểm
                    </h4>
                  </div>

                  {/* Target phrase selector */}
                  {speakingList.length > 1 && (
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-slate-500 font-bold">Mẫu câu:</span>
                      {speakingList.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            stopAllSpeech();
                            setSpeakingIndex(idx);
                            setSpokenTranscript('');
                            setSpeechScore(null);
                            setSpeechFeedback(null);
                          }}
                          className={`w-7 h-7 rounded-lg font-black text-xs transition-all cursor-pointer ${
                            speakingIndex === idx 
                              ? 'bg-emerald-600 text-white shadow-xs' 
                              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Target Card */}
                <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Câu cần luyện đọc:</span>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                        "{currentSpeakingTarget.phrase}"
                      </h3>
                      {currentSpeakingTarget.vi && (
                        <p className="text-xs text-emerald-800 font-semibold">
                          👉 {currentSpeakingTarget.vi}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => playTextSpeech(currentSpeakingTarget.phrase, 0.9)}
                      className="p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-all cursor-pointer shrink-0 shadow-2xs"
                      title="Nghe giọng chuẩn bản xứ"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Speech Recording Arena */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col items-center justify-center space-y-4 py-2">
                    <div className="relative">
                      {isRecording && (
                        <span className="absolute -inset-2 rounded-full bg-rose-500/20 animate-ping"></span>
                      )}
                      
                      <button
                        type="button"
                        onClick={isRecording ? handleStopSpeakingRecord : handleStartSpeakingRecord}
                        className={`relative w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-all cursor-pointer active:scale-95 ${
                          isRecording 
                            ? 'bg-rose-600 hover:bg-rose-700 ring-4 ring-rose-200' 
                            : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-emerald-500/30'
                        }`}
                        title={isRecording ? 'Bấm để dừng và chấm điểm' : 'Bấm để bắt đầu nói'}
                      >
                        {isRecording ? <Square className="w-6 h-6 fill-white" /> : <Mic className="w-7 h-7" />}
                      </button>
                    </div>

                    <div className="text-center space-y-1">
                      <p className="text-xs font-bold text-slate-700">
                        {isRecording ? 'Đang lắng nghe giọng bạn nói... Bấm lại để nộp bài' : 'Bấm vào Micro và đọc to câu trên'}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Hệ thống tự động phân tích độ chuẩn xác từng âm tiết
                      </p>
                    </div>

                    {/* Results Display */}
                    {spokenTranscript && (
                      <div className="w-full max-w-lg p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 animate-in fade-in duration-200">
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Hệ thống ghi nhận:</span>
                          <p className="text-sm font-semibold text-slate-800 italic">
                            "{spokenTranscript}"
                          </p>
                        </div>

                        {speechScore !== null && (
                          <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className={`text-2xl font-black ${
                                speechScore >= 80 ? 'text-emerald-600' : (speechScore >= 60 ? 'text-amber-500' : 'text-rose-500')
                              }`}>
                                {speechScore}%
                              </span>
                              <span className="text-xs font-bold text-slate-700">
                                {speechScore >= 80 ? 'Xuất sắc' : (speechScore >= 60 ? 'Đạt yêu cầu' : 'Cần luyện thêm')}
                              </span>
                            </div>

                            <button
                              type="button"
                              onClick={handleStartSpeakingRecord}
                              className="flex items-center gap-1 text-xs text-emerald-700 font-bold hover:underline cursor-pointer"
                            >
                              <RotateCcw className="w-3 h-3" />
                              <span>Nói lại</span>
                            </button>
                          </div>
                        )}

                        {speechFeedback && (
                          <p className="text-xs text-slate-600 bg-white p-2.5 rounded-xl border border-slate-100">
                            {speechFeedback}
                          </p>
                        )}
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 5: 📖 LUYỆN ĐỌC HIỂU (READING COMPREHENSION)                            */}
          {/* ========================================================================= */}
          {activeTab === 'reading' && (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-sky-500/10 border border-sky-200/90 space-y-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-900 text-[10px] font-black uppercase tracking-wider">
                    Bài Đọc Hiểu Đoạn Văn (Reading Passage)
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900 mt-1">
                    Đọc kỹ đoạn văn bản dưới đây và trả lời câu hỏi trắc nghiệm
                  </h4>
                </div>

                {/* Reading Passage Container */}
                <div className="p-5 rounded-2xl bg-white border border-sky-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-100">
                    <span className="font-bold flex items-center gap-1.5 text-sky-800">
                      <BookOpen className="w-4 h-4 text-sky-600" />
                      <span>Đoạn văn bài học</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => playTextSpeech(unit.readingPractice?.passage || '', 0.9)}
                      className="flex items-center gap-1 text-[11px] text-sky-700 font-bold hover:underline cursor-pointer"
                      title="Nghe người bản xứ đọc bài này"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nghe bài đọc</span>
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif pt-1">
                    {unit.readingPractice?.passage || 'No reading passage available for this lesson yet.'}
                  </p>
                </div>
              </div>

              {/* Reading Comprehension Question */}
              {unit.readingPractice && (
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider">
                      Câu hỏi đọc hiểu:
                    </span>
                    <h5 className="font-extrabold text-sm sm:text-base text-slate-900">
                      {unit.readingPractice.question}
                    </h5>
                  </div>

                  <div className="space-y-2.5">
                    {unit.readingPractice.options?.map((opt) => {
                      const isSelected = selectedReadingOption === opt.id;
                      let optionStyle = 'border-slate-200 hover:border-sky-300 hover:bg-sky-50/30';
                      
                      if (readingChecked) {
                        if (opt.isCorrect) {
                          optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                        } else if (isSelected && !opt.isCorrect) {
                          optionStyle = 'border-rose-400 bg-rose-50 text-rose-900';
                        }
                      } else if (isSelected) {
                        optionStyle = 'border-sky-500 bg-sky-50/70 text-sky-950 font-bold';
                      }

                      return (
                        <div
                          key={opt.id}
                          onClick={() => {
                            if (!readingChecked) setSelectedReadingOption(opt.id);
                          }}
                          className={`p-3.5 rounded-xl border-2 flex items-center justify-between gap-3 text-xs sm:text-sm transition-all cursor-pointer ${optionStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-xs shrink-0">
                              {opt.label}
                            </span>
                            <span>{opt.text}</span>
                          </div>

                          {readingChecked && opt.isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-between">
                    {!readingChecked ? (
                      <button
                        type="button"
                        disabled={!selectedReadingOption}
                        onClick={() => setReadingChecked(true)}
                        className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white font-extrabold text-xs shadow-md shadow-sky-500/20 transition-all cursor-pointer"
                      >
                        Kiểm tra kết quả
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setReadingChecked(false);
                          setSelectedReadingOption(null);
                        }}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Làm lại</span>
                      </button>
                    )}
                  </div>

                  {/* Explanation card */}
                  {readingChecked && (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                      <span className="font-bold text-slate-700">Giải thích chi tiết:</span>
                      <p className="text-slate-600">
                        {unit.readingPractice.explanation || 'Đối chiếu trực tiếp với câu văn trong đoạn trích để tìm dữ liệu chính xác.'}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 6: ✍️ LUYỆN VIẾT & SẮP XẾP CÂU (WRITING & SENTENCE REARRANGEMENT)       */}
          {/* ========================================================================= */}
          {activeTab === 'writing' && (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-200/90 space-y-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 text-[10px] font-black uppercase tracking-wider">
                    Luyện Kỹ Năng Viết & Cấu Trúc Câu (Writing Practice)
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900 mt-1">
                    {unit.writingPractice?.prompt || 'Bấm chọn các từ bị xáo trộn bên dưới để ghép thành câu đúng ngữ pháp'}
                  </h4>
                </div>

                {/* Sentence Tray (Khay chứa câu đã ghép) */}
                <div className="p-5 rounded-2xl bg-white border-2 border-dashed border-purple-300 min-h-[90px] flex flex-wrap items-center gap-2">
                  {arrangedWords.length === 0 ? (
                    <span className="text-xs text-slate-400 italic">
                      Bấm vào các thẻ từ gợi ý bên dưới để đưa vào khay xếp câu...
                    </span>
                  ) : (
                    arrangedWords.map((chip) => (
                      <button
                        key={chip.id}
                        type="button"
                        onClick={() => handleRemoveWordFromArranged(chip)}
                        className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
                        title="Bấm để đưa từ này trở lại"
                      >
                        <span>{chip.text}</span>
                        <span className="text-[10px] text-purple-200">✕</span>
                      </button>
                    ))
                  )}
                </div>

                {/* Scrambled Word Pool (Kho thẻ từ gợi ý) */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-600">Thẻ từ gợi ý (bấm chọn):</span>
                    {arrangedWords.length > 0 && (
                      <button
                        type="button"
                        onClick={handleResetWriting}
                        className="flex items-center gap-1 text-purple-700 font-bold hover:underline cursor-pointer text-[11px]"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Xếp lại từ đầu</span>
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {scrambledPool.length === 0 && arrangedWords.length > 0 ? (
                      <span className="text-xs text-emerald-600 font-bold">
                        Đã chọn hết tất cả các từ! Hãy bấm "Kiểm tra kết quả".
                      </span>
                    ) : (
                      scrambledPool.map((chip) => (
                        <button
                          key={chip.id}
                          type="button"
                          onClick={() => handlePickWordToArranged(chip)}
                          className="px-3.5 py-2 rounded-xl bg-white hover:bg-purple-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 hover:border-purple-400 shadow-2xs transition-all cursor-pointer active:scale-95"
                        >
                          {chip.text}
                        </button>
                      ))
                    )}
                  </div>
                </div>

                {/* Action Validation */}
                <div className="pt-3 border-t border-purple-200/60 flex items-center justify-between">
                  <button
                    type="button"
                    disabled={arrangedWords.length === 0}
                    onClick={() => setWritingChecked(true)}
                    className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-extrabold text-xs shadow-md shadow-purple-500/20 transition-all cursor-pointer active:scale-95"
                  >
                    Kiểm tra kết quả
                  </button>

                  <button
                    type="button"
                    onClick={() => playTextSpeech(targetCorrectSentence)}
                    className="flex items-center gap-1.5 text-xs text-purple-800 font-bold hover:underline cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Nghe câu mẫu hoàn chỉnh</span>
                  </button>
                </div>

                {/* Result Feedback */}
                {writingChecked && (
                  <div className={`p-4 rounded-2xl border-2 transition-all space-y-2 animate-in zoom-in-95 duration-200 ${
                    isWritingCorrect 
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950' 
                      : 'bg-rose-50 border-rose-400 text-rose-950'
                  }`}>
                    <div className="flex items-center gap-2">
                      {isWritingCorrect ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          <span className="font-extrabold text-sm sm:text-base text-emerald-800">
                            Chính xác 100%! Bạn đã ghép câu chuẩn ngữ pháp.
                          </span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                          <span className="font-extrabold text-sm sm:text-base text-rose-800">
                            Chưa chính xác! Hãy kiểm tra lại thứ tự các thành phần câu.
                          </span>
                        </>
                      )}
                    </div>

                    <div className="pt-2 border-t border-slate-200/50 text-xs space-y-1">
                      <p>
                        <strong>Câu chuẩn:</strong> <span className="font-serif italic font-bold">"{targetCorrectSentence}"</span>
                      </p>
                      {unit.writingPractice?.explanation && (
                        <p className="text-slate-600">
                          <strong>Mẹo ngữ pháp:</strong> {unit.writingPractice.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}


          {/* ========================================================================= */}
          {/* TAB 7: BÀI TẬP & TRẮC NGHIỆM TƯƠNG TÁC (Tự Chấm Điểm & Giải Thích Chi Tiết)  */}
          {/* ========================================================================= */}
          {activeTab === 'practice_quiz' && (() => {
            // Build dynamically synthesized questions from unit
            const questionsList = [];

            // Q1: Reading Comprehension
            if (unit?.readingPractice) {
              questionsList.push({
                id: 'pq_reading',
                type: 'reading',
                badge: '📖 Đọc Hiểu Đoạn Văn',
                title: unit.readingPractice.title || unit.title,
                passage: unit.readingPractice.passage,
                question: unit.readingPractice.question || 'Dựa vào bài đọc trên, hãy chọn phương án chính xác:',
                options: unit.readingPractice.options || [
                  { id: 'opt_r1', text: 'Chính xác theo nội dung bài đọc', isCorrect: true },
                  { id: 'opt_r2', text: 'Sai lệch so với đoạn văn', isCorrect: false }
                ],
                explanation: unit.readingPractice.explanation || 'Thông tin được đối chiếu trực tiếp từ bài đọc.'
              });
            }

            // Q2: Listening Comprehension
            if (unit?.listeningPractice) {
              questionsList.push({
                id: 'pq_listening',
                type: 'listening',
                badge: '🎧 Nghe Hiểu Trích Đoạn',
                script: unit.listeningPractice.script,
                question: unit.listeningPractice.question || 'Nghe đoạn trích bài giảng và chọn đáp án chính xác:',
                options: unit.listeningPractice.options || [
                  { id: 'opt_l1', text: 'Đáp án đúng theo bài nghe', isCorrect: true },
                  { id: 'opt_l2', text: 'Đáp án sai', isCorrect: false }
                ],
                explanation: unit.listeningPractice.explanation || 'Kịch bản nghe đã chỉ rõ thông tin trên.'
              });
            }

            // Q3 & Q4: Vocabulary in context
            const vocabs = unit?.vocabulary || [];
            vocabs.slice(0, 2).forEach((v, idx) => {
              const distractors = vocabs.filter(item => item.word !== v.word).map(item => item.meaning);
              const fallback = ['Môi trường sống tự nhiên', 'Quy luật phát triển vũ trụ', 'Cấu trúc vật chất vi mô'];
              const wrongOptions = [...distractors, ...fallback].filter(m => m !== v.meaning).slice(0, 3);
              const allOpts = [
                { id: `opt_v_${idx}_correct`, text: v.meaning, isCorrect: true },
                ...wrongOptions.map((m, mIdx) => ({ id: `opt_v_${idx}_w_${mIdx}`, text: m, isCorrect: false }))
              ].sort(() => Math.random() - 0.5);

              questionsList.push({
                id: `pq_vocab_${idx}`,
                type: 'vocab',
                badge: `🗂️ Từ Vựng Trọng Tâm #${idx + 1}`,
                question: `Từ vựng "${v.word}" (${v.ipa || ''}, từ loại: ${v.type || 'noun'}) mang ý nghĩa tiếng Việt nào sau đây?`,
                example: `Ví dụ: "${v.example || ''}" (${v.exampleVi || ''})`,
                options: allOpts,
                explanation: `"${v.word}" nghĩa là "${v.meaning}". ${v.example ? `Ví dụ trong bài: "${v.example}"` : ''}`
              });
            });

            // Q5: Sentence Rearrangement or Grammar
            if (unit?.writingPractice) {
              questionsList.push({
                id: 'pq_writing',
                type: 'writing',
                badge: '✍️ Ngữ Pháp & Cấu Trúc Câu',
                prompt: unit.writingPractice.prompt || 'Chọn câu tiếng Anh viết đúng ngữ pháp nhất:',
                correctSentence: unit.writingPractice.correctSentence,
                options: [
                  { id: 'opt_w_correct', text: unit.writingPractice.correctSentence, isCorrect: true },
                  { id: 'opt_w_wrong1', text: (unit.writingPractice.scrambledWords || []).join(' '), isCorrect: false }
                ].sort(() => Math.random() - 0.5),
                explanation: unit.writingPractice.explanation || 'Cấu trúc câu hoàn chỉnh đúng ngữ pháp tiếng Anh.'
              });
            }

            const handleCheckAllAnswers = () => {
              let correctCount = 0;
              questionsList.forEach(q => {
                const userPick = practiceAnswers[q.id];
                const correctOpt = q.options.find(o => o.isCorrect);
                if (userPick && correctOpt && userPick === correctOpt.id) {
                  correctCount++;
                }
              });
              const pct = Math.round((correctCount / Math.max(1, questionsList.length)) * 100);
              setPracticeScore({
                correct: correctCount,
                total: questionsList.length,
                percentage: pct
              });
              setPracticeChecked(true);
            };

            return (
              <div className="space-y-6 animate-in fade-in duration-200">
                
                {/* Header Banner */}
                <div className="p-5 rounded-3xl bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/5 border border-amber-300/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white font-black text-[11px] uppercase tracking-wider shadow-2xs">
                      <Zap className="w-3.5 h-3.5 fill-white" />
                      <span>Bài Tập Trắc Nghiệm & Đọc Hiểu Theo Bài</span>
                    </div>
                    <h3 className="font-black text-base sm:text-lg text-slate-900 leading-snug">
                      Luyện Tập & Củng Cố Toàn Diện: {unit.title}
                    </h3>
                    <p className="text-xs text-slate-600">
                      Bao gồm {questionsList.length} câu hỏi tự động trích xuất từ bài đọc hiểu, kịch bản nghe, từ vựng và ngữ pháp.
                    </p>
                  </div>

                  {practiceChecked && practiceScore && (
                    <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-amber-300 shadow-sm shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-sm">
                        {practiceScore.percentage}%
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500">Kết quả bài tập</div>
                        <div className="text-sm font-black text-slate-900">
                          {practiceScore.correct} / {practiceScore.total} câu đúng
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Questions Render Loop */}
                <div className="space-y-5">
                  {questionsList.map((q, qIdx) => {
                    const userPick = practiceAnswers[q.id];
                    const isAnswered = !!userPick;
                    const correctOpt = q.options.find(o => o.isCorrect);
                    const isUserCorrect = practiceChecked && userPick === correctOpt?.id;

                    return (
                      <div 
                        key={q.id}
                        className={`p-5 sm:p-6 rounded-3xl border transition-all ${
                          practiceChecked
                            ? isUserCorrect 
                              ? 'bg-emerald-50/40 border-emerald-300 ring-1 ring-emerald-300' 
                              : 'bg-rose-50/30 border-rose-300 ring-1 ring-rose-300'
                            : 'bg-white border-slate-200/90 shadow-2xs hover:border-slate-300'
                        }`}
                      >
                        {/* Question Top Badge */}
                        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 font-black text-xs flex items-center justify-center">
                              {qIdx + 1}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-bold">
                              {q.badge}
                            </span>
                          </div>

                          {practiceChecked && (
                            <span className={`px-2.5 py-1 rounded-xl text-xs font-black flex items-center gap-1 ${
                              isUserCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                            }`}>
                              {isUserCorrect ? '✓ Đúng (+1.0 đ)' : '✗ Chưa đúng (0 đ)'}
                            </span>
                          )}
                        </div>

                        {/* Passage (If Reading Comprehension) */}
                        {q.type === 'reading' && q.passage && (
                          <div className="mb-4 p-4 rounded-2xl bg-sky-50/70 border border-sky-200 text-xs sm:text-sm text-slate-800 leading-relaxed space-y-2">
                            <div className="font-black text-sky-900 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                              <FileText className="w-3.5 h-3.5 text-sky-600" />
                              <span>Đoạn văn đọc hiểu: {q.title}</span>
                            </div>
                            <p className="whitespace-pre-line font-serif italic text-slate-700">{q.passage}</p>
                          </div>
                        )}

                        {/* Audio Track (If Listening) */}
                        {q.type === 'listening' && q.script && (
                          <div className="mb-4 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5">
                              <Headphones className="w-4 h-4 text-amber-700" />
                              <span className="text-xs font-bold text-amber-950">Đoạn băng nghe âm thanh chuẩn Mỹ:</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => playTextSpeech(q.script, 1.0)}
                              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                              <span>Phát Audio</span>
                            </button>
                          </div>
                        )}

                        {/* Question Title */}
                        <div className="space-y-1 mb-4">
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                            {q.question}
                          </h4>
                          {q.example && (
                            <p className="text-xs text-slate-500 italic">{q.example}</p>
                          )}
                        </div>

                        {/* Options */}
                        <div className="space-y-2.5">
                          {q.options.map((opt, oIdx) => {
                            const isPicked = userPick === opt.id;
                            const isThisCorrect = opt.isCorrect;
                            const letter = String.fromCharCode(65 + oIdx);

                            let optStyle = "border-slate-200 bg-white hover:bg-slate-50 text-slate-800";
                            if (practiceChecked) {
                              if (isThisCorrect) {
                                optStyle = "border-emerald-500 bg-emerald-100/70 text-emerald-950 font-bold ring-1 ring-emerald-500";
                              } else if (isPicked && !isThisCorrect) {
                                optStyle = "border-rose-500 bg-rose-100/70 text-rose-950 font-medium ring-1 ring-rose-500";
                              } else {
                                optStyle = "border-slate-200 bg-slate-50/50 text-slate-400 opacity-70";
                              }
                            } else if (isPicked) {
                              optStyle = "border-amber-500 bg-amber-50 text-amber-950 font-bold ring-2 ring-amber-400";
                            }

                            return (
                              <button
                                key={opt.id}
                                type="button"
                                disabled={practiceChecked}
                                onClick={() => setPracticeAnswers(prev => ({ ...prev, [q.id]: opt.id }))}
                                className={`w-full p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${optStyle}`}
                              >
                                <span className={`w-6 h-6 rounded-lg font-black text-xs flex items-center justify-center shrink-0 ${
                                  practiceChecked && isThisCorrect 
                                    ? 'bg-emerald-600 text-white' 
                                    : (isPicked ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600')
                                }`}>
                                  {letter}
                                </span>
                                <span className="text-xs sm:text-sm flex-1 leading-relaxed">{opt.text}</span>
                                {practiceChecked && isThisCorrect && (
                                  <Check className="w-4 h-4 text-emerald-700 stroke-[3] shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation on Check */}
                        {practiceChecked && (
                          <div className="mt-4 p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-1">
                            <div className="font-black flex items-center gap-1.5 text-blue-800">
                              <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                              <span>Giải thích chi tiết:</span>
                            </div>
                            <p className="leading-relaxed">{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Action Strip */}
                <div className="p-5 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-600 font-semibold text-center sm:text-left">
                    {!practiceChecked 
                      ? `Đã trả lời: ${Object.keys(practiceAnswers).length} / ${questionsList.length} câu hỏi`
                      : `Hoàn thành bài tập! Điểm số: ${practiceScore?.correct}/${practiceScore?.total} (${practiceScore?.percentage}%)`
                    }
                  </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    {!practiceChecked ? (
                      <button
                        type="button"
                        onClick={handleCheckAllAnswers}
                        disabled={Object.keys(practiceAnswers).length === 0}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-black text-xs shadow-md shadow-amber-500/20 transition-all cursor-pointer active:scale-95"
                      >
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Kiểm Tra Đáp Án & Tính Điểm</span>
                      </button>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={resetPracticeQuiz}
                          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl border border-slate-300 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Làm Lại</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            stopAllSpeech();
                            onStartPractice && onStartPractice(unit, 'quiz15');
                          }}
                          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs shadow-md shadow-indigo-600/20 transition-all cursor-pointer active:scale-95"
                        >
                          <Zap className="w-3.5 h-3.5 fill-white" />
                          <span>🚀 Bắt Đầu Bài Thi 15 Phút Tính Điểm</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>

              </div>
            );
          })()}

        </div>

        {/* ========================================================================= */}
        {/* MODAL FOOTER ACTIONS                                                      */}
        {/* ========================================================================= */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Đã hoàn thành ôn luyện 4 kỹ năng? Hãy thử sức với bài kiểm tra trắc nghiệm!
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                stopAllSpeech();
                onOpenFlashcard && onOpenFlashcard(unit);
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-blue-300 text-blue-700 hover:bg-blue-50 font-bold text-xs transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Học Flashcard</span>
            </button>

            <button
              type="button"
              onClick={() => {
                stopAllSpeech();
                onStartPractice && onStartPractice(unit);
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer active:scale-95"
            >
              <span>Luyện tập ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
