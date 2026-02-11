/* ==========================================
   INTERACTIVITY — Brendon Pereira de Souza
   ========================================== */

// ===== TRANSLATIONS =====
const translations = {
    pt: {
        // Nav
        nav_sobre: 'Sobre',
        nav_experiencia: 'Experiência',
        nav_certificacoes: 'Certificações',
        nav_formacao: 'Formação',
        nav_habilidades: 'Habilidades',
        nav_projetos: 'Projetos',
        nav_contato: 'Contato',

        // Hero
        hero_desc: 'Profissional com sólida base em <strong>Cloud Computing</strong>, atuando com suporte técnico N2 e infraestrutura de TI. Foco em <strong>Infra/DevOps</strong> e automação de processos.',
        hero_cta: 'Entre em Contato',
        stat_certs: 'Certificações AWS',
        stat_suporte: 'Suporte Técnico',
        stat_foco: 'Foco Principal',

        // Typewriter
        roles: ['Analista de TI', 'Cloud Computing Specialist', 'DevOps Engineer', 'Infraestrutura & Automação'],

        // Sobre
        sobre_tag: 'Quem sou eu',
        sobre_title: 'Sobre <span class="gradient-text">Mim</span>',
        sobre_p1: 'Sou um profissional apaixonado por tecnologia, com foco em <strong>Cloud Computing</strong> e <strong>DevOps</strong>. Atuo com suporte técnico N2, gerenciamento de infraestrutura e automação de processos, buscando constantemente soluções que otimizem operações e entreguem valor.',
        sobre_p2: 'Com certificações AWS e experiência prática em ambientes corporativos, meu objetivo é construir e manter infraestruturas resilientes, escaláveis e seguras utilizando as melhores práticas do mercado.',
        hl_cloud_title: 'Cloud Computing',
        hl_cloud_desc: 'Arquiteturas AWS com foco em escalabilidade e custo-eficiência',
        hl_devops_title: 'DevOps & IaC',
        hl_devops_desc: 'Automação de infraestrutura e pipelines CI/CD',
        hl_monitor_title: 'Monitoramento',
        hl_monitor_desc: 'Zabbix, Grafana e Prometheus para observabilidade',

        // Experiência
        exp_tag: 'Trajetória',
        exp_title: 'Experiência <span class="gradient-text">Profissional</span>',
        exp_atual: 'Atual',
        exp1_title: 'Analista de Operações Digitais II',
        exp1_period: 'Set/2025 – Presente',
        exp1_task1: 'Suporte técnico a hardware e periféricos',
        exp1_task2: 'Gerenciamento de redes e infraestrutura',
        exp1_task3: 'Administração de Active Directory',
        exp2_title: 'Instrutor Auxiliar',
        exp2_period: 'Jul/2025 – Ago/2025',
        exp2_task1: 'Instrução de hardware e arquitetura de computadores',
        exp2_task2: 'Ensino de sistemas operacionais (Windows e Linux)',

        // Certificações
        cert_tag: 'Conquistas',
        cert_title: 'Certificações <span class="gradient-text">AWS</span>',
        cert1_desc: 'Arquitetura de soluções escaláveis, resilientes e de alta disponibilidade na AWS.',
        cert2_desc: 'Conhecimento abrangente dos serviços AWS, segurança, arquitetura e pricing.',

        // Formação
        form_tag: 'Educação',
        form_title: 'Formação <span class="gradient-text">Acadêmica</span>',
        form_curso: 'Análise e Desenvolvimento de Sistemas',
        form_grau: 'Graduação (Tecnólogo)',

        // Habilidades
        skill_tag: 'Competências',
        skill_title: 'Habilidades <span class="gradient-text">Técnicas</span>',
        skill_automacao: 'Automação',
        skill_so_title: 'Sistemas Operacionais',
        skill_monitor_title: 'Monitoramento',
        skill_prog_title: 'Programação & Scripts',

        // Projetos
        proj_tag: 'Portfólio',
        proj_title: 'Projetos em <span class="gradient-text">Destaque</span>',
        proj1_title: 'E-Commerce Serverless na AWS',
        proj1_subtitle: 'Solução escalável utilizando as melhores práticas da AWS',
        proj1_desc: 'Arquitetura de e-commerce totalmente serverless, construída para alta disponibilidade, escalabilidade automática e segurança robusta.',
        proj_arch_title: 'Arquitetura Implementada',
        arch_proc: 'Processamento',
        arch_db: 'Banco de Dados',
        arch_msg: 'Mensageria',
        arch_dist: 'Distribuição',
        arch_sec: 'Segurança',
        proj_pdf_btn: 'Ver Documentação Completa (PDF)',

        // Contato
        contato_tag: 'Vamos conversar',
        contato_title: 'Entre em <span class="gradient-text">Contato</span>',
        contato_intro: 'Estou sempre aberto a novas oportunidades, colaborações e conversas sobre tecnologia. Fique à vontade para entrar em contato!',

        // Footer
        footer_copy: '© 2026 Brendon Pereira de Souza. Todos os direitos reservados.'
    },

    en: {
        // Nav
        nav_sobre: 'About',
        nav_experiencia: 'Experience',
        nav_certificacoes: 'Certifications',
        nav_formacao: 'Education',
        nav_habilidades: 'Skills',
        nav_projetos: 'Projects',
        nav_contato: 'Contact',

        // Hero
        hero_desc: 'Professional with a solid background in <strong>Cloud Computing</strong>, working with N2 technical support and IT infrastructure. Focused on <strong>Infra/DevOps</strong> and process automation.',
        hero_cta: 'Get in Touch',
        stat_certs: 'AWS Certifications',
        stat_suporte: 'Technical Support',
        stat_foco: 'Main Focus',

        // Typewriter
        roles: ['IT Analyst', 'Cloud Computing Specialist', 'DevOps Engineer', 'Infrastructure & Automation'],

        // Sobre
        sobre_tag: 'Who am I',
        sobre_title: 'About <span class="gradient-text">Me</span>',
        sobre_p1: 'I am a technology enthusiast with a focus on <strong>Cloud Computing</strong> and <strong>DevOps</strong>. I work with N2 technical support, infrastructure management, and process automation, constantly seeking solutions that optimize operations and deliver value.',
        sobre_p2: 'With AWS certifications and hands-on experience in corporate environments, my goal is to build and maintain resilient, scalable, and secure infrastructures using industry best practices.',
        hl_cloud_title: 'Cloud Computing',
        hl_cloud_desc: 'AWS architectures focused on scalability and cost-efficiency',
        hl_devops_title: 'DevOps & IaC',
        hl_devops_desc: 'Infrastructure automation and CI/CD pipelines',
        hl_monitor_title: 'Monitoring',
        hl_monitor_desc: 'Zabbix, Grafana, and Prometheus for observability',

        // Experiência
        exp_tag: 'Career Path',
        exp_title: 'Professional <span class="gradient-text">Experience</span>',
        exp_atual: 'Current',
        exp1_title: 'Digital Operations Analyst II',
        exp1_period: 'Sep/2025 – Present',
        exp1_task1: 'Hardware and peripheral technical support',
        exp1_task2: 'Network and infrastructure management',
        exp1_task3: 'Active Directory administration',
        exp2_title: 'Assistant Instructor',
        exp2_period: 'Jul/2025 – Aug/2025',
        exp2_task1: 'Hardware and computer architecture instruction',
        exp2_task2: 'Operating systems teaching (Windows and Linux)',

        // Certificações
        cert_tag: 'Achievements',
        cert_title: '<span class="gradient-text">AWS</span> Certifications',
        cert1_desc: 'Architecture of scalable, resilient, and highly available solutions on AWS.',
        cert2_desc: 'Comprehensive knowledge of AWS services, security, architecture, and pricing.',

        // Formação
        form_tag: 'Education',
        form_title: 'Academic <span class="gradient-text">Background</span>',
        form_curso: 'Systems Analysis and Development',
        form_grau: 'Undergraduate Degree (Technology)',

        // Habilidades
        skill_tag: 'Competencies',
        skill_title: 'Technical <span class="gradient-text">Skills</span>',
        skill_automacao: 'Automation',
        skill_so_title: 'Operating Systems',
        skill_monitor_title: 'Monitoring',
        skill_prog_title: 'Programming & Scripting',

        // Projetos
        proj_tag: 'Portfolio',
        proj_title: 'Featured <span class="gradient-text">Projects</span>',
        proj1_title: 'Serverless E-Commerce on AWS',
        proj1_subtitle: 'Scalable solution using AWS best practices',
        proj1_desc: 'Fully serverless e-commerce architecture, built for high availability, automatic scalability, and robust security.',
        proj_arch_title: 'Implemented Architecture',
        arch_proc: 'Processing',
        arch_db: 'Database',
        arch_msg: 'Messaging',
        arch_dist: 'Distribution',
        arch_sec: 'Security',
        proj_pdf_btn: 'View Full Documentation (PDF)',

        // Contato
        contato_tag: "Let's talk",
        contato_title: 'Get in <span class="gradient-text">Touch</span>',
        contato_intro: "I'm always open to new opportunities, collaborations, and conversations about technology. Feel free to reach out!",

        // Footer
        footer_copy: '© 2026 Brendon Pereira de Souza. All rights reserved.'
    },

    es: {
        // Nav
        nav_sobre: 'Acerca de',
        nav_experiencia: 'Experiencia',
        nav_certificacoes: 'Certificaciones',
        nav_formacao: 'Formación',
        nav_habilidades: 'Habilidades',
        nav_projetos: 'Proyectos',
        nav_contato: 'Contacto',

        // Hero
        hero_desc: 'Profesional con sólida base en <strong>Cloud Computing</strong>, actuando con soporte técnico N2 e infraestructura de TI. Enfoque en <strong>Infra/DevOps</strong> y automatización de procesos.',
        hero_cta: 'Contáctame',
        stat_certs: 'Certificaciones AWS',
        stat_suporte: 'Soporte Técnico',
        stat_foco: 'Enfoque Principal',

        // Typewriter
        roles: ['Analista de TI', 'Cloud Computing Specialist', 'DevOps Engineer', 'Infraestructura y Automatización'],

        // Sobre
        sobre_tag: 'Quién soy',
        sobre_title: 'Acerca de <span class="gradient-text">Mí</span>',
        sobre_p1: 'Soy un profesional apasionado por la tecnología, con enfoque en <strong>Cloud Computing</strong> y <strong>DevOps</strong>. Actúo con soporte técnico N2, gestión de infraestructura y automatización de procesos, buscando constantemente soluciones que optimicen operaciones y entreguen valor.',
        sobre_p2: 'Con certificaciones AWS y experiencia práctica en ambientes corporativos, mi objetivo es construir y mantener infraestructuras resilientes, escalables y seguras utilizando las mejores prácticas del mercado.',
        hl_cloud_title: 'Cloud Computing',
        hl_cloud_desc: 'Arquitecturas AWS con foco en escalabilidad y eficiencia de costos',
        hl_devops_title: 'DevOps & IaC',
        hl_devops_desc: 'Automatización de infraestructura y pipelines CI/CD',
        hl_monitor_title: 'Monitoreo',
        hl_monitor_desc: 'Zabbix, Grafana y Prometheus para observabilidad',

        // Experiência
        exp_tag: 'Trayectoria',
        exp_title: 'Experiencia <span class="gradient-text">Profesional</span>',
        exp_atual: 'Actual',
        exp1_title: 'Analista de Operaciones Digitales II',
        exp1_period: 'Sep/2025 – Presente',
        exp1_task1: 'Soporte técnico a hardware y periféricos',
        exp1_task2: 'Gestión de redes e infraestructura',
        exp1_task3: 'Administración de Active Directory',
        exp2_title: 'Instructor Auxiliar',
        exp2_period: 'Jul/2025 – Ago/2025',
        exp2_task1: 'Instrucción de hardware y arquitectura de computadoras',
        exp2_task2: 'Enseñanza de sistemas operativos (Windows y Linux)',

        // Certificações
        cert_tag: 'Logros',
        cert_title: 'Certificaciones <span class="gradient-text">AWS</span>',
        cert1_desc: 'Arquitectura de soluciones escalables, resilientes y de alta disponibilidad en AWS.',
        cert2_desc: 'Conocimiento integral de los servicios AWS, seguridad, arquitectura y precios.',

        // Formação
        form_tag: 'Educación',
        form_title: 'Formación <span class="gradient-text">Académica</span>',
        form_curso: 'Análisis y Desarrollo de Sistemas',
        form_grau: 'Grado Universitario (Tecnólogo)',

        // Habilidades
        skill_tag: 'Competencias',
        skill_title: 'Habilidades <span class="gradient-text">Técnicas</span>',
        skill_automacao: 'Automatización',
        skill_so_title: 'Sistemas Operativos',
        skill_monitor_title: 'Monitoreo',
        skill_prog_title: 'Programación y Scripts',

        // Projetos
        proj_tag: 'Portafolio',
        proj_title: 'Proyectos <span class="gradient-text">Destacados</span>',
        proj1_title: 'E-Commerce Serverless en AWS',
        proj1_subtitle: 'Solución escalable utilizando las mejores prácticas de AWS',
        proj1_desc: 'Arquitectura de e-commerce totalmente serverless, construida para alta disponibilidad, escalabilidad automática y seguridad robusta.',
        proj_arch_title: 'Arquitectura Implementada',
        arch_proc: 'Procesamiento',
        arch_db: 'Base de Datos',
        arch_msg: 'Mensajería',
        arch_dist: 'Distribución',
        arch_sec: 'Seguridad',
        proj_pdf_btn: 'Ver Documentación Completa (PDF)',

        // Contato
        contato_tag: 'Hablemos',
        contato_title: 'Ponte en <span class="gradient-text">Contacto</span>',
        contato_intro: 'Siempre estoy abierto a nuevas oportunidades, colaboraciones y conversaciones sobre tecnología. ¡No dudes en contactarme!',

        // Footer
        footer_copy: '© 2026 Brendon Pereira de Souza. Todos los derechos reservados.'
    }
};

// ===== i18n ENGINE =====
let currentLang = localStorage.getItem('lang') || 'pt';

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update text-only elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // Update elements with HTML content (contains <strong>, <span> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es' : 'en';

    // Update lang button text
    const langCurrent = document.getElementById('lang-current');
    if (langCurrent) {
        langCurrent.textContent = lang.toUpperCase();
    }

    // Update active state in dropdown
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Restart typewriter with new roles
    if (t.roles) {
        typewriterRoles = t.roles;
        roleIndex = 0;
        charIndex = 0;
        isDeleting = false;
    }

    currentLang = lang;
    localStorage.setItem('lang', lang);
}

// ===== TYPEWRITER VARIABLES (global for language switching) =====
let typewriterRoles = translations[currentLang].roles;
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 80;

document.addEventListener('DOMContentLoaded', () => {

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');
    const handleNavScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // ===== MOBILE MENU TOGGLE =====
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ===== LANGUAGE SWITCHER =====
    const langSwitcher = document.getElementById('lang-switcher');
    const langBtn = document.getElementById('lang-btn');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('open');
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.dataset.lang;
            applyTranslations(lang);
            langSwitcher.classList.remove('open');
        });
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        if (!langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove('open');
        }
    });

    // ===== ACTIVE NAV LINK ON SCROLL =====
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleActiveLink = () => {
        const scrollPos = window.scrollY + 200;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('nav-link--active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('nav-link--active');
                    }
                });
            }
        });
    };
    window.addEventListener('scroll', handleActiveLink, { passive: true });

    // ===== TYPEWRITER EFFECT =====
    const typewriterEl = document.getElementById('typewriter');

    function typeWrite() {
        const currentRole = typewriterRoles[roleIndex];

        if (!isDeleting) {
            typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentRole.length) {
                isDeleting = true;
                typeSpeed = 2000;
            } else {
                typeSpeed = 80;
            }
        } else {
            typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % typewriterRoles.length;
                typeSpeed = 500;
            }
        }

        setTimeout(typeWrite, typeSpeed);
    }
    typeWrite();

    // ===== SCROLL REVEAL ANIMATION =====
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const offset = navbar.offsetHeight + 10;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ===== STAGGER ANIMATION FOR SKILL TAGS =====
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(cat => {
        const tags = cat.querySelectorAll('.skill-tag');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tags.forEach((tag, i) => {
                        tag.style.opacity = '0';
                        tag.style.transform = 'translateY(10px)';
                        setTimeout(() => {
                            tag.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                            tag.style.opacity = '1';
                            tag.style.transform = 'translateY(0)';
                        }, i * 60);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(cat);
    });

    // ===== APPLY SAVED LANGUAGE ON LOAD =====
    if (currentLang !== 'pt') {
        applyTranslations(currentLang);
    }
});
