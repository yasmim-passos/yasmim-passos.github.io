let currentLanguage = "pt";

const STORAGE_KEY = "language";
const SUPPORTED_LANGS = ["pt", "en", "es"];

// Detect Language
function detectLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

  const browser = navigator.language?.split("-")[0];
  if (SUPPORTED_LANGS.includes(browser)) return browser;

  return "pt";
}

// Safe Translation Getter
function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, part) => {
    if (!acc || acc[part] === undefined) return null;
    return acc[part];
  }, obj);
}

// Translate Page
function translatePage(lang) {
  if (!TRANSLATIONS[lang]) return;
  
  currentLanguage = lang;
  document.documentElement.lang = lang;

  const t = TRANSLATIONS[lang];
  
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const value = getNestedValue(t, key);
    if (value !== null) {
      el.textContent = value;
    }
  });

  if (typeof renderProjects === "function") {
    renderProjects();
  }
  if (typeof renderSkills === "function") renderSkills();
  if (typeof renderSoftSkills === "function") renderSoftSkills();

  updateLanguageUI(lang);
  localStorage.setItem(STORAGE_KEY, lang);
}

// UI Sync (Select + Flags)
function updateLanguageUI(lang) {

  const select = document.getElementById("language-select");
  if (select) select.value = lang;

  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

// Setup Language Select
function setupLanguageSelect() {
  const select = document.getElementById("language-select");
  if (!select) return;

  select.addEventListener("change", e => {
    translatePage(e.target.value);
  });
}

// Setup Flag Buttons
function setupFlagButtons() {
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      translatePage(lang);
    });

  });
}

// INIT
document.addEventListener("DOMContentLoaded", () => {

  const lang = detectLanguage();

  if (document.getElementById("language-select")) {
    setupLanguageSelect();
  }

  setupFlagButtons();
  translatePage(lang);

});

window.getCurrentLanguage = () => currentLanguage;