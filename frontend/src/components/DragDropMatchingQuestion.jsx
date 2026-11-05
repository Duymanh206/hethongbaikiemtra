import React, { useState } from 'react';
import { GripVertical, X, Check, ArrowRight, HelpCircle } from 'lucide-react';

export default function DragDropMatchingQuestion({
  dragDropItems = [], // contains statement items
  matchingTargets = [], // unique list of target cards e.g. ["C.Mác và Ph.Ăngghen", "V.I.Lênin", ...]
  matches = {}, // { statementId: matchedTargetString }
  onUpdateMatches
}) {
  const [draggedTarget, setDraggedTarget] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState(null); // click-to-place

  // Targets already used in some statement
  const usedTargets = Object.values(matches);
  // Available targets in the top pool
  const availableTargets = matchingTargets.filter(target => !usedTargets.includes(target));

  const handleDragStart = (e, target) => {
    e.dataTransfer.setData('text/plain', target);
    setDraggedTarget(target);
  };

  const handleDrop = (e, statementId) => {
    e.preventDefault();
    const target = e.dataTransfer.getData('text/plain') || draggedTarget;
    if (target) {
      onUpdateMatches({
        ...matches,
        [statementId]: target
      });
      setDraggedTarget(null);
      setSelectedTarget(null);
    }
  };

  const handleAllowDrop = (e) => {
    e.preventDefault();
  };

  const handleRemoveMatch = (statementId) => {
    const updated = { ...matches };
    delete updated[statementId];
    onUpdateMatches(updated);
  };

  const handleSlotClick = (statementId) => {
    if (selectedTarget) {
      onUpdateMatches({
        ...matches,
        [statementId]: selectedTarget
      });
      setSelectedTarget(null);
    }
  };

  return (
    <div className="space-y-6 mt-4">
      {/* Top Answer Cards Bank */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Danh sách thẻ đáp án ghép nối ({availableTargets.length} thẻ còn lại)
            </span>
          </div>
          <span className="text-[11px] text-slate-400 italic flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" />
            Kéo thả hoặc chạm chọn thẻ rồi chạm vào ô bên phải phát biểu
          </span>
        </div>

        {availableTargets.length === 0 ? (
          <div className="py-3 text-center text-xs font-semibold text-emerald-600 bg-emerald-50 rounded-xl border border-emerald-200">
            ✓ Đã ghép nối đầy đủ cho tất cả các phát biểu bên dưới!
          </div>
        ) : (
          <div className="flex flex-wrap gap-2.5 min-h-[44px]">
            {availableTargets.map((target, idx) => {
              const isSelected = selectedTarget === target;
              return (
                <div
                  key={idx}
                  draggable
                  onDragStart={(e) => handleDragStart(e, target)}
                  onClick={() => setSelectedTarget(isSelected ? null : target)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold cursor-grab active:cursor-grabbing select-none transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30 scale-105 ring-2 ring-indigo-400'
                      : 'bg-indigo-50 text-indigo-900 border border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300'
                  }`}
                >
                  <GripVertical className="w-3.5 h-3.5 opacity-60 shrink-0" />
                  <span>{target}</span>
                  {isSelected && <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">Đã chọn</span>}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Statement Rows */}
      <div className="space-y-3">
        {dragDropItems.map((item, idx) => {
          const matchedValue = matches[item.id];
          const isSlotActive = selectedTarget !== null;

          return (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs"
            >
              {/* Left: Fixed Statement */}
              <div className="flex items-center gap-3 sm:w-1/2">
                <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-bold shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {item.itemText}
                </span>
              </div>

              {/* Middle arrow */}
              <ArrowRight className="hidden sm:block w-4 h-4 text-slate-300 shrink-0" />

              {/* Right: Dashed Drop Target Box */}
              <div
                onDragOver={handleAllowDrop}
                onDrop={(e) => handleDrop(e, item.id)}
                onClick={() => handleSlotClick(item.id)}
                className={`sm:w-5/12 min-h-[48px] rounded-xl border-2 border-dashed flex items-center justify-between p-2.5 transition-all ${
                  matchedValue
                    ? 'border-indigo-300 bg-indigo-50/70 text-indigo-950'
                    : isSlotActive
                    ? 'border-indigo-400 bg-indigo-50/40 text-indigo-600 cursor-pointer animate-pulse'
                    : 'border-slate-200 bg-slate-50/50 text-slate-400'
                }`}
              >
                {matchedValue ? (
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-bold leading-tight">{matchedValue}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveMatch(item.id);
                      }}
                      className="text-slate-400 hover:text-red-600 p-1 rounded-md hover:bg-white transition-colors"
                      title="Gỡ ghép nối"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <span className="text-xs text-center w-full italic">
                    {isSlotActive ? 'Chạm vào đây để thả thẻ' : 'Kéo thả thẻ đáp án vào đây'}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

