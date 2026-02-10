# 🎨 Portfolio Professional - Yasmim Passos

Portfólio profissional com **Design System próprio**, **Dashboard interativo** e **métricas em tempo real**.

[![Live Demo](https://img.shields.io/badge/Live-Demo-success)](https://yasmim-passos.github.io)
[![HTML5](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## ✨ Features

### 🎨 Design System Próprio
- **CSS Variables** completas
- **Color Palette** profissional (light/dark)
- **Typography Scale** (9 tamanhos)
- **Spacing System** consistente
- **Component Library** reutilizável

### 📊 Dashboard Interativo
- Métricas em tempo real
- Visualizações de dados
- Estatísticas de projetos
- Gráficos (opcionais)

### 🚀 Projetos Atualizados
Todos os 8 projetos profissionais:
1. **Python** - Price Monitor API (FastAPI + Event Sourcing)
2. **Java** - Payment Processor (Spring Boot + CQRS)
3. **C** - Advanced Data Structures (B-Tree + Parser)
4. **C++** - Queah Refactored (State Pattern + MVC)
5. **SQL** - E-Commerce Database (RFM Analysis)
6. **C# e .NET** - E-Commerce Microservices Platform
7. **C# e API REST** - Task Manager API usando POO
8. **HTML/CSS** - Este portfólio

### ♿ Acessibilidade (a11y)
- Semântica HTML5
- ARIA labels
- Keyboard navigation
- Focus indicators
- Screen reader friendly

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints otimizados
- Touch-friendly
- Performance otimizado

---

## 🏗️ Arquitetura

```
portfolio-professional/
├── css/
│   ├── design-system.css   # Design tokens & variables
│   ├── components.css       # Reusable components
│   └── main.css            # Main styles
├── js/
│   ├── main.js             # Main logic & rendering
│   └── theme.js            # Theme management
├── data/
│   └── projects.js         # Projects database
├── assets/
│   └── icons/              # SVG icons
└── index.html              # Main HTML
```

---

## 🎨 Design System

### Color Palette

```css
/* Primary */
--color-primary: #6366f1;
--color-primary-light: #818cf8;
--color-primary-dark: #4f46e5;

/* Gradients */
--gradient-primary: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
```

### Typography Scale

```css
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */
--font-size-5xl: 3rem;      /* 48px */
```

### Spacing System

```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 3rem;     /* 48px */
--spacing-3xl: 4rem;     /* 64px */
--spacing-4xl: 6rem;     /* 96px */
```

---

## 📊 Dashboard Metrics

O dashboard calcula automaticamente:

- **Total de Projetos**: 8
- **Linhas de Código**: ~14,000
- **Arquivos Totais**: ~155
- **Tecnologias**: 40+
- **Projetos Sênior**: 7
- **Cobertura Média**: ~30%

---

## 🚀 Como Usar

### Local Development

```bash
# Clone
git clone https://github.com/yasmim-passos/yasmim-passos.github.io

# Serve (opção 1: Python)
python -m http.server 8000

# Serve (opção 2: Node)
npx serve .

# Open
http://localhost:8000
```

### Deploy (GitHub Pages)

1. Push para branch `main`
2. GitHub Pages serve automaticamente
3. Acesse: `https://yasmim-passos.github.io`

---

## 🎯 Destaques Técnicos

### 1. Design System Completo
```css
/* Todas as cores, espaçamentos e tipografia em variáveis */
:root {
  --color-primary: #6366f1;
  --spacing-md: 1rem;
  --font-size-base: 1rem;
}
```

### 2. Dashboard Interativo
```javascript
function calculateTotalMetrics() {
  return {
    totalProjects: PROJECTS.length,
    totalLOC: PROJECTS.reduce((sum, p) => sum + p.metrics.loc, 0),
    avgCoverage: Math.round(PROJECTS.reduce(...) / PROJECTS.length)
  };
}
```

### 3. Component-Based
```javascript
// Renderização dinâmica de projetos
PROJECTS.map(project => `
  <div class="project-card">
    <h3>${project.title}</h3>
    <!-- ... -->
  </div>
`);
```

### 4. Dark Mode
```javascript
document.body.classList.toggle('dark');
localStorage.setItem('theme', 'dark');
```

---

## 📈 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: <1s
- **Time to Interactive**: <2s
- **Cumulative Layout Shift**: <0.1

---

## ♿ Acessibilidade

✅ Semântica HTML5  
✅ ARIA labels  
✅ Keyboard navigation  
✅ Focus indicators  
✅ Color contrast (WCAG AA)  
✅ Screen reader tested  

---

## 🎨 Comparação: Antes vs Depois

| Aspecto | Antes | Depois |
|---------|-------|--------|
| **Design** | Básico | **Design System** |
| **Projetos** | 6 básicos | **6 profissionais** |
| **Dados** | Estáticos | **Dashboard dinâmico** |
| **CSS** | Inline | **CSS Variables** |
| **Responsivo** | Sim | **Mobile-first** |
| **Dark Mode** | Simples | **Persistente** |
| **A11y** | Básico | **WCAG AA** |

---

## 🚀 Próximos Passos

- [ ] Adicionar gráficos com Chart.js
- [ ] Animações com Framer Motion
- [ ] Filtros de projetos
- [ ] Search functionality
- [ ] Blog section
- [ ] Contact form

---

## 📚 Tecnologias

- **HTML5** - Semântica moderna
- **CSS3** - Custom Properties, Grid, Flexbox
- **JavaScript ES6+** - Modules, Arrow Functions, Template Literals
- **Design System** - Próprio, escalável
- **Responsive** - Mobile-first
- **A11y** - WCAG 2.1 AA

---

## 📄 Licença

MIT License

---

## 👤 Autora

**Yasmim Passos**  
Desenvolvedora Full Stack  
📧 passosyasmim08@gmail.com  
💼 [LinkedIn](https://www.linkedin.com/in/yasmim-passos-037676212/)  
💻 [GitHub](https://github.com/yasmim-passos)
