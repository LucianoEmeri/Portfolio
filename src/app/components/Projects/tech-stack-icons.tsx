"use client"

import { useRef, useEffect, useState } from "react"
import {
  LayoutTemplate,
  FileCode2,
  Palette,
  Zap,
  Database,
  Frame,
  CreditCard,
  Container,
  Cloud,
  FormInput,
  Network,
  CheckSquare,
  SquareStackIcon as Stack,
  Box,
} from "lucide-react"

const iconMap: Record<string, JSX.Element> = {
  Vite: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
  "Next.js": <LayoutTemplate className="w-5 h-5 md:w-6 md:h-6" />,
  TypeScript: <FileCode2 className="w-5 h-5 md:w-6 md:h-6" />,
  "Tailwind CSS": <Palette className="w-5 h-5 md:w-6 md:h-6" />,
  Supabase: <Database className="w-5 h-5 md:w-6 md:h-6" />,
  "Framer Motion": <Frame className="w-5 h-5 md:w-6 md:h-6" />,
  Stripe: <CreditCard className="w-5 h-5 md:w-6 md:h-6" />,
  "Redux Toolkit": <Container className="w-5 h-5 md:w-6 md:h-6" />,
  "Google OAuth": <Network className="w-5 h-5 md:w-6 md:h-6" />,
  Formik: <FormInput className="w-5 h-5 md:w-6 md:h-6" />,
  Cloudinary: <Cloud className="w-5 h-5 md:w-6 md:h-6" />,
  Zod: <CheckSquare className="w-5 h-5 md:w-6 md:h-6" />,
  Axios: <Network className="w-5 h-5 md:w-6 md:h-6" />,
  "Tanstack Query": <Stack className="w-5 h-5 md:w-6 md:h-6" />,
  Zustand: <Box className="w-5 h-5 md:w-6 md:h-6" />,
}

interface TechStackProps {
  technologies: string[]
  className?: string
  variant?: "card" | "modal"
}

const useContainerWidth = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleIcons, setVisibleIcons] = useState<number>(0)

  useEffect(() => {
    const calculateVisibleIcons = () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      const iconWidth = 48 
      const gap = 12 
      const availableWidth = containerWidth - gap

      const iconsPerRow = Math.floor(availableWidth / (iconWidth + gap))
      setVisibleIcons(Math.max(3, iconsPerRow))
    }

    calculateVisibleIcons()

    const observer = new ResizeObserver(calculateVisibleIcons)
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    window.addEventListener("resize", calculateVisibleIcons)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", calculateVisibleIcons)
    }
  }, [])

  return { containerRef, visibleIcons }
}

export function TechStack({ technologies, className = "", variant }: TechStackProps) {
  const { containerRef, visibleIcons } = useContainerWidth()

  return (
    <div ref={containerRef} className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {technologies.slice(0, visibleIcons).map((tech) =>
        iconMap[tech] ? (
          <div key={tech} className="relative group/icon">
            <div className="p-2 md:p-3 bg-red-950/50 rounded-lg hover:bg-red-900/50 transition-colors duration-200">
              <div className="text-white/80 group-hover/icon:text-white transition-colors duration-200">
                {iconMap[tech]}
              </div>
            </div>
            {variant && (
              <span
                className={`absolute px-2 py-1 bg-black/90 text-white text-[10px] md:text-xs rounded-md 
                  transition-all duration-200 whitespace-nowrap pointer-events-none z-50 opacity-0 group-hover/icon:opacity-100
                  ${variant === "modal" ? "left-1/2 -translate-x-1/2 top-full mt-1" : ""}`}
              >
                {tech}
              </span>
            )}
          </div>
        ) : null,
      )}
    </div>
  )
}

