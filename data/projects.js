// Projects Database - Professional Portfolio
const PROJECTS = [
  {
    id: 1,
    title: 'Price Monitor API',
    subtitle: 'Python | FastAPI | Event Sourcing',
    description: 'Sistema profissional de monitoramento de preços com arquitetura event-driven, caching Redis e background tasks',
    tags: ['Python', 'FastAPI', 'Redis', 'Celery', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/yasmim-passos/python-price-monitor',
    highlights: [
      'Event Sourcing Architecture',
      'Redis Caching (TTL 5min)',
      'Celery Background Jobs',
      'Test Coverage >80%',
      'Docker Compose'
    ],
  },
  {
    id: 6,
    title: 'Portfolio Professional',
    subtitle: 'HTML/CSS/JS | Design System',
    description: 'Portfólio com Design System próprio e suporte a tema claro/escuro e múltiplos idiomas',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Design System', 'A11y'],
    github: 'https://github.com/yasmim-passos/yasmim-passos.github.io',
    highlights: [
      'Design System Próprio',
      'Responsive Design',
      'Dark Mode',
      'CSS Variables',
      'Multilíngue (PT/EN/ES)'
    ],
  },
  {
    id: 8,
    title: 'Task Manager API',
    subtitle: 'C# | .NET | Clean Architecture',
    description: 'API profissional de gerenciamento de tarefas com arquitetura em camadas, Entity Framework Core e padrões de serviço', 
    tags: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/yasmim-passos/c-sharp-task-manager-api',
    highlights: [
      'Clean Architecture',
      'Service Layer Pattern',
      'Entity Framework Core + PostgreSQL',
      'RESTful API',
      'Docker Ready'
    ],
  }
  ,{
    id: 9,
    title: 'Crossword Solver',
    subtitle: 'C | Backtracking | API Externa',
    description: 'Resolvedor de palavras cruzadas com backtracking, validando palavras via integração com uma API de dicionário',
    tags: ['C', 'Backtracking', 'Raylib', 'API REST'],
    github: 'https://github.com/yasmim-passos/c-projeto2-crossword-solver-ed2',
    highlights: [
      'Algoritmo de Backtracking',
      'Integração com API Externa',
      'Interface Gráfica (Raylib)'
    ],
  }

];

