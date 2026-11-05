import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import confetti from 'canvas-confetti';
import QRCode from 'qrcode';
import { 
  Swords, 
  Users, 
  Trophy, 
  Clock, 
  Zap, 
  Flame, 
  Play, 
  Crown, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Sparkles,
  QrCode,
  Share2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function BattleLobbyPage({ defaultQuizId, onBackToExplore }) {
  const { user } = useAuth();
  const socketRef = useRef(null);

  // Flow views: 'menu', 'host_lobby', 'player_lobby', 'playing', 'reveal', 'podium'
  const [stage, setStage] = useState('menu');

  // Input states
  const [pinInput, setPinInput] = useState('');
  const [nicknameInput, setNicknameInput] = useState(user?.fullName || 'Chiến Binh');
  const [selectedQuizId, setSelectedQuizId] = useState(defaultQuizId || 'quiz_cnxhkh_05');
  const [scoringMode, setScoringMode] = useState('total_points'); // 'total_points' or 'fastest_per_question'
  const [quizzesList, setQuizzesList] = useState([]);

  // Active room data
  const [roomData, setRoomData] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [players, setPlayers] = useState([]);
  const [qrDataUrl, setQrDataUrl] = useState('');

  // Playing question state
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(20);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);

  // Reveal & Podium State
  const [revealData, setRevealData] = useState(null);
  const [podiumData, setPodiumData] = useState(null);

  // Initialize socket connection & fetch quizzes
  useEffect(() => {
    fetch('/api/quizzes')
      .then(r => r.json())
      .then(d => {
        if (d.success) setQuizzesList(d.data);
      });

    const socket = io('/', { transports: ['websocket', 'polling'] });
    socketRef.current = socket;

    socket.on('connect', () => {
      console.log('Battle socket connected:', socket.id);
    });

    socket.on('room_players_updated', ({ players }) => {
      setPlayers(players);
    });

    socket.on('battle_started', () => {
      setStage('playing');
    });

    socket.on('new_question', (questionData) => {
      setCurrentQuestion(questionData);
      setTimeRemaining(questionData.timeLimitSeconds || 20);
      setSelectedOptionId(null);
      setHasAnswered(false);
      setAnsweredCount(0);
      setStage('playing');
    });

    socket.on('answer_received_count', ({ answeredCount }) => {
      setAnsweredCount(answeredCount);
    });

    socket.on('question_result', (result) => {
      setRevealData(result);
      setStage('reveal');
    });

    socket.on('battle_finished', (finishedData) => {
      setPodiumData(finishedData);
      setStage('podium');
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    });

    return () => {
      if (socket) socket.disconnect();
    };
  }, []);

  // Timer countdown while in 'playing' stage
  useEffect(() => {
    if (stage !== 'playing') return;
    const interval = setInterval(() => {
      setTimeRemaining(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [stage]);

  // Host creates room
  const handleCreateRoom = () => {
    if (!socketRef.current) return;
    socketRef.current.emit(
      'create_room',
      {
        quizId: selectedQuizId,
        scoringMode,
        hostName: user?.fullName || 'Chủ phòng'
      },
      (res) => {
        if (res.success) {
          setRoomData(res);
          setIsHost(true);
          setStage('host_lobby');

          // Generate QR code for Room PIN
          const joinUrl = `${window.location.origin}?pin=${res.pin}`;
          QRCode.toDataURL(joinUrl).then(url => setQrDataUrl(url)).catch(() => {});
        } else {
          alert(res.message);
        }
      }
    );
  };

  // Player joins room
  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (!pinInput.trim() || !socketRef.current) return;

    socketRef.current.emit(
      'join_room',
      {
        pin: pinInput.trim(),
        nickname: nicknameInput.trim() || 'Người chơi'
      },
      (res) => {
        if (res.success) {
          setRoomData(res.room);
          setIsHost(false);
          setStage('player_lobby');
        } else {
          alert(res.message);
        }
      }
    );
  };

  // Host starts battle
  const handleHostStart = () => {
    if (!socketRef.current || !roomData) return;
    socketRef.current.emit('start_battle', { pin: roomData.pin });
  };

  // Player submits answer
  const handleSubmitPlayerAnswer = (optionId) => {
    if (hasAnswered || !socketRef.current || !roomData) return;
    setSelectedOptionId(optionId);
    setHasAnswered(true);

    socketRef.current.emit('submit_answer', {
      pin: roomData.pin,
      optionId,
      answerTimeMs: (20 - timeRemaining) * 1000
    });
  };

  // Host triggers next question
  const handleHostNextQuestion = () => {
    if (!socketRef.current || !roomData) return;
    socketRef.current.emit('host_next_question', { pin: roomData.pin });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-20">
      
      {/* 1. MENU: Choose to Join or Host */}
      {stage === 'menu' && (
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <Swords className="w-4 h-4" />
              <span>Đấu Trường Thời Gian Thực (Live Battle)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Thi Đấu Đối Kháng Trực Tiếp
            </h1>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Tranh tài kiến thức cùng bạn bè và lớp học trong thời gian thực. Hỗ trợ đua tốc độ từng câu hoặc tích lũy tổng điểm xếp hạng!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Join Room Card */}
            <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Tham Gia Bằng Mã PIN</h3>
                  <p className="text-xs text-slate-400">Không bắt buộc tài khoản</p>
                </div>
              </div>

              <form onSubmit={handleJoinRoom} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Mã PIN Phòng (6 chữ số)</label>
                  <input
                    type="text"
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value)}
                    placeholder="VD: 839201"
                    maxLength={6}
                    className="w-full text-center text-2xl font-digital font-bold tracking-widest p-3 rounded-xl bg-slate-900 border border-slate-700 text-amber-400 focus:border-amber-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Biệt danh của bạn</label>
                  <input
                    type="text"
                    value={nicknameInput}
                    onChange={(e) => setNicknameInput(e.target.value)}
                    placeholder="Nhập tên hiển thị..."
                    className="w-full text-xs font-semibold p-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-blue-500 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm shadow-lg shadow-blue-600/30 transition-all active:scale-98"
                >
                  Vào Phòng Chờ
                </button>
              </form>
            </div>

            {/* Host Room Card (Section 1.3 Spec) */}
            <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Tạo Phòng Đấu Mới</h3>
                  <p className="text-xs text-slate-400">Dành cho Giáo viên & Quản trò</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Chọn Đề Thi</label>
                  <select
                    value={selectedQuizId}
                    onChange={(e) => setSelectedQuizId(e.target.value)}
                    className="w-full text-xs font-semibold p-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-amber-400 outline-none"
                  >
                    {quizzesList.map(q => (
                      <option key={q.id} value={q.id}>{q.title}</option>
                    ))}
                  </select>
                </div>

                {/* SPEC REQUIREMENT: Host configures 2 scoring modes */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    Chế độ tính điểm:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setScoringMode('total_points')}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        scoringMode === 'total_points'
                          ? 'border-amber-400 bg-amber-500/10 text-amber-300 ring-1 ring-amber-400'
                          : 'border-slate-700 bg-slate-900 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <div className="font-bold text-white flex items-center gap-1 mb-1">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        <span>Tính tổng điểm</span>
                      </div>
                      <p className="text-[11px] leading-snug">500–1000 điểm tùy tốc độ; hết trận xếp hạng 1, 2, 3.</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setScoringMode('fastest_per_question')}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        scoringMode === 'fastest_per_question'
                          ? 'border-amber-400 bg-amber-500/10 text-amber-300 ring-1 ring-amber-400'
                          : 'border-slate-700 bg-slate-900 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      <div className="font-bold text-white flex items-center gap-1 mb-1">
                        <Flame className="w-3.5 h-3.5 text-rose-400" />
                        <span>Nhanh nhất từng câu</span>
                      </div>
                      <p className="text-[11px] leading-snug">Công bố ngay ai nhanh nhất sau mỗi câu; vinh danh kỷ lục.</p>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCreateRoom}
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/30 transition-all active:scale-98"
                >
                  Tạo Phòng & Lấy Mã PIN
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 2. LOBBY STAGE: HOST & PLAYER WAITING ROOM */}
      {(stage === 'host_lobby' || stage === 'player_lobby') && (
        <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-6">
          <div className="bg-slate-800/90 rounded-3xl p-8 border border-slate-700 shadow-2xl space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Phòng Chờ Đấu Trường
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {roomData?.quizTitle}
              </h2>
            </div>

            {/* Big PIN Display & QR Code */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-4">
              <div className="p-6 bg-slate-950 rounded-2xl border-2 border-amber-400 shadow-lg">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  MÃ PHÒNG (PIN)
                </span>
                <span className="text-4xl sm:text-6xl font-digital font-black text-amber-400 tracking-widest">
                  {roomData?.pin}
                </span>
              </div>

              {qrDataUrl && (
                <div className="p-3 bg-white rounded-2xl shadow-md">
                  <img src={qrDataUrl} alt="QR Code" className="w-28 h-28" />
                  <span className="text-[10px] font-bold text-slate-700 block mt-1">Quét mã vào phòng</span>
                </div>
              )}
            </div>

            {/* Players List */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Người chơi đã tham gia ({players.length}):</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 min-h-[50px]">
                {players.length === 0 ? (
                  <span className="text-xs text-slate-500 italic">Đang chờ thí sinh nhập mã PIN...</span>
                ) : (
                  players.map((p, idx) => (
                    <div
                      key={p.socketId || idx}
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-bold text-white shadow-xs animate-in zoom-in-95"
                    >
                      <img src={p.avatar} alt={p.nickname} className="w-6 h-6 rounded-full" />
                      <span>{p.nickname}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Host Start Button */}
            {isHost ? (
              <div className="pt-4 border-t border-slate-700">
                <button
                  onClick={handleHostStart}
                  className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base shadow-xl shadow-emerald-500/30 transition-all active:scale-95 flex items-center justify-center gap-2 mx-auto"
                >
                  <Play className="w-5 h-5 fill-slate-950" />
                  <span>BẮT ĐẦU TRẬN ĐẤU NGAY</span>
                </button>
              </div>
            ) : (
              <div className="pt-4 border-t border-slate-700 text-xs text-slate-400 animate-pulse">
                ⏳ Đang đợi chủ phòng bấm bắt đầu... Hãy sẵn sàng tốc độ ngón tay!
              </div>
            )}

          </div>
        </div>
      )}

      {/* 3. PLAYING STAGE: REAL-TIME QUESTION WITH DIGITAL COUNTDOWN */}
      {stage === 'playing' && currentQuestion && (
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between bg-slate-800 p-4 rounded-2xl border border-slate-700">
            <span className="text-xs font-bold text-amber-400 uppercase">
              Câu {currentQuestion.questionIndex} / {currentQuestion.totalQuestions}
            </span>

            {/* Digital Timer */}
            <div className="flex items-center gap-2 bg-slate-950 px-4 py-1.5 rounded-xl border border-slate-700">
              <Clock className="w-4 h-4 text-emerald-400 animate-spin" />
              <span className="text-2xl font-digital font-black text-emerald-400 tracking-wider">
                {timeRemaining}s
              </span>
            </div>

            <span className="text-xs font-bold text-slate-400">
              Đã nộp: {answeredCount}/{players.length}
            </span>
          </div>

          {/* Question Box */}
          <div className="bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-700 text-center shadow-xl space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
              {currentQuestion.content}
            </h2>
            {currentQuestion.instructionBadge && (
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-semibold">
                {currentQuestion.instructionBadge}
              </span>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentQuestion.options?.map((opt, idx) => {
              const isSelected = selectedOptionId === opt.id;
              const colors = [
                'bg-rose-600 hover:bg-rose-500',
                'bg-blue-600 hover:bg-blue-500',
                'bg-amber-600 hover:bg-amber-500',
                'bg-emerald-600 hover:bg-emerald-500'
              ];
              const btnBg = colors[idx % 4];

              return (
                <button
                  key={opt.id}
                  disabled={hasAnswered}
                  onClick={() => handleSubmitPlayerAnswer(opt.id)}
                  className={`p-6 rounded-2xl font-bold text-sm sm:text-base text-left text-white shadow-lg transition-all active:scale-95 flex items-center justify-between ${btnBg} ${
                    isSelected ? 'ring-4 ring-white scale-102' : hasAnswered ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center font-black">
                      {opt.label || String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt.content}</span>
                  </div>
                  {isSelected && <CheckCircle2 className="w-6 h-6 shrink-0" />}
                </button>
              );
            })}
          </div>

          {hasAnswered && (
            <div className="p-3 bg-slate-800 rounded-xl text-center text-xs text-amber-400 font-bold border border-slate-700 animate-pulse">
              ✓ Đã ghi nhận câu trả lời của bạn! Chờ công bố kết quả vòng đấu...
            </div>
          )}

        </div>
      )}

      {/* 4. REVEAL STAGE: QUESTION WINNER & LEADERBOARD REVEAL */}
      {stage === 'reveal' && revealData && (
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          <div className="bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl text-center space-y-5">
            
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase">
                Kết quả Câu {revealData.questionIndex}
              </span>
              <div className="text-lg font-bold text-emerald-400 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Đáp án đúng: {revealData.correctOptionLabel}. {revealData.correctOptionContent}</span>
              </div>
            </div>

            {/* Fastest Responder Announcement (Section 1.3 Spec) */}
            {revealData.fastestPlayer && (
              <div className="p-4 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2">
                <Flame className="w-5 h-5 text-amber-400 animate-bounce" />
                <span>
                  Nhanh nhất vòng này: <strong>{revealData.fastestPlayer.nickname}</strong> ({revealData.fastestPlayer.time} giây)!
                </span>
              </div>
            )}

            {/* Leaderboard Table */}
            <div className="space-y-2 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Bảng xếp hạng trực tiếp (Top 5):
              </span>
              {revealData.leaderboard?.slice(0, 5).map((p, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-slate-950 font-black ${
                      idx === 0 ? 'bg-amber-400' : idx === 1 ? 'bg-slate-300' : idx === 2 ? 'bg-amber-600' : 'bg-slate-600 text-white'
                    }`}>
                      {idx + 1}
                    </span>
                    <span>{p.nickname}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 font-mono">{p.score} điểm</span>
                    <span className="text-slate-400 font-normal">({p.correctAnswersCount} câu đúng)</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Host advance button */}
            {isHost && (
              <div className="pt-4 border-t border-slate-700">
                <button
                  onClick={handleHostNextQuestion}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 mx-auto"
                >
                  <span>{revealData.isLastQuestion ? 'Xem Xếp Hạng Chung Cuộc' : 'Sang Câu Tiếp Theo'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* 5. PODIUM STAGE: FINAL PODIUM CELEBRATION (Rank 1, 2, 3) */}
      {stage === 'podium' && podiumData && (
        <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-8">
          
          <div className="space-y-2">
            <Trophy className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
            <h1 className="text-3xl sm:text-4xl font-black text-white">
              Vinh Danh Quán Quân Đấu Trường!
            </h1>
            <p className="text-xs text-slate-400">Trận đấu đã kết thúc xuất sắc</p>
          </div>

          {/* Podium Steps (2nd, 1st, 3rd) */}
          <div className="flex items-end justify-center gap-4 sm:gap-6 pt-8 pb-4">
            
            {/* Rank 2 (Silver) */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-slate-300 mb-2 truncate max-w-[100px]">
                {podiumData.podium.second?.nickname || 'Hạng 2'}
              </span>
              <div className="w-24 sm:w-28 h-36 bg-gradient-to-t from-slate-600 to-slate-400 rounded-t-2xl flex flex-col items-center justify-center shadow-lg border-t-2 border-slate-300">
                <span className="text-2xl font-black text-slate-900">🥈 2</span>
                <span className="text-xs font-mono font-bold text-slate-900 mt-1">
                  {podiumData.podium.second?.score || 0} pts
                </span>
              </div>
            </div>

            {/* Rank 1 (Gold) */}
            <div className="flex flex-col items-center -mt-6">
              <Crown className="w-8 h-8 text-amber-400 mb-1 animate-pulse" />
              <span className="text-sm font-black text-amber-300 mb-2 truncate max-w-[120px]">
                {podiumData.podium.first?.nickname || 'Quán quân'}
              </span>
              <div className="w-28 sm:w-36 h-48 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-2xl flex flex-col items-center justify-center shadow-2xl border-t-2 border-amber-200">
                <span className="text-3xl font-black text-slate-950">🥇 1</span>
                <span className="text-sm font-mono font-black text-slate-950 mt-1">
                  {podiumData.podium.first?.score || 0} pts
                </span>
              </div>
            </div>

            {/* Rank 3 (Bronze) */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-amber-600 mb-2 truncate max-w-[100px]">
                {podiumData.podium.third?.nickname || 'Hạng 3'}
              </span>
              <div className="w-24 sm:w-28 h-28 bg-gradient-to-t from-amber-800 to-amber-600 rounded-t-2xl flex flex-col items-center justify-center shadow-lg border-t-2 border-amber-500">
                <span className="text-2xl font-black text-amber-200">🥉 3</span>
                <span className="text-xs font-mono font-bold text-amber-200 mt-1">
                  {podiumData.podium.third?.score || 0} pts
                </span>
              </div>
            </div>

          </div>

          <div className="pt-6">
            <button
              onClick={() => setStage('menu')}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              Chơi trận khác
            </button>
          </div>

        </div>
      )}

    </div>
  );
}

