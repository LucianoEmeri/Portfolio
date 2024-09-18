'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import Image from "next/image"
import { ArrowRightCircle } from 'lucide-react'
import TrackVisibility from 'react-on-screen'

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000
  const textRef = useRef(null)

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

  return (
    <section className="banner mt-0 pt-64 pb-24 relative overflow-hidden" id="home">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/assets/videoplayback.webm" type="video/webm" />
        Tu navegador no soporta el tag de video.
      </video>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center">
          <TrackVisibility className="w-full md:w-1/2 xl:w-7/12 mb-12 md:mb-0">
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline inline-block py-2 px-2.5 bg-gradient-to-r from-black to-red-600/50 border border-white/50 text-xl font-bold tracking-wide mb-4">
                  Bienvenido a mi Portfolio
                </span>
                <h1 className="text-6xl font-bold tracking-wide leading-tight mb-2 block">
                  Hola soy Luciano!
                </h1>
                <h2 
                  ref={textRef}
                  className="txt-rotate text-5xl font-bold tracking-wide leading-tight mb-5 block" 
                  data-rotate='[ "Frontend Developer", "Desarrollador Web" ]'
                >
                  <span className="wrap">{text}</span>
                </h2>
                <p className="text-gray-300 text-lg tracking-wide leading-relaxed w-11/12">
                  Desarrollador web frontend junior con sólida formación en React, Next.js y tecnologías modernas.
                  Experiencia en gestión de inventarios y emprendimiento. Busco una posición desafiante donde
                  pueda aplicar mis habilidades técnicas y creativas para desarrollar soluciones web innovadoras y
                  escalables
                </p>
                <button 
                  onClick={() => console.log('connect')}
                  className="text-white font-bold text-xl mt-16 tracking-wide flex items-center transition-all duration-300 ease-in-out hover:translate-x-2"
                >
                  Contacto <ArrowRightCircle className="ml-2.5 transition-all duration-300 ease-in-out text-red-700" size={25} />
                </button>
              </div>
            )}
          </TrackVisibility>
          <TrackVisibility className="w-full md:w-1/2 xl:w-5/12 flex justify-center">
            {({ isVisible }) => (
              <div className={`${isVisible ? "animate__animated animate__zoomIn" : ""} w-[26rem] h-[26rem] rounded-full overflow-hidden`}>
                <div className="w-full h-full relative animate-subtle-updown">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image 
                      src="/assets/LUBLACK.jpg"
                      alt="Imagen de Luciano" 
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center 50%"
                      quality={100}
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