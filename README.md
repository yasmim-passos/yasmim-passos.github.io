# Yasmim Passos - Portfolio

Portfolio pessoal com design system próprio, tema claro/escuro e suporte a 3 idiomas.

Online em: https://yasmim-passos.github.io

## Funcionalidades

- Design system com variáveis CSS para cor, tipografia e espaçamento
- Tema claro/escuro persistente (salvo no localStorage)
- Tradução para português, inglês e espanhol, com detecção automática do idioma do navegador
- Projetos renderizados dinamicamente a partir de um arquivo de dados (data/projects.js)
- HTML semântico (nav, section, footer)
- Responsivo, com foco em telas de celular

## Estrutura

```
├── css/
│   ├── design-system.css   # variáveis: cores, tipografia, espaçamento
│   ├── components.css      # componentes reutilizáveis (cards, botões, grid)
│   └── main.css             # layout geral
├── js/
│   ├── i18n.js              # troca de idioma e tradução da página
│   └── main.js               # renderização de projetos, skills e tema
├── data/
│   ├── projects.js          # lista de projetos
│   └── translations.js      # textos em pt/en/es
├── img/
│   └── icons/                # ícones SVG usados no site
└── index.html
```

## Projetos no portfolio

1. Price Monitor API. Python, FastAPI, Redis, Celery, PostgreSQL
2. Task Manager API. C#, .NET, ASP.NET Core, Entity Framework Core
3. Crossword Solver. C, backtracking, Raylib
4. Este próprio portfolio. HTML, CSS, JavaScript

## Rodando localmente

```bash
git clone https://github.com/yasmim-passos/yasmim-passos.github.io
cd yasmim-passos.github.io
python -m http.server 8000
```

Depois acesse http://localhost:8000. Não tem build nem dependências para instalar, é só abrir o index.html direto no navegador também.

## Deploy

Push na branch main. O GitHub Pages publica automaticamente em https://yasmim-passos.github.io

## Tecnologias

HTML5, CSS3 (custom properties, grid, flexbox), JavaScript (ES6+, sem framework)

## Licença

MIT

## Contato

Yasmim Passos
Email: passosyasmim08@gmail.com
LinkedIn: https://www.linkedin.com/in/yasmimmpassos/
GitHub: https://github.com/yasmim-passos
