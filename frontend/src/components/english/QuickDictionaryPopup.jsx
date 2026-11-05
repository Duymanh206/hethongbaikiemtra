import React, { useState, useEffect, useRef } from 'react';
import { Volume2, BookA, X, ExternalLink, Sparkles } from 'lucide-react';

// Common K12 English Vocabulary Quick Dictionary Cache for instant zero-latency popup
const QUICK_DICT = {
  education: { ipa: '/ˌedʒ.ʊˈkeɪ.ʃən/', type: 'noun', vi: 'Nền giáo dục, sự giáo dục' },
  school: { ipa: '/skuːl/', type: 'noun', vi: 'Trường học' },
  student: { ipa: '/ˈstjuː.dənt/', type: 'noun', vi: 'Học sinh, sinh viên' },
  teacher: { ipa: '/ˈtiː.tʃər/', type: 'noun', vi: 'Giáo viên, thầy cô' },
  family: { ipa: '/ˈfæm.əl.i/', type: 'noun', vi: 'Gia đình' },
  friend: { ipa: '/frend/', type: 'noun', vi: 'Bạn bè' },
  children: { ipa: '/ˈtʃɪl.drən/', type: 'noun (plural)', vi: 'Trẻ em, con cái' },
  chemistry: { ipa: '/ˈkem.ɪ.stri/', type: 'noun', vi: 'Hóa học' },
  chair: { ipa: '/tʃeər/', type: 'noun', vi: 'Cái ghế' },
  check: { ipa: '/tʃek/', type: 'verb', vi: 'Kiểm tra, soát lại' },
  environment: { ipa: '/ɪnˈvaɪ.rən.mənt/', type: 'noun', vi: 'Môi trường sống' },
  pollution: { ipa: '/pəˈluː.ʃən/', type: 'noun', vi: 'Sự ô nhiễm' },
  healthy: { ipa: '/ˈhel.θi/', type: 'adj', vi: 'Lành mạnh, khỏe mạnh' },
  routine: { ipa: '/ruːˈtiːn/', type: 'noun', vi: 'Thói quen hằng ngày, nề nếp' },
  activity: { ipa: '/ækˈtɪv.ə.ti/', type: 'noun', vi: 'Hoạt động' },
  community: { ipa: '/kəˈmjuː.nə.ti/', type: 'noun', vi: 'Cộng đồng' },
  volunteer: { ipa: '/ˌvɒl.ənˈtɪər/', type: 'noun/verb', vi: 'Tình nguyện viên, làm tình nguyện' },
  generation: { ipa: '/ˌdʒen.əˈreɪ.ʃən/', type: 'noun', vi: 'Thế hệ' },
  tradition: { ipa: '/trəˈdɪʃ.ən/', type: 'noun', vi: 'Truyền thống' },
  culture: { ipa: '/ˈkʌl.tʃər/', type: 'noun', vi: 'Văn hóa' },
  success: { ipa: '/səkˈses/', type: 'noun', vi: 'Sự thành công' },
  global: { ipa: '/ˈɡləʊ.bəl/', type: 'adj', vi: 'Toàn cầu, quốc tế' },
  important: { ipa: '/ɪmˈpɔː.tənt/', type: 'adj', vi: 'Quan trọng, thiết yếu' },
  protect: { ipa: '/prəˈtekt/', type: 'verb', vi: 'Bảo vệ, gìn giữ' },
  develop: { ipa: '/dɪˈvel.əp/', type: 'verb', vi: 'Phát triển, mở rộng' },
  technology: { ipa: '/tekˈnɒl.ə.dʒi/', type: 'noun', vi: 'Công nghệ' },
  artificial: { ipa: '/ˌɑː.tɪˈfɪʃ.əl/', type: 'adj', vi: 'Nhân tạo' },
  intelligence: { ipa: '/ɪnˈtel.ɪ.dʒəns/', type: 'noun', vi: 'Trí thông minh' },
  celebrate: { ipa: '/ˈsel.ə.breɪt/', type: 'verb', vi: 'Kỷ niệm, ăn mừng' },
  festival: { ipa: '/ˈfes.tɪ.vəl/', type: 'noun', vi: 'Lễ hội' }
};

export default function QuickDictionaryPopup() {
  const [selectedWord, setSelectedWord] = useState('');
  const [definition, setDefinition] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const synthRef = useRef(window.speechSynthesis);

  useEffect(() => {
    const handleMouseUp = (e) => {
      // Ignore if clicking inside dictionary popup itself
      if (e.target.closest('.quick-dict-popup')) return;

      const selection = window.getSelection();
      const rawText = selection ? selection.toString().trim() : '';

      // Clean to single word
      const cleanWord = rawText.replace(/[^a-zA-Z]/g, '').toLowerCase();

      if (cleanWord && cleanWord.length >= 2 && cleanWord.length <= 25) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Position popup right above or below selected text
        const top = Math.max(10, rect.top + window.scrollY - 90);
        const left = Math.min(window.innerWidth - 280, Math.max(10, rect.left + window.scrollX - 40));

        setPosition({ top, left });
        setSelectedWord(cleanWord);

        // Lookup definition
        if (QUICK_DICT[cleanWord]) {
          setDefinition(QUICK_DICT[cleanWord]);
        } else {
          // Fallback definition generator / API
          setDefinition({
            ipa: `/${cleanWord}/`,
            type: 'English word',
            vi: `Từ tiếng Anh: "${cleanWord}". Bấm loa để nghe phát âm chuẩn.`
          });

          // Async dictionary API lookup
          fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanWord}`)
            .then(res => res.json())
            .then(data => {
              if (Array.isArray(data) && data[0]) {
                const item = data[0];
                const ipa = item.phonetic || (item.phonetics && item.phonetics[0]?.text) || `/${cleanWord}/`;
                const mean = item.meanings && item.meanings[0];
                const def = mean ? mean.definitions[0]?.definition : '';
                setDefinition({
                  ipa,
                  type: mean ? mean.partOfSpeech : 'vocabulary',
                  vi: def ? `Ý nghĩa: ${def}` : `Từ vựng tiếng Anh: "${cleanWord}"`
                });
              }
            })
            .catch(() => {});
        }

        setIsOpen(true);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const speakWord = (text) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    synthRef.current.speak(utterance);
  };

  if (!isOpen || !selectedWord) return null;

  return (
    <div 
      className="quick-dict-popup fixed z-50 animate-fadeIn"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      <div className="bg-slate-900/95 backdrop-blur-md text-white rounded-2xl p-3 sm:p-3.5 shadow-2xl border border-blue-500/40 w-[270px] sm:w-[300px]">
        
        {/* Header: Word & Audio button */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base text-white capitalize">
              {selectedWord}
            </span>
            {definition?.ipa && (
              <span className="text-[11px] font-mono text-blue-300">
                {definition.ipa}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => speakWord(selectedWord)}
              className="w-7 h-7 rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer"
              title="Nghe phát âm chuẩn (US)"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 rounded-lg text-slate-400 hover:text-white flex items-center justify-center"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content: Definition */}
        <div className="mt-2 space-y-1">
          {definition?.type && (
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
              [{definition.type}]
            </span>
          )}
          <p className="text-xs text-slate-200 leading-snug font-medium">
            {definition?.vi || 'Đang tra nghĩa...'}
          </p>
        </div>

        {/* Footer info */}
        <div className="mt-2.5 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-blue-400" />
            Tra từ nhanh K12
          </span>
          <span className="italic">Nhấp ra ngoài để đóng</span>
        </div>

      </div>
    </div>
  );
}

