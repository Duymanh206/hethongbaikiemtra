import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Swords, 
  AlertCircle, 
  Star, 
  Clock, 
  Layers, 
  CheckCircle2, 
  ShieldAlert, 
  Shuffle, 
  FileText, 
  User, 
  ArrowLeft,
  MessageSquare,
  Trash2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { fixMojibake, cleanDescription } from '../utils/textEncoding';

export default function QuizDetailPage({
  quizId,
  onStartExam,
  onStartBattle,
  onBackToExplore
}) {
  const { user } = useAuth();
  const isAdmin = user?.studentId === 'dtc245200060' || user?.username === 'dtc245200060' || user?.isAdmin;

  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reported, setReported] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!quizId) return;
    setLoading(true);
    fetch(`/api/quizzes/${quizId}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setQuiz(data.data);
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [quizId]);

  const handleDeleteQuiz = async () => {
    if (!window.confirm(`Bạn có chắc chắn muốn xóa vĩnh viễn bài thi:\n"${quiz.title}"?\n\nThao tác này sẽ xóa toàn bộ câu hỏi và kết quả thi liên quan.`)) {
      return;
    }
    setDeleting(true);
    try {
      const res = await fetch(`/api/quizzes/${quiz.id}`, {
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
        onBackToExplore();
      } else {
        alert(data.message || 'Xóa bài thi thất bại');
      }
    } catch (err) {
      alert('Lỗi kết nối máy chủ');
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
        <p className="text-sm font-bold text-slate-600">Không tìm thấy thông tin bài thi</p>
        <button onClick={onBackToExplore} className="mt-4 text-xs font-bold text-blue-600">
          Quay lại danh sách
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Top Breadcrumb & Navigation */}
      <div className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToExplore}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại trang Khám phá</span>
          </button>

          <div className="flex items-center gap-3">
            {isAdmin && (
              <button
                onClick={handleDeleteQuiz}
                disabled={deleting}
                className="flex items-center gap-1.5 text-xs font-bold text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-xl border border-red-200 transition-all cursor-pointer"
                title="Xóa bài thi (Chỉ Quản trị viên)"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{deleting ? 'Đang xóa...' : 'Xóa bài thi này'}</span>
              </button>
            )}

            <button
              onClick={() => {
                setReported(true);
                alert('Cảm ơn bạn. Báo cáo của bạn đã được gửi tới Ban Khảo thí để kiểm tra.');
              }}
              disabled={reported}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-rose-600 transition-colors"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{reported ? 'Đã báo cáo' : 'Báo cáo sai sót đề'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 space-y-8">
        
        {/* Main Quiz Overview Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-200 space-y-6">
          
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
                {quiz.category}
              </span>
              {quiz.antiCheatEnabled && (
                <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 font-bold text-xs flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Giám sát chống gian lận
                </span>
              )}
              {quiz.shuffleQuestions && (
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs flex items-center gap-1">
                  <Shuffle className="w-3 h-3" />
                  Xáo trộn câu hỏi
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {fixMojibake(quiz.title)}
            </h1>

            {quiz.originalDocxName && (
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 w-fit">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>Nguồn file gốc: <strong>{fixMojibake(quiz.originalDocxName)}</strong></span>
              </div>
            )}

            <p className="text-sm text-slate-600 leading-relaxed pt-1">
              {cleanDescription(quiz.description)}
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase">Thời lượng</span>
              <p className="text-lg font-black text-slate-800 flex items-center gap-1.5 mt-0.5">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{quiz.durationMinutes} phút</span>
              </p>
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase">Tổng số câu</span>
              <p className="text-lg font-black text-slate-800 flex items-center gap-1.5 mt-0.5">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>{quiz.totalQuestions} câu</span>
              </p>
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase">Lượt làm</span>
              <p className="text-lg font-black text-slate-800 flex items-center gap-1.5 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{quiz.attemptsCount || 0} lượt</span>
              </p>
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase">Đánh giá</span>
              <p className="text-lg font-black text-slate-800 flex items-center gap-1.5 mt-0.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                <span>{Number(quiz.avgRating || 5.0).toFixed(1)} / 5</span>
              </p>
            </div>
          </div>

          {/* 2 Main Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={() => onStartExam(quiz.id)}
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-lg shadow-blue-600/30 active:scale-98 transition-all cursor-pointer"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>▶ BẮT ĐẦU LÀM BÀI</span>
            </button>

            <button
              onClick={() => onStartBattle(quiz.id)}
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold text-sm shadow-lg shadow-amber-500/25 active:scale-98 transition-all cursor-pointer"
            >
              <Swords className="w-5 h-5" />
              <span>🏆 TỔ CHỨC THI ĐẤU (BATTLE)</span>
            </button>
          </div>

        </div>

        {/* Reviews & Feedback Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-base text-slate-900">
                Bình luận & Đánh giá từ thí sinh ({quiz.reviews?.length || 0})
              </h3>
            </div>
            <div className="flex items-center gap-1 text-sm font-bold text-amber-500">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>{Number(quiz.avgRating || 5.0).toFixed(1)} / 5</span>
            </div>
          </div>

          {quiz.reviews?.length === 0 ? (
            <p className="text-xs text-slate-400 italic">Chưa có đánh giá nào cho bài thi này.</p>
          ) : (
            <div className="space-y-4">
              {quiz.reviews?.map((rev, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-800">{rev.userName}</span>
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-amber-400' : 'text-slate-200'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600">{rev.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
