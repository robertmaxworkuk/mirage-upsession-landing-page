"use client"

import React, { useRef, useState, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export function Teaser() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100)
      }
    }

    video.addEventListener("timeupdate", updateProgress)
    return () => {
      video.removeEventListener("timeupdate", updateProgress)
    }
  }, [])

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
    }
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play().then(() => {
        setIsPlaying(true)
      }).catch((err) => {
        console.log("Play failed:", err)
      })
    }
  }

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
    }
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  // Attempt autoplay on mount (must be muted)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Autoplay logic
    video.muted = true
    setIsMuted(true)
    
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true)
        })
        .catch(() => {
          // Autoplay was prevented, which is normal for browser security
          setIsPlaying(false)
        })
    }
  }, [])

  return (
    <section className="relative px-5 py-24 sm:px-8 overflow-hidden bg-transparent">
      {/* Glow Backdrops behind the player */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 flex h-full w-full max-w-lg items-center justify-between pointer-events-none opacity-45">
        <div className="h-72 w-72 rounded-full bg-neon-pink/20 blur-[100px]" />
        <div className="h-72 w-72 rounded-full bg-neon-cyan/15 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-4xl relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-12 lg:gap-20">
        <div className="text-center md:text-left max-w-md">
          <p className="text-xs uppercase tracking-[0.4em] text-neon-pink font-semibold">Teaser</p>
          <h2 className="mt-3 font-heading text-4xl tracking-tight text-foreground sm:text-5xl leading-none md:leading-[1.1]">
            Почувствуй
            <br className="hidden md:inline" /> <span className="text-cool-gradient">вайб</span>
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground/80 font-medium">
            Посмотри, как проходит Mirage UpSession, и готовься к главной пляжной вечеринке этого лета.
          </p>
        </div>

        {/* Video Frame */}
        <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[32px] border border-white/10 bg-[#0c0410]/85 p-2.5 shadow-[0_0_50px_rgba(236,72,153,0.15)] group hover:border-neon-pink/30 transition-all duration-500 overflow-hidden mx-auto md:mx-0 shrink-0">
          
          {/* Inner Video Container */}
          <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-black">
            <video
              ref={videoRef}
              src="/teaser.mp4"
              poster="/teaser-poster.jpg"
              loop
              playsInline
              className="h-full w-full object-cover cursor-pointer"
              onClick={() => togglePlay()}
            />

            {/* Play overlay when paused */}
            {!isPlaying && (
              <div 
                onClick={() => togglePlay()}
                className="absolute inset-0 flex items-center justify-center bg-black/45 cursor-pointer transition-opacity duration-300 z-20"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient text-primary-foreground shadow-lg cta-pulse scale-100 hover:scale-105 transition-transform duration-300">
                  <Play className="h-7 w-7 fill-current translate-x-0.5" />
                </div>
              </div>
            )}

            {/* Bottom Controls Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              
              {/* Progress Bar */}
              <div 
                className="h-1 w-full bg-white/20 rounded-full overflow-hidden cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation()
                  const video = videoRef.current
                  if (!video) return
                  const rect = e.currentTarget.getBoundingClientRect()
                  const pos = (e.clientX - rect.left) / rect.width
                  video.currentTime = pos * video.duration
                }}
              >
                <div 
                  className="h-full bg-brand-gradient rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between text-white">
                <button
                  onClick={(e) => togglePlay(e)}
                  className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                  aria-label={isPlaying ? "Пауза" : "Воспроизвести"}
                >
                  {isPlaying ? (
                    <Pause className="h-4.5 w-4.5 fill-current" />
                  ) : (
                    <Play className="h-4.5 w-4.5 fill-current translate-x-px" />
                  )}
                </button>

                <button
                  onClick={(e) => toggleMute(e)}
                  className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                  aria-label={isMuted ? "Включить звук" : "Выключить звук"}
                >
                  {isMuted ? (
                    <VolumeX className="h-4.5 w-4.5" />
                  ) : (
                    <Volume2 className="h-4.5 w-4.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Top Indicator (Muted warning for autoplay) */}
            {isMuted && isPlaying && (
              <div className="absolute top-4 right-4 pointer-events-none z-20">
                <div 
                  onClick={(e) => toggleMute(e)}
                  className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[10px] uppercase font-semibold tracking-wider text-white border border-white/10 backdrop-blur-md cursor-pointer hover:bg-black/80 transition-colors"
                >
                  <VolumeX className="h-3 w-3" />
                  Без звука
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
