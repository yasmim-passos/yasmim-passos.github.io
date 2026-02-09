async function autoTranslateText(text, targetLang) {
  try {
    if (!text || targetLang === "pt") return text;

    const res = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
    );
    const data = await res.json();

    return data[0].map(x => x[0]).join("");

  } catch (e) {
    console.warn("Translate fallback:", e);
    return text;
  }
}

// THEME TOGGLE
const themeToggle = document.getElementById('theme-toggle');

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// METRICS DASHBOARD
function renderMetrics() {
  if (typeof calculateTotalMetrics !== "function") return;

  const metrics = calculateTotalMetrics();
  const t = TRANSLATIONS[getCurrentLanguage()];

  const metricsGrid = document.getElementById('metricsGrid');
  if (!metricsGrid) return;

  metricsGrid.innerHTML = `
    <div class="metric-card">
      <div class="metric-value">${metrics.totalProjects}</div>
      <div class="metric-label">${t.dashboard.projects}</div>
    </div>

    <div class="metric-card">
      <div class="metric-value">${metrics.totalLOC.toLocaleString()}</div>
      <div class="metric-label">${t.dashboard.loc}</div>
    </div>

    <div class="metric-card">
      <div class="metric-value">${metrics.totalFiles}</div>
      <div class="metric-label">${t.dashboard.files}</div>
    </div>

    <div class="metric-card">
      <div class="metric-value">${metrics.languages}</div>
      <div class="metric-label">${t.dashboard.technologies}</div>
    </div>

    <div class="metric-card">
      <div class="metric-value">${metrics.seniorProjects}</div>
      <div class="metric-label">${t.dashboard.seniorProjects}</div>
    </div>

    <div class="metric-card">
      <div class="metric-value">${metrics.avgCoverage}%</div>
      <div class="metric-label">${t.dashboard.coverage}</div>
    </div>
  `;
}

// PROJECTS
async function renderProjects() {
  if (!Array.isArray(PROJECTS)) return;

  const lang = getCurrentLanguage();
  const t = TRANSLATIONS[lang];

  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const cards = await Promise.all(PROJECTS.map(async project => {
    let title = project.title;
    let subtitle = project.subtitle;
    let description = project.description;
    let highlights = project.highlights;

    if (lang !== "pt") {
      title = await autoTranslateText(title, lang);
      subtitle = await autoTranslateText(subtitle, lang);
      description = await autoTranslateText(description, lang);

      highlights = await Promise.all(
        highlights.map(h => autoTranslateText(h, lang))
      );
    }

    return `
      <div class="project-card">
        <div class="project-header">
          <h3>${title}</h3>
          <p class="project-subtitle">${subtitle}</p>
        </div>

        <p class="project-description">${description}</p>

        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>

        <div class="project-metrics">
          <div class="metric-small">📊 ${project.metrics.loc} LOC</div>
          <div class="metric-small">📁 ${project.metrics.files} files</div>
          <div class="metric-small">🎯 ${project.level}</div>
        </div>

        <div class="project-highlights">
          <strong>${t.projects.highlights || "Highlights"}:</strong>
          <ul>
            ${highlights.slice(0,3).map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>

        <a href="${project.github}" target="_blank"
           class="btn btn-primary"
           style="width:100%;margin-top:1rem;">
          ${t.projects.viewGithub || "View on GitHub"} →
        </a>
      </div>
    `;
  }));
  grid.innerHTML = cards.join("");
}

// HARD SKILLS (TECH STACK)
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  const skills =
    TRANSLATIONS[getCurrentLanguage()]?.skills?.skills || [];

  grid.innerHTML = skills.map(skill => `
    <div class="project-card">
      <div class="project-header">
        <div style="font-size:2rem; margin-bottom:0.5rem;">
          ${skill.icon}
        </div>

        <h3>${skill.name}</h3>

        <p class="project-subtitle">
          ${skill.category}
        </p>
      </div>

      <div class="skill-progress" style="margin-top:1rem;">
        <div class="skill-progress-bar"
             style="width:${skill.level || 90}%">
        </div>
      </div>
    </div>
  `).join("");
}

// SOFT SKILLS
function renderSoftSkills() {
  const grid = document.getElementById("softSkillsGrid");
  if (!grid) return;

  const skills = TRANSLATIONS[getCurrentLanguage()]?.softSkills?.skills || [];

  grid.innerHTML = skills.map(skill => `
    <div class="skill-card">
      <div class="skill-icon">${skill.icon}</div>
      <h4>${skill.name}</h4>
      <p class="skill-category">${skill.description}</p>
    </div>
  `).join("");
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// INITIALIZE PAGE
document.addEventListener('DOMContentLoaded', () => {
  renderMetrics();
  renderProjects();
  renderSkills();
  renderSoftSkills();
});
