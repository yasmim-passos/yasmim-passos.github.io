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
const SKILL_ICONS = {
  'Python': 'python.svg',
  'Java': 'openjdk.svg',
  '.NET': 'dotnet.svg',
  'C': 'c.svg',
  'C++': 'cplusplus.svg',
  'JavaScript': 'javascript.svg',
  'HTML': 'html5.svg',
  'CSS': 'css.svg',
  'MySQL': 'mysql.svg',
  'SQL Server': 'mssql.svg',
  'PostgreSQL': 'postgresql.svg',
  'FastAPI': 'fastapi.svg',
  'Spring Boot': 'springboot.svg',
  'Docker': 'docker.svg',
  'Git': 'git.svg',
  'GitHub': 'github.svg'
};

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  const skills =
    TRANSLATIONS[getCurrentLanguage()]?.skills?.skills || [];

  grid.innerHTML = skills.map(skill => `
    <div class="project-card">
      <div class="project-header">
        <img src="img/icons/${SKILL_ICONS[skill.name]}" class="skill-icon" alt="">
        <h3>${skill.name}</h3>
        <p class="project-subtitle">${skill.category}</p>
      </div>
    </div>
  `).join("");
}

// SOFT SKILLS
const SOFT_SKILL_ICONS = ['lightbulb.svg', 'puzzle.svg', 'book-open.svg', 'message-square.svg'];

function renderSoftSkills() {
  const grid = document.getElementById("softSkillsGrid");
  if (!grid) return;

  const skills = TRANSLATIONS[getCurrentLanguage()]?.softSkills?.skills || [];

  grid.innerHTML = skills.map((skill, i) => `
    <div class="skill-card">
      <img src="img/icons/${SOFT_SKILL_ICONS[i]}" class="skill-icon" alt="">
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
  renderProjects();
  renderSkills();
  renderSoftSkills();
});
