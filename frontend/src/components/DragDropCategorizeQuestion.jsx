import React, { useState } from 'react';
import { GripVertical, X, Check, ArrowDown, HelpCircle } from 'lucide-react';

export default function DragDropCategorizeQuestion({
  dragDropItems = [],
  categories = ['1) Điều kiện khách quan...', '2) Điều kiện chủ quan...'],
  placements = {}, // { itemId: categoryName }
  onUpdatePlacements
}) {
  const [draggedItemId, setDraggedItemId] = useState(null);
  const [selectedTagId, setSelectedTagId] = useState(null); // For tap/click placement

  // Unplaced items in top bank
  const unplacedItems = dragDropItems.filter(item => !placements[item.id]);

  const handleDragStart = (e, itemId) => {
    e.dataTransfer.setData('text/plain', itemId);
    setDraggedItemId(itemId);
  };

  const handleDrop = (e, targetCategory) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('text/plain') || draggedItemId;
    if (itemId) {
      onUpdatePlacements({
        ...placements,
        [itemId]: targetCategory
      });
      setDraggedItemId(null);
      setSelectedTagId(null);
    }
  };

  const handleAllowDrop = (e) => {
    e.preventDefault();
  };

  const handleRemoveFromCategory = (itemId) => {
    const updated = { ...placements };
    delete updated[itemId];
    onUpdatePlacements(updated);
  };

  // Click-to-place helper (mobile friendly)
  const handleTagClick = (itemId) => {
    if (selectedTagId === itemId) {
      setSelectedTagId(null);
    } else {
      setSelectedTagId(itemId);
    }
  };

  const handleCategoryClick = (category) => {
    if (selectedTagId) {
      onUpdatePlacements({
        ...placements,
        [selectedTagId]: category
      });
      setSelectedTagId(null);
    }
  };

  return (
    <div className="space-y-6 mt-4">
      {/* Top Pool: Keywords / Pills */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Ngân hàng thẻ đáp án ({unplacedItems.length} thẻ chưa xếp)
            </span>
          </div>
          <span className="text-[11px] text-slate-400 italic flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" />
            Kéo thả hoặc chạm chọn thẻ rồi chạm vào cột bên dưới
          </span>
        </div>

        {unplacedItems.length === 0 ? (
          <div className="py-4 text-center text-xs font-medium text-emerald-600 bg-emerald-50 rounded-xl border border-emerald-200">
            ✓ Đã phân loại toàn bộ các thẻ vào các cột bên dưới!
          </div>
        ) : (
          <div className="flex flex-wrap gap-2.5 min-h-[48px]">
            {unplacedItems.map(item => {
              const isSelected = selectedTagId === item.id;
              return (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item.id)}
                  onClick={() => handleTagClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold cursor-grab active:cursor-grabbing select-none transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105 ring-2 ring-blue-400'
                      : 'bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100 hover:border-blue-300'
                  }`}
                >
                  <GripVertical className="w-3.5 h-3.5 opacity-60 shrink-0" />
                  <span>{item.itemText}</span>
                  {isSelected && <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">Đã chọn</span>}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Drop Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat, idx) => {
          const itemsInCat = dragDropItems.filter(item => placements[item.id] === cat);
          const isTargetActive = selectedTagId !== null;

          return (
            <div
              key={idx}
              onDragOver={handleAllowDrop}
              onDrop={(e) => handleDrop(e, cat)}
              onClick={() => handleCategoryClick(cat)}
              className={`rounded-2xl border-2 transition-all p-4 flex flex-col justify-between min-h-[220px] ${
                isTargetActive
                  ? 'border-blue-400 bg-blue-50/30 hover:bg-blue-50/60 cursor-pointer ring-1 ring-blue-300'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div>
                {/* Column Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <h4 className="font-bold text-sm text-slate-800 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-black">
                      {idx + 1}
                    </span>
                    <span>{cat}</span>
                  </h4>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                    {itemsInCat.length}
                  </span>
                </div>

                {/* Placed Items in this column */}
                <div className="space-y-2">
                  {itemsInCat.map(item => (
                    <div
                      key={item.id}
                      className="group flex items-start justify-between gap-2 p-2.5 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-950 font-medium animate-in fade-in zoom-in-95"
                    >
                      <span className="leading-relaxed">{item.itemText}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveFromCategory(item.id);
                        }}
                        className="text-slate-400 hover:text-red-600 p-1 rounded-md hover:bg-white transition-colors"
                        title="Bỏ khỏi cột này"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashed drop hint box */}
              <div className={`mt-3 py-3 border-2 border-dashed rounded-xl flex items-center justify-center gap-2 text-xs font-medium transition-colors ${
                isTargetActive
                  ? 'border-blue-400 text-blue-600 bg-blue-50/60'
                  : 'border-slate-200 text-slate-400 bg-slate-50/50'
              }`}>
                <ArrowDown className="w-4 h-4 animate-bounce" />
                <span>Kéo và thả các đáp án vào đây</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

