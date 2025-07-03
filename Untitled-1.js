

// Importa iconos de lucide-react (asegúrate de tenerlo instalado: npm install lucide-react)
import { Github, Linkedin, Mail, FileText, Code, Layout, User, Award, Phone, ExternalLink, Image, GraduationCap, Briefcase, Languages, Star } from 'lucide-react';

// Componente de la barra de navegación
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[var(--color-bunker-950)] bg-opacity-90 backdrop-blur-sm z-50 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold rounded-md p-2 hover:bg-[var(--color-bunker-700)] transition-colors">Arianna Olivares</a>
        <div className="space-x-4">
          <NavItem href="#about">Sobre Mí</NavItem>
          <NavItem href="#experience">Experiencia</NavItem> {/* Nuevo enlace */}
          <NavItem href="#skills">Habilidades</NavItem>
          <NavItem href="#projects">Proyectos</NavItem>
          <NavItem href="#contact">Contacto</NavItem>
        </div>
      </div>
    </nav>
  );
};

// Sub-componente para los elementos de navegación
const NavItem = ({ href, children }) => (
  <a href={href} className="text-[var(--color-bunker-300)] hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors">
    {children}
  </a>
);

// Componente de la sección Hero
const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-bunker-950)] to-[var(--color-bunker-900)] text-white p-4 overflow-hidden">
      {/* Elementos de fondo vibrantes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--color-jade-500)] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-[var(--color-jade-600)] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[var(--color-jade-700)] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up">
          Hola, soy <span className="text-[var(--color-jade-500)] drop-shadow-lg">Arianna Olivares</span>
        </h1>
        <p className="text-2xl md:text-3xl mb-8 font-light animate-fade-in-up delay-200">
          Desarrolladora Full Stack en formación | Creando soluciones innovadoras y eficientes.
        </p>
        <div className="flex justify-center space-x-6 animate-fade-in-up delay-400">
          <SocialLink href="https://github.com/tu-usuario-github" icon={<Github size={28} />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/tu-usuario-linkedin" icon={<Linkedin size={28} />} label="LinkedIn" />
          <SocialLink href="mailto:ariannaolivares@gmail.com" icon={<Mail size={28} />} label="Email" />
          <ButtonLink href="#contact">Contáctame</ButtonLink>
        </div>
      </div>
    </section>
  );
};

// Sub-componente para enlaces sociales
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[var(--color-bunker-300)] hover:text-[var(--color-jade-500)] transition-colors duration-300 flex items-center space-x-2 p-2 rounded-full hover:bg-[var(--color-bunker-700)] transform hover:scale-110"
    aria-label={label}
  >
    {icon}
    <span className="sr-only">{label}</span> {/* Para accesibilidad */}
  </a>
);

// Sub-componente para botones de enlace
const ButtonLink = ({ href, children }) => (
  <a
    href={href}
    className="bg-[var(--color-jade-500)] hover:bg-[var(--color-jade-600)] text-[var(--color-bunker-950)] font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-jade-500)] to-[var(--color-jade-400)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    <span className="relative z-10">{children}</span>
  </a>
);

// Componente de la sección Sobre Mí
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[var(--color-bunker-800)] text-white p-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-[var(--color-jade-500)] drop-shadow-md">Sobre Mí</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="mb-8 md:mb-0 md:w-1/3">
            {/* Placeholder para tu foto de perfil */}
            <img
              src="https://placehold.co/300x300/43766c/f6f6f6?text=Tu+Foto" // Color de fondo ajustado para el jade
              alt="Arianna Olivares"
              className="rounded-full w-48 h-48 mx-auto object-cover border-4 border-[var(--color-jade-500)] shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-2/3 text-lg leading-relaxed text-[var(--color-bunker-300)] text-left">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--color-jade-500)]">Resumen Profesional</h3>
            <p className="mb-6">
              Desarrolladora Full Stack en formación con una sólida base en Ingeniería de Sistemas y especialización en React. Poseo experiencia en el desarrollo de interfaces de usuario dinámicas y lógicas de backend robustas, utilizando tecnologías como JavaScript, Node.js, MySQL y Electron. Capaz de gestionar el ciclo completo de desarrollo de software y optimizar procesos. Cuento con experiencia en entornos de trabajo remoto y colaboración en equipo, además de un manejo avanzado del inglés para comunicación internacional. Busco aplicar mis habilidades en el desarrollo de soluciones innovadoras y eficientes.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-[var(--color-jade-500)] flex items-center"><GraduationCap className="mr-2" size={24} /> Educación</h3>
            <ul className="list-disc list-inside text-left mb-6 space-y-2">
              <li>
                <span className="font-semibold">Ingeniería de Sistemas - Sistemas Computacionales</span> | Universidad de Los Andes | Mérida, Venezuela <br />
                <span className="text-[var(--color-bunker-400)] text-sm">Actualmente Cursando</span>
              </li>
              <li>
                <span className="font-semibold">Técnico Superior Universitario en Informática</span> | Instituto Universitario de Tecnología "Dr. Cristóbal Mendoza" | Mérida, Venezuela <br />
                <span className="text-[var(--color-bunker-400)] text-sm">Mayo 2024 - Distinción académica Cum Laude</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-[var(--color-jade-500)] flex items-center"><Languages className="mr-2" size={24} /> Idiomas</h3>
            <ul className="list-disc list-inside text-left mb-6 space-y-2">
              <li><span className="font-semibold">Español:</span> Nativo</li>
              <li><span className="font-semibold">Inglés:</span> Intermedio Avanzado (B2 - Certificado de culminación de curso de inglés CEVAM)</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-[var(--color-jade-500)] flex items-center"><Star className="mr-2" size={24} /> Certificados y Reconocimientos</h3>
            <ul className="list-disc list-inside text-left mb-6 space-y-2">
              <li>Credencial de mérito por alto rendimiento escolar</li>
              <li>Certificado de culminación de curso de inglés (CEVAM) - Nivel B2 según el MCER</li>
              <li>Distinción académica Cum Laude en la especialidad de Informática</li>
            </ul>

            <div className="mt-8 text-center md:text-left">
              <a
                href="tu-cv.pdf" // Reemplaza con la ruta a tu CV
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[var(--color-jade-500)] hover:bg-[var(--color-jade-600)] text-[var(--color-bunker-950)] font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-jade-500)] to-[var(--color-jade-400)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10"><FileText className="mr-2 inline-block" size={20} /> Ver mi CV Completo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente de la sección Experiencia Profesional
const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Asistente Virtual',
      company: 'The Org',
      period: 'Marzo 2025 – Julio 2025',
      location: 'Remoto',
      description: [
        'Formé parte del equipo de adquisición de bienes raíces, negociando propiedades y manteniendo contacto directo con agentes estadounidenses.',
        'Realicé seguimiento exhaustivo de propiedades, negocié términos y condiciones, y cerré contratos digitales de forma eficiente.',
        'Manejé un promedio de 2-4 propiedades bajo contrato al mes, contribuyendo directamente a los objetivos del equipo.',
        'Mejoré el manejo del inglés a través de comunicación diaria (escrita y verbal) con agentes internacionales.',
        'Demostré habilidades de trabajo en equipo y proactividad en un entorno 100% remoto, participando activamente en reuniones virtuales para la toma de decisiones.',
      ],
    },
    {
      title: 'Desarrolladora Frontend (Proyecto)',
      company: 'Universidad de los Andes',
      period: 'Mayo 2024 – Presente',
      location: 'Mérida, Venezuela',
      description: [
        'Participé en la reconstrucción y desarrollo de un Sistema de Carnetización robusto para gestionar aproximadamente 15.000 registros de estudiantes y personal (activo y jubilado).',
        'Responsable del desarrollo completo de la interfaz y lógica frontend del nuevo sistema, incluyendo la integración de APIs.',
        'El sistema simplifica significativamente el proceso de actualización y carga de datos para la renovación de carnets, permitiendo un proceso de carnetización rápido de menos de 2 minutos por persona una vez configurado.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[var(--color-bunker-900)] text-white p-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-[var(--color-jade-500)] drop-shadow-md">Experiencia Profesional</h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[var(--color-bunker-800)] p-8 rounded-lg shadow-xl text-left border border-[var(--color-bunker-700)]">
              <h3 className="text-3xl font-semibold mb-2 text-[var(--color-jade-500)]">{exp.title}</h3>
              <p className="text-xl text-[var(--color-bunker-200)] mb-2">{exp.company} | {exp.location}</p>
              <p className="text-[var(--color-bunker-400)] text-sm mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-[var(--color-bunker-300)]">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Componente de la sección Habilidades
const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Desarrollo Frontend',
      skills: [
        { name: 'JavaScript (ES6+)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React (Especialización)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Astro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
      ]
    },
    {
      category: 'Desarrollo Backend',
      skills: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Electron', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
      ]
    },
    {
      category: 'Bases de Datos',
      skills: [
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }, // Usando PostgreSQL como ejemplo de SQL
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg' },
      ]
    },
    {
      category: 'Herramientas y Control de Versiones',
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Scrum', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' }, // Ejemplo de icono para Scrum
      ]
    },
    {
      category: 'Sistemas Operativos',
      skills: [
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[var(--color-bunker-900)] text-white p-4">
      <div className="container mx-auto text-center max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-[var(--color-jade-500)] drop-shadow-md">Mis Habilidades</h2>
        {skillCategories.map((categoryData, catIndex) => (
          <div key={catIndex} className="mb-12">
            <h3 className="text-3xl font-semibold mb-8 text-[var(--color-jade-500)] border-b border-[var(--color-bunker-700)] pb-4 inline-block drop-shadow-sm">
              {categoryData.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-6">
              {categoryData.skills.map((skill, skillIndex) => (
                <SkillCard key={skillIndex} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Sub-componente para las tarjetas de habilidad
const SkillCard = ({ name, icon }) => (
  <div className="bg-[var(--color-bunker-800)] p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center border border-[var(--color-bunker-700)] hover:border-[var(--color-jade-500)]">
    <img src={icon} alt={name} className="w-16 h-16 mb-4 object-contain" />
    <h3 className="text-xl font-semibold text-[var(--color-bunker-200)]">{name}</h3>
  </div>
);

// Componente de la sección Proyectos
const ProjectsSection = () => {
  const projects = [
    {
      name: 'Sistema Automatizado para la Gestión de Servicio Comunitario (SERVICOM)',
      description: 'Automatización de los procesos manuales de gestión de información de estudiantes y proyectos de servicio comunitario. Un sistema integral que automatiza y centraliza la gestión completa del servicio comunitario. Permite al coordinador inscribir y asignar estudiantes a proyectos, registrar calificaciones y generar certificaciones automáticas. Además, facilita la generación de reportes detallados de proyectos por especialidad y periodo académico. Desarrollado bajo la metodología de Programación Extrema (XP).',
      images: [
        'https://placehold.co/600x400/43766c/f6f6f6?text=SERVICOM+Captura+1', // Reemplaza con tus capturas
        'https://placehold.co/600x400/43766c/f6f6f6?text=SERVICOM+Captura+2',
      ],
      technologies: ['JavaScript', 'Electron', 'React', 'Node.js', 'MySQL'],
      // demoLink: '#', // Si existe, descomentar y reemplazar
      // githubLink: '#', // Comentado para proyectos privados
    },
    {
      name: 'Sistema de Carnetización Institucional',
      description: 'Reconstrucción y desarrollo de un Sistema de Carnetización robusto para gestionar aproximadamente 15.000 registros de estudiantes y personal. Responsable del desarrollo completo de la interfaz y lógica frontend del nuevo sistema, incluyendo la integración de APIs. El sistema simplifica significativamente el proceso de actualización y carga de datos para la renovación de carnets, permitiendo un proceso de carnetización rápido de menos de 2 minutos por persona una vez configurado.',
      images: [
        'https://placehold.co/600x400/43766c/f6f6f6?text=Carnetizacion+Captura+1', // Reemplaza con tus capturas
        'https://placehold.co/600x400/43766c/f6f6f6?text=Carnetizacion+Captura+2',
      ],
      technologies: ['React', 'APIs'], // Basado en la descripción, puedes añadir más si sabes cuáles usaste
      // demoLink: '#',
      // githubLink: '#',
    },
    {
      name: 'Portafolio Personal',
      description: 'Diseñado y programado de forma autónoma, utilizando Astro para la estructura y React para añadir dinamismo y interactividad. Muestra una colección de proyectos y habilidades, sirviendo como una demostración práctica de mis capacidades de desarrollo frontend.',
      images: [
        'https://placehold.co/600x400/43766c/f6f6f6?text=Portafolio+Captura+1', // Reemplaza con tus capturas
      ],
      technologies: ['Astro', 'React', 'Tailwind CSS'],
      demoLink: 'https://portafolio-zeta-pink-48.vercel.app/', // Enlace a tu portafolio actual
      githubLink: '#', // Si es público, puedes añadirlo
    },
    // Agrega más proyectos aquí si tienes
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (images) => {
    setCurrentProjectImages(images);
    setCurrentImageIndex(0);
    setSelectedImage(images[0]);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setCurrentProjectImages([]);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentProjectImages.length);
    setSelectedImage(currentProjectImages[(currentImageIndex + 1) % currentProjectImages.length]);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + currentProjectImages.length) % currentProjectImages.length);
    setSelectedImage(currentProjectImages[(currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length]);
  };

  return (
    <section id="projects" className="py-20 bg-[var(--color-bunker-800)] text-white p-4">
      <div className="container mx-auto text-center max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-[var(--color-jade-500)] drop-shadow-md">Proyectos Relevantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} openImageModal={openImageModal} />
          ))}
        </div>
      </div>

      {/* Modal para mostrar capturas de pantalla */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeImageModal}>
          <div className="relative bg-[var(--color-bunker-900)] rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-[var(--color-bunker-300)] hover:text-white text-3xl font-bold z-10"
              aria-label="Cerrar"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Captura de pantalla del proyecto"
              className="w-full h-auto max-h-[80vh] object-contain rounded-t-lg"
            />
            {currentProjectImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--color-bunker-700)] bg-opacity-75 text-white p-3 rounded-full hover:bg-[var(--color-bunker-600)] transition-colors"
                  aria-label="Imagen anterior"
                >
                  &#10094;
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--color-bunker-700)] bg-opacity-75 text-white p-3 rounded-full hover:bg-[var(--color-bunker-600)] transition-colors"
                  aria-label="Siguiente imagen"
                >
                  &#10095;
                </button>
                <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                  {currentImageIndex + 1} / {currentProjectImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

// Sub-componente para las tarjetas de proyecto
const ProjectCard = ({ project, openImageModal }) => {
  return (
    <div className="bg-[var(--color-bunker-900)] rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 group border border-[var(--color-bunker-700)] hover:border-[var(--color-jade-500)]">
      {/* Muestra la primera imagen del array como miniatura */}
      <img
        src={project.images[0]}
        alt={project.name}
        className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3 text-[var(--color-jade-500)]">{project.name}</h3>
        <p className="text-[var(--color-bunker-300)] mb-4 text-base">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-[var(--color-jade-500)] text-[var(--color-bunker-950)] text-xs font-medium px-2.5 py-0.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[var(--color-jade-500)] hover:bg-[var(--color-jade-600)] text-[var(--color-bunker-950)] font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-jade-500)] to-[var(--color-jade-400)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10"><ExternalLink className="mr-2 inline-block" size={18} /> Demo</span>
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[var(--color-bunker-700)] hover:bg-[var(--color-bunker-600)] text-white font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-bunker-700)] to-[var(--color-bunker-600)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10"><Github className="mr-2 inline-block" size={18} /> GitHub</span>
            </a>
          )}
          {/* Botón para ver capturas de pantalla, solo si hay imágenes */}
          {project.images && project.images.length > 0 && (
            <button
              onClick={() => openImageModal(project.images)}
              className="inline-flex items-center bg-[var(--color-bunker-700)] hover:bg-[var(--color-bunker-600)] text-white font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-bunker-700)] to-[var(--color-bunker-600)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10"><Image className="mr-2 inline-block" size={18} /> Ver Capturas</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente de la sección Contacto
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[var(--color-bunker-900)] text-white p-4">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-12 text-[var(--color-jade-500)] drop-shadow-md">Contáctame</h2>
        <p className="text-xl text-[var(--color-bunker-300)] mb-8">
          ¿Interesado en colaborar o simplemente quieres saludar? ¡No dudes en ponerte en contacto!
        </p>
        <div className="flex flex-col items-center space-y-6">
          <ContactDetail icon={<Mail size={24} />} text="ariannaolivares@gmail.com" link="mailto:ariannaolivares@gmail.com" />
          <ContactDetail icon={<Phone size={24} />} text="(+58) 414-7503836" link="tel:+584147503836" />
          <ContactDetail icon={<Linkedin size={24} />} text="LinkedIn/tu-usuario" link="https://linkedin.com/in/tu-usuario-linkedin" />
        </div>
        <p className="mt-12 text-[var(--color-bunker-400)] text-sm">
          ¡Espero tu mensaje!
        </p>
      </div>
    </section>
  );
};

// Sub-componente para detalles de contacto
const ContactDetail = ({ icon, text, link }) => (
  <div className="flex items-center space-x-4 bg-[var(--color-bunker-800)] p-4 rounded-lg shadow-md w-full max-w-sm justify-center border border-[var(--color-bunker-700)] hover:border-[var(--color-jade-500)] transform hover:scale-105 transition-all duration-300">
    <div className="text-[var(--color-jade-500)]">{icon}</div>
    <a href={link} className="text-lg text-[var(--color-bunker-200)] hover:text-[var(--color-jade-500)] transition-colors duration-300">
      {text}
    </a>
  </div>
);

// Componente principal de la aplicación
const App = () => {
  return (
    <div className="font-inter antialiased bg-[var(--color-bunker-950)]">
      {/* Estilos Tailwind CSS (se asume que Tailwind está configurado en el entorno) */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
          scroll-behavior: smooth;
        }
        /* Definición de la paleta de colores personalizada */
        :root {
          --color-bunker-50: #f6f6f6;
          --color-bunker-100: #e7e7e7;
          --color-bunker-200: #d1d1d1;
          --color-bunker-300: #b0b0b0;
          --color-bunker-400: #888888;
          --color-bunker-500: #6d6d6d;
          --color-bunker-600: #5d5d5d;
          --color-bunker-700: #4f4f4f;
          --color-bunker-800: #454545;
          --color-bunker-900: #202020;
          --color-bunker-950: #070707;
          --color-jade-50: #f4f9f8;
          --color-jade-100: #dbece7;
          --color-jade-200: #b8d7ce;
          --color-jade-300: #8cbcb0;
          --color-jade-400: #649d91;
          --color-jade-500: #43766c; /* Color principal de acento */
          --color-jade-600: #396860;
          --color-jade-700: #31544e;
          --color-jade-800: #2a4541;
          --color-jade-900: #263b37;
          --color-jade-950: #122120;
        }

        /* Animaciones */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }

        /* Animación de "blob" para el fondo vibrante */
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9);
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        `}
      </style>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection /> {/* Nueva sección de experiencia */}
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default App;
