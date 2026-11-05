import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Flame, 
  Clock, 
  Star, 
  Play, 
  Swords, 
  FileText, 
  Sparkles, 
  Calendar,
  Layers,
  ChevronRight,
  TrendingUp,
  Trash2,
  BookOpen,
  Zap,
  GraduationCap
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { fixMojibake, cleanDescription, cleanFilename } from '../utils/textEncoding';

export default function ExplorePage({ onSelectQuiz, onStartExam, onStartBattleForQuiz }) {
  const { user } = useAuth();
  const isAdmin = user?.studentId === 'dtc245200060' || user?.username === 'dtc245200060';

  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('most_taken'); // 'most_taken', 'newest', 'highest_rated'

  const categories = [
    'Tất cả',
    'Triết học & Lý luận chính trị',
    'Khoa học Pháp lý',
    'Lịch sử & Chính trị',
    'Kinh tế & Quản trị',
    'Công nghệ thông tin'
  ];

  useEffect(() => {
    fetchQuizzes();
  }, [selectedCategory, sortBy]);

  const fetchQuizzes = () => {
    setLoading(true);
    const catParam = selectedCategory && selectedCategory !== 'Tất cả' ? `&category=${encodeURIComponent(selectedCategory)}` : '';
    const searchParam = searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : '';

    fetch(`/api/quizzes?sort=${sortBy}${catParam}${searchParam}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setQuizzes(data.data);
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchQuizzes();
  };

  // Delete quiz (Admin-only)
  const handleDeleteQuiz = async (quizId, quizTitle) => {
    if (!window.confirm(`Bạn có chắc chắn muốn xóa vĩnh viễn bài thi:\n"${quizTitle}"?\n\nThao tác này sẽ xóa toàn bộ câu hỏi và kết quả thi liên quan.`)) {
      return;
    }
    try {
      const res = await fetch(`/api/quizzes/${quizId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?.id,
          username: user?.username || user?.studentId
        })
      });
      const data = await res.json();
      if (data.success) {
        alert(data.message);
        setQuizzes(prev => prev.filter(q => q.id !== quizId));
      } else {
        alert(data.message || 'Xóa bài thi thất bại');
      }
    } catch (err) {
      alert('Lỗi kết nối máy chủ');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Hero Banner with Search */}
      <section className="bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-900 text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Nền tảng Khảo thí Điện tử & Đấu trường Trực tuyến 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Khám Phá Hàng Nghìn Đề Thi <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-sky-300 bg-clip-text text-transparent">
              Chuẩn Hóa & Thi Đấu Real-time
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Luyện thi trắc nghiệm thông minh, hỗ trợ đầy đủ các dạng câu hỏi chọn phương án, Đúng/Sai ma trận, kéo thả phân loại cột và chế độ thi đấu trực tiếp.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex items-center gap-2 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-2xl">
            <div className="flex-1 flex items-center gap-3 px-3">
              <Search className="w-5 h-5 text-slate-300" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm bài thi theo môn học, tiêu đề, tên file Word..."
                className="w-full bg-transparent text-white placeholder-slate-400 text-sm outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/40 transition-all active:scale-95 cursor-pointer"
            >
              Tìm kiếm
            </button>
          </form>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-6">
        
        {/* 4 EXAM MODES SYSTEM BANNER (Theo yêu cầu chuẩn 4 cấu trúc đề thi) */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200/90 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                <h2 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight">
                  4 Cấu Trúc Đề Thi & Ôn Tập Chuẩn Học Phần
                </h2>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Lựa chọn đúng cấu trúc khảo thí: Ôn tập từng bài, Kiểm tra 15 phút, Kiểm tra 1 tiết (60 phút) hoặc Thi kết thúc học phần (45 phút)
              </p>
            </div>
            <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-xl border border-blue-200/60 w-fit">
              Khảo thí thông minh 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Mode 1: Ôn tập từng bài chủ đề */}
            <div className="bg-gradient-to-b from-sky-50/70 to-white rounded-2xl p-4 border border-sky-200/80 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
                    1
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 text-[10px] font-bold">
                    TỰ DO / TOÀN BỘ CÂU
                  </span>
                </div>
                <h3 className="font-extrabold text-sm text-slate-900 leading-snug">
                  1. Ôn Tập Từng Chủ Đề
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Làm toàn bộ câu hỏi của từng bài học riêng biệt để ôn tập kỹ lưỡng, nắm vững các phát biểu và dạng câu hỏi.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sky-100">
                <span className="text-[11px] font-semibold text-sky-700 block">
                  👉 Chọn bất kỳ bài thi bên dưới & bấm "Ôn tập"
                </span>
              </div>
            </div>

            {/* Mode 2: Kiểm tra 15 phút - Random 20 câu */}
            <div className="bg-gradient-to-b from-amber-50/70 to-white rounded-2xl p-4 border border-amber-200/80 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-xs shadow-xs">
                    2
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-bold">
                    15 PHÚT / 20 CÂU RANDOM
                  </span>
                </div>
                <h3 className="font-extrabold text-sm text-slate-900 leading-snug">
                  2. Kiểm Tra 15 Phút
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trích xuất ngẫu nhiên khoảng 20 câu hỏi từ bài tập/chủ đề được chọn, thời gian làm bài chuẩn 15 phút.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-100">
                <span className="text-[11px] font-semibold text-amber-700 block">
                  ⚡ Chọn bài bên dưới & bấm "15 Phút"
                </span>
              </div>
            </div>

            {/* Mode 3: Kiểm tra 1 tiết 60 phút - 3 chủ đề, 15 câu/chủ đề = 45 câu */}
            <div className="bg-gradient-to-b from-indigo-50/70 to-white rounded-2xl p-4 border border-indigo-200/80 flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
                    3
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 text-[10px] font-bold">
                    60 PHÚT / 45 CÂU (3 CHỦ ĐỀ)
                  </span>
                </div>
                <h3 className="font-extrabold text-sm text-slate-900 leading-snug">
                  3. Kiểm Tra 1 Tiết (60 Phút)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hệ thống gắn 3 chủ đề ngẫu nhiên thành 1 bộ đề, mỗi chủ đề lấy đều 15 câu (tổng 45 câu), đầy đủ 4 dạng câu trả lời.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-indigo-100">
                <button
                  type="button"
                  onClick={() => onStartExam ? onStartExam('composite_period60', 'period60') : onSelectQuiz('composite_period60')}
                  className="w-full py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Vào Thi 1 Tiết Ngay</span>
                </button>
              </div>
            </div>

            {/* Mode 4: Thi kết thúc học phần - 45 phút, 40 câu từ toàn bộ học phần */}
            <div className="bg-gradient-to-b from-rose-50/70 to-white rounded-2xl p-4 border border-rose-200/80 flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
                    4
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 text-[10px] font-bold">
                    45 PHÚT / 40 CÂU TOÀN MÔN
                  </span>
                </div>
                <h3 className="font-extrabold text-sm text-slate-900 leading-snug">
                  4. Thi Kết Thúc Học Phần
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bộ đề 40 câu hỏi phân bố đều từ tất cả các bài theo học phần của môn học, thời gian làm bài 45 phút.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-rose-100">
                <button
                  type="button"
                  onClick={() => onStartExam ? onStartExam('composite_final45', 'final45') : onSelectQuiz('composite_final45')}
                  className="w-full py-2 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Vào Thi Kết Thúc HP</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Sorting Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 md:pb-0 w-full md:w-auto">
            {categories.map((cat, idx) => {
              const isSelected = selectedCategory === cat || (!selectedCategory && cat === 'Tất cả');
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat === 'Tất cả' ? '' : cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-semibold text-slate-500">Sắp xếp:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-semibold text-slate-700 bg-slate-100 rounded-xl px-3 py-1.5 border-none outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="most_taken">Nhiều lượt làm nhất</option>
              <option value="newest">Mới nhất</option>
              <option value="highest_rated">Đánh giá cao nhất</option>
            </select>
          </div>
        </div>

        {/* Quiz Grid */}
        <div className="mt-8">
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs font-semibold text-slate-500 mt-4">Đang tải danh sách bài thi...</p>
            </div>
          ) : quizzes.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-3xl border border-slate-200 p-8">
              <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">Không tìm thấy bài thi phù hợp</h3>
              <p className="text-xs text-slate-400 mt-1">Hãy thử tìm với từ khóa khác hoặc đổi danh mục bộ lọc.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.map(quiz => (
                <div
                  key={quiz.id}
                  className="bg-white rounded-3xl border border-slate-200/90 hover:border-blue-400 p-6 shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between group relative"
                >
                  <div className="space-y-3.5">
                    
                    {/* Header tags & Admin delete button */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold text-[11px] truncate max-w-[180px]">
                        {quiz.category || 'Môn học'}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400" />
                          <span>{quiz.avgRating ? Number(quiz.avgRating).toFixed(1) : '5.0'}</span>
                        </div>

                        {/* Admin Delete Action */}
                        {isAdmin && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteQuiz(quiz.id, quiz.title);
                            }}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                            title="Xóa bài thi này (Chỉ Admin)"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Quiz Title */}
                    <h3 
                      onClick={() => onSelectQuiz(quiz.id)}
                      className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer line-clamp-2 leading-snug"
                    >
                      {fixMojibake(quiz.title)}
                    </h3>

                    {/* Original DOCX file tag */}
                    {quiz.originalDocxName && (
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100 truncate">
                        <FileText className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="truncate">File gốc: {cleanFilename(quiz.originalDocxName, quiz.title)}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {cleanDescription(quiz.description, quiz.title)}
                    </p>

                    {/* Stats pills */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-[11px] text-slate-600 font-semibold">
                      <div className="flex items-center gap-1">
                        <Layers className="w-3.5 h-3.5 text-slate-400" />
                        <span>{quiz.totalQuestions || 6} câu</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{quiz.durationMinutes || 15}p</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{quiz.attemptsCount || 0} lượt</span>
                      </div>
                    </div>

                    {/* Creator & Date */}
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span>Bởi: <strong>{quiz.createdBy}</strong></span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(quiz.createdAt).toLocaleDateString('vi-VN')}
                      </span>
                    </div>

                  </div>

                  {/* 3 Action Buttons: [Ôn tập] [15 Phút - 20 câu] [Thi đấu] */}
                  <div className="grid grid-cols-3 gap-1.5 mt-5 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onStartExam ? onStartExam(quiz.id, 'practice') : onSelectQuiz(quiz.id)}
                      className="flex items-center justify-center gap-1 py-2 px-1 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold text-[11px] border border-sky-200/80 active:scale-95 transition-all cursor-pointer"
                      title="Ôn tập toàn bộ câu hỏi của chủ đề này"
                    >
                      <BookOpen className="w-3 h-3 text-sky-600 shrink-0" />
                      <span>Ôn tập</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onStartExam ? onStartExam(quiz.id, 'quiz15') : onSelectQuiz(quiz.id)}
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
                      title="Tổ chức thi đấu đối kháng trực tiếp"
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
    </div>
  );
}
