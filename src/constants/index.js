import proyecto1 from "../assets/proyectos/proyecto1.png";
import proyecto2 from "../assets/proyectos/proyecto2.png";
import proyecto3 from "../assets/proyectos/proyecto3.png";

export const HERO_CONTENIDO = `Soy un desarrollador full stack con una gran motivación por aprender y crecer en el mundo del desarrollo web. Me apasiona crear soluciones útiles e innovadoras, y estoy comprometido con ofrecer experiencias de usuario de calidad. Disfruto enfrentando nuevos retos y mejorando constantemente mis habilidades en tecnologías como React, Next.js, Node.js, MySQL, PostgreSQL`;

export const EXPERIENCIAS = [
  {
    anio: "Marzo 2025 - Septiembre 2025",
    rol: "Contrato de Prácticas",
    empresa: "Escuela Internacional de Posgrado, Universidad de Granada",
    descripcion: `Participación activa en el desarrollo, integración y mantenimiento de aplicaciones y servicios web. Involucrado en el rediseño y puesta en marcha de las nuevas plataformas web tanto de la Escuela Internacional de Posgrado como de la Escuela de Doctorado. `,
    tecnologias: ["WebUGR","HTML", "CSS", "Canva", "UI/UX" ],
  },
];

export const PROYECTOS = [
  {
    titulo: "Comparador de Supermercados App",
    imagen: proyecto1,
    descripcion:
      "SuperComparador es una aplicación web diseñada como un proyecto de la universidad para ayudar a los usuarios a encontrar los supermercados Mercadona, Alcampo y DIA más cercanos, así como a comparar productos y guardarlos como favoritos para facilitar sus decisiones de compra.",
    tecnologias: ["HTML", "CSS", "React", "Supabase", "Vercel"],
    code: "https://github.com/marioillan/supercomparadorWEB",
    demo: "https://supercomparador.vercel.app/",
  },
  {
    titulo: "Web Museo Ficticio Cosmopolita",
    imagen: proyecto3,
    descripcion:
      "Página web de un museo ficticio como proyecto de la universidad para utilizar por primera vez las funcionalidades básicas de programación web.",
    tecnologias: ["HTML", "CSS", "Javascript", "Php"],
    code: "https://github.com/marioillan/museocosmopolita",
  },
  {
    titulo: "Portfolio Web",
    imagen: proyecto2,
    descripcion:
      "Un portfolio personal mostrando mis proyectos, tecnologías e información de contacto.",
    tecnologias: ["HTML", "TailwindCss", "React", "Vercel"],
    code: "https://github.com/marioillan/portfolioWeb",
    demo: "https://marioillan.vercel.app/",
  },
];

export const CONTACTO = {
  telefono: "+34 639468882 ",
  correo: "marioillval@gmail.com",
};
