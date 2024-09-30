'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import { motion } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'
import { Project, projects } from './projectsData'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const ProjectCard: React.FC<Project & { onClick: () => void }> = ({ title, description, imgUrl, onClick }) => {
  const isPlaceholder = title === "Proyecto X"
  
  return (
    <div 
      className={`proj-imgbx relative rounded-3xl overflow-hidden group ${isPlaceholder ? 'cursor-not-allowed' : 'cursor-pointer'} h-full`} 
      onClick={onClick}
    >
      <Image
        src={imgUrl}
        alt={title}
        width={500}
        height={400}
        quality={100}
        className="w-full h-full object-cover"
      />
      <div className="proj-txtx absolute text-center top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out opacity-0 w-full group-hover:top-1/2 group-hover:opacity-100 z-10">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide leading-tight mb-2 text-white">{title}</h4>
        <span className="font-extralight text-base md:text-lg tracking-wide text-white">{description}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-red-900 opacity-80 transition-all duration-400 ease-in-out h-0 group-hover:h-full"></div>
    </div>
  )
}

const YouTubeVideo: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
  const [embedUrl, setEmbedUrl] = useState('')

  useEffect(() => {
    const videoId = getYouTubeVideoId(videoUrl)
    if (videoId) {
      setEmbedUrl(`https://www.youtube.com/embed/${videoId}?vq=hd1080&hd=1&modestbranding=1&rel=0&showinfo=0`)
    }
  }, [videoUrl])

  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  if (!embedUrl) return null;

  return (
    <div className="aspect-w-16 aspect-h-9 mb-4">
      <iframe
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default function Component() {
  const [categories] = useState<Record<string, Project[]>>({
    'Página 1': projects,
    'Página 2': [],
    'Página 3': [],
  })
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const openModal = (project: Project) => {
    if (project.title !== "Proyecto X") {
      setSelectedProject(project)
      setIsOpen(true)
    }
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <section id="projects" className="relative py-12 md:py-16 lg:pt-36">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">Proyectos</h2>
          <p className="text-red-200 text-base md:text-lg lg:text-xl tracking-wide leading-relaxed my-4 md:my-7 text-center mx-auto w-full md:w-[80%] lg:w-[56%]">
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
            <Tab.Panels className="mt-3 md:mt-4">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-red-900/20 p-3 md:p-4 projects-panel'
                  )}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 projects-grid">
                    {posts.slice(0, 3).map((project, index) => (
                      <div key={index} className={classNames(
                        'project-card-wrapper',
                        index === 2 ? 'md:hidden lg:block' : ''
                      )}>
                        <ProjectCard
                          {...project}
                          onClick={() => openModal(project)}
                        />
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </motion.div>
      </div>

      {isOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-[9999] backdrop-blur-md overflow-y-auto pt-4 pb-6"
          onClick={closeModal}
        >
          <div
            className="relative bg-black text-white p-4 sm:p-8 md:p-12 lg:p-16 rounded-xl max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl w-full bg-opacity-80 my-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center text-white rounded-full shadow-lg text-xl transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2 sm:mb-4 md:mb-6 lg:mb-10 text-white">{selectedProject.title}</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 md:mb-8 text-red-100">{selectedProject.longDescription || selectedProject.description}</p>
            
            {selectedProject.videoUrl && (
              <YouTubeVideo videoUrl={selectedProject.videoUrl} />
            )}

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors w-full sm:w-auto"
                >
                  <ExternalLink className="mr-2" size={20} />
                  Ir al sitio web
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors w-full sm:w-auto"
                >
                  <Github className="mr-2" size={20} />
                  Ver código
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      
      <style jsx global>{`
        @media (min-width: 1921px) {
          .projects-panel {
            max-width: 1920px;
            margin-left: auto;
            margin-right: auto;
          }
          .projects-grid {
            max-width: 1800px;
            margin-left: auto;
            margin-right: auto;
          }
          .project-card-wrapper {
            max-width: 580px;
            margin-left: auto;
            margin-right: auto;
          }
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }
        .project-card-wrapper {
          height: 100%;
        }
        .proj-imgbx {
          aspect-ratio: 4 / 3;
        }
      `}</style>
    </section>
  )
}