import React from 'react';
import { Sparkles, Shield, Cpu, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-black">Quizz.</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hệ thống Thi Trắc Nghiệm Trực Tuyến & Thi Đấu Đấu Trường Real-time thế hệ mới. Chuẩn hóa quy trình khảo thí điện tử.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Tính Năng Cốt Lõi</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-blue-400" /> Bóc tách Word (.docx) XML tự động</li>
              <li className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-emerald-400" /> Giám sát chống gian lận & Fullscreen</li>
              <li className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-amber-400" /> Trợ lý AI giải thích đáp án chuyên sâu</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">4 Dạng Câu Hỏi</h4>
            <ul className="space-y-2 text-xs">
              <li>• Single Choice (Trắc nghiệm 1 đáp án)</li>
              <li>• Multiple Choice (Ràng buộc chọn đủ số lượng)</li>
              <li>• Kéo thả phân loại theo nhóm cột</li>
              <li>• Kéo thả ghép nối phát biểu tương ứng</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Hỗ Trợ & Dự Phòng</h4>
            <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-700/60 text-xs">
              <div className="font-semibold text-emerald-400 flex items-center gap-1 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Hạ tầng đồng bộ trực tuyến
              </div>
              <p className="text-[11px] text-slate-400">
                Tự động lưu LocalStorage + Server Background Sync. Chống crash khi mất mạng hoặc F5.
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© 2026 Quizz Platform. Thiết kế và phát triển bởi Senior Full-Stack Architect.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <span className="hover:text-slate-300 cursor-pointer">Chính sách bảo mật</span>
            <span className="hover:text-slate-300 cursor-pointer">Quy chế thi trực tuyến</span>
            <span className="hover:text-slate-300 cursor-pointer">API Docs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

