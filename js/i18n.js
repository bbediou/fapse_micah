// Simple client-side i18n (extracted from index.html)
const translations = {
  en: {
    title: "MICAH – Media, Interaction, Cognition, Adolescents & Health",
    metaDescription: "A friendly, modern demo site for the MICAH project showing positive visuals, clear structure, and sample data visualizations.",
    nav: { home: "Home", about: "About", methods: "Methods", data: "Data & Results", report: "Full Report", families: "For Families", team: "Team", contact: "Contact" },
    cta: { explore: "Explore results", whatStudy: "What we study", getInTouch: "Get in touch" },
    hero: { tagline: "Media · Cognition · Adolescents · Health", h1: "Understanding how young people use digital media—and how it relates to learning, well-being, and health.", p: "MICAH follows adolescents over time to explore digital media practices and executive functions, aiming to inform families, schools, and researchers." },
    sections: { aboutTitle: "What we study", aboutFocus: "Our Focus", methodsTitle: "How the study works", dataTitle: "Data & results (demo)", familiesTitle: "For families & teachers", teamTitle: "Team", contactTitle: "Get in touch", findings: "Findings", dataLabel: "Data & results (demo)", practicalGuidance: "Practical Guidance", ourTeam: "Our Team" },
    stats: { participants: "800", participantsLabel: "Adolescents", ageRange: "12–18", ageRangeLabel: "Age range (years)", assessments: "4", assessmentsLabel: "Assessments across 2 years", duration: "2 × 1h", durationLabel: "Surveys & tasks per visit" },
    methods: { intro: "We combine two complementary approaches at each visit (about 2 hours total):", surveys: { title: "Surveys (≈ 1h)", desc: "About media use, sleep, physical activity, and well-being." }, tasks: { title: "Gamified tasks (≈ 1h)", desc: "On tablets to measure executive functions." }, swiss: { title: "Swiss Sample", desc: "We collect data in French- and German-speaking schools in Switzerland with approval from the University of Geneva Ethics Committee. Participation is voluntary with consent from adolescents and a parent / guardian. Data are collected anonymously." }, indian: { title: "Indian Sample", desc: "We are extending data collection to India, thanks to a collaboration with Siamack Zahedi from ACRES foundation. The ACRES foundation is dedicated to excellence in Education with an incredible team committed to providing powerful, accessible education and empowering children with 21st skills, personal leadership and global citizenship. This new collaboration gives us the unique opportunity to study the diversity of media experiences and effects, including cultural differences." }, funding: { title: "Funding & partners:", desc: "Swiss National Science Foundation · UNIGE · UNIFR · ZHAW" } },
    about: { description: "During adolescence, brains and lives change rapidly. We're interested in how digital media practices—such as social media, messaging, gaming, and video—relate to the development of executive functions like attention, working memory, inhibition, and flexibility. We look at opportunities as well as risks to understand what helps young people thrive." },
    focus: { media: { title: "Digital media use", desc: "Types of devices and apps, time and context of use, family rules, night-time use, and more." }, cognitive: { title: "Cognitive development", desc: "Gamified tasks assess attention, working memory, flexibility, planning, inhibition, and impulsivity." }, wellbeing: { title: "Well-being & health", desc: "Links with sleep, mood, anxiety, physical activity, and mental health conditions." }, context: { title: "Context matters", desc: "Effects depend on the person, purpose, and type of activity—not just 'screen time'." } },
    data: { description: "Here are example visualizations illustrating the kinds of summaries we can share. These lots use fake data and will be replaced with real data when ready." },
    charts: { timeSpent: { title: "Time spent on device by age (hours/week)", openLarge: "Open large view", xAxis: "Age", yAxis: "Hours per week" }, ownership: { title: "Time Spent on Device by Age (%)" }, ef: { title: "Executive function composite (z-score)" }, wellbeing: { title: "Well-being vs. night-time use" }, chartsNote: "Charts are illustrative only." },
    form: { name: "Name", email: "Email", message: "Message", send: "Send message", demoNote: "Demo form only." },
    footer: { copy: "MICAH — Demo site", about: "About", methods: "Methods", data: "Data", families: "Families", team: "Team", contact: "Contact" },
    families: { intro: "We translate findings into practical guidance in clear language. A few principles emerging from the science:", principle1: "It's not just \"how much\", but what, when, and why young people use media.", principle2: "Support healthy routines (sleep, movement, meals) and device-free zones (e.g., bedrooms at night).", principle3: "Encourage active and social uses (learning, creativity, connecting) over passive scrolling.", principle4: "Talk together about online experiences—curiosity beats surveillance.", flyerFR: "Download flyer (FR)", flyerDE: "Download flyer (DE)" },
    team: { intro: "An interdisciplinary team spanning cognitive neuroscience, media psychology, and communication." },
    contact: { intro: "Get in touch", address: "MICAH group", addressDetail: "Université de Genève, FAPSE (office 4152)", addressCity: "40 boulevard du Pont-d'Arve · 1205 Genève", phone: "+41 22 379 02 71", email: "benoit.bediou@unige.ch", formTitle: "Contact us" }
  },
  fr: {
    title: "MICAH – Médias, interaction, cognition, adolescents & santé",
    metaDescription: "Site démo convivial pour le projet MICAH présentant des visuels positifs, une structure claire et des visualisations de données d'exemple.",
    nav: { home: "Accueil", about: "À propos", methods: "Méthodes", data: "Données & Résultats", report: "Rapport complet", families: "Pour les familles", team: "Équipe", contact: "Contact" },
    cta: { explore: "Explorer les résultats", whatStudy: "Ce que nous étudions", getInTouch: "Contactez-nous" },
    hero: { tagline: "Médias · Cognition · Adolescents · Santé", h1: "Comprendre comment les jeunes utilisent les médias numériques — et comment cela se rapporte à l'apprentissage, au bien-être et à la santé.", p: "MICAH suit des adolescents dans le temps pour étudier les pratiques des médias numériques et les fonctions exécutives, afin d'informer les familles, les écoles et les chercheurs." },
    sections: { aboutTitle: "Ce que nous étudions", aboutFocus: "Notre focus", methodsTitle: "Comment fonctionne l'étude", dataTitle: "Données & résultats (démo)", familiesTitle: "Pour les familles & enseignants", teamTitle: "Équipe", contactTitle: "Contactez-nous", findings: "Résultats", dataLabel: "Données & résultats (démo)", practicalGuidance: "Conseils pratiques", ourTeam: "Notre équipe" },
    stats: { participants: "800", participantsLabel: "Adolescents", ageRange: "12–18", ageRangeLabel: "Tranche d'âge (ans)", assessments: "4", assessmentsLabel: "Évaluations sur 2 ans", duration: "2 × 1h", durationLabel: "Questionnaires & tâches par visite" },
    methods: { intro: "Nous combinons deux approches complémentaires à chaque visite (environ 2 heures au total) :", surveys: { title: "Questionnaires (≈ 1h)", desc: "Sur l'utilisation des médias, le sommeil, l'activité physique et le bien-être." }, tasks: { title: "Tâches ludiques (≈ 1h)", desc: "Sur tablettes pour mesurer les fonctions exécutives." }, swiss: { title: "Échantillon suisse", desc: "Nous collectons des données dans les écoles francophones et germanophones de Suisse avec l'approbation du Comité d'éthique de l'Université de Genève. La participation est volontaire avec le consentement des adolescents et d'un parent/tuteur. Les données sont collectées de manière anonyme." }, indian: { title: "Échantillon indien", desc: "Nous étendons la collecte de données à l'Inde, grâce à une collaboration avec Siamack Zahedi de la fondation ACRES. La fondation ACRES est dédiée à l'excellence en éducation avec une équipe incroyable engagée à fournir une éducation puissante et accessible, et à doter les enfants de compétences du 21e siècle, de leadership personnel et de citoyenneté mondiale. Cette nouvelle collaboration donne l'opportunité unique d'étudier la diversité des expériences et des effets des médias, y compris les différences culturelles." }, funding: { title: "Financement & partenaires :", desc: "Fonds National Suisse · UNIGE · UNIFR · ZHAW" } },
    about: { description: "Pendant l'adolescence, le cerveau et la vie changent rapidement. Nous nous intéressons à la façon dont les pratiques des médias numériques — comme les réseaux sociaux, la messagerie, les jeux et les vidéos — sont liées au développement des fonctions exécutives comme l'attention, la mémoire de travail, l'inhibition et la flexibilité. Nous examinons les opportunités et les risques pour comprendre ce qui aide les jeunes à s'épanouir." },
    focus: { media: { title: "Usage des médias numériques", desc: "Types d'appareils et d'applications, temps et contexte d'utilisation, règles familiales, utilisation nocturne, et plus encore." }, cognitive: { title: "Développement cognitif", desc: "Des tâches ludiques évaluent l'attention, la mémoire de travail, la flexibilité, la planification, l'inhibition et l'impulsivité." }, wellbeing: { title: "Bien-être & santé", desc: "Liens avec le sommeil, l'humeur, l'anxiété, l'activité physique et la santé mentale." }, context: { title: "Le contexte compte", desc: "Les effets dépendent de la personne, du but et du type d'activité — pas seulement du 'temps d'écran'." } },
    data: { description: "Voici des exemples de visualisations illustrant les types de résumés que nous pouvons partager. Ces graphiques utilisent des données fictives et seront remplacés par des données réelles lorsqu'elles seront disponibles." },
    charts: { timeSpent: { title: "Temps passé par appareil selon l'âge (heures/semaine)", openLarge: "Ouvrir en grand", xAxis: "Âge", yAxis: "Heures par semaine" }, ownership: { title: "Temps passé par appareil et par âge (%)" }, ef: { title: "Fonction exécutive composite (z-score)" }, wellbeing: { title: "Bien-être vs. utilisation nocturne" }, chartsNote: "Les graphiques sont illustratifs uniquement." },
    form: { name: "Nom", email: "Courriel", message: "Message", send: "Envoyer", demoNote: "Formulaire de démonstration uniquement." },
    footer: { copy: "MICAH — Site démo", about: "À propos", methods: "Méthodes", data: "Données", families: "Familles", team: "Équipe", contact: "Contact" },
    families: { intro: "Nous traduisons les résultats en conseils pratiques en langage clair. Quelques principes émergents de la science :", principle1: "Ce n'est pas seulement « combien », mais quoi, quand et pourquoi les jeunes utilisent les médias.", principle2: "Soutenir des routines saines (sommeil, mouvement, repas) et des zones sans appareil (par exemple, les chambres la nuit).", principle3: "Encourager les usages actifs et sociaux (apprentissage, créativité, connexion) plutôt que le défilement passif.", principle4: "Parlez ensemble des expériences en ligne — la curiosité bats la surveillance.", flyerFR: "Télécharger le dépliant (FR)", flyerDE: "Télécharger le dépliant (DE)" },
    team: { intro: "Une équipe interdisciplinaire couvrant les neurosciences cognitives, la psychologie des médias et la communication." },
    contact: { intro: "Nous contacter", address: "Groupe MICAH", addressDetail: "Université de Genève, FAPSE (bureau 4152)", addressCity: "40 boulevard du Pont-d'Arve · 1205 Genève", phone: "+41 22 379 02 71", email: "benoit.bediou@unige.ch", formTitle: "Contactez-nous" }
  },
  de: {
    title: "MICAH – Medien, Interaktion, Kognition, Jugendliche & Gesundheit",
    metaDescription: "Eine freundliche Demo-Site für das MICAH-Projekt mit positiven Visualisierungen, klarer Struktur und Beispiel-Datenvisualisierungen.",
    nav: { home: "Start", about: "Über uns", methods: "Methoden", data: "Daten & Ergebnisse", report: "vollständigen Bericht", families: "Für Familien", team: "Team", contact: "Kontakt" },
    cta: { explore: "Ergebnisse erkunden", whatStudy: "Was wir untersuchen", getInTouch: "Kontakt" },
    hero: { tagline: "Medien · Kognition · Jugendliche · Gesundheit", h1: "Verstehen, wie junge Menschen digitale Medien nutzen — und wie das Lernen, Wohlbefinden und Gesundheit beeinflusst.", p: "MICAH begleitet Jugendliche über die Zeit, um digitale Medienpraktiken und exekutive Funktionen zu untersuchen und Familien, Schulen und Forschende zu informieren." },
    sections: { aboutTitle: "Was wir untersuchen", aboutFocus: "Unser Fokus", methodsTitle: "Wie die Studie funktioniert", dataTitle: "Daten & Ergebnisse (Demo)", familiesTitle: "Für Familien & Lehrkräfte", teamTitle: "Team", contactTitle: "Kontakt", findings: "Ergebnisse", dataLabel: "Daten & Ergebnisse (Demo)", practicalGuidance: "Praktische Anleitung", ourTeam: "Unser Team" },
    stats: { participants: "800", participantsLabel: "Jugendliche", ageRange: "12–18", ageRangeLabel: "Altersbereich (Jahre)", assessments: "4", assessmentsLabel: "Erhebungen über 2 Jahre", duration: "2 × 1h", durationLabel: "Fragebögen & Aufgaben pro Besuch" },
    methods: { intro: "Wir kombinieren bei jedem Besuch zwei komplementäre Ansätze (insgesamt etwa 2 Stunden):", surveys: { title: "Fragebögen (≈ 1h)", desc: "Über Mediennutzung, Schlaf, körperliche Aktivität und Wohlbefinden." }, tasks: { title: "Spielerische Aufgaben (≈ 1h)", desc: "Auf Tablets zur Messung der exekutiven Funktionen." }, swiss: { title: "Schweizer Stichprobe", desc: "Wir erheben Daten in französisch- und deutschsprachigen Schulen in der Schweiz mit Genehmigung der Ethikkommission der Universität Genf. Die Teilnahme ist freiwillig mit Einwilligung der Jugendlichen und eines Elternteils/Erziehungsberechtigten. Die Daten werden anonym erhoben." }, indian: { title: "Indische Stichprobe", desc: "Wir erweitern die Datenerhebung nach Indien, dank einer Zusammenarbeit mit Siamack Zahedi von der ACRES Foundation. Die ACRES Foundation widmet sich der Exzellenz in der Bildung mit einem unglaublichen Team, das sich für eine starke, zugängliche Bildung einsetzt und Kinder mit Fähigkeiten des 21. Jahrhunderts, persönlicher Führung und globaler Bürgerschaft ausstattet. Diese neue Zusammenarbeit gibt uns die einzigartige Möglichkeit, die Vielfalt der Medienerfahrungen und -effekte, einschließlich kultureller Unterschiede, zu untersuchen." }, funding: { title: "Förderung & Partner:", desc: "Schweizerischer Nationalfonds · UNIGE · UNIFR · ZHAW" } },
    about: { description: "Während der Jugend verändern sich Gehirn und Leben rasant. Wir interessieren uns dafür, wie digitale Medienpraktiken — wie soziale Medien, Messaging, Gaming und Video — mit der Entwicklung exekutiver Funktionen wie Aufmerksamkeit, Arbeitsgedächtnis, Hemmung und Flexibilität zusammenhängen. Wir betrachten Chancen und Risiken, um zu verstehen, was jungen Menschen hilft, sich gut zu entwickeln." },
    focus: { media: { title: "Digitale Mediennutzung", desc: "Arten von Geräten und Apps, Zeit und Kontext der Nutzung, Familienregeln, nächtliche Nutzung und mehr." }, cognitive: { title: "Kognitive Entwicklung", desc: "Spielerische Aufgaben bewerten Aufmerksamkeit, Arbeitsgedächtnis, Flexibilität, Planung, Hemmung und Impulsivität." }, wellbeing: { title: "Wohlbefinden & Gesundheit", desc: "Zusammenhänge mit Schlaf, Stimmung, Angst, körperlicher Aktivität und psychischer Gesundheit." }, context: { title: "Kontext ist wichtig", desc: "Die Auswirkungen hängen von der Person, dem Zweck und der Art der Aktivität ab — nicht nur von der 'Bildschirmzeit'." } },
    data: { description: "Hier sind Beispiel-Visualisierungen, die die Art der Zusammenfassungen zeigen, die wir teilen können. Diese Grafiken verwenden Beispieldaten und werden durch echte Daten ersetzt, sobald diese verfügbar sind." },
    charts: { timeSpent: { title: "Bildschirmzeit nach Gerät und Alter (Stunden/Woche)", openLarge: "In groß anzeigen", xAxis: "Alter", yAxis: "Stunden pro Woche" }, ownership: { title: "Bildschirmzeit nach Gerät und Alter (%)" }, ef: { title: "Exekutive Funktionen Kompositum (z-score)" }, wellbeing: { title: "Wohlbefinden vs. nächtliche Nutzung" }, chartsNote: "Die Grafiken sind nur illustrativ." },
    form: { name: "Name", email: "E-Mail", message: "Nachricht", send: "Senden", demoNote: "Nur Demo-Formular." },
    footer: { copy: "MICAH — Demo-Site", about: "Über uns", methods: "Methoden", data: "Daten", families: "Familien", team: "Team", contact: "Kontakt" },
    families: { intro: "Wir übersetzen Ergebnisse in praktische Ratschläge in verständlicher Sprache. Einige Grundsätze, die sich aus der Wissenschaft ergeben:", principle1: "Es geht nicht nur um \"wie viel\", sondern um was, wann und warum junge Menschen Medien nutzen.", principle2: "Unterstützen Sie gesunde Gewohnheiten (Schlaf, Bewegung, Mahlzeiten) und gerätefreie Zonen (z. B. Schlafzimmer nachts).", principle3: "Ermutigen Sie zu aktiven und sozialen Nutzungen (Lernen, Kreativität, Kontakt) statt passivem Scrollen.", principle4: "Sprechen Sie zusammen über Online-Erfahrungen — Neugier schlägt Überwachung.", flyerFR: "Flyer herunterladen (FR)", flyerDE: "Flyer herunterladen (DE)" },
    team: { intro: "Ein interdisziplinäres Team, das Kognitionsneurowissenschaften, Medienpsychologie und Kommunikation umfasst." },
    contact: { intro: "Kontaktieren Sie uns", address: "MICAH-Gruppe", addressDetail: "Universität Genf, FAPSE (Büro 4152)", addressCity: "40 boulevard du Pont-d'Arve · 1205 Genf", phone: "+41 22 379 02 71", email: "benoit.bediou@unige.ch", formTitle: "Kontaktieren Sie uns" }
  }
};

function t(keyPath, lang) {
  lang = lang || (localStorage.getItem('lang') || 'en');
  const parts = keyPath.split('.');
  let cur = translations[lang] || translations['en'];
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p]; else return '';
  }
  return cur;
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  if (translations[lang] && translations[lang].title) document.title = translations[lang].title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta && translations[lang] && translations[lang].metaDescription) meta.setAttribute('content', translations[lang].metaDescription);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key, lang);
    if (val !== undefined && val !== null) el.textContent = val;
  });

  const sel = document.getElementById('langSelect');
  const selMobile = document.getElementById('mobileLangSelect');
  if (sel) sel.value = lang;
  if (selMobile) selMobile.value = lang;

  if (typeof updateChartTranslations === 'function') updateChartTranslations(lang);
  localStorage.setItem('lang', lang);
}

function setLanguage(lang) { applyTranslations(lang); }

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || (navigator.language && navigator.language.startsWith('fr') ? 'fr' : (navigator.language && navigator.language.startsWith('de') ? 'de' : 'en'));
  applyTranslations(lang);

  const sel = document.getElementById('langSelect');
  if (sel) sel.addEventListener('change', (e) => { const chosen = e.target.value; if (chosen) setLanguage(chosen); });

  const selMobile = document.getElementById('mobileLangSelect');
  if (selMobile) selMobile.addEventListener('change', (e) => { const chosen = e.target.value; if (chosen) setLanguage(chosen); });
});
