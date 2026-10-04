import React, { useEffect, useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
                                                        isOpen,
                                                        onClose,
                                                      }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!isOpen || !videoRef.current) return;

    const video = videoRef.current;

    video.currentTime = 0;
    video.muted = true;

    video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
  }, [isOpen]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            onClick={onClose}
        />

        {/* Video Container */}
        <div className="relative w-full max-w-4xl bg-[#071016] border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 my-auto">
          {/* Close Button */}
          <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#F5223A] hover:border-[#F5223A] flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video */}
          <div className="relative aspect-video bg-[#05090D] overflow-hidden">
            <video
                ref={videoRef}
                src="/videos/valence-demo.mp4"
                poster="/videos/valence-demo-poster.jpg"
                autoPlay
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onVolumeChange={(e) => {
                  setIsMuted(e.currentTarget.muted);
                }}
            />

            {/* Cinematic Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Controls */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                {/* Play / Pause */}
                <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? (
                      <Pause className="w-4 h-4" />
                  ) : (
                      <Play className="w-4 h-4 fill-white" />
                  )}
                </button>

                {/* Mute */}
                <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                  ) : (
                      <Volume2 className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="text-xs text-[#F5223A] font-bold tracking-wider uppercase">
                HD 4K 60FPS
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
