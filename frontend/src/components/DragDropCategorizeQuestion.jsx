import React, { useState } from 'react';
import { GripVertical, X } from 'lucide-react';

export default function DragDropCategorizeQuestion({
  dragDropItems = [],
  categories = [
    '1) Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân:',
    '2) Điều kiện chủ quan để giai cấp công nhân thực hiện được sứ mệnh lịch sử:'
  ],
  placements = {}, // { itemId: categoryName }
  onUpdatePlacements
}) {
  const [draggedItemId, setDraggedItemId] = useState(null);
  const [selectedTagId, setSelectedTagId] = useState(null);

  // Unplaced items in the top bank
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

  const handleTagClick = (itemId) => {
    setSelectedTagId(prev => (prev === itemId ? null : itemId));
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
    <div className="space-y-6 mt-3">
      {/* Top Pool: Light gray container matching Image 3 with blue pills */}
      <div className="p-3.5 rounded-xl bg-slate-100/80 border border-slate-200/80 min-h-[56px] flex items-center">
        {unplacedItems.length === 0 ? (
          <div className="w-full text-center text-xs font-semibold text-emerald-600 py-1">
            ✓ Đã kéo thả tất cả các thẻ vào các cột bên dưới!
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-2.5 w-full">
            {unplacedItems.map(item => {
              const isSelected = selectedTagId === item.id;
              return (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item.id)}
                  onClick={() => handleTagClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-grab active:cursor-grabbing select-none transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-400 scale-105'
                      : 'bg-white text-blue-700 border border-blue-200 hover:border-blue-400 hover:bg-blue-50/50 shadow-xs'
                  }`}
                >
                  <GripVertical className="w-3.5 h-3.5 text-blue-400 shrink-0 opacity-70" />
                  <span>{item.itemText}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom 2 Columns matching Image 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((cat, idx) => {
          const itemsInCat = dragDropItems.filter(item => placements[item.id] === cat);
          const isTargetActive = selectedTagId !== null;

          return (
            <div key={idx} className="space-y-2">
              {/* Column Title */}
              <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                {cat}
              </h4>

              {/* Dashed Drop Zone Container */}
              <div
                onDragOver={handleAllowDrop}
                onDrop={(e) => handleDrop(e, cat)}
                onClick={() => handleCategoryClick(cat)}
                className={`min-h-[170px] rounded-xl border-2 border-dashed p-3.5 flex flex-col justify-between transition-all ${
                  isTargetActive
                    ? 'border-blue-400 bg-blue-50/40 cursor-pointer ring-1 ring-blue-300'
                    : 'border-slate-300 bg-white/60 hover:border-slate-400'
                }`}
              >
                {/* Placed Items inside column */}
                <div className="space-y-2">
                  {itemsInCat.map(item => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-200 text-xs font-medium"
                    >
                      <span className="leading-snug">{item.itemText}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveFromCategory(item.id);
                        }}
                        className="text-slate-400 hover:text-red-600 p-1 rounded transition-colors"
                        title="Bỏ ra ngoài"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Empty dashed placeholder matching Image 3 */}
                {itemsInCat.length === 0 && (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-400 text-xs py-8">
                    <span className="text-center font-medium">Kéo và thả các đáp án vào đây</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
