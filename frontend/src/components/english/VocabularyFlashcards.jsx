import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  Mic, 
  MicOff, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Shuffle, 
  HelpCircle,
  X,
  Languages
} from 'lucide-react';

export default function VocabularyFlashcards({
  vocabList = [],
  unitTitle = 'Unit 1: Từ vựng trọng tâm',
  gradeName = 'Tiếng Anh Lớp 6',
  onClose
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [accent, setAccent] = useState('US'); // 'US' | 'UK'
  
  // AI Speech Recognition State
  const [isListening, setIsListening] = useState(false);
  const [speechResult, setSpeechResult] = useState(null); // { spokenText, score, feedback }
  const [recognitionError, setRecognitionError] = useState('');

  const synthRef = useRef(window.speechSynthesis);
  const recognitionRef = useRef(null);

  const currentCard = vocabList[currentIndex] || {
    word: 'Education',
    ipa: '/ˌedʒ.ʊˈkeɪ.ʃən/',
    type: 'noun',
    meaning: 'Nền giáo dục, sự giáo dục',
    example: 'Education is the key to unlocking future potential.',
    exampleVi: 'Giáo dục là chìa khóa để mở khóa tiềm năng tương lai.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop&q=80'
  };

  // Reset flip when index changes
  useEffect(() => {
    setIsFlipped(false);
    setSpeechResult(null);
    setRecognitionError('');
  }, [currentIndex]);

  // Audio Pronunciation (TTS)
  const speakWord = (textToSpeak, targetAccent = accent) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(textToSpeak || currentCard.word);
    utterance.lang = targetAccent === 'UK' ? 'en-GB' : 'en-US';
    utterance.rate = 0.85; // Slightly slower for clear pronunciation learning

    const voices = synthRef.current.getVoices();
    const voiceLang = targetAccent === 'UK' ? 'en-GB' : 'en-US';
    const chosenVoice = voices.find(v => v.lang.includes(voiceLang) || (targetAccent === 'UK' && v.name.includes('UK')));
    if (chosenVoice) utterance.voice = chosenVoice;

    synthRef.current.speak(utterance);
  };

  // Speech Recognition (AI Pronunciation Test)
  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setRecognitionError('Trình duyệt của bạn chưa hỗ trợ Micro nhận diện giọng nói (Khuyến nghị dùng Google Chrome).');
      return;
    }

    try {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }

      const rec = new SpeechRecognition();
      rec.lang = accent === 'UK' ? 'en-GB' : 'en-US';
      rec.interimResults = false;
      rec.maxAlternatives = 3;

      rec.onstart = () => {
        setIsListening(true);
        setRecognitionError('');
        setSpeechResult(null);
      };

      rec.onresult = (event) => {
        const spoken = event.results[0][0].transcript.trim().toLowerCase();
        const target = currentCard.word.trim().toLowerCase();

        // Calculate similarity percentage (Levenshtein distance simplified)
        const score = calculatePronunciationScore(spoken, target);
        let feedback = 'Phát âm tuyệt vời! Chuẩn bản xứ!';
        let color = 'text-emerald-600';

        if (score >= 90) {
          feedback = 'Xuất sắc! Phát âm rất chuẩn xác.';
          color = 'text-emerald-600';
        } else if (score >= 70) {
          feedback = 'Khá tốt! Cần chú ý thêm âm cuối và trọng âm.';
          color = 'text-blue-600';
        } else {
          feedback = `Cần luyện thêm. Bạn vừa đọc là: "${spoken}"`;
          color = 'text-amber-600';
        }

        setSpeechResult({
          spokenText: spoken,
          score,
          feedback,
          color
        });
      };

      rec.onerror = (event) => {
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setRecognitionError('Vui lòng cho phép quyền truy cập Micro trên trình duyệt để luyện phát âm.');
        } else {
          setRecognitionError('Không nhận diện được giọng nói. Vui lòng bấm mic và đọc lại to rõ hơn.');
        }
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
      rec.start();
    } catch (err) {
      setIsListening(false);
      setRecognitionError('Không thể khởi tạo micro');
    }
  };

  // Calculate similarity between spoken and target
  function calculatePronunciationScore(s1, s2) {
    if (s1 === s2) return 100;
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    if (longer.length === 0) return 100;

    let costs = new Array();
    for (let i = 0; i <= longer.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= shorter.length; j++) {
        if (i === 0) costs[j] = j;
        else {
          if (j > 0) {
            let newValue = costs[j - 1];
            if (longer.charAt(i - 1) !== shorter.charAt(j - 1)) {
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            }
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[shorter.length] = lastValue;
    }
    const editDistance = costs[shorter.length];
    const similarity = (longer.length - editDistance) / parseFloat(longer.length);
    return Math.max(30, Math.round(similarity * 100));
  }

  const handleNext = () => {
    if (currentIndex < vocabList.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // loop
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(vocabList.length - 1);
    }
  };

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * vocabList.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Modal */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                {unitTitle}
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{gradeName} • Flashcard lật 2 mặt thông minh</p>
          </div>

          <div className="flex items-center gap-2">
            {/* Accent Selector */}
            <div className="flex items-center bg-slate-200/80 p-0.5 rounded-lg text-xs font-bold font-mono">
              <button
                type="button"
                onClick={() => setAccent('US')}
                className={`px-2 py-1 rounded-md transition-all ${accent === 'US' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'}`}
                title="Giọng Anh-Mỹ (US)"
              >
                🇺🇸 US
              </button>
              <button
                type="button"
                onClick={() => setAccent('UK')}
                className={`px-2 py-1 rounded-md transition-all ${accent === 'UK' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'}`}
                title="Giọng Anh-Anh (UK)"
              >
                🇬🇧 UK
              </button>
            </div>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Flashcard Area */}
        <div className="p-5 sm:p-7 flex-1 flex flex-col items-center justify-center overflow-y-auto">
          {/* Card Outer */}
          <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full max-w-md h-[340px] sm:h-[360px] perspective-1000 cursor-pointer select-none group"
            title="Bấm vào thẻ để lật xem nghĩa & ví dụ"
          >
            <div className={`w-full h-full duration-500 preserve-3d transition-transform rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg border relative ${
              isFlipped 
                ? 'bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white border-blue-700/60' 
                : 'bg-gradient-to-br from-white to-blue-50/50 text-slate-900 border-blue-200/80 hover:border-blue-400'
            }`}>
              
              {/* Card Badge */}
              <div className="flex items-center justify-between text-xs">
                <span className={`px-2.5 py-1 rounded-lg font-bold uppercase tracking-wider text-[10px] ${
                  isFlipped ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'
                }`}>
                  {isFlipped ? 'MẶT SAU: NGHĨA & VÍ DỤ' : 'MẶT TRƯỚC: TỪ VỰNG'}
                </span>

                <span className={`text-[11px] font-semibold flex items-center gap-1 ${isFlipped ? 'text-blue-200' : 'text-slate-400'}`}>
                  <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                  Bấm để lật
                </span>
              </div>

              {/* CARD FRONT: Word, IPA, Part of speech, Image */}
              {!isFlipped ? (
                <div className="text-center space-y-3 my-auto">
                  {currentCard.imageUrl && (
                    <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-xs border border-blue-200/60">
                      <img src={currentCard.imageUrl} alt={currentCard.word} className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      {currentCard.word}
                    </h2>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <span className="font-mono text-sm sm:text-base text-blue-600 font-semibold">
                        {currentCard.ipa}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 italic">
                        ({currentCard.type || 'voca'})
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 italic">
                    Bấm vào thẻ để xem nghĩa tiếng Việt & câu ví dụ
                  </p>
                </div>
              ) : (
                /* CARD BACK: Meaning, Example sentence, Example translation */
                <div className="space-y-4 my-auto text-left">
                  <div>
                    <span className="text-[11px] text-blue-300 uppercase font-bold tracking-wider block">
                      Định nghĩa tiếng Việt:
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mt-1">
                      {currentCard.meaning}
                    </h3>
                  </div>

                  {currentCard.example && (
                    <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 space-y-1">
                      <div className="text-xs font-bold text-blue-300 flex items-center gap-1">
                        <span>Câu ví dụ:</span>
                      </div>
                      <p className="text-sm font-medium text-white italic">
                        "{currentCard.example}"
                      </p>
                      {currentCard.exampleVi && (
                        <p className="text-xs text-slate-300">
                          👉 {currentCard.exampleVi}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Quick Pronounce button on card */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-200/40">
                <span className="text-[11px] text-slate-400">
                  Thẻ {currentIndex + 1} / {vocabList.length}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    speakWord(currentCard.word);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-transform active:scale-95 ${
                    isFlipped 
                      ? 'bg-blue-500 hover:bg-blue-400 text-white' 
                      : 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200'
                  }`}
                  title="Nghe phát âm chuẩn"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Nghe ({accent})</span>
                </button>
              </div>

            </div>
          </div>

          {/* AI SPEECH RECOGNITION (Luyện Phát Âm AI) */}
          <div className="w-full max-w-md mt-5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Luyện phát âm AI (Chấm điểm giọng đọc):
              </span>
              <span className="text-[10px] text-slate-400">Đọc từ "{currentCard.word}"</span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={startSpeechRecognition}
                disabled={isListening}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25'
                }`}
              >
                {isListening ? (
                  <>
                    <Mic className="w-4 h-4 animate-bounce" />
                    <span>Đang lắng nghe... Hãy nói ngay!</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-4 h-4" />
                    <span>Bấm để đọc & chấm điểm AI</span>
                  </>
                )}
              </button>
            </div>

            {/* Speech Result Display */}
            {speechResult && (
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 space-y-1 text-xs animate-fadeIn">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-bold text-slate-800">Độ chuẩn xác:</span>
                  <span className={`font-black text-sm ${speechResult.score >= 80 ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {speechResult.score}%
                  </span>
                </div>
                <p className={`font-semibold ${speechResult.color}`}>
                  {speechResult.feedback}
                </p>
              </div>
            )}

            {recognitionError && (
              <p className="text-[11px] text-amber-600 font-medium italic">
                {recognitionError}
              </p>
            )}
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-white">
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center gap-1 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 active:scale-95 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Từ trước</span>
          </button>

          {/* Shuffle button */}
          <button
            type="button"
            onClick={handleShuffle}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold text-xs transition-colors"
            title="Xáo trộn ngẫu nhiên"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Ngẫu nhiên</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-1 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-95 transition-all"
          >
            <span>Từ tiếp theo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

