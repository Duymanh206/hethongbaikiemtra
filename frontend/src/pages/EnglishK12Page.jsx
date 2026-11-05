import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Headphones, 
  Mic, 
  Award, 
  Clock, 
  HelpCircle, 
  Zap, 
  Swords, 
  GraduationCap, 
  CheckCircle2, 
  Layers, 
  Search, 
  Play, 
  RotateCw, 
  Volume2, 
  Calendar, 
  ChevronRight, 
  Flame,
  ArrowRight,
  Lightbulb,
  MessageSquare
} from 'lucide-react';
import VocabularyFlashcards from '../components/english/VocabularyFlashcards';
import LessonDetailModal from '../components/english/LessonDetailModal';

export default function EnglishK12Page({
  onSelectQuiz,
  onStartExam,
  onStartBattleForQuiz
}) {
  // Navigation & Filter States
  const [activeHubTab, setActiveHubTab] = useState('lessons'); // 'lessons' | 'exams'
  const [selectedLevel, setSelectedLevel] = useState('all'); // 'all' | 'primary' | 'secondary' | 'highschool'
  const [selectedGrade, setSelectedGrade] = useState('all'); // 'all' | 'Lớp 1' | ... | 'Lớp 12'
  const [searchQuery, setSearchQuery] = useState('');

  // Data States
  const [curriculumList, setCurriculumList] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal States
  const [flashcardModalOpen, setFlashcardModalOpen] = useState(false);
  const [flashcardsData, setFlashcardsData] = useState([]);
  const [flashcardUnitTitle, setFlashcardUnitTitle] = useState('Từ Vựng Trọng Tâm K12');
  const [flashcardGradeName, setFlashcardGradeName] = useState('Tiếng Anh Phổ Thông');
  const [selectedUnitDetail, setSelectedUnitDetail] = useState(null);

  // Fetch Curriculum, Quizzes & Flashcards
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        // 1. Fetch Curriculum (Grades 1-12)
        try {
          const cRes = await fetch('/api/quizzes/english/curriculum');
          const cData = await cRes.json();
          if (cData.success && Array.isArray(cData.curriculum)) {
            setCurriculumList(cData.curriculum);
          }
        } catch (err) {
          console.warn('Failed to load curriculum:', err);
        }

        // 2. Fetch Quizzes
        try {
          const qRes = await fetch('/api/quizzes');
          const qData = await qRes.json();
          if (qData.success && Array.isArray(qData.quizzes)) {
            const engQuizzes = qData.quizzes.filter(q => {
              const cat = (q.category || '').toLowerCase();
              const title = (q.title || '').toLowerCase();
              return cat.includes('tiếng anh') || cat.includes('english') || title.includes('tiếng anh') || title.includes('global success') || title.includes('thpt');
            });
            setQuizzes(engQuizzes);
          }
        } catch (err) {
          console.warn('Failed to load quizzes:', err);
        }

        // 3. Fetch default Flashcards
        try {
          const fRes = await fetch('/api/quizzes/english/flashcards');
          const fData = await fRes.json();
          if (fData.success && Array.isArray(fData.flashcards)) {
            setFlashcardsData(fData.flashcards);
          }
        } catch (err) {
          console.warn('Failed to load flashcards:', err);
        }

      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Filtered Curriculum list based on Level & Grade
  const filteredCurriculum = curriculumList.filter(gradeItem => {
    // Level filter
    if (selectedLevel !== 'all' && gradeItem.level !== selectedLevel) {
      return false;
    }
    // Specific Grade filter
    if (selectedGrade !== 'all' && gradeItem.grade !== selectedGrade) {
      return false;
    }
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      const matchGrade = gradeItem.grade.toLowerCase().includes(q) || gradeItem.description.toLowerCase().includes(q);
      const matchUnit = gradeItem.units?.some(u => 
        u.title.toLowerCase().includes(q) || 
        u.vietnameseTitle.toLowerCase().includes(q) ||
        u.vocabulary?.some(v => v.word.toLowerCase().includes(q) || v.meaning.toLowerCase().includes(q))
      );
      if (!matchGrade && !matchUnit) return false;
    }
    return true;
  });

  // Filtered Quizzes based on level, grade, search
  const filteredQuizzes = quizzes.filter(q => {
    if (searchQuery.trim()) {
      const qText = `${q.title} ${q.description} ${q.category}`.toLowerCase();
      if (!qText.includes(searchQuery.trim().toLowerCase())) return false;
    }

    if (selectedLevel === 'primary') {
      const isPri = q.level === 'primary' || q.title.includes('LỚP 1') || q.title.includes('LỚP 2') || q.title.includes('LỚP 3') || q.title.includes('LỚP 4') || q.title.includes('LỚP 5');
      if (!isPri) return false;
    } else if (selectedLevel === 'secondary') {
      const isSec = q.level === 'secondary' || q.title.includes('LỚP 6') || q.title.includes('LỚP 7') || q.title.includes('LỚP 8') || q.title.includes('LỚP 9') || q.title.includes('GLOBAL SUCCESS');
      if (!isSec) return false;
    } else if (selectedLevel === 'highschool') {
      const isHigh = q.level === 'highschool' || q.title.includes('LỚP 10') || q.title.includes('LỚP 11') || q.title.includes('LỚP 12') || q.title.includes('THPT');
      if (!isHigh) return false;
    }

    if (selectedGrade !== 'all') {
      if (!q.title.toUpperCase().includes(selectedGrade.toUpperCase())) {
        return false;
      }
    }

    return true;
  });

  // Open Flashcard for specific Unit
  const handleOpenUnitFlashcards = (unit, gradeName) => {
    if (unit && unit.vocabulary && unit.vocabulary.length > 0) {
      setFlashcardsData(unit.vocabulary);
      setFlashcardUnitTitle(unit.title);
      setFlashcardGradeName(gradeName || 'Tiếng Anh Phổ Thông');
      setFlashcardModalOpen(true);
    }
  };

  // Open Lesson Detail Modal
  const handleOpenLessonDetail = (unit, gradeInfo) => {
    setSelectedUnitDetail({
      unit,
      gradeName: gradeInfo.grade,
      textbookName: gradeInfo.textbook
    });
  };

  // Launch Practice for specific unit
  const handleStartUnitPractice = (unit, gradeName) => {
    const cleanG = (gradeName || '').toUpperCase();
    const matchingQuiz = quizzes.find(q => 
      (q.grade && q.grade.toUpperCase().includes(cleanG)) ||
      (q.title && q.title.toUpperCase().includes(cleanG))
    ) || quizzes[0];

    if (matchingQuiz) {
      onStartExam(matchingQuiz.id, 'practice');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* 1. HERO BANNER - Navy Blue Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1a2a6c] via-[#203a43] to-[#114357] text-white py-12 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-4 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider uppercase text-blue-200">
            <span>🇬🇧</span>
            <span>Chương Trình Chuẩn Bộ Giáo Dục & Đào Tạo (Global Success & BestFlashcard)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Học & Luyện Thi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-teal-200">Tiếng Anh Phổ Thông</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
            Hệ sinh thái bài học tiếng Anh toàn diện từ <strong>Lớp 1 đến Lớp 12</strong>. Tích hợp Flashcard từ vựng lật 2 mặt, phát âm bản xứ US/UK, chấm điểm phát âm bằng Micro AI, ngữ pháp cốt lõi và 4 cấu trúc khảo thí chuẩn hóa.
          </p>

          {/* Quick Search */}
          <div className="max-w-xl mx-auto flex items-center gap-2 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-xl mt-4">
            <div className="flex-1 flex items-center gap-2.5 px-3">
              <Search className="w-4 h-4 text-slate-300" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm Unit, từ vựng, ngữ pháp, Global Success, Lớp 1-12..."
                className="w-full bg-transparent text-white placeholder-slate-400 text-xs sm:text-sm outline-none"
              />
            </div>
            {searchQuery && (
              <button 
                type="button" 
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-white px-2 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 2. MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-8">
        
        {/* 2.1. HUB NAVIGATION TABS (BÀI HỌC SGK vs ĐỀ THI KHẢO THÍ) */}
        <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-sm border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveHubTab('lessons')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                activeHubTab === 'lessons'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>📖 BÀI HỌC THEO SGK (LỚP 1 - 12)</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-900 text-[10px] font-black uppercase">
                Mới
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveHubTab('exams')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                activeHubTab === 'exams'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>🎯 4 CẤU TRÚC ĐỀ THI & KHẢO THÍ</span>
            </button>
          </div>

          <div className="text-xs text-slate-500 hidden md:block">
            {activeHubTab === 'lessons' 
              ? 'Học từ vựng Flashcard, ngữ pháp trọng tâm và mẫu câu từng Unit' 
              : 'Luyện đề 15 phút, 1 tiết, giữa kỳ và thi thử tốt nghiệp THPT Quốc gia'}
          </div>
        </div>

        {/* 2.2. LEVEL & GRADE SELECTOR (3 Thẻ Cấp học + Grade Pills Lớp 1 - 12) */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200/90 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                <h2 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight">
                  Chọn Cấp Học & Bậc Đào Tạo
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Bấm vào cấp học hoặc lớp cụ thể để xem danh mục bài học và từ vựng chuẩn SGK
              </p>
            </div>

            {/* View All Button */}
            <button
              type="button"
              onClick={() => { setSelectedLevel('all'); setSelectedGrade('all'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedLevel === 'all' && selectedGrade === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Xem tất cả cấp học & lớp
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Card 1: Tiểu học (Lớp 1 - 5) */}
            <div 
              onClick={() => { setSelectedLevel('primary'); setSelectedGrade('all'); }}
              className={`rounded-2xl p-5 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                selectedLevel === 'primary'
                  ? 'bg-gradient-to-b from-emerald-50/90 to-white border-emerald-500 shadow-md ring-2 ring-emerald-400/20'
                  : 'bg-gradient-to-b from-emerald-50/40 to-white border-slate-200 hover:border-emerald-300 hover:shadow-xs'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🌱</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    CẤP 1 (LỚP 1 - 5)
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 leading-snug">
                    Tiếng Anh Tiểu Học
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Flashcard hình ảnh sinh động, Nghe - Chọn tranh, Ghép từ và luyện phát âm từ vựng căn bản.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-100/80 flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-700">
                  5 Lớp học (Lớp 1 đến Lớp 5)
                </span>
                <ChevronRight className={`w-4 h-4 text-emerald-600 transition-transform ${selectedLevel === 'primary' ? 'rotate-90' : ''}`} />
              </div>
            </div>

            {/* Card 2: THCS (Lớp 6 - 9) */}
            <div 
              onClick={() => { setSelectedLevel('secondary'); setSelectedGrade('all'); }}
              className={`rounded-2xl p-5 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                selectedLevel === 'secondary'
                  ? 'bg-gradient-to-b from-blue-50/90 to-white border-blue-600 shadow-md ring-2 ring-blue-400/20'
                  : 'bg-gradient-to-b from-blue-50/40 to-white border-slate-200 hover:border-blue-300 hover:shadow-xs'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🚀</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">
                    CẤP 2 (LỚP 6 - 9)
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 leading-snug">
                    Tiếng Anh THCS (Global Success)
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Bám sát SGK Global Success theo Unit, Nghe hiểu Audio HD, Đọc điền từ Cloze test và Luyện thi vào 10.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-blue-100/80 flex items-center justify-between">
                <span className="text-[11px] font-bold text-blue-700">
                  SGK Mới • Luyện thi vào 10
                </span>
                <ChevronRight className={`w-4 h-4 text-blue-600 transition-transform ${selectedLevel === 'secondary' ? 'rotate-90' : ''}`} />
              </div>
            </div>

            {/* Card 3: THPT (Lớp 10 - 12) */}
            <div 
              onClick={() => { setSelectedLevel('highschool'); setSelectedGrade('all'); }}
              className={`rounded-2xl p-5 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                selectedLevel === 'highschool'
                  ? 'bg-gradient-to-b from-indigo-50/90 to-white border-indigo-600 shadow-md ring-2 ring-indigo-400/20'
                  : 'bg-gradient-to-b from-indigo-50/40 to-white border-slate-200 hover:border-indigo-300 hover:shadow-xs'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🎓</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-bold">
                    CẤP 3 (LỚP 10 - 12)
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 leading-snug">
                    Tiếng Anh THPT & Luyện Thi THPT QG
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Trọng âm & Phát âm gạch chân, Đọc hiểu đoạn văn Split View và Đề thi tốt nghiệp chuẩn cấu trúc mới 2026.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-indigo-100/80 flex items-center justify-between">
                <span className="text-[11px] font-bold text-indigo-700">
                  Cấu trúc mới 40 câu / 50 phút
                </span>
                <ChevronRight className={`w-4 h-4 text-indigo-600 transition-transform ${selectedLevel === 'highschool' ? 'rotate-90' : ''}`} />
              </div>
            </div>

          </div>

          {/* Sub Grade Pills Filter: Lớp 1 -> Lớp 12 */}
          <div className="pt-2 flex items-center gap-2 overflow-x-auto">
            <span className="text-[11px] font-bold text-slate-400 uppercase shrink-0">Chọn lớp cụ thể:</span>
            
            <button
              type="button"
              onClick={() => setSelectedGrade('all')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedGrade === 'all' ? 'bg-slate-900 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tất cả các lớp (1 - 12)
            </button>

            {['Lớp 1', 'Lớp 2', 'Lớp 3', 'Lớp 4', 'Lớp 5'].map(g => (
              <button
                key={g}
                type="button"
                onClick={() => { setSelectedGrade(g); setSelectedLevel('primary'); }}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedGrade === g ? 'bg-emerald-600 text-white shadow-xs' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                }`}
              >
                {g}
              </button>
            ))}

            {['Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9'].map(g => (
              <button
                key={g}
                type="button"
                onClick={() => { setSelectedGrade(g); setSelectedLevel('secondary'); }}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedGrade === g ? 'bg-blue-600 text-white shadow-xs' : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                }`}
              >
                {g}
              </button>
            ))}

            {['Lớp 10', 'Lớp 11', 'Lớp 12'].map(g => (
              <button
                key={g}
                type="button"
                onClick={() => { setSelectedGrade(g); setSelectedLevel('highschool'); }}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedGrade === g ? 'bg-indigo-600 text-white shadow-xs' : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100'
                }`}
              >
                {g}
              </button>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: BÀI HỌC THEO SGK (LỚP 1 - LỚP 12)                                 */}
        {/* ========================================================================= */}
        {activeHubTab === 'lessons' && (
          <div className="space-y-8">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
              <div>
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 flex items-center gap-2">
                  <span>Chương Trình Bài Học Chuẩn Sách Giáo Khoa</span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                    {filteredCurriculum.length} Khối lớp
                  </span>
                </h3>
                <p className="text-xs text-slate-500">
                  Mỗi Unit đi kèm bộ thẻ Flashcard phát âm US/UK, chấm điểm Micro AI, công thức ngữ pháp và mẫu câu
                </p>
              </div>

              {/* Quick Launch all Flashcards button */}
              <button
                type="button"
                onClick={() => {
                  fetch('/api/quizzes/english/flashcards')
                    .then(r => r.json())
                    .then(d => {
                      if (d.success && d.flashcards) setFlashcardsData(d.flashcards);
                    });
                  setFlashcardUnitTitle('Tổng Hợp Từ Vựng K12 Toàn Diện');
                  setFlashcardGradeName('Từ Lớp 1 Đến Lớp 12');
                  setFlashcardModalOpen(true);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer active:scale-95 shrink-0"
              >
                <Sparkles className="w-4 h-4" />
                <span>🎴 MỞ KHO FLASHCARD TỔNG HỢP</span>
              </button>
            </div>

            {/* List of Grades & Units */}
            <div className="space-y-8">
              {filteredCurriculum.map(gradeItem => (
                <div 
                  key={gradeItem.grade}
                  className="bg-white rounded-3xl p-5 sm:p-7 shadow-xs border border-slate-200/90 space-y-5"
                >
                  {/* Grade Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className={`px-3 py-1 rounded-xl text-xs font-black text-white ${
                          gradeItem.level === 'primary' ? 'bg-emerald-600' : (gradeItem.level === 'highschool' ? 'bg-indigo-600' : 'bg-blue-600')
                        }`}>
                          {gradeItem.grade}
                        </span>
                        <h4 className="font-extrabold text-base sm:text-lg text-slate-900">
                          {gradeItem.textbook}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                        {gradeItem.description}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-slate-500">
                        {gradeItem.units?.length || 0} bài học trọng tâm
                      </span>
                    </div>
                  </div>

                  {/* Units Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {gradeItem.units?.map(unit => (
                      <div
                        key={unit.id}
                        className="p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
                      >
                        <div className="space-y-3">
                          
                          {/* Unit Title */}
                          <div>
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="font-extrabold text-blue-700 uppercase tracking-wide text-[11px]">
                                Bài {unit.unitNumber}
                              </span>
                              <span className="text-[11px] font-semibold text-slate-400">
                                {unit.vocabulary?.length || 0} từ vựng
                              </span>
                            </div>
                            <h5 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                              {unit.title}
                            </h5>
                            <p className="text-xs text-slate-600 mt-0.5 font-medium">
                              {unit.vietnameseTitle}
                            </p>
                          </div>

                          {/* Vocabulary Chips Preview */}
                          <div className="space-y-1.5 pt-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Từ vựng tiêu biểu:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {unit.vocabulary?.slice(0, 4).map((v, vIdx) => (
                                <span
                                  key={vIdx}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-[11px] font-medium shadow-2xs"
                                >
                                  <strong>{v.word}</strong>
                                  <span className="text-[10px] text-blue-600 font-mono">{v.ipa}</span>
                                </span>
                              ))}
                              {unit.vocabulary?.length > 4 && (
                                <span className="px-2 py-0.5 rounded-lg bg-slate-200/60 text-slate-600 text-[10px] font-bold">
                                  +{unit.vocabulary.length - 4} từ nữa
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Grammar Snippet */}
                          {unit.grammarFocus && (
                            <div className="p-2.5 rounded-xl bg-indigo-50/60 border border-indigo-100 text-[11px] text-indigo-950 font-medium flex items-start gap-2 leading-relaxed">
                              <Lightbulb className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                              <span className="line-clamp-2">{unit.grammarFocus}</span>
                            </div>
                          )}

                        </div>

                        {/* Action Buttons: [Flashcard] [Xem chi tiết] [Luyện tập] */}
                        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-200/70 text-xs">
                          <button
                            type="button"
                            onClick={() => handleOpenUnitFlashcards(unit, gradeItem.grade)}
                            className="flex items-center justify-center gap-1 py-2 px-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold text-[11px] border border-blue-200 transition-all cursor-pointer active:scale-95"
                            title="Mở bộ thẻ ghi nhớ Flashcard 2 mặt"
                          >
                            <Sparkles className="w-3 h-3 text-blue-600 shrink-0" />
                            <span>Flashcard</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleOpenLessonDetail(unit, gradeItem)}
                            className="flex items-center justify-center gap-1 py-2 px-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-[11px] border border-slate-200 transition-all cursor-pointer"
                            title="Xem bảng từ vựng song ngữ và mẫu câu chi tiết"
                          >
                            <BookOpen className="w-3 h-3 text-slate-500 shrink-0" />
                            <span>Chi tiết</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleStartUnitPractice(unit, gradeItem.grade)}
                            className="flex items-center justify-center gap-1 py-2 px-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] shadow-xs transition-all cursor-pointer active:scale-95"
                            title="Luyện tập trắc nghiệm bài học này"
                          >
                            <Zap className="w-3 h-3 fill-white shrink-0" />
                            <span>Luyện tập</span>
                          </button>
                        </div>

                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: 4 CẤU TRÚC ĐỀ THI & KHẢO THÍ                                       */}
        {/* ========================================================================= */}
        {activeHubTab === 'exams' && (
          <div className="space-y-8">
            
            {/* 4 Exam Modes Cards */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                    4 Cấu Trúc Khảo Thí & Ôn Luyện Tiếng Anh Chuẩn Hóa
                  </h3>
                  <p className="text-xs text-slate-500">
                    Lựa chọn đúng thời gian và ma trận câu hỏi phù hợp với mục tiêu kiểm tra
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Mode 1 */}
                <div className="bg-white rounded-2xl p-4 border border-sky-200 shadow-2xs space-y-2 flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <span className="px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 text-[10px] font-bold">
                      90 PHÚT / TOÀN BỘ CÂU
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 mt-1.5">
                      1. Ôn Tập Từng Unit
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Làm toàn bộ câu hỏi (Từ vựng, Ngữ pháp, Nghe, Đọc) của riêng Unit đó với thời gian 90 phút thoải mái.
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-sky-700">👉 Chọn bài bên dưới & bấm "Ôn tập"</span>
                </div>

                {/* Mode 2 */}
                <div className="bg-white rounded-2xl p-4 border border-amber-200 shadow-2xs space-y-2 flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-bold">
                      15 PHÚT / 20 CÂU RANDOM
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 mt-1.5">
                      2. Kiểm Tra 15 Phút
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Trích xuất ngẫu nhiên 20 câu hỏi kiểm tra nhanh từ vựng và ngữ pháp trọng tâm của Unit.
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-amber-700">👉 Bấm nút "15 Phút" tại thẻ bài</span>
                </div>

                {/* Mode 3 */}
                <div className="bg-white rounded-2xl p-4 border border-purple-200 shadow-2xs space-y-2 flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 text-[10px] font-bold">
                      45 - 60 PHÚT / TỔNG HỢP
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 mt-1.5">
                      3. Kiểm Tra 1 Tiết / Giữa Kỳ
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Đề thi tổng hợp đầy đủ các kỹ năng Nghe hiểu, Trọng âm, Ngữ pháp và Bài đọc hiểu đoạn văn.
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-purple-700">👉 Bám sát cấu trúc đề trường học</span>
                </div>

                {/* Mode 4 */}
                <div className="bg-white rounded-2xl p-4 border border-emerald-200 shadow-2xs space-y-2 flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      50 PHÚT / 40 CÂU THPT QG
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 mt-1.5">
                      4. Thi Thử Tốt Nghiệp THPT
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Đề thi thử Tốt nghiệp THPT Quốc gia chuẩn ma trận mới của Bộ GD&ĐT với bài đọc hiểu Split View 2 cột.
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700">👉 Đề thi thử THPT Quốc gia 2026</span>
                </div>

              </div>
            </div>

            {/* Quizzes List */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900 flex items-center gap-2">
                    <span>Danh Sách Đề Thi & Khảo Thí Tiếng Anh</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      {filteredQuizzes.length} đề
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Lựa chọn đề thi để ôn tập toàn diện hoặc thi đấu đối kháng trực tiếp
                  </p>
                </div>
              </div>

              {loading ? (
                <div className="py-16 text-center space-y-3">
                  <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <p className="text-xs font-bold text-slate-600">Đang tải ngân hàng đề Tiếng Anh K12...</p>
                </div>
              ) : filteredQuizzes.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/90 space-y-3">
                  <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-2xl text-slate-400">
                    🇬🇧
                  </div>
                  <h4 className="font-bold text-base text-slate-800">Không tìm thấy bài thi phù hợp</h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Hãy thử đổi cấp học, lớp hoặc xóa bộ lọc tìm kiếm để xem các đề thi tiếng Anh khác.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setSelectedLevel('all'); setSelectedGrade('all'); setSearchQuery(''); }}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs cursor-pointer"
                  >
                    Đặt lại bộ lọc
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredQuizzes.map(quiz => (
                    <div
                      key={quiz.id}
                      className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        
                        {/* Badge row: Grade, Duration, Questions */}
                        <div className="flex items-center justify-between text-xs">
                          <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 font-extrabold text-[11px] border border-blue-200/60">
                            {quiz.grade || (quiz.level === 'primary' ? 'Tiểu học' : (quiz.level === 'highschool' ? 'THPT' : 'THCS'))}
                          </span>

                          <div className="flex items-center gap-2 text-slate-500 font-medium text-[11px]">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              {quiz.durationMinutes} phút
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                              {quiz.totalQuestions} câu
                            </span>
                          </div>
                        </div>

                        {/* Quiz Title */}
                        <h4 
                          onClick={() => onSelectQuiz(quiz.id)}
                          className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors leading-snug cursor-pointer line-clamp-2"
                        >
                          {quiz.title}
                        </h4>

                        {/* Quiz Description */}
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {quiz.description}
                        </p>

                        {/* Skills Covered Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold">
                            🎧 Nghe hiểu
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold">
                            🔊 Phát âm gạch chân
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold">
                            📖 Đọc hiểu
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold">
                            🧩 Ghép câu
                          </span>
                        </div>

                        {/* Author & Date */}
                        <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-100">
                          <span>Bởi: <strong>{quiz.createdBy}</strong></span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(quiz.createdAt).toLocaleDateString('vi-VN')}
                          </span>
                        </div>

                      </div>

                      {/* Action Buttons: [Ôn tập 90p] [15 Phút] [Thi đấu] */}
                      <div className="grid grid-cols-3 gap-1.5 mt-4 pt-3 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => onStartExam(quiz.id, 'practice')}
                          className="flex items-center justify-center gap-1 py-2 px-1 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold text-[11px] border border-sky-200/80 active:scale-95 transition-all cursor-pointer"
                          title="Ôn tập toàn bộ câu hỏi (90 phút)"
                        >
                          <BookOpen className="w-3 h-3 text-sky-600 shrink-0" />
                          <span>Ôn tập</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onStartExam(quiz.id, 'quiz15')}
                          className="flex items-center justify-center gap-1 py-2 px-1 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-[11px] shadow-xs active:scale-95 transition-all cursor-pointer"
                          title="Kiểm tra 15 phút (Ngẫu nhiên 20 câu)"
                        >
                          <Zap className="w-3 h-3 fill-white shrink-0" />
                          <span>15 Phút</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onStartBattleForQuiz(quiz.id)}
                          className="flex items-center justify-center gap-1 py-2 px-1 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[11px] border border-indigo-200/80 active:scale-95 transition-all cursor-pointer"
                          title="Thi đấu đối kháng trực tiếp"
                        >
                          <Swords className="w-3 h-3 text-indigo-600 shrink-0" />
                          <span>Thi đấu</span>
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>
        )}

      </div>

      {/* 3. FLASHCARD MODAL (3D Flip & AI Speech Scoring) */}
      {flashcardModalOpen && (
        <VocabularyFlashcards
          vocabList={flashcardsData}
          unitTitle={flashcardUnitTitle}
          gradeName={flashcardGradeName}
          onClose={() => setFlashcardModalOpen(false)}
        />
      )}

      {/* 4. LESSON DETAIL MODAL (Vocabulary table, Grammar focus, Everyday patterns) */}
      {selectedUnitDetail && (
        <LessonDetailModal
          isOpen={!!selectedUnitDetail}
          onClose={() => setSelectedUnitDetail(null)}
          unit={selectedUnitDetail.unit}
          gradeName={selectedUnitDetail.gradeName}
          textbookName={selectedUnitDetail.textbookName}
          onOpenFlashcard={(unit) => {
            setSelectedUnitDetail(null);
            handleOpenUnitFlashcards(unit, selectedUnitDetail.gradeName);
          }}
          onStartPractice={(unit) => {
            setSelectedUnitDetail(null);
            handleStartUnitPractice(unit, selectedUnitDetail.gradeName);
          }}
        />
      )}

    </div>
  );
}
