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
      description: "Fábrica de muebles",
      imgUrl: "/assets/project-img2.png",
      liveUrl: "https://rcamoblamientos.vercel.app/",
      githubUrl: "https://github.com/LucianoEmeri/RC-Amoblamientos",
      longDescription: "Empresa familiar dedicada a la fabricación de muebles de cocina, placares y vestidores con la mejor calidad del mercado. Nuestro compromiso es crear espacios funcionales y estéticamente atractivos que se adapten perfectamente a las necesidades de nuestros clientes. Ofrecemos una amplia gama de mesadas en granitos naturales, Silestone y Neolith, combinando diseño y calidad superior. Nuestras soluciones en piedra natural y artificial transforman cualquier espacio en una obra de arte duradera y funcional. Esta página web aún esta en desarrollo, el objetivo es mostrar los productos y servicios de la empresa, y facilitar la comunicación con los clientes. La página incluye un catálogo de productos, información de contacto, y un formulario para solicitar presupuestos y consultas. Una vez terminada ocupará el dominio www.rcamoblamientos.com.ar"
    },
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
      imgUrl: "/assets/project-img3.png",
    },

  ];