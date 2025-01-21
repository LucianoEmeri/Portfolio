export interface Project {
  title: string
  description: string
  imgUrl: string
  videoUrl?: string
  liveUrl?: string
  githubUrl?: string
  longDescription?: string
  stack?: string[]
}

export const projects: Project[] = [
  {
    title: "TiendaInsumos",
    description: "E-commerce para Tienda de Insumos",
    imgUrl: "/assets/project-img4.png",
    liveUrl: "https://tiendainsumos.netlify.app/",
    githubUrl: "https://github.com/LucianoEmeri/TiendaInsumos",
    longDescription:
      "Proyecto freelance en el que estoy trabajando actualmente, se trata de un ecommerce de insumos desarrollado con React y Supabase. La aplicación permite a los usuarios explorar productos, agregarlos al carrito, realizar compras y gestionar pedidos de manera eficiente. Utiliza React para la construcción de la interfaz de usuario y Supabase como backend, proporcionando una base de datos PostgreSQL y autenticación. El sistema incluye autenticación de usuarios con registro e inicio de sesión seguros, gestión de productos con categorías, búsqueda y detalles individuales, y un carrito de compras interactivo manejado con Zustand para el estado global. La validación de formularios es gestionada con React Hook Form y Zod, asegurando una experiencia de usuario robusta y eficiente. Además, el procesamiento de pedidos es optimizado con TanStack Query para actualizaciones en tiempo real. El diseño es completamente adaptable a diferentes dispositivos gracias a Tailwind CSS, brindando una experiencia fluida y moderna. El panel de administración facilita la gestión de productos, categorías y pedidos.",
    stack: ["React", "TypeScript", "Vite", "Supabase", "Tanstack Query", "Zustand", "React Hook Form", "Zod"],
  },
  {
    title: "RC Amoblamientos",
    description: "Aplicación web para fábrica de muebles",
    imgUrl: "/assets/project-img2.png",
    liveUrl: "https://rcamoblamientos.vercel.app/",
    githubUrl: "https://github.com/LucianoEmeri/RC-Amoblamientos",
    longDescription:
      "Proyecto actual Freelance en el que estoy trabajando, es una aplicación web estática para una empresa familiar dedicada a la fabricación de muebles de cocina, placares y vestidores, con el objetivo de mostrar sus productos y servicios, y facilitar la comunicación con los clientes. Desarrollada utilizando React, Next.js, y Tailwind CSS. Incluye un catálogo de productos interactivo y visualmente atractivo con Cloudinary para gestión de imágenes, un formulario de contacto para solicitudes de presupuestos y consultas utilizando SweetAlert2 para notificaciones, mapas interactivos con react-leaflet para mostrar la ubicación de la empresa, y animaciones fluidas y transiciones con Framer Motion. La aplicación está optimizada para rendimiento y experiencia de usuario, incluyendo soporte para gestos táctiles con react-swipeable. Una vez terminada se realizara su despliegue en el dominio www.rcamoblamientos.com.ar.",
    stack: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Cloudinary"],
  },
  {
    title: "RiBuzz",
    description: "Marketplace para Emprendedores",
    imgUrl: "/assets/project-img1.png",
    videoUrl: "https://www.youtube.com/embed/ahBPL0PhBL8",
    liveUrl: "https://ribuzz.vercel.app/",
    githubUrl: "https://github.com/FT51Grupo02/ribuzz-general",
    longDescription:
      "Página realizada en grupo conformado por 3 backend y 2 frontend como parte del proyecto final del Bootcamp de Henry. Este proyecto es una plataforma de marketplace integral diseñada para emprendedores, ofreciendo funcionalidades clave como venta de productos, servicios y gestión de eventos. Desarrollado con React, Next.js y Tailwind CSS, cuenta con características avanzadas que destacan mi habilidad en frontend: un sistema de búsqueda optimizado con filtros múltiples, integración de pagos seguros a través de Stripe y autenticación robusta mediante Google OAuth y JWT. Implementé un calendario interactivo para la organización de eventos de networking, aprovechando la biblioteca FullCalendar para una experiencia fluida. Adicionalmente, la aplicación incluye optimizaciones de rendimiento como debouncing y lazy loading, asegurando una experiencia de usuario rápida y eficiente. También utilicé Leaflet para mapas dinámicos y react-toastify para notificaciones en tiempo real. Este proyecto resalta mi capacidad de trabajar con herramientas modernas como Cloudinary, Formik/Yup, y Google Maps API, además de manejar sistemas de diseño como Flowbite y Material Tailwind. Una experiencia completa que refleja habilidades en la creación de aplicaciones escalables y funcionales.",
    stack: ["React", "Next.js", "Stripe", "Tailwind CSS", "Formik", "FullCalendar", "Google OAuth"],
  },
  {
    title: "Mountain Ops",
    description: "Gestor de turnos para Airsoft",
    imgUrl: "/assets/project-img3.png",
    liveUrl: "https://mountain-ops.vercel.app/",
    githubUrl: "https://github.com/LucianoEmeri/MountainOps",
    longDescription:
      "Desarrollado como parte del módulo 3 del Bootcamp de Henry, Mountain Ops es una aplicación de gestión de turnos diseñada específicamente para partidas de Airsoft. Construida con React y Vite para un rendimiento rápido y eficiente, la aplicación utiliza React Router para una navegación fluida y React Redux junto con Redux Toolkit para manejar el estado de manera centralizada, asegurando una gestión coherente y escalable de los datos de la aplicación. Además, se integró Axios para interactuar con la API y gestionar datos en tiempo real, mientras que SweetAlert2 mejora la experiencia del usuario con alertas y notificaciones dinámicas. La plataforma permite a los usuarios gestionar horarios, registrar participantes y organizar partidas de manera intuitiva. Este proyecto resalta mis habilidades en el manejo de herramientas modernas de frontend y en la creación de aplicaciones enfocadas en resolver necesidades específicas.",
    stack: ["React", "Redux Toolkit", "Vite", "Axios", "SweetAlert2"],
  },
  {
    title: "Proyecto X",
    description: "Próximamente...",
    imgUrl: "/assets/project-img5.png",
  },
  {
    title: "Proyecto X",
    description: "Próximamente...",
    imgUrl: "/assets/project-img5.png",
  },
]