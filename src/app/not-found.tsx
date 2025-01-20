"use client"

import React, { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeftCircle } from "lucide-react"

const NotFoundPage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true)
      })
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", () => {
          setIsVideoLoaded(true)
        })
      }
    }
  }, [])

  return (
    <section className="relative flex items-center justify-center min-h-screen p-8 w-full font-poppins overflow-hidden">
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black z-[-2] transition-opacity duration-500 ${isVideoLoaded ? "opacity-0" : "opacity-100"}`}
      />
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src="https://res.cloudinary.com/dhm3hgkzo/video/upload/v1728376504/videoplayback_s6d7a3.webm"
          type="video/webm"
        />
        Tu navegador no soporta el tag de video.
      </video>
      <div className="relative z-10 container flex flex-col items-center">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h1 className="font-extrabold text-6xl md:text-9xl text-white drop-shadow-custom-dark animate__animated animate__fadeIn whitespace-nowrap">
            <span className="sr-only">Error</span> 404
          </h1>
          <p className="text-xl md:text-3xl text-white drop-shadow-custom-dark animate__animated animate__fadeIn animate__delay-1s whitespace-nowrap">
            No se encontró la página
          </p>
          <Link
            href="/"
            className="group inline-flex items-center justify-center px-4 sm:px-6 py-3 text-xl lg:text-2xl font-semibold rounded bg-gradient-to-r from-black to-red-600/50 text-white border border-white/50 hover:from-red-600/50 hover:to-black transition duration-300 animate__animated animate__fadeIn animate__delay-2s whitespace-nowrap"
          >
            <span className="inline-flex items-center">
              <ArrowLeftCircle
                className="mr-2 sm:mr-3 transition-transform duration-300 group-hover:-translate-x-1 flex-shrink-0"
                size={24}
              />
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
                  Vuelve a mi Portfolio
                </span>
                <span className="absolute top-full left-0 inline-block transition-transform duration-500 group-hover:-translate-y-full whitespace-nowrap">
                  Vuelve a mi Portfolio
                </span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage