const TRANSLATIONS = {
  // PORTUGUÊS
  pt: {

    nav: {
      home: 'Home',
      projects: 'Projetos',
      skills: 'Skills',
      softSkills: 'Soft Skills',
      contact: 'Contato'
    },

    hero: {
      badge: 'Disponível para Oportunidades',
      greeting: 'Olá, sou',
      role: 'Desenvolvedora Full Stack | Especialista em Arquitetura de Software',
      description: 'Transformo código complexo em soluções elegantes. Especializada em refatoração, design patterns e arquiteturas escaláveis.',
      viewProjects: 'Ver Projetos',
      contact: 'Entrar em Contato'
    },

    projects: {
      title: 'Projetos em Destaque',
      subtitle: 'Trabalhos que demonstram expertise em arquitetura e design patterns',
      viewGithub: 'Ver no GitHub'
    },

    // HARD SKILLS
    skills: {
      title: 'Stack Tecnológico',
      subtitle: 'Linguagens, frameworks e ferramentas',

      skills: [
          { name:'Python', category:'Language' },
          { name:'Java', category:'Language' },
          { name:'.NET', category:'Platform' },

          { name:'C', category:'Language' },
          { name:'C++', category:'Language' },
          { name:'JavaScript', category:'Language' },

          { name:'HTML', category:'Markup' },
          { name:'CSS', category:'Stylesheet' },

          { name:'MySQL', category:'Database' },
          { name:'SQL Server', category:'Database' },
          { name:'PostgreSQL', category:'Database' },

          { name:'FastAPI', category:'Framework' },
          { name:'Spring Boot', category:'Framework' },

          { name:'Docker', category:'DevOps' },
          { name:'Git', category:'Tools' },
          { name:'GitHub', category:'Tools' }
      ]
    },

    // SOFT SKILLS
    softSkills: {
      title: 'Soft Skills',
      subtitle: 'Competências comportamentais e interpessoais',

      skills: [
        { name:'Raciocínio Lógico', description:'Pensamento analítico e resolução estruturada de problemas' },
        { name:'Resolução de Problemas', description:'Análise crítica e soluções criativas' },
        { name:'Aprendizado Contínuo', description:'Constante atualização em novas tecnologias' },
        { name:'Comunicação Técnica', description:'Explicação clara de conceitos técnicos para diferentes públicos e equipes' }
      ]
    },

    contact: {
      title: 'Vamos Trabalhar Juntos?',
      subtitle: 'Estou disponível para oportunidades e projetos interessantes',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn'
    }
  },

  // ENGLISH
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      softSkills: 'Soft Skills',
      contact: 'Contact'
    },

    hero: {
      badge: 'Available for Opportunities',
      greeting: "Hi, I'm",
      role: 'Full Stack Developer | Software Architecture Specialist',
      description: 'I transform complex code into elegant solutions. Specialized in refactoring, design patterns and scalable architectures',
      viewProjects: 'View Projects',
      contact: 'Get in Touch'
    },

    projects: {
      title: 'Featured Projects',
      subtitle: 'Work demonstrating expertise in architecture and design patterns',
      viewGithub: 'View on GitHub'
    },

    skills: {
    title: 'Tech Stack',
    subtitle: 'Languages, frameworks and tools',

    skills: [
        { name:'Python', category:'Language' },
        { name:'Java', category:'Language' },
        { name:'.NET', category:'Platform' },

        { name:'C', category:'Language' },
        { name:'C++', category:'Language' },
        { name:'JavaScript', category:'Language' },

        { name:'HTML', category:'Markup' },
        { name:'CSS', category:'Stylesheet' },

        { name:'MySQL', category:'Database' },
        { name:'SQL Server', category:'Database' },
        { name:'PostgreSQL', category:'Database' },

        { name:'FastAPI', category:'Framework' },
        { name:'Spring Boot', category:'Framework' },

        { name:'Docker', category:'DevOps' },
        { name:'Git', category:'Tools' },
        { name:'GitHub', category:'Tools' }
      ]
    },

    softSkills: {
      title: 'Soft Skills',
      subtitle: 'Behavioral and interpersonal competencies',

      skills: [
        { name:'Logical Thinking', description:'Analytical thinking and structured problem solving' },
        { name:'Problem Solving', description:'Critical analysis and creative solutions' },
        { name:'Continuous Learning', description:'Constant updating in new technologies' },
        { name:'Technical Communication', description:'Clear explanation of technical concepts for different audiences and teams' }
      ]
    },

    contact: {
      title: "Let's Work Together?",
      subtitle: "I'm available for opportunities and interesting projects",
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn'
    }
  },

  // ESPAÑOL
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      skills: 'Skills',
      softSkills: 'Soft Skills',
      contact: 'Contacto'
    },

    hero: {
      badge: 'Disponible para Oportunidades',
      greeting: 'Hola, soy',
      role: 'Desarrolladora Full Stack | Especialista en Arquitectura de Software',
      description: 'Transformo código complejo en soluciones elegantes. Especializada en refactorización, patrones de diseño y arquitecturas escalables.',
      viewProjects: 'Ver Proyectos',
      contact: 'Contactar'
    },

    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Trabajos que demuestran experiencia en arquitectura y patrones de diseño',
      viewGithub: 'Ver en GitHub'
    },

    skills: {
    title: 'Stack Tecnológico',
    subtitle: 'Lenguajes, frameworks y herramientas',

    skills: [
        { name:'Python', category:'Language' },
        { name:'Java', category:'Language' },
        { name:'.NET', category:'Platform' },

        { name:'C', category:'Language' },
        { name:'C++', category:'Language' },
        { name:'JavaScript', category:'Language' },

        { name:'HTML', category:'Markup' },
        { name:'CSS', category:'Stylesheet' },

        { name:'MySQL', category:'Database' },
        { name:'SQL Server', category:'Database' },
        { name:'PostgreSQL', category:'Database' },

        { name:'FastAPI', category:'Framework' },
        { name:'Spring Boot', category:'Framework' },

        { name:'Docker', category:'DevOps' },
        { name:'Git', category:'Tools' },
        { name:'GitHub', category:'Tools' }
      ]
    },

    softSkills: {
      title: 'Soft Skills',
      subtitle: 'Competencias conductuales e interpersonales',

      skills: [
        { name:'Pensamiento Lógico', description:'Pensamiento analítico y resolución estructurada de problemas' },
        { name:'Resolución de Problemas', description:'Análisis crítico y soluciones creativas' },
        { name:'Aprendizaje Continuo', description:'Actualización constante en nuevas tecnologías' },
        { name:'Comunicación Técnica', description:'Explicación clara de conceptos técnicos para diferentes públicos y equipos.' }
      ]
    },

    contact: {
      title: '¿Trabajemos Juntos?',
      subtitle: 'Estoy disponible para oportunidades y proyectos interesantes',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn'
    }
  }
};