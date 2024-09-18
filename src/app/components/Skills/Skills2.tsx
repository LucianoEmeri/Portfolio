"use client"

import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

interface Skill {
  name: string
  icon: string
  proficiency: number
}

const skills: Skill[] = [
  { name: 'CSS', icon: '/assets/skills/css.svg', proficiency: 90 },
  { name: 'JavaScript', icon: '/assets/skills/javascript.svg', proficiency: 80 },
  { name: 'TypeScript', icon: '/assets/skills/typescript.svg', proficiency: 85 },
  { name: 'Tailwind', icon: '/assets/skills/tailwind.svg', proficiency: 95 },
  { name: 'Next.js', icon: '/assets/skills/nextjs.svg', proficiency: 95 },
  { name: 'React.js', icon: '/assets/skills/react.svg', proficiency: 85 },
  { name: 'Redux', icon: '/assets/skills/redux.svg', proficiency: 80 },
]

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
}

function SkillItem({ skill }: { skill: Skill }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}%`)

  React.useEffect(() => {
    const animation = animate(count, skill.proficiency, { duration: 1.5, ease: "easeOut" })
    return animation.stop
  }, [count, skill.proficiency])

  return (
    <motion.div 
      className="flex flex-col items-center group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="w-28 h-28 bg-black bg-opacity-80 rounded-full flex items-center justify-center p-6 transition-all duration-300 ease-in-out group-hover:bg-red-700 overflow-hidden">
        <Image
          src={skill.icon}
          alt={skill.name}
          width={80}
          height={80}
          className="object-contain transition-all duration-300 ease-in-out group-hover:scale-105 invert"
        />
      </div>
      <span className="mt-4 text-lg font-semibold text-white">{skill.name}</span>
      <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
        <motion.div 
          className="bg-red-700 h-2.5 rounded-full" 
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
      <motion.span className="mt-2 text-sm text-gray-400">{rounded}</motion.span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">Tech Stack Favorito</h2>
          <p className="text-red-200 text-base md:text-lg tracking-wide leading-relaxed my-4 md:my-7 text-center mx-auto max-w-2xl">
            Estas son las tecnologías que más disfruto usar y en las que tengo mayor experiencia.
          </p>
        </motion.div>

        <Carousel 
          responsive={responsive} 
          infinite={true} 
          className="skill-slider mt-12"
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
        >
          {skills.map((skill, index) => (
            <div key={index} className="px-4 pt-2">
              <SkillItem skill={skill} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}