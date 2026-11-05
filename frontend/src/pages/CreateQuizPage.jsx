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
  X,
  Edit3,
  HelpCircle,
  AlertCircle
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

  // Parser Result Preview & Editor
  const [parsing, setParsing] = useState(false);
  const [previewQuestions, setPreviewQuestions] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [editingQuestionIdx, setEditingQuestionIdx] = useState(null);

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

  // Parse DOCX
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

  // ==================== QUESTION EDITING HANDLERS ====================
  const handleUpdateQuestion = (qIndex, field, value) => {
    setPreviewQuestions(prev => {
      const copy = [...prev];
      copy[qIndex] = { ...copy[qIndex], [field]: value };
      return copy;
    });
  };

  const handleToggleOptionCorrect = (qIndex, optIndex) => {
    setPreviewQuestions(prev => {
      const copy = [...prev];
      const q = { ...copy[qIndex] };
      const options = (q.options || []).map((opt, idx) => {
        if (q.type === 'single_choice') {
          return { ...opt, isCorrect: idx === optIndex };
        } else {
          return idx === optIndex ? { ...opt, isCorrect: !opt.isCorrect } : opt;
        }
      });
      q.options = options;
      copy[qIndex] = q;
      return copy;
    });
  };

  const handleUpdateOptionText = (qIndex, optIndex, newContent) => {
    setPreviewQuestions(prev => {
      const copy = [...prev];
      const q = { ...copy[qIndex] };
      const options = [...(q.options || [])];
      options[optIndex] = { ...options[optIndex], content: newContent };
      q.options = options;
      copy[qIndex] = q;
      return copy;
    });
  };

  const handleAddOption = (qIndex) => {
    setPreviewQuestions(prev => {
      const copy = [...prev];
      const q = { ...copy[qIndex] };
      const options = [...(q.options || [])];
      const nextLabel = String.fromCharCode(65 + options.length);
      options.push({ label: nextLabel, content: '', isCorrect: false });
      q.options = options;
      copy[qIndex] = q;
      return copy;
    });
  };

  const handleDeleteOption = (qIndex, optIndex) => {
    setPreviewQuestions(prev => {
      const copy = [...prev];
      const q = { ...copy[qIndex] };
      const options = (q.options || []).filter((_, idx) => idx !== optIndex).map((opt, idx) => ({
        ...opt,
        label: String.fromCharCode(65 + idx)
      }));
      q.options = options;
      copy[qIndex] = q;
      return copy;
    });
  };

  const handleToggleStatementCorrect = (qIndex, sIndex, value) => {
    setPreviewQuestions(prev => {
      const copy = [...prev];
      const q = { ...copy[qIndex] };
      const statements = [...(q.statements || [])];
      statements[sIndex] = { ...statements[sIndex], isCorrect: value };
      q.statements = statements;
      copy[qIndex] = q;
      return copy;
    });
  };

  const handleUpdateStatementText = (qIndex, sIndex, newText) => {
    setPreviewQuestions(prev => {
      const copy = [...prev];
      const q = { ...copy[qIndex] };
      const statements = [...(q.statements || [])];
      statements[sIndex] = { ...statements[sIndex], text: newText };
      q.statements = statements;
      copy[qIndex] = q;
      return copy;
    });
  };

  const handleAddStatement = (qIndex) => {
    setPreviewQuestions(prev => {
      const copy = [...prev];
      const q = { ...copy[qIndex] };
      const statements = [...(q.statements || [])];
      statements.push({
        id: `tf_${Date.now()}_${statements.length + 1}`,
        text: '',
        isCorrect: 'dung'
      });
      q.statements = statements;
      copy[qIndex] = q;
      return copy;
    });
  };

  const handleDeleteStatement = (qIndex, sIndex) => {
    setPreviewQuestions(prev => {
      const copy = [...prev];
      const q = { ...copy[qIndex] };
      q.statements = (q.statements || []).filter((_, idx) => idx !== sIndex);
      copy[qIndex] = q;
      return copy;
    });
  };

  const handleUpdateCategory = (qIndex, cIndex, newTitle) => {
    setPreviewQuestions(prev => {
      const copy = [...prev];
      const q = { ...copy[qIndex] };
      const oldCat = q.categories[cIndex];
      const categories = [...(q.categories || [])];
      categories[cIndex] = newTitle;
      q.categories = categories;

      q.dragDropItems = (q.dragDropItems || []).map(item => 
        item.targetCategoryOrMatch === oldCat ? { ...item, targetCategoryOrMatch: newTitle } : item
      );

      copy[qIndex] = q;
      return copy;
    });
  };

  const handleUpdateDragItem = (qIndex, dIndex, newText, newTarget) => {
    setPreviewQuestions(prev => {
      const copy = [...prev];
      const q = { ...copy[qIndex] };
      const items = [...(q.dragDropItems || [])];
      items[dIndex] = {
        ...items[dIndex],
        itemText: newText !== undefined ? newText : items[dIndex].itemText,
        targetCategoryOrMatch: newTarget !== undefined ? newTarget : items[dIndex].targetCategoryOrMatch
      };
      q.dragDropItems = items;
      copy[qIndex] = q;
      return copy;
    });
  };

  const handleAddDragItem = (qIndex, targetCategory) => {
    setPreviewQuestions(prev => {
      const copy = [...prev];
      const q = { ...copy[qIndex] };
      const items = [...(q.dragDropItems || [])];
      items.push({
        id: `dd_${Date.now()}_${items.length + 1}`,
        itemText: '',
        targetCategoryOrMatch: targetCategory || (q.categories?.[0] || 'Cột 1')
      });
      q.dragDropItems = items;
      copy[qIndex] = q;
      return copy;
    });
  };

  const handleDeleteDragItem = (qIndex, dIndex) => {
    setPreviewQuestions(prev => {
      const copy = [...prev];
      const q = { ...copy[qIndex] };
      q.dragDropItems = (q.dragDropItems || []).filter((_, idx) => idx !== dIndex);
      copy[qIndex] = q;
      return copy;
    });
  };

  const handleDeleteQuestion = (qIndex) => {
    if (!window.confirm(`Bạn có chắc chắn muốn xóa Câu ${qIndex + 1}?`)) return;
    setPreviewQuestions(prev => prev.filter((_, idx) => idx !== qIndex));
  };

  const handleAddNewQuestion = () => {
    setPreviewQuestions(prev => [
      ...(prev || []),
      {
        orderIndex: (prev?.length || 0) + 1,
        type: 'single_choice',
        content: '',
        points: 1.0,
        options: [
          { label: 'A', content: '', isCorrect: true },
          { label: 'B', content: '', isCorrect: false },
          { label: 'C', content: '', isCorrect: false },
          { label: 'D', content: '', isCorrect: false }
        ]
      }
    ]);
  };

  // Save edited questions to DB
  const handleSaveEditedQuiz = async () => {
    if (!previewQuestions || previewQuestions.length === 0) {
      alert('Không có câu hỏi nào để lưu');
      return;
    }
    setIsSaving(true);
    try {
      const res = await fetch('/api/quizzes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: quizTitle || file?.name?.replace(/\.docx$/i, '') || 'Bài kiểm tra',
          description: `Đề thi nhập từ file Word (${previewQuestions.length} câu hỏi)`,
          category: quizCategory,
          durationMinutes: 15,
          antiCheatEnabled: true,
          questions: previewQuestions,
          createdBy: user?.fullName || 'Quản trị viên'
        })
      });
      const data = await res.json();
      if (data.success) {
        alert('Đã lưu bài thi và các câu hỏi chỉnh sửa thành công!');
        onQuizCreated(data.quizId);
      } else {
        alert(data.message || 'Lỗi khi lưu bài thi');
      }
    } catch (e) {
      alert('Lỗi kết nối máy chủ');
    } finally {
      setIsSaving(false);
    }
  };

  // Visual Builder Save
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
      alert('Lỗi kết nối máy chủ');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Trình Nhập Đề & Soạn Thảo Đa Định Dạng</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Tạo & Tải Đề Thi Mới
          </h1>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Hỗ trợ nhập trực tiếp từ file Word (.docx) hoặc soạn thảo thủ công. Cho phép chỉnh sửa bất kỳ câu hỏi nào để chuẩn xác 100% trước khi lưu!
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-white p-1.5 rounded-2xl shadow-xs border border-slate-200 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('docx')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'docx' 
                ? 'bg-blue-600 text-white shadow-xs' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>Nhập từ file Word (.docx)</span>
          </button>

          <button
            onClick={() => setActiveTab('builder')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'builder' 
                ? 'bg-blue-600 text-white shadow-xs' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Tạo thủ công</span>
          </button>
        </div>

        {/* ===================== TAB 1: DOCX PARSER WITH FULL EDITING ===================== */}
        {activeTab === 'docx' && (
          <div className="space-y-6">
            
            {/* Upload & Config Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Tiêu đề bài kiểm tra
                  </label>
                  <input
                    type="text"
                    value={quizTitle}
                    onChange={(e) => setQuizTitle(e.target.value)}
                    placeholder="VD: BÀI KIỂM TRA 15 PHÚT - BÀI 5"
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
                  Chọn tệp Word (.docx)
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
                      Hệ thống tự động nhận diện tất cả định dạng câu hỏi (Đúng/Sai, kéo thả, trắc nghiệm đơn)
                    </span>
                  </label>
                </div>
              </div>

              {/* Rules detection pills */}
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                    Quy tắc nhận diện đáp án đúng trong file Word:
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={detectByBold}
                      onChange={(e) => setDetectByBold(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600"
                    />
                    <span className="text-xs font-bold text-slate-800">Chữ in đậm (Bold)</span>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={detectByUnderline}
                      onChange={(e) => setDetectByUnderline(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600"
                    />
                    <span className="text-xs font-bold text-slate-800">Gạch chân (Underline)</span>
                  </label>

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

                {(detectByColor || detectByHighlight) && (
                  <div className="pt-2 border-t border-blue-100 space-y-2">
                    <span className="text-[11px] font-bold text-slate-600">
                      Chọn gam màu đánh dấu đáp án:
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
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>{parsing ? 'Đang đọc & bóc tách...' : 'Bóc Tách & Chỉnh Sửa Câu Hỏi'}</span>
                </button>
              </div>

            </div>

            {/* ===================== INTERACTIVE QUESTION EDITOR ===================== */}
            {previewQuestions && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-6">
                
                {/* Header bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="font-black text-lg text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      <span>Kết Quả Bóc Tách: {previewQuestions.length} Câu Hỏi</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      💡 Bạn có thể trực tiếp <strong>sửa nội dung, đổi đáp án đúng, thêm/xóa phương án</strong> bên dưới để chuẩn xác 100% trước khi lưu!
                    </p>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleAddNewQuestion}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all"
                    >
                      <Plus className="w-4 h-4 text-slate-600" />
                      <span>Thêm câu hỏi mới</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSaveEditedQuiz}
                      disabled={isSaving}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md shadow-emerald-600/25 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      <Save className="w-4 h-4" />
                      <span>{isSaving ? 'Đang lưu...' : 'Xác Nhận & Lưu Bài Thi'}</span>
                    </button>
                  </div>
                </div>

                {/* Questions List with inline editing */}
                <div className="space-y-6">
                  {previewQuestions.map((q, qIdx) => (
                    <div 
                      key={qIdx} 
                      className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-all space-y-4"
                    >
                      {/* Question Header & Controls */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                            {qIdx + 1}
                          </span>
                          <span className="font-bold text-sm text-slate-800">
                            Câu {qIdx + 1}:
                          </span>

                          {/* Question Type Selector */}
                          <select
                            value={q.type}
                            onChange={(e) => handleUpdateQuestion(qIdx, 'type', e.target.value)}
                            className="text-xs font-bold px-2.5 py-1 rounded-lg border border-slate-300 bg-white text-blue-700 outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="single_choice">Trắc nghiệm 1 đáp án</option>
                            <option value="multiple_choice">Trắc nghiệm nhiều đáp án</option>
                            <option value="true_false_matrix">Đúng / Sai theo mệnh đề</option>
                            <option value="drag_drop_categorize">Kéo thả phân loại vào cột</option>
                            <option value="drag_drop_matching">Kéo thả ghép nối</option>
                          </select>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleDeleteQuestion(qIdx)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                            title="Xóa câu hỏi này"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Question Content Input */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Nội dung câu hỏi:
                        </label>
                        <textarea
                          rows={2}
                          value={q.content}
                          onChange={(e) => handleUpdateQuestion(qIdx, 'content', e.target.value)}
                          className="w-full text-xs font-medium p-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 leading-relaxed"
                          placeholder="Nhập nội dung câu hỏi..."
                        />
                      </div>

                      {/* ================= TYPE 1 & 2: Single Choice / Multiple Choice Options ================= */}
                      {(q.type === 'single_choice' || q.type === 'multiple_choice') && (
                        <div className="space-y-2 pt-1">
                          <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
                            <span>Các phương án lựa chọn (Bấm vào nút tròn để chọn ĐÁP ÁN ĐÚNG):</span>
                            <button
                              type="button"
                              onClick={() => handleAddOption(qIdx)}
                              className="text-blue-600 hover:text-blue-700 flex items-center gap-1 font-bold"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Thêm phương án</span>
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {(q.options || []).map((opt, optIdx) => (
                              <div
                                key={optIdx}
                                className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                                  opt.isCorrect 
                                    ? 'bg-emerald-50/90 border-emerald-400 ring-1 ring-emerald-400' 
                                    : 'bg-white border-slate-200'
                                }`}
                              >
                                {/* Correct Answer Selector Toggle */}
                                <button
                                  type="button"
                                  onClick={() => handleToggleOptionCorrect(qIdx, optIdx)}
                                  className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 cursor-pointer transition-all ${
                                    opt.isCorrect 
                                      ? 'bg-emerald-600 text-white shadow-xs' 
                                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-300'
                                  }`}
                                  title={opt.isCorrect ? 'Đáp án đúng (Bấm để bỏ)' : 'Bấm để đặt làm đáp án đúng'}
                                >
                                  {opt.isCorrect ? <Check className="w-3.5 h-3.5" /> : opt.label}
                                </button>

                                {/* Option Text Input */}
                                <input
                                  type="text"
                                  value={opt.content}
                                  onChange={(e) => handleUpdateOptionText(qIdx, optIdx, e.target.value)}
                                  className="flex-1 text-xs font-medium bg-transparent border-none outline-none text-slate-900"
                                  placeholder={`Nội dung phương án ${opt.label}...`}
                                />

                                {opt.isCorrect && (
                                  <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-900 shrink-0">
                                    ĐÚNG
                                  </span>
                                )}

                                <button
                                  type="button"
                                  onClick={() => handleDeleteOption(qIdx, optIdx)}
                                  className="text-slate-300 hover:text-red-500 p-1"
                                  title="Xóa phương án này"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ================= TYPE 3: True / False Statements Matrix ================= */}
                      {q.type === 'true_false_matrix' && (
                        <div className="space-y-2.5 pt-1">
                          <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
                            <span>Các phát biểu / mệnh đề (Chọn ĐÚNG hoặc SAI cho mỗi phát biểu):</span>
                            <button
                              type="button"
                              onClick={() => handleAddStatement(qIdx)}
                              className="text-blue-600 hover:text-blue-700 flex items-center gap-1 font-bold"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Thêm mệnh đề</span>
                            </button>
                          </div>

                          <div className="space-y-2">
                            {(q.statements || []).map((stmt, sIdx) => {
                              const isDung = stmt.isCorrect === 'dung' || stmt.isCorrect === true;
                              return (
                                <div
                                  key={stmt.id || sIdx}
                                  className="p-2.5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5"
                                >
                                  <div className="flex items-center gap-2 flex-1 w-full">
                                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                                      {sIdx + 1}
                                    </span>
                                    <input
                                      type="text"
                                      value={stmt.text}
                                      onChange={(e) => handleUpdateStatementText(qIdx, sIdx, e.target.value)}
                                      className="flex-1 text-xs font-medium bg-transparent border-none outline-none text-slate-900"
                                      placeholder="Nội dung phát biểu..."
                                    />
                                  </div>

                                  {/* True / False Toggle Buttons */}
                                  <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                                    <button
                                      type="button"
                                      onClick={() => handleToggleStatementCorrect(qIdx, sIdx, 'dung')}
                                      className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                                        isDung 
                                          ? 'bg-emerald-600 text-white shadow-xs' 
                                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                      }`}
                                    >
                                      ✓ ĐÚNG
                                    </button>

                                    <button
                                      type="button"
                                      onClick={() => handleToggleStatementCorrect(qIdx, sIdx, 'sai')}
                                      className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                                        !isDung 
                                          ? 'bg-rose-600 text-white shadow-xs' 
                                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                      }`}
                                    >
                                      ✕ SAI
                                    </button>

                                    <button
                                      type="button"
                                      onClick={() => handleDeleteStatement(qIdx, sIdx)}
                                      className="text-slate-300 hover:text-red-500 p-1"
                                      title="Xóa mệnh đề này"
                                    >
                                      <X className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* ================= TYPE 4: Drag & Drop Categorization ================= */}
                      {q.type === 'drag_drop_categorize' && (
                        <div className="space-y-3 pt-1">
                          <div className="text-[11px] font-bold text-slate-600">
                            Phân loại thẻ vào các cột tương ứng:
                          </div>

                          {/* Columns */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {(q.categories || []).map((cat, cIdx) => {
                              const itemsInCat = (q.dragDropItems || []).filter(item => item.targetCategoryOrMatch === cat);
                              return (
                                <div key={cIdx} className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-2.5">
                                  <div>
                                    <label className="block text-[10px] font-bold text-blue-800 uppercase mb-1">
                                      Tên Cột {cIdx + 1}:
                                    </label>
                                    <input
                                      type="text"
                                      value={cat}
                                      onChange={(e) => handleUpdateCategory(qIdx, cIdx, e.target.value)}
                                      className="w-full text-xs font-bold p-1.5 rounded-lg border border-blue-200 bg-white"
                                    />
                                  </div>

                                  {/* Items inside column */}
                                  <div className="space-y-1.5">
                                    {itemsInCat.map((item, dIdx) => {
                                      const globalDIdx = (q.dragDropItems || []).indexOf(item);
                                      return (
                                        <div key={dIdx} className="p-2 rounded-lg bg-white border border-emerald-300 flex items-center justify-between gap-2 shadow-2xs">
                                          <input
                                            type="text"
                                            value={item.itemText}
                                            onChange={(e) => handleUpdateDragItem(qIdx, globalDIdx, e.target.value)}
                                            className="flex-1 text-xs text-slate-800 font-medium bg-transparent border-none outline-none"
                                            placeholder="Nội dung thẻ kéo thả..."
                                          />
                                          <button
                                            type="button"
                                            onClick={() => handleDeleteDragItem(qIdx, globalDIdx)}
                                            className="text-slate-300 hover:text-red-500"
                                          >
                                            <X className="w-3.5 h-3.5" />
                                          </button>
                                        </div>
                                      );
                                    })}

                                    <button
                                      type="button"
                                      onClick={() => handleAddDragItem(qIdx, cat)}
                                      className="w-full py-1.5 rounded-lg border border-dashed border-blue-300 text-blue-600 hover:bg-blue-100/50 text-[11px] font-bold flex items-center justify-center gap-1"
                                    >
                                      <Plus className="w-3 h-3" />
                                      <span>Thêm thẻ vào cột này</span>
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                    </div>
                  ))}
                </div>

                {/* Bottom confirmation bar */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleAddNewQuestion}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4 text-blue-600" />
                    <span>Thêm câu hỏi mới</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSaveEditedQuiz}
                    disabled={isSaving}
                    className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md shadow-emerald-600/30 active:scale-95 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{isSaving ? 'Đang lưu vào hệ thống...' : 'Xác Nhận & Lưu Toàn Bộ Đề Thi'}</span>
                  </button>
                </div>

              </div>
            )}

          </div>
        )}

        {/* ===================== TAB 2: VISUAL BUILDER ===================== */}
        {activeTab === 'builder' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Tiêu đề bài thi</label>
                <input
                  type="text"
                  value={builderTitle}
                  onChange={(e) => setBuilderTitle(e.target.value)}
                  placeholder="VD: Kiểm tra kiến thức chương 1"
                  className="w-full text-xs font-medium p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Mô tả bài thi</label>
                <textarea
                  rows={2}
                  value={builderDescription}
                  onChange={(e) => setBuilderDescription(e.target.value)}
                  placeholder="Mô tả nội dung trọng tâm bài thi..."
                  className="w-full text-xs font-medium p-3 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Danh mục</label>
                  <select
                    value={builderCategory}
                    onChange={(e) => setBuilderCategory(e.target.value)}
                    className="w-full text-xs font-medium p-3 rounded-xl border border-slate-200 bg-white"
                  >
                    <option>Triết học & Lý luận chính trị</option>
                    <option>Khoa học Pháp lý</option>
                    <option>Lịch sử & Chính trị</option>
                    <option>Kinh tế & Quản trị</option>
                    <option>Công nghệ thông tin</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Thời gian làm bài (phút)</label>
                  <input
                    type="number"
                    value={builderDuration}
                    onChange={(e) => setBuilderDuration(e.target.value)}
                    className="w-full text-xs font-medium p-3 rounded-xl border border-slate-200"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={handleSaveBuilderQuiz}
                disabled={isSaving}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/25 active:scale-95 transition-all"
              >
                {isSaving ? 'Đang lưu...' : 'Lưu & Xuất bản bài thi'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
