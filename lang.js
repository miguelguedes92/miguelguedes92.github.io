
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.partners': 'Partners',
        'nav.technologies': 'Technologies',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'btn.quote': 'Get a Quote',
        'home.heroTitle': 'Powering a <span>Sustainable Future</span> with Green Technology',
        'home.heroText': 'Charge & Store Limited specializes in design, procurement, and consultancy for solar PV systems, battery energy storage, and EV charging solutions. We help residential and commercial clients adopt reliable, future-ready energy technologies.',
        'home.ctaConsult': 'Request Consultation',
        'home.ctaServices': 'Our Services',
        'about.title': 'About Us',
        'services.title': 'Our Services',
        'partners.title': 'Our Partners',
        'technologies.title': 'Technologies',
        'projects.title': 'Projects',
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Let’s talk about your project',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.submit': 'Send Message'
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.services': 'Services',
        'nav.partners': 'Partenaires',
        'nav.technologies': 'Technologies',
        'nav.projects': 'Projets',
        'nav.contact': 'Contact',
        'btn.quote': 'Demander un devis',
        'home.heroTitle': 'Alimenter un <span>avenir durable</span> avec la technologie verte',
        'home.heroText': 'Charge & Store Limited est spécialisée dans la conception, la fourniture et le conseil pour les systèmes solaires photovoltaïques, le stockage d’énergie par batteries et les solutions de recharge pour véhicules électriques. Nous aidons les clients résidentiels et commerciaux à adopter des technologies énergétiques fiables et prêtes pour l’avenir.',
        'home.ctaConsult': 'Demander une consultation',
        'home.ctaServices': 'Nos services',
        'about.title': 'À propos de nous',
        'services.title': 'Nos services',
        'partners.title': 'Nos partenaires',
        'technologies.title': 'Technologies',
        'projects.title': 'Projets',
        'contact.title': 'Nous contacter',
        'contact.subtitle': 'Parlons de votre projet',
        'contact.name': 'Nom',
        'contact.email': 'E-mail',
        'contact.message': 'Message',
        'contact.submit': 'Envoyer le message'
    }
};

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });
    localStorage.setItem('cs_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('languageSwitcher');
    const saved = localStorage.getItem('cs_lang') || 'en';
    if (select) {
        select.value = saved;
        select.addEventListener('change', e => applyLanguage(e.target.value));
    }
    applyLanguage(saved);

    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        });
    }
});
