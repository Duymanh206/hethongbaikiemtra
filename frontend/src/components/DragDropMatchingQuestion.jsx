import React, { useState } from 'react';
import { GripVertical, X } from 'lucide-react';

export default function DragDropMatchingQuestion({
  dragDropItems = [], // list of statement rows
  matchingTargets = [], // unique list of target cards e.g. ["Mê tín dị đoan", "Tín ngưỡng", "Tôn giáo", "Mê muội"]
  matches = {}, // { statementId: matchedTargetString }
  onUpdateMatches
}) {
  const [draggedTarget, setDraggedTarget] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState(null);

  // Targets already used
  const usedTargets = Object.values(matches);
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
    <div className="space-y-6 mt-4 w-full">
      {/* Top Answer Pills Pool matching Image 5 */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-100 border border-slate-200/90 min-h-[64px] flex items-center shadow-xs">
        {availableTargets.length === 0 ? (
          <div className="w-full text-center text-sm font-semibold text-emerald-600 py-1.5 flex items-center justify-center gap-2">
            <span>✓ Đã ghép nối đầy đủ cho tất cả các phát biểu bên dưới!</span>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-3 w-full">
            {availableTargets.map((target, idx) => {
              const isSelected = selectedTarget === target;
              return (
                <div
                  key={idx}
                  draggable
                  onDragStart={(e) => handleDragStart(e, target)}
                  onClick={() => setSelectedTarget(isSelected ? null : target)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium cursor-grab active:cursor-grabbing select-none transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-400 scale-105'
                      : 'bg-white text-blue-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50/70 shadow-xs'
                  }`}
                >
                  <GripVertical className="w-4 h-4 text-blue-400 shrink-0 opacity-70" />
                  <span>{target}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Statement Rows matching Image 5 */}
      <div className="space-y-3.5 w-full">
        {dragDropItems.map((item, idx) => {
          const matchedValue = matches[item.id];
          const isSlotActive = selectedTarget !== null;

          return (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs"
            >
              {/* Left Statement */}
              <div className="flex-1 text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                {item.itemText}
              </div>

              {/* Right Drop Box (matching Image 5 with dashed border) */}
              <div
                onDragOver={handleAllowDrop}
                onDrop={(e) => handleDrop(e, item.id)}
                onClick={() => handleSlotClick(item.id)}
                className={`sm:w-1/2 min-h-[56px] rounded-xl border-2 border-dashed flex items-center justify-center p-3 transition-all select-none ${
                  matchedValue
                    ? 'border-blue-400 bg-blue-50/90 text-blue-950 font-bold'
                    : isSlotActive
                    ? 'border-blue-500 bg-blue-50/50 text-blue-700 cursor-pointer animate-pulse ring-2 ring-blue-300'
                    : 'border-slate-300 bg-slate-50/70 text-slate-400'
                }`}
              >
                {matchedValue ? (
                  <div className="flex items-center justify-between w-full px-2">
                    <span className="text-sm font-semibold leading-relaxed">{matchedValue}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveMatch(item.id);
                      }}
                      className="text-slate-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-white transition-colors ml-3"
                      title="Gỡ thẻ"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <span className="text-xs sm:text-sm italic text-center font-medium">
                    {isSlotActive ? '👉 Chạm vào đây để thả thẻ' : 'Kéo và thả đáp án vào đây'}
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
