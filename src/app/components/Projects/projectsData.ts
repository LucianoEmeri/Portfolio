export interface Project {
  title: string;
  description: string;
  imgUrl: string;
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  longDescription?: string;
}

export const projects: Project[] = [
  {
    title: "RC Amoblamientos",
    description: "Aplicación web para empresa de muebles",
    imgUrl: "/assets/project-img2.png",
    liveUrl: "https://rcamoblamientos.vercel.app/",
    githubUrl: "https://github.com/LucianoEmeri/RC-Amoblamientos",
    longDescription: "Proyecto actual Freelance en el que estoy trabajando, es una aplicación web para una empresa familiar dedicada a la fabricación de muebles de cocina, placares y vestidores, con el objetivo de mostrar sus productos y servicios, y facilitar la comunicación con los clientes. Desarrollada utilizando React, Next.js, y Tailwind CSS. Incluye un catálogo de productos interactivo y visualmente atractivo con Cloudinary para gestión de imágenes, un formulario de contacto para solicitudes de presupuestos y consultas utilizando SweetAlert2 para notificaciones, mapas interactivos con react-leaflet para mostrar la ubicación de la empresa, y animaciones fluidas y transiciones con Framer Motion. La aplicación está optimizada para rendimiento y experiencia de usuario, incluyendo soporte para gestos táctiles con react-swipeable. Una vez terminada se realizara su despliegue en el dominio www.rcamoblamientos.com.ar."
  },
  {
    title: "RiBuzz",
    description: "Marketplace para Emprendedores",
    imgUrl: "/assets/project-img1.png",
    videoUrl: "https://www.youtube.com/embed/ahBPL0PhBL8",
    liveUrl: "https://ribuzz.vercel.app/",
    githubUrl: "https://github.com/FT51Grupo02/ribuzz-general",
    longDescription: "Realizado en Agosto de 2024 como experiencia académica del Henry Bootcamp. Aplicación que tenía como objetivo crear una plataforma de marketplace completa para emprendedores, permitiendo la venta de productos, servicios y gestión de eventos. Desarrollada utilizando React, Next.js, y Tailwind CSS. Implementa un sistema de búsqueda avanzado con filtros múltiples, integra sistemas de pago seguros (Stripe) y autenticación robusta (Google OAuth, JWT). Incluye un calendario interactivo para eventos de networking. El rendimiento de la aplicación está optimizado mediante técnicas como debouncing y lazy loading."
  },
  {
    title: "Proyecto X",
    description: "En proceso...",
    imgUrl: "/assets/project-img3.png",
  },
];