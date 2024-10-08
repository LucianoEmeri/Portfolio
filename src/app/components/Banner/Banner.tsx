'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import Image from "next/image"
import { ArrowDownCircle } from 'lucide-react'
import TrackVisibility from 'react-on-screen'

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const period = 2000
  const textRef = useRef<HTMLHeadingElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toRotate = useMemo(() => ["Frontend Developer", "Desarrollador Web"], [])

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length
    const fullText = toRotate[i]
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(prevLoopNum => prevLoopNum + 1)
      setDelta(500)
    }
  }, [isDeleting, loopNum, text, toRotate, period])

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)

    return () => { clearInterval(ticker) }
  }, [tick, delta])

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true)
      })
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', () => {
          setIsVideoLoaded(true)
        })
      }
    }
  }, [])

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/LucianoEmeri_CV.pdf'
    link.download = 'LucianoEmeri_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="banner mt-0 pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-16 lg:pb-24 relative overflow-hidden min-h-screen flex items-center" id="home">
      <div className={`fixed top-0 left-0 w-full h-full bg-black z-[-2] transition-opacity duration-500 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`} />
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto max-w-none transform -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="https://res.cloudinary.com/dhm3hgkzo/video/upload/v1728376504/videoplayback_s6d7a3.webm" type="video/webm" />
          Tu navegador no soporta el tag de video.
        </video>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <TrackVisibility className="w-full md:w-1/2 xl:w-7/12 mb-12 md:mb-0">
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline inline-block py-2 px-2.5 bg-gradient-to-r from-black to-red-600/50 border border-white/50 text-base md:text-lg lg:text-xl font-bold tracking-wide mb-4">
                  Bienvenido a mi Portfolio
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight mb-2 block">
                  Hola soy Luciano!
                </h1>
                <h2 
                  ref={textRef}
                  className="txt-rotate text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight mb-5 block" 
                  data-rotate='[ "Frontend Developer", "Desarrollador Web" ]'
                >
                  <span className="wrap">{text}</span>
                </h2>
                <p className="text-red-200 text-base md:text-lg lg:text-xl tracking-wide leading-relaxed w-full md:w-11/12">
                  Desarrollador web frontend junior con sólida formación en React, Next.js y tecnologías modernas.
                  Experiencia en gestión de inventarios y emprendimiento. Busco una posición desafiante donde
                  pueda aplicar mis habilidades técnicas y creativas para desarrollar soluciones web innovadoras y
                  escalables.
                </p>
                <button 
                  onClick={handleDownloadCV}
                  className="text-white font-bold text-lg md:text-xl lg:text-2xl mt-8 md:mt-12 lg:mt-16 tracking-wide flex items-center transition-all duration-300 ease-in-out hover:translate-y-1"
                >
                  Descarga mi CV <ArrowDownCircle className="ml-2.5 transition-all duration-300 ease-in-out text-red-700" size={25} />
                </button>
              </div>
            )}
          </TrackVisibility>
          <TrackVisibility className="w-full md:w-1/2 xl:w-5/12 flex justify-center mt-8 md:mt-0">
            {({ isVisible }) => (
              <div className={`${isVisible ? "animate__animated animate__zoomIn" : ""} w-64 h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden p-3 md:p-0`}>
                <div className="w-full h-full relative animate-pronounced-updown">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image 
                      src="/assets/profile.jpg"
                      alt="Imagen de Luciano" 
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      className="object-[center_20%] sm:object-[center_15%] md:object-center"
                    />
                  </div>
                </div>
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </section>
  )
}