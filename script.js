const CONTACT = {
  email: "jacoballan@live.com",
  linkedin: "https://www.linkedin.com/in/jacoballanj/",
  github: "https://github.com/jacoballanj",
};

const translations = {
  en: {
    skip: "Skip to content",
    role: "Business Informatics & Software Development",
    intro: "Connecting business insight with technology.",
    navAbout: "About",
    navExperience: "Experience",
    navEducation: "Education",
    navProjects: "Projects",  
    navCV: "Download CV",
    basedIn: "Based in Austria · Open to opportunities",
    sectionAbout: "About",
    aboutOne: "Hi! My background brings together business analysis, risk investigation, and technology, with a particular interest in software development, AI, and modern systems.",
    aboutTwo: "With experience analyzing complex data and understanding user requirements, I enjoy exploring how technology can improve workflows and solve real-world problems. I'm naturally curious about emerging technologies and always looking to expand my skill set.",
    sectionExperience: "Experience",
    experiencePeriod: "2019 – 2021",
    amazonTitle: "Transaction Risk Investigator",
    amazonCompany: "· Amazon, India",
    amazonDesc:"Investigated high-risk transactions to mitigate fraud, identified emerging suspicious patterns, and generated performance reports to drive operational decisions.",
    tagRisk: "Risk Assessment",
    tagAnalysis: "Fraud Investigation",
    tagOperations: "Operations",
    experiencePeriodn: "2016 – 2017",
    netcommTitle: "Technical Consultant Intern",
    netcommCompany: "· Netcomm Suisse, Switzerland",
    netcommDesc: "Gathered cross-functional stakeholder requirements, conducted technical and cost-feasibility assessments for an online platform, and designed wireframes to drive IT solution selection.",
    netcommTagRequirements: "Requirements Analysis",
    netcommTagFeasibility: "Feasibility Analysis",
    netcommTagCost: "Cost-Benefit Analysis",
    sectionEducation: "Education",
    // Computer Science - Master's
    current: "2024 - Present",
    csTitle: "Diplom-Ingenieur (DI) in Computer Science",
    csUniversity: "Johannes Kepler University Linz, Austria",
    csDesc: "Focused on software engineering principles and applied AI, with an interest in developing practical applications and integrating AI into software systems.",
    tagSoftware: "Software Engineering",
    tagAI: "Artificial Intelligence",
    tagTesting: "Software Testing",

    // Management and Informatics
    completed: "2015 - 2018",
    miTitle: "Master of Science (MSc) in Management and Informatics",
    miUniversity: "Università della Svizzera italiana, Switzerland",
    miDesc: "An interdisciplinary study of business management, information systems, business processes, and data-driven decision-making.",
    tagBusiness: "IT Management",
    tagSystems: "ERP & BPMN",
    tagBI: "Business Intelligence",

    // Computer Science - Bachelor's
    bscTitle: "Bachelor of Science (BSc) in Computer Science",
    bscUniversity: "Bishop Heber College, India",
    bscDesc: "Built a foundation in computer science, covering programming, data structures, algorithms, and database management systems.",
    tagPro: "Programming Fundamentals",
    tagDB: "Database Management",
    tagAlgo: "Data Structures & Algorithms",
    // Projects
    sectionProjects: "Projects",

    // Feature Miner
    featureCategory: "Software Development / AI",
    featureName: "Feature Miner – Git Commit Mining & Feature Prediction",
    featureDesc: "A Python web application that analyzes Git commits and uses large language models to identify software features, with an integrated review workflow and REST API integration.",
    viewGithub: "View on GitHub",

    // Current Master's Thesis
    researchProject: "Master's Thesis / Research",
    hazardName: "Hazard Sound Detection",
    inProgress: "In progress",

    // Previous Master's Thesis
    memoryCategory: "Master's Thesis / 2018",
    memoryName: "Secure Personal Memory Sharing",
    memoryDesc: "Designed and evaluated a web interface prototype for the MemShare system as part of the RECALL research project. Conducted usability studies to identify user needs and opportunities for system improvements.",
    tagUserResearch: "User Research",
    tagPrototyping: "Prototyping",
    tagUsability: "Usability Testing",
    readThesis: "Read Thesis",
    //misc
    footer: "Designed and built with HTML, CSS & JavaScript.",
    emailLabel: "Email",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",  
  },
  de: {
    skip: "Zum Inhalt springen",
    role: "Wirtschaftsinformatik & Softwareentwicklung",
    intro: "An der Schnittstelle von Wirtschaft und Technologie.",
    navAbout: "Über mich",
    navExperience: "Berufserfahrung",
    navEducation: "Ausbildung",
    navProjects: "Projekte",
    navCV: "Lebenslauf herunterladen",
    basedIn: "In Österreich · Offen für Stellenangebote",
    // About
    sectionAbout: "Über mich",
    aboutOne: "Hallo! Mein beruflicher Hintergrund verbindet Business-Analyse, Risikountersuchung und Technologie. Mein besonderes Interesse gilt der Softwareentwicklung, künstlichen Intelligenz und modernen IT-Systemen.",
    aboutTwo: "Mit meiner Erfahrung in der Analyse komplexer Daten und der Erfassung von Nutzeranforderungen beschäftige ich mich gerne damit, wie Technologie Arbeitsabläufe verbessern und praktische Probleme lösen kann. Ich bin neugierig auf neue Technologien und erweitere gerne meine Fähigkeiten.",

    // Experience
    sectionExperience: "Berufserfahrung",
    experiencePeriod: "2019 – 2021",
    amazonTitle: "Transaction Risk Investigator",
    amazonCompany: "· Amazon, Indien",
    amazonDesc: "Untersuchte Transaktionen mit hohem Risiko zur Betrugsprävention, erkannte neue verdächtige Muster und erstellte Leistungsberichte als Grundlage für operative Entscheidungen.",
    tagRisk: "Risikobewertung",
    tagAnalysis: "Betrugsuntersuchung",
    tagOperations: "Operative Prozesse",

    experiencePeriodn: "2016 – 2017",
    netcommTitle: "Praktikant in der technischen Beratung",
    netcommCompany: "· Netcomm Suisse, Schweiz",
    netcommDesc: "Erfasste bereichsübergreifend Anforderungen von Stakeholdern, prüfte die technische und wirtschaftliche Machbarkeit einer Online-Plattform und erstellte Wireframes zur Unterstützung der Auswahl einer IT-Lösung.",
    netcommTagRequirements: "Anforderungsanalyse",
    netcommTagFeasibility: "Machbarkeitsanalyse",
    netcommTagCost: "Kosten-Nutzen-Analyse",

    // Education
    sectionEducation: "Ausbildung",

    // Computer Science - Master's
    current: "2024 - heute",
    csTitle: "Diplom-Ingenieur (DI) in Informatik",
    csUniversity: "Johannes Kepler Universität Linz, Österreich",
    csDesc: "Schwerpunkte in Software Engineering und angewandter KI, mit Interesse an der Entwicklung praktischer Anwendungen und der Integration von KI in Softwaresysteme.",
    tagSoftware: "Software Engineering",
    tagAI: "Künstliche Intelligenz",
    tagTesting: "Softwaretests",

    // Management and Informatics
    completed: "2015 - 2018",
    miTitle: "Master of Science (MSc) in Management und Informatik",
    miUniversity: "Università della Svizzera italiana, Schweiz",
    miDesc: "Interdisziplinäres Studium der Unternehmensführung, Informationssysteme, Geschäftsprozesse und datenbasierten Entscheidungsfindung.",
    tagBusiness: "IT-Management",
    tagSystems: "ERP & BPMN",
    tagBI: "Business Intelligence",

    // Computer Science - Bachelor's
    bscTitle: "Bachelor of Science (BSc) in Informatik",
    bscUniversity: "Bishop Heber College, Indien",
    bscDesc: "Grundlagen der Informatik in den Bereichen Programmierung, Datenstrukturen, Algorithmen und Datenbankmanagementsysteme.",
    tagPro: "Programmiergrundlagen",
    tagDB: "Datenbankmanagement",
    tagAlgo: "Datenstrukturen & Algorithmen",

    // Projects
    sectionProjects: "Projekte",

    // Feature Miner
    featureCategory: "Softwareentwicklung / KI",
    featureName: "Feature Miner – Git-Commit-Analyse und Feature-Vorhersage",
    featureDesc: "Eine Python-Webanwendung, die Git-Commits analysiert und mithilfe großer Sprachmodelle Softwarefunktionen identifiziert. Die Anwendung verfügt über einen integrierten Validierungsprozess und eine REST-API-Integration.",
    viewGithub: "Auf GitHub ansehen",

    // Current Master's Thesis
    researchProject: "Masterarbeit / Forschung",
    hazardName: "Erkennung von Gefahrengeräuschen",
    inProgress: "In Bearbeitung",

    // Previous Master's Thesis
    memoryCategory: "Masterarbeit / 2018",
    memoryName: "Sicherer Austausch persönlicher Erinnerungen",
    memoryDesc: "Entwurf und Evaluation eines Weboberflächen-Prototyps für das MemShare-System im Rahmen des Forschungsprojekts RECALL. Durchführung von Usability-Studien zur Identifikation von Nutzeranforderungen und Verbesserungspotenzialen des Systems.",
    tagUserResearch: "Nutzerforschung",
    tagPrototyping: "Prototyping",
    tagUsability: "Usability-Tests",
    readThesis: "Masterarbeit lesen",

    footer: "Erstellt mit HTML, CSS und JavaScript.",
    emailLabel: "E-Mail",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    themeToLight: "Zum hellen Modus wechseln",
    themeToDark: "Zum dunklen Modus wechseln",
    openMenu: "Navigationsmenü öffnen",
    closeMenu: "Navigationsmenü schließen",
  },
};

function getSaved(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function save(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore storage errors.
  }
}

const all = (selector) => Array.from(document.querySelectorAll(selector));
const one = (selector) => document.querySelector(selector);
let currentLang = "en";

function setLanguage(language) {
  currentLang = language === "de" ? "de" : "en";
  document.documentElement.lang = currentLang;
  const strings = translations[currentLang];

  all("[data-i18n]").forEach((el) => {
    const value = strings[el.dataset.i18n];
    if (value === undefined) return;

    if (value.includes("|")) {
      // Preserve line breaks and colored dot without injecting HTML.
      const chunks = value.split("|");
      el.replaceChildren();

      chunks.forEach((part, index) => {
        if (index) {
          el.appendChild(document.createElement("br"));
        }

        if (part.endsWith(".")) {
          el.append(document.createTextNode(part.slice(0, -1)));
          const dot = document.createElement("span");
          dot.className = "name-dot";
          dot.textContent = ".";
          el.append(dot);
        } else {
          el.append(document.createTextNode(part));
        }
      });
    } else {
      el.textContent = value;
    }
  });

  all("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === currentLang));
  });

  document.querySelectorAll('[data-cv-download]').forEach(link => {
    const isGerman = currentLang === 'de';

    link.href = isGerman
      ? 'assets/cv/cv-de.pdf'
      : 'assets/cv/cv-en.pdf';

    const label = isGerman
      ? 'Lebenslauf herunterladen'
      : 'Download CV';

    link.setAttribute('aria-label', label);
    link.title = label;
  });
  updateControlLabels();
  renderContact();
  save("ja-portfolio-language", currentLang);
}

function setTheme(theme) {
  const active = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = active;
  one('meta[name="theme-color"]')?.setAttribute(
    "content",
    active === "dark" ? "#0c1424" : "#f8faff",
  );

  all("[data-theme-icon]").forEach((icon) => {
    icon.textContent = active === "dark" ? "☀" : "☾";
  });

  updateControlLabels();
  save("ja-portfolio-theme", active);
}

function updateControlLabels() {
  const t = translations[currentLang];
  const theme = document.documentElement.dataset.theme;

  all("[data-theme-toggle]").forEach((button) => {
    button.setAttribute(
      "aria-label",
      theme === "dark" ? t.themeToLight : t.themeToDark,
    );
  });

  const menu = one("[data-menu-toggle]");
  if (menu) {
    menu.setAttribute(
      "aria-label",
      menu.getAttribute("aria-expanded") === "true" ? t.closeMenu : t.openMenu,
    );
  }
}

function renderContact() {
  const lang = translations[currentLang];
  const entries = [
    ["email", CONTACT.email, "mailto:", lang.emailLabel],
    ["linkedin", CONTACT.linkedin, "", lang.linkedinLabel],
    ["github", CONTACT.github, "", lang.githubLabel],
  ].filter(([type, value]) => {
    if (type === "email") {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    return /^https:\/\//i.test(value);
  });

  all("[data-socials], [data-contact-links]").forEach((container) => {
    const isContact = container.hasAttribute("data-contact-links");
    container.replaceChildren();

    for (const [type, value, prefix, label] of entries) {
      const link = document.createElement("a");
      link.href = prefix + value;
      link.textContent = label + (isContact ? " ↗" : "");

      if (type !== "email") {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }

      container.append(link);
    }
  });

  all("[data-setup-note]").forEach((note) => {
    note.hidden = entries.length > 0;
  });
}

function initializeMobileMenu() {
  const button = one("[data-menu-toggle]");
  const nav = one("#mobile-nav");
  if (!button || !nav) return;

  function close() {
    nav.hidden = true;
    button.textContent = "☰";
    button.setAttribute("aria-expanded", "false");
    updateControlLabels();
  }

  button.addEventListener("click", () => {
    const willOpen = nav.hidden;
    nav.hidden = !willOpen;
    button.textContent = willOpen ? "✕" : "☰";
    button.setAttribute("aria-expanded", String(willOpen));
    updateControlLabels();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", close);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  document.addEventListener("click", (event) => {
    if (!nav.hidden && !nav.contains(event.target) && !button.contains(event.target)) {
      close();
    }
  });
}

function initializeActiveSections() {
  if (typeof IntersectionObserver === "undefined") return;

  const sections = all("main section[id]").filter((el) =>
    one(`[data-section-nav="${el.id}"]`),
  );

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (!visible.length) return;

      all("[data-section-nav]").forEach((link) => {
        link.classList.toggle("is-active", link.dataset.sectionNav === visible[0].target.id);
      });
    },
    { rootMargin: "-14% 0px -68% 0px", threshold: 0 },
  );

  sections.forEach((section) => observer.observe(section));
}

function initializeCursorGlow() {
  if (!window.matchMedia("(pointer:fine) and (prefers-reduced-motion:no-preference)").matches) {
    return;
  }

  let frame = 0;
  let x = "60%";
  let y = "22%";

  document.addEventListener(
    "pointermove",
    (event) => {
      x = `${event.clientX}px`;
      y = `${event.clientY}px`;

      if (frame) return;

      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--cursor-x", x);
        document.documentElement.style.setProperty("--cursor-y", y);
        frame = 0;
      });
    },
    { passive: true },
  );
}

setTheme(getSaved("ja-portfolio-theme") || "dark");
setLanguage(getSaved("ja-portfolio-language") || "en");
all("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
all("[data-theme-toggle]").forEach((button) => {
  button.addEventListener("click", () =>
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"),
  );
});
all("[data-year]").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});
initializeMobileMenu();
initializeActiveSections();
initializeCursorGlow();