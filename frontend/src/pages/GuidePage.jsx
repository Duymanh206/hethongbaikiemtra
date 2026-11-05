import React from 'react';
import { BookOpen, Shield, HelpCircle, Swords, CheckSquare, Layers, Sparkles } from 'lucide-react';

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Tài liệu khảo thí</span>
          <h1 className="text-3xl font-black text-slate-900">Hướng Dẫn Khảo Thí & Thi Đấu Trực Tuyến</h1>
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            Quy trình chuẩn hóa làm bài kiểm tra trực tuyến, các dạng câu hỏi tương tác kéo thả và chế độ chống gian lận proctoring.
          </p>
        </div>

        {/* 4 Question types guide */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            <span>4 Dạng Câu Hỏi Tương Tác Chuẩn Hóa</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1.5">
              <h4 className="font-bold text-blue-900 text-sm">1. Single Choice (1 đáp án đúng)</h4>
              <p className="text-slate-600">
                Hiển thị dạng lưới 2 cột. Bấm chọn 1 phương án duy nhất; viền chuyển sang màu xanh dương đậm và nền xanh nhạt.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1.5">
              <h4 className="font-bold text-emerald-900 text-sm">2. Multiple Choice (Nhiều đáp án)</h4>
              <p className="text-slate-600">
                Sử dụng ô vuông Checkbox. Ràng buộc logic nghiêm ngặt: Phải chọn đúng số lượng đáp án yêu cầu (VD: yêu cầu 2 thì chọn 1 vẫn tính là chưa hoàn thành).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-1.5">
              <h4 className="font-bold text-amber-900 text-sm">3. Kéo thả phân loại vào cột</h4>
              <p className="text-slate-600">
                Kéo các thẻ từ khóa từ ngân hàng phía trên và thả vào đúng các cột tương ứng bên dưới. Hỗ trợ chạm/click chọn trên điện thoại.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-1.5">
              <h4 className="font-bold text-indigo-900 text-sm">4. Kéo thả ghép nối phát biểu</h4>
              <p className="text-slate-600">
                Bên trái là các mệnh đề cố định, bên phải là các ô trống nét đứt. Kéo thẻ đáp án phù hợp vào từng dòng mệnh đề.
              </p>
            </div>
          </div>
        </div>

        {/* Proctoring guide */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4 text-xs leading-relaxed">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Shield className="w-5 h-5 text-rose-600" />
            <span>Quy Chế Chống Gian Lận (Proctoring Mode)</span>
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium">
            <li>Hệ thống tự động yêu cầu chế độ Toàn màn hình (Fullscreen) khi bắt đầu làm bài.</li>
            <li>Mọi hành vi chuyển tab, thu nhỏ cửa sổ hoặc thoát fullscreen sẽ kích hoạt cảnh báo vi phạm.</li>
            <li>Nếu vi phạm vượt quá $N$ lần cấu hình (mặc định 3 lần), bài thi sẽ tự động bị đình chỉ và thu bài ngay lập tức.</li>
            <li>Trạng thái làm bài được lưu liên tục vào LocalStorage và Server Background Sync; mất mạng hoặc F5 sẽ không làm mất bài thi.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

