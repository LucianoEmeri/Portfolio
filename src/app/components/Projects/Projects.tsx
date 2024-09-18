'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { motion } from 'framer-motion'

interface Project {
  title: string;
  description: string;
  imgUrl: string;
}

const projects: Project[] = [
  {
    title: "RiBuzz",
    description: "Marketplace para Emprendedores",
    imgUrl: "/assets/project-img1.png",
  },
  {
    title: "Proyecto X",
    description: "En proceso...",
    imgUrl: "/assets/project-img2.png",
  },
  {
    title: "Proyecto X",
    description: "En proceso...",
    imgUrl: "/assets/project-img2.png",
  },
  {
    title: "Proyecto X",
    description: "En proceso...",
    imgUrl: "/assets/project-img2.png",
  },
  {
    title: "Proyecto X",
    description: "En proceso...",
    imgUrl: "/assets/project-img2.png",
  },
  {
    title: "Proyecto X",
    description: "En proceso...",
    imgUrl: "/assets/project-img2.png",
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const ProjectCard: React.FC<Project> = ({ title, description, imgUrl }) => {
  return (
    <div className="proj-imgbx relative rounded-3xl overflow-hidden mb-6 group">
      <Image
        src={imgUrl}
        alt={title}
        width={500}
        height={400}
        quality={100}
        className="w-full h-auto"
      />
      <div className="proj-txtx absolute text-center top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out opacity-0 w-full group-hover:top-1/2 group-hover:opacity-100 z-10">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide leading-tight mb-2 text-white">{title}</h4>
        <span className="font-extralight text-base md:text-lg tracking-wide text-white">{description}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-red-900 opacity-80 transition-all duration-400 ease-in-out h-0 group-hover:h-full"></div>
    </div>
  )
}

export default function Projects() {
  const [categories] = useState<Record<string, Project[]>>({
    'Página 1': projects,
    'Página 2': [],
    'Página 3': [],
  })

  return (
    <section id="projects" className="relative py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-red-100 mb-4">Proyectos</h2>
          <p className="text-red-200 text-base md:text-lg tracking-wide leading-relaxed my-4 md:my-7 text-center mx-auto w-full md:w-[80%] lg:w-[56%]">
          En esta sección encontrarás una selección de proyectos que he desarrollado como frontend, utilizando tecnologías como JavaScript, TypeScript, React, Redux y Next.js. Mi enfoque está en crear interfaces de usuario modernas, intuitivas y altamente funcionales, optimizando la experiencia del usuario a través de un código limpio, eficiente y adaptable.
          </p>

          <Tab.Group>
            <Tab.List className="flex w-full md:w-[80%] lg:w-[72%] mx-auto rounded-full bg-red-900/30 overflow-hidden">
              {Object.keys(categories).map((category, index) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-1/3 py-2 md:py-3 lg:py-4 text-red-100 text-sm md:text-base tracking-wide font-medium relative transition-all duration-300 ease-in-out z-0',
                      selected
                        ? 'border border-red-300'
                        : 'hover:bg-red-800/30',
                      index === 0 ? 'rounded-l-full' : '',
                      index === Object.keys(categories).length - 1 ? 'rounded-r-full' : '',
                      index === 1 ? 'border-t border-b border-red-300/50' : 'border-red-300/50'
                    )
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className="relative z-10">{category}</span>
                      <div
                        className={classNames(
                          'absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 transition-all duration-300 ease-in-out -z-10',
                          selected ? 'w-full' : 'w-0'
                        )}
                      ></div>
                    </>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-6 md:mt-8">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-red-900/20 p-2 md:p-3',
                    ''
                  )}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {posts.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </motion.div>
      </div>
    </section>
  )
}