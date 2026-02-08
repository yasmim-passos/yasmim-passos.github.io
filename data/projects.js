// Projects Database - Professional Portfolio
const PROJECTS = [
  {
    id: 1,
    title: 'Price Monitor API',
    subtitle: 'Python | FastAPI | Event Sourcing',
    description: 'Sistema profissional de monitoramento de preços com arquitetura event-driven, caching Redis e background tasks',
    tags: ['Python', 'FastAPI', 'Redis', 'Celery', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/yasmim-passos/python-price-monitor',
    metrics: {
      loc: 2500,
      files: 38,
      coverage: 85,
      complexity: 'Alta'
    },
    highlights: [
      'Event Sourcing Architecture',
      'Redis Caching (TTL 5min)',
      'Celery Background Jobs',
      'Test Coverage >80%',
      'Docker Compose'
    ],
    level: 'Pleno/Sênior'
  },
  {
    id: 2,
    title: 'Payment Processor',
    subtitle: 'Java | Spring Boot | CQRS',
    description: 'Processador de pagamentos enterprise com Event Sourcing, CQRS e Saga Pattern implementando todas as fases de compilação',
    tags: ['Java', 'Spring Boot', 'Event Sourcing', 'CQRS', 'JPA', 'H2'],
    github: 'https://github.com/yasmim-passos/java-payment-processor',
    metrics: {
      loc: 1800,
      files: 16,
      coverage: 75,
      complexity: 'Alta'
    },
    highlights: [
      'Event Sourcing + CQRS',
      'Saga Pattern',
      'Domain-Driven Design',
      'Clean Architecture',
      'JUnit 5 Tests'
    ],
    level: 'Pleno/Sênior'
  },
  {
    id: 3,
    title: 'Advanced Data Structures',
    subtitle: 'C | Algorithms | Compilers',
    description: 'B-Tree, Skip List e Math Expression Parser completo com Lexer, Parser, AST e Evaluator',
    tags: ['C', 'Algorithms', 'Compilers', 'AST', 'Parsers'],
    github: 'https://github.com/yasmim-passos/c-advanced-datastructures',
    metrics: {
      loc: 1500,
      files: 9,
      coverage: 0,
      complexity: 'Muito Alta'
    },
    highlights: [
      'B-Tree Implementation',
      'Skip List (Probabilistic)',
      'Math Expression Parser',
      'Lexer + Parser + AST',
      'Modern C (C11)'
    ],
    level: 'Sênior'
  },
  {
    id: 4,
    title: 'Queah Refactored',
    subtitle: 'C++ | Game Dev | Design Patterns',
    description: 'Refatoração completa: 1255 linhas monolíticas → arquitetura MVC com State Pattern e Modern C++17',
    tags: ['C++17', 'Raylib', 'State Pattern', 'MVC', 'SOLID'],
    github: 'https://github.com/yasmim-passos/cpp-queah-refactored',
    metrics: {
      loc: 800,
      files: 15,
      coverage: 0,
      complexity: 'Média'
    },
    highlights: [
      'State Pattern (7 estados)',
      'MVC Architecture',
      'SOLID Principles',
      'Smart Pointers',
      '200+ linhas → std::map'
    ],
    level: 'Sênior'
  },
  {
    id: 5,
    title: 'E-Commerce Database',
    subtitle: 'SQL | Analytics | Data Engineering',
    description: 'Schema SQL enterprise com 16+ tabelas, stored procedures, triggers e queries analíticas avançadas (RFM, Cohort)',
    tags: ['MySQL', 'SQL', 'Analytics', 'Procedures', 'Triggers'],
    github: 'https://github.com/yasmim-passos/sql-e-commerce-database-schema',
    metrics: {
      loc: 1200,
      files: 5,
      coverage: 0,
      complexity: 'Alta'
    },
    highlights: [
      '16+ Tabelas Relacionadas',
      'RFM Analysis',
      'Cohort Analysis',
      'Window Functions',
      'CTEs Recursivos'
    ],
    level: 'Pleno/Sênior'
  },
  {
    id: 6,
    title: 'Portfolio Professional',
    subtitle: 'HTML/CSS/JS | Design System | Dashboard',
    description: 'Portfólio com Design System próprio, dashboard interativo e métricas em tempo real',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Design System', 'A11y'],
    github: 'https://github.com/yasmim-passos/yasmim-passos.github.io',
    metrics: {
      loc: 800,
      files: 10,
      coverage: 0,
      complexity: 'Média'
    },
    highlights: [
      'Design System Próprio',
      'Dashboard Interativo',
      'Responsive Design',
      'Dark Mode',
      'CSS Variables'
    ],
    level: 'Pleno'
  }
];

// Skills Database
const SKILLS = [
  { name: 'Python', level: 90, category: 'Backend', icon: '🐍' },
  { name: 'Java', level: 85, category: 'Backend', icon: '☕' },
  { name: 'C', level: 80, category: 'Systems', icon: '⚙️' },
  { name: 'C++', level: 80, category: 'Systems', icon: '⚡' },
  { name: 'SQL', level: 85, category: 'Database', icon: '🗄️' },
  { name: 'JavaScript', level: 75, category: 'Frontend', icon: '🌐' },
  { name: 'HTML/CSS', level: 80, category: 'Frontend', icon: '🎨' },
  { name: 'Git', level: 85, category: 'Tools', icon: '🔧' },
  { name: 'Docker', level: 75, category: 'DevOps', icon: '🐳' },
  { name: 'FastAPI', level: 85, category: 'Framework', icon: '⚡' },
  { name: 'Spring Boot', level: 80, category: 'Framework', icon: '🍃' },
  { name: 'PostgreSQL', level: 80, category: 'Database', icon: '🐘' }
];

// Metrics Calculation
function calculateTotalMetrics() {
  return {
    totalProjects: PROJECTS.length,
    totalLOC: PROJECTS.reduce((sum, p) => sum + p.metrics.loc, 0),
    totalFiles: PROJECTS.reduce((sum, p) => sum + p.metrics.files, 0),
    avgCoverage: Math.round(
      PROJECTS.reduce((sum, p) => sum + p.metrics.coverage, 0) / PROJECTS.length
    ),
    languages: [...new Set(PROJECTS.flatMap(p => p.tags))].length,
    seniorProjects: PROJECTS.filter(p => p.level.includes('Sênior')).length
  };
}
