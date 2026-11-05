import React, { useState, useEffect } from 'react';
import { 
  X, 
  Layers, 
  Check, 
  AlertCircle, 
  BookOpen, 
  GraduationCap, 
  Clock, 
  Sparkles, 
  Play,
  CheckCircle2
} from 'lucide-react';

export default function TopicSelectionModal({
  isOpen,
  onClose,
  mode = 'period60', // 'period60' | 'final45'
  onConfirm
}) {
  const isPeriod60 = mode === 'period60';
  const maxTopics = isPeriod60 ? 3 : 9;
  const targetQuestions = isPeriod60 ? 45 : 40;
  const durationMinutes = isPeriod60 ? 60 : 45;

  const [courses, setCourses] = useState([]);
  const [selectedCourseName, setSelectedCourseName] = useState('');
  const [selectedTopicIds, setSelectedTopicIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Fetch grouped courses and topics
  useEffect(() => {
    if (!isOpen) return;
    setLoading(true);
    setErrorMsg('');

    fetch('/api/quizzes/meta/courses-with-topics')
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.courses) && data.courses.length > 0) {
          setCourses(data.courses);
          const defaultCourse = data.courses[0];
          setSelectedCourseName(defaultCourse.courseName);
          // Auto select up to maxTopics
          const defaultIds = defaultCourse.topics.slice(0, maxTopics).map(t => t.id);
          setSelectedTopicIds(defaultIds);
        } else {
          // Fallback to fetching all quizzes
          fetch('/api/quizzes')
            .then(r => r.json())
            .then(qData => {
              if (qData.success && Array.isArray(qData.data)) {
                const fallbackCourse = {
                  courseName: 'Chủ nghĩa xã hội khoa học',
                  topics: qData.data.map(q => ({
                    id: q.id,
                    title: q.title,
                    totalQuestions: q.totalQuestions || 30
                  }))
                };
                setCourses([fallbackCourse]);
                setSelectedCourseName(fallbackCourse.courseName);
                setSelectedTopicIds(fallbackCourse.topics.slice(0, maxTopics).map(t => t.id));
              }
            });
        }
      })
      .catch(err => {
        console.error('Fetch courses error:', err);
      })
      .finally(() => setLoading(false));
  }, [isOpen, maxTopics]);

  if (!isOpen) return null;

  const currentCourse = courses.find(c => c.courseName === selectedCourseName) || courses[0];
  const currentTopics = currentCourse ? currentCourse.topics : [];

  const handleCourseChange = (courseName) => {
    setSelectedCourseName(courseName);
    setErrorMsg('');
    const newCourse = courses.find(c => c.courseName === courseName);
    if (newCourse) {
      // Pick up to maxTopics of the newly selected course
      setSelectedTopicIds(newCourse.topics.slice(0, maxTopics).map(t => t.id));
    } else {
      setSelectedTopicIds([]);
    }
  };

  const handleToggleTopic = (topicId) => {
    setErrorMsg('');
    if (selectedTopicIds.includes(topicId)) {
      setSelectedTopicIds(prev => prev.filter(id => id !== topicId));
    } else {
      if (selectedTopicIds.length >= maxTopics) {
        setErrorMsg(`Chế độ ${isPeriod60 ? 'Kiểm tra 1 tiết' : 'Thi kết thúc học phần'} chỉ cho phép chọn tối đa ${maxTopics} chủ đề!`);
        return;
      }
      setSelectedTopicIds(prev => [...prev, topicId]);
    }
  };

  const handleSelectAll = () => {
    setErrorMsg('');
    if (currentTopics.length <= maxTopics) {
      setSelectedTopicIds(currentTopics.map(t => t.id));
    } else {
      setSelectedTopicIds(currentTopics.slice(0, maxTopics).map(t => t.id));
    }
  };

  const handleStartExam = () => {
    if (selectedTopicIds.length === 0) {
      setErrorMsg('Vui lòng chọn ít nhất 1 chủ đề để sinh câu hỏi!');
      return;
    }
    onConfirm({
      mode,
      courseName: selectedCourseName,
      selectedTopicIds
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Gradient */}
        <div className={`p-5 sm:p-6 text-white flex items-center justify-between shrink-0 ${
          isPeriod60 
            ? 'bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800' 
            : 'bg-gradient-to-r from-rose-700 via-red-700 to-rose-800'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
              {isPeriod60 ? <Clock className="w-5 h-5 text-amber-300" /> : <GraduationCap className="w-5 h-5 text-amber-300" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-white/20 text-[10px] font-black uppercase tracking-wider">
                  {isPeriod60 ? 'TỐI ĐA 3 CHỦ ĐỀ' : 'TỐI ĐA 9 CHỦ ĐỀ'}
                </span>
                <span className="text-[10px] text-white/80 font-bold">
                  {durationMinutes} PHÚT - {targetQuestions} CÂU
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black tracking-tight mt-0.5">
                {isPeriod60 
                  ? 'Cấu Hình Đề Kiểm Tra 1 Tiết (60 Phút)' 
                  : 'Cấu Hình Đề Thi Kết Thúc Học Phần (45 Phút)'}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Course Filter Selector - Đảm bảo cùng 1 môn học! */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200/80 space-y-2 shrink-0">
          <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
            1. Chọn Môn Học (Tất cả chủ đề sẽ thuộc cùng môn học này):
          </label>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {courses.map(c => {
              const active = c.courseName === selectedCourseName;
              return (
                <button
                  key={c.courseName}
                  type="button"
                  onClick={() => handleCourseChange(c.courseName)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    active
                      ? (isPeriod60 ? 'bg-indigo-600 text-white shadow-xs' : 'bg-rose-600 text-white shadow-xs')
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{c.courseName}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {c.topics?.length || 0} bài
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Topic Checkboxes List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          <div className="flex items-center justify-between pb-1">
            <span className="text-xs font-bold text-slate-600">
              2. Chọn các bài học / chủ đề để sinh ngẫu nhiên {targetQuestions} câu:
            </span>
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-xl text-xs font-black ${
                selectedTopicIds.length > 0
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'bg-slate-100 text-slate-500'
              }`}>
                Đã chọn: {selectedTopicIds.length} / {maxTopics} chủ đề
              </span>
              <button
                type="button"
                onClick={handleSelectAll}
                className="text-[11px] font-bold text-blue-600 hover:underline cursor-pointer"
              >
                Chọn nhanh
              </button>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="font-semibold">{errorMsg}</span>
            </div>
          )}

          {loading ? (
            <div className="py-12 text-center text-slate-400 text-xs">
              Đang tải danh sách bài học...
            </div>
          ) : currentTopics.length === 0 ? (
            <div className="py-10 text-center text-slate-400 text-xs italic bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              Chưa có bài học nào trong môn học này.
            </div>
          ) : (
            currentTopics.map((topic, idx) => {
              const isSelected = selectedTopicIds.includes(topic.id);
              return (
                <div
                  key={topic.id}
                  onClick={() => handleToggleTopic(topic.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? (isPeriod60 ? 'bg-indigo-50/70 border-indigo-400 shadow-xs' : 'bg-rose-50/70 border-rose-400 shadow-xs')
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-5 h-5 rounded-lg flex items-center justify-center transition-all shrink-0 ${
                      isSelected
                        ? (isPeriod60 ? 'bg-indigo-600 text-white' : 'bg-rose-600 text-white')
                        : 'border-2 border-slate-300 bg-white'
                    }`}>
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-bold text-slate-500 uppercase">
                          Bài {idx + 1}
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold">
                          ({topic.totalQuestions || 30} câu trong kho đề)
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        {topic.title}
                      </h4>
                    </div>
                  </div>

                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-lg shrink-0 ${
                    isSelected
                      ? (isPeriod60 ? 'bg-indigo-200/60 text-indigo-900' : 'bg-rose-200/60 text-rose-900')
                      : 'text-slate-400'
                  }`}>
                    {isSelected ? 'Đã chọn' : '+ Thêm'}
                  </span>
                </div>
              );
            })
          )}

          {/* Explanation note */}
          <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 text-blue-900 text-xs space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Cơ chế tạo đề ngẫu nhiên chuẩn hóa:</span>
            </div>
            <p className="text-[11px] text-blue-800 leading-relaxed">
              {isPeriod60
                ? `Hệ thống sẽ bốc ngẫu nhiên 15 câu/chủ đề từ các bài bạn chọn (tổng cộng 45 câu), tích hợp đủ 4 dạng câu trả lời và chỉ lấy trong môn ${selectedCourseName}.`
                : `Hệ thống sẽ phân bố đồng đều 40 câu hỏi trích từ các bài bạn chọn, đảm bảo bao quát toàn bộ nội dung của môn ${selectedCourseName}.`}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer"
          >
            Đóng lại
          </button>

          <button
            type="button"
            onClick={handleStartExam}
            disabled={selectedTopicIds.length === 0}
            className={`px-6 py-2.5 rounded-xl text-white font-extrabold text-xs shadow-md active:scale-95 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              isPeriod60
                ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30'
                : 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/30'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Sinh Đề & Bắt Đầu Làm Bài ({targetQuestions} Câu - {durationMinutes} Phút)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
