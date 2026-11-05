import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Play, Pause, RotateCcw, FastForward, Headphones } from 'lucide-react';

export default function ListeningAudioPlayer({
  audioUrl,
  listeningScript,
  maxPlays = 2,
  title = 'Bài Nghe Tiếng Anh (Listening Track)'
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);
  const isUsingTTS = !audioUrl && !!listeningScript;

  useEffect(() => {
    // Reset when audio changes
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  }, [audioUrl, listeningScript]);

  // Audio element listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    const onLoadedMetadata = () => {
      setDuration(audio.duration);
    };
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(100);
      setPlayCount(prev => prev + 1);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, [audioUrl]);

  // TTS Player
  const playTTS = () => {
    if (!synthRef.current) return;
    synthRef.current.cancel();

    if (isPlaying) {
      synthRef.current.cancel();
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(listeningScript);
    utterance.lang = 'en-US';
    utterance.rate = playbackRate;

    // Pick English voice if available
    const voices = synthRef.current.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('US')));
    if (enVoice) utterance.voice = enVoice;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => {
      setIsPlaying(false);
      setPlayCount(prev => prev + 1);
      setProgress(100);
    };
    utterance.onerror = () => setIsPlaying(false);

    synthRef.current.speak(utterance);
  };

  const handleTogglePlay = () => {
    if (maxPlays && playCount >= maxPlays) {
      alert(`Bạn đã sử dụng hết số lần nghe cho phép (${maxPlays} lần) trong bài thi chính thức!`);
      return;
    }

    if (isUsingTTS) {
      playTTS();
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.playbackRate = playbackRate;
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.warn('Audio play blocked or unavailable, falling back to TTS', err);
        if (listeningScript) playTTS();
      });
    }
  };

  const handleSpeedChange = (rate) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="bg-gradient-to-r from-blue-900/90 via-indigo-900 to-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-md border border-blue-700/50 my-3">
      {audioUrl && <audio ref={audioRef} src={audioUrl} preload="metadata" />}
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
            <Headphones className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="font-extrabold text-sm tracking-wide text-white flex items-center gap-2">
              <span>{title}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/30">
                Audio HD
              </span>
            </div>
            <p className="text-[11px] text-slate-300">
              Lắng nghe kỹ đoạn hội thoại/bài nói để chọn câu trả lời đúng
            </p>
          </div>
        </div>

        {/* Listen limit badge */}
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-slate-200 font-semibold text-[11px]">
            Đã nghe: <strong className={playCount >= maxPlays ? 'text-amber-400' : 'text-emerald-400'}>{playCount}</strong>/{maxPlays} lần
          </span>
        </div>
      </div>

      {/* Player Controls Bar */}
      <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={handleTogglePlay}
          className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider transition-all active:scale-95 shadow-md cursor-pointer ${
            isPlaying 
              ? 'bg-amber-500 hover:bg-amber-600 text-slate-950'
              : 'bg-blue-500 hover:bg-blue-400 text-white shadow-blue-500/30'
          }`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 fill-current" />
              <span>TẠM DỪNG</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current ml-0.5" />
              <span>PHÁT ÂM THANH</span>
            </>
          )}
        </button>

        {/* Progress Bar (if using audio file) */}
        {!isUsingTTS && duration > 0 && (
          <div className="flex-1 w-full flex items-center gap-3">
            <span className="text-[11px] text-slate-300 font-mono">{formatTime(currentTime)}</span>
            <div className="flex-1 bg-white/20 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-blue-400 h-full transition-all duration-200 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[11px] text-slate-300 font-mono">{formatTime(duration)}</span>
          </div>
        )}

        {isUsingTTS && isPlaying && (
          <div className="flex-1 flex items-center gap-2 text-xs text-blue-200 font-mono animate-pulse">
            <Volume2 className="w-4 h-4" />
            <span>Đang phát giọng đọc tiếng Anh bản xứ chuẩn...</span>
          </div>
        )}

        {/* Speed Controls */}
        <div className="flex items-center gap-1.5 self-end sm:self-auto ml-auto">
          <span className="text-[10px] text-slate-400 uppercase font-bold mr-1">Tốc độ:</span>
          {[0.75, 1.0, 1.25].map(rate => (
            <button
              key={rate}
              type="button"
              onClick={() => handleSpeedChange(rate)}
              className={`px-2 py-1 rounded-md text-[11px] font-bold font-mono transition-all ${
                playbackRate === rate
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              {rate}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

