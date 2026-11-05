import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  Settings, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  Sparkles, 
  Layers, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Eye,
  Save,
  Check,
  X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function CreateQuizPage({ onQuizCreated }) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('docx'); // 'docx' or 'builder'

  // DOCX Parser State & Config
  const [file, setFile] = useState(null);
  const [detectByBold, setDetectByBold] = useState(true);
  const [detectByUnderline, setDetectByUnderline] = useState(false);
  const [detectByColor, setDetectByColor] = useState(true);
  const [detectByHighlight, setDetectByHighlight] = useState(true);
  const [selectedColors, setSelectedColors] = useState(['red', 'yellow']);
  const [customColor, setCustomColor] = useState('#22c55e');
  const [includeCustomColor, setIncludeCustomColor] = useState(false);
  const [quizTitle, setQuizTitle] = useState('');
  const [quizCategory, setQuizCategory] = useState('Triết học & Lý luận chính trị');

  // Parser Result Preview
  const [parsing, setParsing] = useState(false);
  const [previewQuestions, setPreviewQuestions] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  // Visual Builder State
  const [builderTitle, setBuilderTitle] = useState('');
  const [builderDescription, setBuilderDescription] = useState('');
  const [builderCategory, setBuilderCategory] = useState('Triết học & Lý luận chính trị');
  const [builderDuration, setBuilderDuration] = useState(15);
  const [builderAntiCheat, setBuilderAntiCheat] = useState(true);
  const [builderQuestions, setBuilderQuestions] = useState([
    {
      id: 'q_build_1',
      type: 'single_choice',
      content: 'Giai cấp công nhân Việt Nam là lực lượng nòng cốt trong?',
      points: 1.0,
      options: [
        { label: 'A', content: 'Khối liên minh công - nông - trí thức', isCorrect: true },
        { label: 'B', content: 'Phong trào của giai cấp tư sản', isCorrect: false },
        { label: 'C', content: 'Hoạt động kinh tế tư nhân thuần túy', isCorrect: false },
        { label: 'D', content: 'Tổ chức hợp tác xã tiểu thủ công', isCorrect: false }
      ]
    }
  ]);

  const handleColorToggle = (color) => {
    setSelectedColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const f = e.target.files[0];
      setFile(f);
      if (!quizTitle) {
        setQuizTitle(f.name.replace(/\.docx$/i, ''));
      }
    }
  };

  const handleParseDocx = async (saveDirectly = false) => {
    if (!file) {
      alert('Vui lòng chọn file .docx');
      return;
    }
    setParsing(true);

    const colors = [...selectedColors];
    if (includeCustomColor && customColor) {
      colors.push('custom');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('detectByBold', detectByBold);
    formData.append('detectByUnderline', detectByUnderline);
    formData.append('detectByColor', detectByColor);
    formData.append('detectByHighlight', detectByHighlight);
    formData.append('selectedColors', JSON.stringify(colors));
    formData.append('customColorHex', customColor);
    formData.append('title', quizTitle || file.name.replace(/\.docx$/i, ''));
    formData.append('category', quizCategory);
    formData.append('saveDirectly', saveDirectly);
    formData.append('author', user?.fullName || 'Giảng viên');

    try {
      const res = await fetch('/api/quizzes/import-docx', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        if (saveDirectly) {
          alert('Đã lưu bài thi vào hệ thống thành công!');
          onQuizCreated(data.quizId);
        } else {
          setPreviewQuestions(data.questions);
        }
      } else {
        alert(data.message || 'Lỗi bóc tách file Word');
      }
    } catch (err) {
      console.error(err);
      alert('Lỗi kết nối khi tải file');
    } finally {
      setParsing(false);
    }
  };

  const handleSaveBuilderQuiz = async () => {
    if (!builderTitle.trim()) {
      alert('Vui lòng nhập tiêu đề bài thi');
      return;
    }
    if (builderQuestions.length === 0) {
      alert('Vui lòng thêm ít nhất 1 câu hỏi');
      return;
    }

    setIsSaving(true);
    try {
      const res = await fetch('/api/quizzes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: builderTitle,
          description: builderDescription,
          category: builderCategory,
          durationMinutes: builderDuration,
          antiCheatEnabled: builderAntiCheat,
          questions: builderQuestions,
          createdBy: user?.fullName || 'Giảng viên'
        })
      });
      const data = await res.json();
      if (data.success) {
        alert('Tạo bài thi thành công!');
        onQuizCreated(data.quizId);
      } else {
        alert(data.message || 'Lỗi khi lưu');
      }
    } catch (e) {
      console.error(e);
      alert('Lỗi kết nối');
    } finally {
      setIsSaving(false);
    }
  };

  // Builder Helper: Add new question
  const handleAddBuilderQuestion = (type) => {
    const newIdx = builderQuestions.length + 1;
    let newQ = {
      id: `q_b_${Date.now()}`,
      type,
      content: `Câu hỏi ${newIdx}: Nội dung câu hỏi mới`,
      points: 1.0,
      options: []
    };

    if (type === 'single_choice' || type === 'multiple_choice') {
      newQ.options = [
        { label: 'A', content: 'Phương án A', isCorrect: true },
        { label: 'B', content: 'Phương án B', isCorrect: false },
        { label: 'C', content: 'Phương án C', isCorrect: false },
        { label: 'D', content: 'Phương án D', isCorrect: false }
      ];
      if (type === 'multiple_choice') {
        newQ.requiredCount = 2;
        newQ.instructionBadge = '(!) Chọn 2 phương án đúng nhất';
        newQ.options[1].isCorrect = true;
      }
    } else if (type === 'drag_drop_categorize') {
      newQ.categories = ['1) Cột Nhóm 1', '2) Cột Nhóm 2'];
      newQ.instructionBadge = '(!) Kéo và thả các thẻ đáp án vào đúng cột tương ứng';
      newQ.dragDropItems = [
        { itemText: 'Thẻ phân loại A', targetCategoryOrMatch: '1) Cột Nhóm 1' },
        { itemText: 'Thẻ phân loại B', targetCategoryOrMatch: '2) Cột Nhóm 2' }
      ];
    } else if (type === 'drag_drop_matching') {
      newQ.instructionBadge = '(!) Kéo thẻ đáp án vào ô trống viền nét đứt bên phải phát biểu';
      newQ.dragDropItems = [
        { itemText: 'Mệnh đề phát biểu 1', targetCategoryOrMatch: 'Khái niệm tương ứng 1' },
        { itemText: 'Mệnh đề phát biểu 2', targetCategoryOrMatch: 'Khái niệm tương ứng 2' }
      ];
    }

    setBuilderQuestions([...builderQuestions, newQ]);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Trung tâm Khảo thí & Soạn đề
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                Tạo Bài Thi & Đấu Trường Mới
              </h1>
            </div>

            {/* Method Tabs */}
            <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              <button
                onClick={() => setActiveTab('docx')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'docx' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Upload className="w-4 h-4" />
                <span>1. Tải file Word (.docx) tự động</span>
              </button>

              <button
                onClick={() => setActiveTab('builder')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'builder' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>2. Soạn thủ công (Visual Builder)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">
        
        {/* METHOD 1: DOCX PARSER WITH ADVANCED FORMAT CONFIGURATION */}
        {activeTab === 'docx' && (
          <div className="space-y-6">
            
            {/* Upload & Config Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-6">
              
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
                <Settings className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-base text-slate-900">
                  Cấu hình Bóc tách File Word (.docx) Chuẩn Xác
                </h3>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Tên bài thi / Môn học
                  </label>
                  <input
                    type="text"
                    value={quizTitle}
                    onChange={(e) => setQuizTitle(e.target.value)}
                    placeholder="VD: CHỦ NGHĨA XÃ HỘI KHOA HỌC - BÀI 5"
                    className="w-full text-xs font-medium p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Danh mục môn học
                  </label>
                  <select
                    value={quizCategory}
                    onChange={(e) => setQuizCategory(e.target.value)}
                    className="w-full text-xs font-medium p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500 bg-white"
                  >
                    <option>Triết học & Lý luận chính trị</option>
                    <option>Khoa học Pháp lý</option>
                    <option>Lịch sử & Chính trị</option>
                    <option>Kinh tế & Quản trị</option>
                    <option>Công nghệ thông tin</option>
                  </select>
                </div>
              </div>

              {/* File Dropzone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Chọn hoặc Kéo thả tệp Word (.docx)
                </label>
                <div className="border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-2xl p-6 text-center bg-slate-50/50 hover:bg-blue-50/20 transition-colors">
                  <input
                    type="file"
                    accept=".docx"
                    onChange={handleFileChange}
                    id="docx-input"
                    className="hidden"
                  />
                  <label htmlFor="docx-input" className="cursor-pointer flex flex-col items-center justify-center">
                    <FileText className="w-10 h-10 text-blue-600 mb-2" />
                    <span className="text-xs font-bold text-slate-800">
                      {file ? file.name : 'Bấm vào đây để chọn tệp .docx'}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-1">
                      Hệ thống tự động nhận diện câu hỏi bắt đầu bằng "Câu 1:", "Câu 2:"...
                    </span>
                  </label>
                </div>
              </div>

              {/* SPEC REQUIREMENT: Configurable correct answer detection options */}
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                    Quy tắc nhận diện đáp án đúng trong file Word (chọn được nhiều):
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Option 1: Bold */}
                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={detectByBold}
                      onChange={(e) => setDetectByBold(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600"
                    />
                    <span className="text-xs font-bold text-slate-800">Chữ in đậm (Bold)</span>
                  </label>

                  {/* Option 2: Underline */}
                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={detectByUnderline}
                      onChange={(e) => setDetectByUnderline(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600"
                    />
                    <span className="text-xs font-bold text-slate-800">Gạch chân (Underline)</span>
                  </label>

                  {/* Option 3: Color / Highlight */}
                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={detectByHighlight || detectByColor}
                      onChange={(e) => {
                        setDetectByHighlight(e.target.checked);
                        setDetectByColor(e.target.checked);
                      }}
                      className="w-4 h-4 rounded text-blue-600"
                    />
                    <span className="text-xs font-bold text-slate-800">Tô màu chữ hoặc nền</span>
                  </label>
                </div>

                {/* Color Selector Pills (Red, Yellow, Green, Blue, Custom) */}
                {(detectByColor || detectByHighlight) && (
                  <div className="pt-2 border-t border-blue-100 space-y-2">
                    <span className="text-[11px] font-bold text-slate-600">
                      Chọn các gam màu đánh dấu đáp án đúng:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {[
                        { id: 'red', label: 'Đỏ (Red)', bg: 'bg-red-500' },
                        { id: 'yellow', label: 'Vàng (Yellow)', bg: 'bg-amber-400' },
                        { id: 'green', label: 'Xanh lá (Green)', bg: 'bg-emerald-500' },
                        { id: 'blue', label: 'Xanh dương (Blue)', bg: 'bg-blue-600' }
                      ].map(col => {
                        const isChecked = selectedColors.includes(col.id);
                        return (
                          <button
                            key={col.id}
                            type="button"
                            onClick={() => handleColorToggle(col.id)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                              isChecked
                                ? 'bg-white border-blue-600 text-blue-900 shadow-xs ring-1 ring-blue-500'
                                : 'bg-white/80 border-slate-200 text-slate-600'
                            }`}
                          >
                            <span className={`w-3 h-3 rounded-full ${col.bg}`}></span>
                            <span>{col.label}</span>
                            {isChecked && <Check className="w-3.5 h-3.5 text-blue-600" />}
                          </button>
                        );
                      })}

                      {/* Color Picker for "Màu khác" */}
                      <div className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-white border border-slate-200">
                        <input
                          type="checkbox"
                          checked={includeCustomColor}
                          onChange={(e) => setIncludeCustomColor(e.target.checked)}
                          className="w-3.5 h-3.5 rounded text-blue-600"
                        />
                        <span className="text-xs font-medium text-slate-700">Màu khác:</span>
                        <input
                          type="color"
                          value={customColor}
                          onChange={(e) => setCustomColor(e.target.value)}
                          className="w-6 h-6 rounded cursor-pointer border-0 p-0"
                        />
                        <span className="text-[11px] font-mono text-slate-400">{customColor}</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleParseDocx(false)}
                  disabled={parsing || !file}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs active:scale-95 transition-all disabled:opacity-50"
                >
                  <Eye className="w-4 h-4 text-slate-500" />
                  <span>{parsing ? 'Đang đọc...' : 'Bóc tách & Xem trước'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleParseDocx(true)}
                  disabled={parsing || !file}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-95 transition-all disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  <span>Lưu bài thi vào hệ thống</span>
                </button>
              </div>

            </div>

            {/* Live Preview of parsed questions */}
            {previewQuestions && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Kết quả bóc tách thành công ({previewQuestions.length} câu hỏi)</span>
                  </h3>
                  <button
                    onClick={() => handleParseDocx(true)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs"
                  >
                    Xác nhận & Lưu ngay
                  </button>
                </div>

                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                  {previewQuestions.map((q, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-blue-700">Câu {q.orderIndex || idx + 1}:</span>
                        <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold">
                          {q.type}
                        </span>
                      </div>
                      <p className="font-semibold text-slate-900">{q.content}</p>
                      
                      {/* DẠNG 1 & 2: Single Choice & Multiple Choice */}
                      {q.options && q.options.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                          <div className="text-[11px] font-semibold text-slate-500">
                            {q.type === 'multiple_choice' ? `Chọn ${q.requiredCount || 2} phương án đúng` : 'Chọn 1 đáp án đúng'}:
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options?.map((opt, optIdx) => (
                              <div
                                key={optIdx}
                                className={`p-2.5 rounded-xl border flex items-center justify-between text-xs transition-all ${
                                  opt.isCorrect 
                                    ? 'bg-emerald-50/90 border-emerald-400 text-emerald-950 font-bold shadow-xs' 
                                    : 'bg-white border-slate-200 text-slate-700'
                                }`}
                              >
                                <span className="flex-1">{opt.label}. {opt.content}</span>
                                {opt.isCorrect && (
                                  <span className="flex items-center gap-1 text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0 ml-2">
                                    <Check className="w-3 h-3 text-emerald-700" />
                                    Đáp án đúng
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* DẠNG 3: Drag & Drop Categorization (Kéo thả phân loại) */}
                      {q.type === 'drag_drop_categorize' && (
                        <div className="space-y-2 pt-1">
                          <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center justify-between">
                            <span>Phân loại đáp án vào các cột tương ứng:</span>
                            <span className="text-emerald-700 font-extrabold">✓ Đã nhận diện {q.dragDropItems?.length || 0} thẻ</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {(q.categories || []).map((cat, cIdx) => {
                              const itemsInCat = (q.dragDropItems || []).filter(item => item.targetCategoryOrMatch === cat);
                              return (
                                <div key={cIdx} className="p-3 rounded-xl border border-blue-200 bg-blue-50/40 space-y-2">
                                  <div className="font-bold text-xs text-blue-900 border-b border-blue-200/60 pb-1.5 flex items-center justify-between">
                                    <span>Cột {cIdx + 1}: {cat}</span>
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-extrabold">
                                      {itemsInCat.length} thẻ
                                    </span>
                                  </div>
                                  <div className="space-y-1.5">
                                    {itemsInCat.map((item, iIdx) => (
                                      <div
                                        key={iIdx}
                                        className="p-1.5 rounded-lg bg-white border border-emerald-300 text-emerald-950 font-medium text-[11px] flex items-center justify-between shadow-2xs"
                                      >
                                        <span>• {item.itemText}</span>
                                        <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-0.5">
                                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                                          Đúng
                                        </span>
                                      </div>
                                    ))}
                                    {itemsInCat.length === 0 && (
                                      <div className="text-[11px] text-slate-400 italic py-1">Chưa có thẻ nào</div>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* DẠNG 4: Drag & Drop Matching (Kéo thả ghép nối) */}
                      {q.type === 'drag_drop_matching' && (
                        <div className="space-y-2 pt-1">
                          <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center justify-between">
                            <span>Ghép nối phát biểu với đáp án:</span>
                            <span className="text-emerald-700 font-extrabold">✓ Đã nhận diện {q.dragDropItems?.length || 0} cặp</span>
                          </div>
                          <div className="space-y-2">
                            {(q.dragDropItems || []).map((item, mIdx) => (
                              <div
                                key={mIdx}
                                className="p-2.5 rounded-xl border border-slate-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-2xs"
                              >
                                <span className="font-semibold text-slate-800 text-xs flex-1">
                                  {mIdx + 1}. {item.itemText}
                                </span>
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 font-bold text-[11px] shrink-0">
                                  <span>Ghép với: <strong>{item.targetCategoryOrMatch}</strong></span>
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* DẠNG 5: True / False Matrix (Đúng hoặc Sai) */}
                      {q.type === 'true_false_matrix' && (
                        <div className="space-y-2 pt-1">
                          <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center justify-between">
                            <span>Mệnh đề Đúng / Sai:</span>
                            <span className="text-emerald-700 font-extrabold">✓ Đã nhận diện {q.statements?.length || 0} phát biểu</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {(q.statements || []).map((stmt, sIdx) => {
                              const isDung = stmt.correctAnswer === 'Đúng' || stmt.isCorrect === true || stmt.correctAnswer === 'dung';
                              return (
                                <div
                                  key={sIdx}
                                  className="p-2.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-2 shadow-2xs"
                                >
                                  <span className="font-semibold text-slate-800 text-xs leading-snug flex-1">
                                    {stmt.text}
                                  </span>
                                  <span
                                    className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold flex items-center gap-1 shrink-0 ${
                                      isDung 
                                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                                        : 'bg-rose-100 text-rose-800 border border-rose-300'
                                    }`}
                                  >
                                    {isDung ? <Check className="w-3 h-3 text-emerald-700" /> : <X className="w-3 h-3 text-rose-700" />}
                                    {isDung ? 'ĐÚNG' : 'SAI'}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* METHOD 2: VISUAL BUILDER (ALL 4 QUESTION TYPES) */}
        {activeTab === 'builder' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-900">
                Visual Builder - Soạn Câu Hỏi Tương Tác Trực Quan
              </h3>
              <button
                onClick={handleSaveBuilderQuiz}
                disabled={isSaving}
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all active:scale-95"
              >
                <Save className="w-4 h-4" />
                <span>{isSaving ? 'Đang lưu...' : 'Lưu bài thi'}</span>
              </button>
            </div>

            {/* Quiz Settings */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">Tiêu đề bài thi</label>
                <input
                  type="text"
                  value={builderTitle}
                  onChange={(e) => setBuilderTitle(e.target.value)}
                  placeholder="Nhập tên bài thi..."
                  className="w-full text-xs font-medium p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Thời lượng (phút)</label>
                <input
                  type="number"
                  value={builderDuration}
                  onChange={(e) => setBuilderDuration(e.target.value)}
                  className="w-full text-xs font-medium p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Danh sách câu hỏi ({builderQuestions.length})
                </span>

                {/* Add Question Dropdown Buttons */}
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => handleAddBuilderQuestion('single_choice')}
                    className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs"
                  >
                    + 1 Đáp án (Single)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAddBuilderQuestion('multiple_choice')}
                    className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs"
                  >
                    + Nhiều đáp án (Multiple)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAddBuilderQuestion('drag_drop_categorize')}
                    className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs"
                  >
                    + Kéo thả phân cột
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAddBuilderQuestion('drag_drop_matching')}
                    className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs"
                  >
                    + Kéo thả ghép nối
                  </button>
                </div>
              </div>

              {builderQuestions.map((q, qIdx) => (
                <div key={q.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-blue-700">Câu {qIdx + 1} ({q.type})</span>
                    <button
                      onClick={() => setBuilderQuestions(builderQuestions.filter((_, i) => i !== qIdx))}
                      className="text-slate-400 hover:text-red-600 p-1 rounded-md"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <input
                    type="text"
                    value={q.content}
                    onChange={(e) => {
                      const updated = [...builderQuestions];
                      updated[qIdx].content = e.target.value;
                      setBuilderQuestions(updated);
                    }}
                    className="w-full text-xs font-semibold p-2.5 rounded-xl border border-slate-200 bg-white"
                  />

                  {/* Options editor */}
                  {q.options && q.options.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {q.options.map((opt, optIdx) => (
                        <div key={optIdx} className="flex items-center gap-2 bg-white p-2 rounded-xl border border-slate-200">
                          <input
                            type="checkbox"
                            checked={opt.isCorrect}
                            onChange={(e) => {
                              const updated = [...builderQuestions];
                              if (q.type === 'single_choice') {
                                updated[qIdx].options.forEach(o => o.isCorrect = false);
                              }
                              updated[qIdx].options[optIdx].isCorrect = e.target.checked;
                              setBuilderQuestions(updated);
                            }}
                            className="w-4 h-4 rounded text-blue-600"
                          />
                          <span className="font-bold text-xs">{opt.label}.</span>
                          <input
                            type="text"
                            value={opt.content}
                            onChange={(e) => {
                              const updated = [...builderQuestions];
                              updated[qIdx].options[optIdx].content = e.target.value;
                              setBuilderQuestions(updated);
                            }}
                            className="w-full text-xs outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Drag drop preview info */}
                  {q.type === 'drag_drop_categorize' && (
                    <div className="p-3 bg-white rounded-xl border text-xs text-slate-500">
                      Cột: {q.categories?.join(' | ')} ({q.dragDropItems?.length || 0} thẻ phân loại)
                    </div>
                  )}
                  {q.type === 'drag_drop_matching' && (
                    <div className="p-3 bg-white rounded-xl border text-xs text-slate-500">
                      Ghép nối: {q.dragDropItems?.map(d => `${d.itemText} ➔ ${d.targetCategoryOrMatch}`).join('; ')}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

