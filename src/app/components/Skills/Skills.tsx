"use client"

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimationFrame } from 'framer-motion'

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'JavaScript', icon: '/assets/skills/javascript.svg' },
  { name: 'HTML', icon: '/assets/skills/html.svg' },
  { name: 'CSS', icon: '/assets/skills/css.svg' },
  { name: 'React.js', icon: '/assets/skills/react.svg' },
  { name: 'Redux', icon: '/assets/skills/redux.svg' },
  { name: 'Git', icon: '/assets/skills/git.svg' },
  { name: 'Photoshop', icon: '/assets/skills/photoshop.svg' },
  { name: 'Next.js', icon: '/assets/skills/nextjs.svg' },
  { name: 'Figma', icon: '/assets/skills/figma.svg' },
  { name: 'Tailwind', icon: '/assets/skills/tailwind.svg' },
  { name: 'Cloudinary', icon: '/assets/skills/cloudinary.svg' },
  { name: 'Bootstrap', icon: '/assets/skills/bootstrap.svg' },
  { name: 'TypeScript', icon: '/assets/skills/typescript.svg' },
  { name: 'Material UI', icon: '/assets/skills/material-ui.svg' },
]

export default function Component() {
  const [scrollX, setScrollX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
        setIsMobile(window.innerWidth < 640)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useAnimationFrame(() => {
    setScrollX((prevScrollX) => {
      const speed = isMobile ? 0.5 : 1
      const newScrollX = prevScrollX - speed
      const skillSetWidth = containerWidth
      return newScrollX <= -skillSetWidth ? prevScrollX + skillSetWidth : newScrollX
    })
  })

  return (
    <section id="skills" className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">Mis Habilidades Técnicas</h2>
          <p className="text-red-200 text-sm sm:text-base md:text-lg lg:text-xl  tracking-wide leading-relaxed my-4 md:my-7 text-center mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[56%]">
            Estas son las tecnologías y herramientas con las que trabajo para crear soluciones web modernas, eficientes y escalables.
          </p>
        </motion.div>

        <div className="relative mt-8 sm:mt-12 overflow-hidden" ref={containerRef}>
          <div className="flex" style={{ width: `${containerWidth * 3}px`, transform: `translateX(${scrollX}px)` }}>
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center group px-4 sm:px-6 md:px-8" 
                style={{ width: `${containerWidth / (isMobile ? 3 : skills.length / 2)}px` }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-black bg-opacity-50 rounded-full flex items-center justify-center p-3 sm:p-4 md:p-5 transition-all duration-300 ease-in-out group-hover:bg-red-700 group-hover:bg-opacity-80">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={72}
                    height={72}
                    className="object-contain transition-all duration-300 ease-in-out group-hover:scale-110 invert"
                  />
                </div>
                <span className="mt-2 text-xs sm:text-sm md:text-base text-red-100 opacity-80 transition-all duration-300 ease-in-out group-hover:opacity-100">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}