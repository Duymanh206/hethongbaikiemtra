import React from 'react';
import { ShieldAlert, Maximize2, AlertOctagon } from 'lucide-react';

export default function AntiCheatModal({
  isOpen,
  violationsCount,
  maxViolations,
  violationReason,
  onEnterFullscreen
}) {
  if (!isOpen) return null;

  const isCritical = violationsCount >= maxViolations;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border-2 border-rose-500 text-center animate-in zoom-in-95 duration-200">
        
        {/* Warning Icon */}
        <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
          <ShieldAlert className="w-9 h-9" />
        </div>

        {/* Modal Title */}
        <h3 className="text-xl font-black text-rose-600 tracking-tight">
          {isCritical ? 'ĐÃ ĐẠT GIỚI HẠN VI PHẠM!' : 'CẢNH BÁO QUY CHẾ THI!'}
        </h3>
        
        <div className="my-3 text-xs font-semibold px-3 py-1.5 rounded-full bg-rose-100 text-rose-900 inline-block">
          Số lần vi phạm ghi nhận: {violationsCount} / {maxViolations}
        </div>

        <p className="text-sm text-slate-700 leading-relaxed font-medium">
          Hệ thống phát hiện bạn vừa rời khỏi màn hình làm bài thi:
          <span className="block font-bold text-rose-700 mt-1 italic">
            "{violationReason || 'Chuyển tab hoặc thoát chế độ toàn màn hình'}"
          </span>
        </p>

        <div className="my-5 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 text-left">
          ⚠️ <strong>Lưu ý:</strong> Mọi hành động chuyển tab, mở DevTools, chia sẻ màn hình đều được ghi nhận vào nhật ký thanh tra. Nếu vi phạm quá {maxViolations} lần, bài thi sẽ tự động bị thu và hủy kết quả.
        </div>

        {/* Button to resume / re-enter fullscreen */}
        <button
          onClick={onEnterFullscreen}
          className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 active:scale-98 transition-all"
        >
          <Maximize2 className="w-4 h-4" />
          <span>Quay lại chế độ Toàn màn hình</span>
        </button>

      </div>
    </div>
  );
}

