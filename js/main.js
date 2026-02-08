// Main JavaScript - Professional Portfolio

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// Render Metrics Dashboard
function renderMetrics() {
  const metrics = calculateTotalMetrics();
  const metricsGrid = document.getElementById('metricsGrid');
  
  metricsGrid.innerHTML = `
    <div class="metric-card">
      <div class="metric-value">${metrics.totalProjects}</div>
      <div class="metric-label">Projetos</div>
    </div>
    <div class="metric-card">
      <div class="metric-value">${metrics.totalLOC.toLocaleString()}</div>
      <div class="metric-label">Linhas de Código</div>
    </div>
    <div class="metric-card">
      <div class="metric-value">${metrics.totalFiles}</div>
      <div class="metric-label">Arquivos</div>
    </div>
    <div class="metric-card">
      <div class="metric-value">${metrics.languages}</div>
      <div class="metric-label">Tecnologias</div>
    </div>
    <div class="metric-card">
      <div class="metric-value">${metrics.seniorProjects}</div>
      <div class="metric-label">Projetos Sênior</div>
    </div>
    <div class="metric-card">
      <div class="metric-value">${metrics.avgCoverage}%</div>
      <div class="metric-label">Cobertura Média</div>
    </div>
  `;
}

// Render Projects
function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  
  projectsGrid.innerHTML = PROJECTS.map(project => `
    <div class="project-card">
      <div class="project-header">
        <h3>${project.title}</h3>
        <p class="project-subtitle">${project.subtitle}</p>
      </div>
      <p class="project-description">${project.description}</p>
      
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      
      <div class="project-metrics">
        <div class="metric-small">📊 ${project.metrics.loc} LOC</div>
        <div class="metric-small">📁 ${project.metrics.files} files</div>
        <div class="metric-small">🎯 ${project.level}</div>
      </div>
      
      <div class="project-highlights">
        <strong>Destaques:</strong>
        <ul>
          ${project.highlights.slice(0, 3).map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
      
      <a href="${project.github}" target="_blank" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
        Ver no GitHub →
      </a>
    </div>
  `).join('');
}

// Render Skills
function renderSkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  
  skillsGrid.innerHTML = SKILLS.map(skill => `
    <div class="skill-card">
      <div class="skill-icon">${skill.icon}</div>
      <h4>${skill.name}</h4>
      <p class="skill-category">${skill.category}</p>
      <div class="skill-progress">
        <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
      </div>
    </div>
  `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderMetrics();
  renderProjects();
  renderSkills();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
