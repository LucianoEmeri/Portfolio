import {
  Blocks,
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
  Image,
  CheckSquare,
  Network,
  SquareStackIcon as Stack,
  Box,
} from "lucide-react"

const iconMap: Record<string, JSX.Element> = {
  React: <Blocks className="w-5 h-5 md:w-6 md:h-6" />,
  "Next.js": <LayoutTemplate className="w-5 h-5 md:w-6 md:h-6" />,
  TypeScript: <FileCode2 className="w-5 h-5 md:w-6 md:h-6" />,
  "Tailwind CSS": <Palette className="w-5 h-5 md:w-6 md:h-6" />,
  Vite: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
  Supabase: <Database className="w-5 h-5 md:w-6 md:h-6" />,
  "Framer Motion": <Frame className="w-5 h-5 md:w-6 md:h-6" />,
  Stripe: <CreditCard className="w-5 h-5 md:w-6 md:h-6" />,
  "Redux Toolkit": <Container className="w-5 h-5 md:w-6 md:h-6" />,
  "Google OAuth": <Cloud className="w-5 h-5 md:w-6 md:h-6" />,
  Formik: <FormInput className="w-5 h-5 md:w-6 md:h-6" />,
  Cloudinary: <Image className="w-5 h-5 md:w-6 md:h-6" />,
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

export function TechStack({ technologies, className = "", variant = "card" }: TechStackProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {technologies.map((tech) =>
        iconMap[tech] ? (
          <div key={tech} className="relative group">
            <div className="p-2 md:p-3 bg-red-950/50 rounded-lg hover:bg-red-900/50 transition-colors duration-200">
              <div className="text-white/80 group-hover:text-white transition-colors duration-200">{iconMap[tech]}</div>
            </div>

            {(variant === "modal" || variant === "card") && (
              <span
                className={`absolute px-2 py-1 bg-black/90 text-white text-[10px] md:text-xs rounded-md 
                  transition-all duration-200 whitespace-nowrap pointer-events-none z-50
                  ${
                    variant === "card"
                      ? "opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 -bottom-8 translate-y-0 group-hover:translate-y-1 hidden md:block"
                      : "opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 top-full mt-1"
                  }`}
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

