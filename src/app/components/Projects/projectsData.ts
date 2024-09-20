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
      title: "RiBuzz",
      description: "Marketplace para Emprendedores",
      imgUrl: "/assets/project-img1.png",
      videoUrl: "https://www.youtube.com/embed/ahBPL0PhBL8",
      liveUrl: "https://ribuzz.vercel.app/",
      githubUrl: "https://github.com/FT51Grupo02/ribuzz-general",
      longDescription: "RiBuzz es una plataforma de marketplace y networking diseñada para emprendedores e inversores. El objetivo del proyecto es facilitar la conexión entre emprendedores y oportunidades de negocio, eventos de networking, y la personalización y venta de tarjetas de presentación NFC. La plataforma proporciona herramientas para escalar ventas, asistir a eventos, recibir mentorías y asesorías, y conectar con otros profesionales en el sector."
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

  ];