import { writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const HOME_FILE = path.join(ROOT, 'src', 'pages', '[lang]', 'index.astro');
const I18N_DIR = path.join(ROOT, 'src', 'i18n');

// Leer el archivo actual
let content = await readFile(HOME_FILE, 'utf8');

// Reemplazos de textos hardcodeados por t()
const replacements = [
  // Fundador
  { old: 'FUNDADOR, SOÑADOR', key: 'home.fundador_label' },
  { old: 'Favio M. Giorgio Data', key: 'home.fundador_name' },
  { old: 'Cicloviajero, 120.000 kms, 84 países en 11 años. Actualmente en Luang Prabang, Laos. Certificaciones en IA, Marketing Digital y Gestión de Productos AI.', key: 'home.fundador_desc' },
  
  // Manifiesto
  { old: 'MANIFIESTO', key: 'home.manifiesto_label' },
  { old: 'Así nació SportDharma Ecosystem', key: 'home.manifiesto_title' },
  { old: 'De los libros de la infancia a la vuelta al mundo en bicicleta. Del budismo a la IA. Una búsqueda de propósito que se transformó en infraestructura libre.', key: 'home.manifiesto_desc' },
  
  // Ecosistema
  { old: 'DESCUBRÍ', key: 'home.ecosistema_label' },
  { old: '¿Qué es SportDharma Ecosystem?', key: 'home.ecosistema_title' },
  { old: 'Infraestructura libre, soberana y offline-first para deportistas outdoor. Tecnología que respeta tu privacidad y tu entorno.', key: 'home.ecosistema_desc' },
  
  // Pilares
  { old: 'LOS 9 PILARES', key: 'home.pilares_label' },
  { old: 'Principios que nos definen', key: 'home.pilares_title' },
  { old: 'Software Soberano, Transparente, Modular, Educación Permanente, Solidaria, Ecológica, Inclusiva, Sostenibilidad Alineada y Resiliente.', key: 'home.pilares_desc' },
  
  // App
  { old: 'APP MÓVIL', key: 'home.app_label' },
  { old: 'Tu compañero offline en ruta', key: 'home.app_title' },
  { old: 'Mapas topográficos, tracking GPS y diario de viaje. Funciona 100% sin internet, manteniendo tus datos bajo tu total control.', key: 'home.app_desc' },
  
  // Web
  { old: 'PÁGINA WEB', key: 'home.web_label' },
  { old: 'Contenido curado por humanos', key: 'home.web_title' },
  { old: 'Noticias, guías técnicas y recursos organizados. Instalable como PWA, multi-idioma y completamente funcional offline.', key: 'home.web_desc' },
  
  // MASF
  { old: 'MOTOR MASF', key: 'home.masf_label' },
  { old: 'Curación humana, no algorítmica', key: 'home.masf_title' },
  { old: 'Arquitectura de Enjambre Multiagente. Humanos curan, IA asiste. Sin algoritmos opacos ni sesgos ocultos.', key: 'home.masf_desc' },
  
  // Estado
  { old: 'ESTADO ACTUAL', key: 'home.estado_label' },
  { old: 'Proyecto en desarrollo activo', key: 'home.estado_title' },
  { old: 'Fase de construcción de la infraestructura base. Preparando la aplicación al Proton Foundation Community Project con máxima calidad y seguridad.', key: 'home.estado_desc' },
  
  // Noticias
  { old: 'NOTICIAS E INFORMACIÓN', key: 'home.noticias_label' },
  { old: 'Curación humana, 6 publicaciones diarias', key: 'home.noticias_title' },
  { old: 'Contenido fresco, verificado y relevante para la comunidad outdoor, libre de sesgos comerciales y algoritmos opacos.', key: 'home.noticias_desc' },
  
  // Herramientas
  { old: 'EL ECOSISTEMA', key: 'home.herramientas_label' },
  { old: 'Herramientas que usamos', key: 'home.herramientas_title' },
  { old: 'Astro, Tailwind CSS, Vite PWA, y arquitecturas multiagente. Stack moderno, ligero y 100% open source.', key: 'home.herramientas_desc' },
  
  // Apoya
  { old: 'APOYA EL PROYECTO', key: 'home.apoya_label' },
  { old: 'Software libre necesita sostén', key: 'home.apoya_title' },
  { old: 'Tu contribución mantiene la infraestructura viva, sin publicidad ni venta de datos. Grants y donaciones directas.', key: 'home.apoya_desc' },
  
  // Contacto
  { old: 'SUMATE AL PROYECTO', key: 'home.contacto_label' },
  { old: '¿Querés contribuir o contactarnos?', key: 'home.contacto_title' },
  { old: 'Buscamos colaboradores apasionados por el deporte, la tecnología soberana y el bienestar global. Escribinos.', key: 'home.contacto_desc' },
  
  // Comunidad
  { old: 'COMUNIDAD Y PRESENCIA', key: 'home.comunidad_label' },
  { old: 'Conectá con SportDharma Ecosystem', key: 'home.comunidad_title' },
  { old: 'Seguinos en nuestras plataformas digitales. Construyendo juntos una red global de deportistas conscientes.', key: 'home.comunidad_desc' },
  
  // Sección Noticias
  { old: 'Noticias e Información', key: 'home.noticias_section_title' },
  { old: 'Curación humana, 6 publicaciones diarias. Contenido fresco, verificado y relevante.', key: 'home.noticias_section_desc' },
  
  // Notificaciones
  { old: 'Activar Notificaciones', key: 'home.notif_title' },
  { old: 'Sin emails, sin registro, sin tracking. Solo notificaciones nativas del navegador.', key: 'home.notif_desc' },
  { old: 'Suscribirse', key: 'home.notif_btn' },
  
  // RSS
  { old: 'RSS Feed (Open Source)', key: 'home.rss_title' },
  { old: 'La forma más pura y descentralizada de seguir nuestras novedades.', key: 'home.rss_desc' },
  { old: 'Ver instrucciones', key: 'home.rss_btn' },
];

// Aplicar reemplazos
for (const { old, key } of replacements) {
  content = content.replace(new RegExp(old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), `{t('${key}')}`);
}

// Guardar archivo modificado
await writeFile(HOME_FILE, content, 'utf8');
console.log('✅ Home refactorizado con t()');

// Traducciones para los 6 idiomas
const translations = {
  es: {
    fundador_label: 'FUNDADOR, SOÑADOR',
    fundador_name: 'Favio M. Giorgio Data',
    fundador_desc: 'Cicloviajero, 120.000 kms, 84 países en 11 años. Actualmente en Luang Prabang, Laos. Certificaciones en IA, Marketing Digital y Gestión de Productos AI.',
    manifiesto_label: 'MANIFIESTO',
    manifiesto_title: 'Así nació SportDharma Ecosystem',
    manifiesto_desc: 'De los libros de la infancia a la vuelta al mundo en bicicleta. Del budismo a la IA. Una búsqueda de propósito que se transformó en infraestructura libre.',
    ecosistema_label: 'DESCUBRÍ',
    ecosistema_title: '¿Qué es SportDharma Ecosystem?',
    ecosistema_desc: 'Infraestructura libre, soberana y offline-first para deportistas outdoor. Tecnología que respeta tu privacidad y tu entorno.',
    pilares_label: 'LOS 9 PILARES',
    pilares_title: 'Principios que nos definen',
    pilares_desc: 'Software Soberano, Transparente, Modular, Educación Permanente, Solidaria, Ecológica, Inclusiva, Sostenibilidad Alineada y Resiliente.',
    app_label: 'APP MÓVIL',
    app_title: 'Tu compañero offline en ruta',
    app_desc: 'Mapas topográficos, tracking GPS y diario de viaje. Funciona 100% sin internet, manteniendo tus datos bajo tu total control.',
    web_label: 'PÁGINA WEB',
    web_title: 'Contenido curado por humanos',
    web_desc: 'Noticias, guías técnicas y recursos organizados. Instalable como PWA, multi-idioma y completamente funcional offline.',
    masf_label: 'MOTOR MASF',
    masf_title: 'Curación humana, no algorítmica',
    masf_desc: 'Arquitectura de Enjambre Multiagente. Humanos curan, IA asiste. Sin algoritmos opacos ni sesgos ocultos.',
    estado_label: 'ESTADO ACTUAL',
    estado_title: 'Proyecto en desarrollo activo',
    estado_desc: 'Fase de construcción de la infraestructura base. Preparando la aplicación al Proton Foundation Community Project con máxima calidad y seguridad.',
    noticias_label: 'NOTICIAS E INFORMACIÓN',
    noticias_title: 'Curación humana, 6 publicaciones diarias',
    noticias_desc: 'Contenido fresco, verificado y relevante para la comunidad outdoor, libre de sesgos comerciales y algoritmos opacos.',
    herramientas_label: 'EL ECOSISTEMA',
    herramientas_title: 'Herramientas que usamos',
    herramientas_desc: 'Astro, Tailwind CSS, Vite PWA, y arquitecturas multiagente. Stack moderno, ligero y 100% open source.',
    apoya_label: 'APOYA EL PROYECTO',
    apoya_title: 'Software libre necesita sostén',
    apoya_desc: 'Tu contribución mantiene la infraestructura viva, sin publicidad ni venta de datos. Grants y donaciones directas.',
    contacto_label: 'SUMATE AL PROYECTO',
    contacto_title: '¿Querés contribuir o contactarnos?',
    contacto_desc: 'Buscamos colaboradores apasionados por el deporte, la tecnología soberana y el bienestar global. Escribinos.',
    comunidad_label: 'COMUNIDAD Y PRESENCIA',
    comunidad_title: 'Conectá con SportDharma Ecosystem',
    comunidad_desc: 'Seguinos en nuestras plataformas digitales. Construyendo juntos una red global de deportistas conscientes.',
    noticias_section_title: 'Noticias e Información',
    noticias_section_desc: 'Curación humana, 6 publicaciones diarias. Contenido fresco, verificado y relevante.',
    notif_title: 'Activar Notificaciones',
    notif_desc: 'Sin emails, sin registro, sin tracking. Solo notificaciones nativas del navegador.',
    notif_btn: 'Suscribirse',
    rss_title: 'RSS Feed (Open Source)',
    rss_desc: 'La forma más pura y descentralizada de seguir nuestras novedades.',
    rss_btn: 'Ver instrucciones'
  },
  en: {
    fundador_label: 'FOUNDER, DREAMER',
    fundador_name: 'Favio M. Giorgio Data',
    fundador_desc: 'Cycle tourer, 120,000 km, 84 countries in 11 years. Currently in Luang Prabang, Laos. Certifications in AI, Digital Marketing and AI Product Management.',
    manifiesto_label: 'MANIFESTO',
    manifiesto_title: 'How SportDharma Ecosystem was born',
    manifiesto_desc: 'From childhood books to cycling around the world. From Buddhism to AI. A search for purpose that became free infrastructure.',
    ecosistema_label: 'DISCOVER',
    ecosistema_title: 'What is SportDharma Ecosystem?',
    ecosistema_desc: 'Free, sovereign, offline-first infrastructure for outdoor athletes. Technology that respects your privacy and your environment.',
    pilares_label: 'THE 9 PILLARS',
    pilares_title: 'Principles that define us',
    pilares_desc: 'Sovereign Software, Transparent, Modular, Permanent Education, Solidarity, Ecological, Inclusive, Aligned Sustainability and Resilient.',
    app_label: 'MOBILE APP',
    app_title: 'Your offline companion on the road',
    app_desc: 'Topographic maps, GPS tracking and travel diary. Works 100% without internet, keeping your data under your total control.',
    web_label: 'WEBSITE',
    web_title: 'Human-curated content',
    web_desc: 'News, technical guides and organized resources. Installable as PWA, multi-language and fully functional offline.',
    masf_label: 'MASF ENGINE',
    masf_title: 'Human curation, not algorithmic',
    masf_desc: 'Multi-Agent Swarm Architecture. Humans curate, AI assists. No opaque algorithms or hidden biases.',
    estado_label: 'CURRENT STATUS',
    estado_title: 'Project in active development',
    estado_desc: 'Base infrastructure construction phase. Preparing the application to the Proton Foundation Community Project with maximum quality and security.',
    noticias_label: 'NEWS AND INFORMATION',
    noticias_title: 'Human curation, 6 daily publications',
    noticias_desc: 'Fresh, verified and relevant content for the outdoor community, free from commercial biases and opaque algorithms.',
    herramientas_label: 'THE ECOSYSTEM',
    herramientas_title: 'Tools we use',
    herramientas_desc: 'Astro, Tailwind CSS, Vite PWA, and multi-agent architectures. Modern, lightweight and 100% open source stack.',
    apoya_label: 'SUPPORT THE PROJECT',
    apoya_title: 'Free software needs support',
    apoya_desc: 'Your contribution keeps the infrastructure alive, without advertising or data selling. Grants and direct donations.',
    contacto_label: 'JOIN THE PROJECT',
    contacto_title: 'Want to contribute or contact us?',
    contacto_desc: 'We are looking for collaborators passionate about sports, sovereign technology and global well-being. Write to us.',
    comunidad_label: 'COMMUNITY AND PRESENCE',
    comunidad_title: 'Connect with SportDharma Ecosystem',
    comunidad_desc: 'Follow us on our digital platforms. Building together a global network of conscious athletes.',
    noticias_section_title: 'News and Information',
    noticias_section_desc: 'Human curation, 6 daily publications. Fresh, verified and relevant content.',
    notif_title: 'Activate Notifications',
    notif_desc: 'No emails, no registration, no tracking. Only native browser notifications.',
    notif_btn: 'Subscribe',
    rss_title: 'RSS Feed (Open Source)',
    rss_desc: 'The purest and most decentralized way to follow our news.',
    rss_btn: 'View instructions'
  },
  fr: {
    fundador_label: 'FONDATEUR, RÊVEUR',
    fundador_name: 'Favio M. Giorgio Data',
    fundador_desc: 'Cyclotouriste, 120 000 km, 84 pays en 11 ans. Actuellement à Luang Prabang, Laos. Certifications en IA, Marketing Digital et Gestion de Produits IA.',
    manifiesto_label: 'MANIFESTE',
    manifiesto_title: 'Comment est né SportDharma Ecosystem',
    manifiesto_desc: 'Des livres d\'enfance au tour du monde à vélo. Du bouddhisme à l\'IA. Une quête de sens devenue infrastructure libre.',
    ecosistema_label: 'DÉCOUVRIR',
    ecosistema_title: 'Qu\'est-ce que SportDharma Ecosystem ?',
    ecosistema_desc: 'Infrastructure libre, souveraine et offline-first pour les sportifs outdoor. Technologie qui respecte votre vie privée et votre environnement.',
    pilares_label: 'LES 9 PILIERS',
    pilares_title: 'Principes qui nous définissent',
    pilares_desc: 'Logiciel Souverain, Transparent, Modulaire, Éducation Permanente, Solidaire, Écologique, Inclusive, Durabilité Alignée et Résiliente.',
    app_label: 'APPLICATION MOBILE',
    app_title: 'Votre compagnon offline sur la route',
    app_desc: 'Cartes topographiques, suivi GPS et journal de voyage. Fonctionne 100% sans internet, gardant vos données sous votre contrôle total.',
    web_label: 'SITE WEB',
    web_title: 'Contenu organisé par des humains',
    web_desc: 'Actualités, guides techniques et ressources organisées. Installable en PWA, multilingue et entièrement fonctionnel hors ligne.',
    masf_label: 'MOTEUR MASF',
    masf_title: 'Curation humaine, non algorithmique',
    masf_desc: 'Architecture en Essaim Multi-Agent. Les humains organisent, l\'IA assiste. Pas d\'algorithmes opaques ni de biais cachés.',
    estado_label: 'STATUT ACTUEL',
    estado_title: 'Projet en développement actif',
    estado_desc: 'Phase de construction de l\'infrastructure de base. Préparation de la candidature au Proton Foundation Community Project avec qualité et sécurité maximales.',
    noticias_label: 'ACTUALITÉS ET INFORMATIONS',
    noticias_title: 'Curation humaine, 6 publications quotidiennes',
    noticias_desc: 'Contenu frais, vérifié et pertinent pour la communauté outdoor, exempt de biais commerciaux et d\'algorithmes opaques.',
    herramientas_label: 'L\'ÉCOSYSTÈME',
    herramientas_title: 'Outils que nous utilisons',
    herramientas_desc: 'Astro, Tailwind CSS, Vite PWA et architectures multi-agents. Stack moderne, léger et 100% open source.',
    apoya_label: 'SOUTENIR LE PROJET',
    apoya_title: 'Le logiciel libre a besoin de soutien',
    apoya_desc: 'Votre contribution maintient l\'infrastructure vivante, sans publicité ni vente de données. Subventions et dons directs.',
    contacto_label: 'REJOINDRE LE PROJET',
    contacto_title: 'Vous voulez contribuer ou nous contacter ?',
    contacto_desc: 'Nous recherchons des collaborateurs passionnés par le sport, la technologie souveraine et le bien-être mondial. Écrivez-nous.',
    comunidad_label: 'COMMUNAUTÉ ET PRÉSENCE',
    comunidad_title: 'Connectez-vous avec SportDharma Ecosystem',
    comunidad_desc: 'Suivez-nous sur nos plateformes numériques. Construisons ensemble un réseau mondial de sportifs conscients.',
    noticias_section_title: 'Actualités et Informations',
    noticias_section_desc: 'Curation humaine, 6 publications quotidiennes. Contenu frais, vérifié et pertinent.',
    notif_title: 'Activer les Notifications',
    notif_desc: 'Pas d\'emails, pas d\'inscription, pas de tracking. Seulement des notifications natives du navigateur.',
    notif_btn: 'S\'abonner',
    rss_title: 'Flux RSS (Open Source)',
    rss_desc: 'La façon la plus pure et décentralisée de suivre nos actualités.',
    rss_btn: 'Voir les instructions'
  },
  pt: {
    fundador_label: 'FUNDADOR, SONHADOR',
    fundador_name: 'Favio M. Giorgio Data',
    fundador_desc: 'Cicloturista, 120.000 km, 84 países em 11 anos. Atualmente em Luang Prabang, Laos. Certificações em IA, Marketing Digital e Gestão de Produtos IA.',
    manifiesto_label: 'MANIFESTO',
    manifiesto_title: 'Como nasceu o SportDharma Ecosystem',
    manifiesto_desc: 'Dos livros da infância à volta ao mundo de bicicleta. Do budismo à IA. Uma busca de propósito que se transformou em infraestrutura livre.',
    ecosistema_label: 'DESCUBRA',
    ecosistema_title: 'O que é o SportDharma Ecosystem?',
    ecosistema_desc: 'Infraestrutura livre, soberana e offline-first para atletas outdoor. Tecnologia que respeita sua privacidade e seu ambiente.',
    pilares_label: 'OS 9 PILARES',
    pilares_title: 'Princípios que nos definem',
    pilares_desc: 'Software Soberano, Transparente, Modular, Educação Permanente, Solidária, Ecológica, Inclusiva, Sustentabilidade Alinhada e Resiliente.',
    app_label: 'APP MÓVEL',
    app_title: 'Seu companheiro offline na estrada',
    app_desc: 'Mapas topográficos, rastreamento GPS e diário de viagem. Funciona 100% sem internet, mantendo seus dados sob seu controle total.',
    web_label: 'SITE',
    web_title: 'Conteúdo curado por humanos',
    web_desc: 'Notícias, guias técnicos e recursos organizados. Instalável como PWA, multi-idioma e totalmente funcional offline.',
    masf_label: 'MOTOR MASF',
    masf_title: 'Curadoria humana, não algorítmica',
    masf_desc: 'Arquitetura de Enxame Multiagente. Humanos curam, IA assiste. Sem algoritmos opacos ou vieses ocultos.',
    estado_label: 'STATUS ATUAL',
    estado_title: 'Projeto em desenvolvimento ativo',
    estado_desc: 'Fase de construção da infraestrutura base. Preparando a candidatura ao Proton Foundation Community Project com máxima qualidade e segurança.',
    noticias_label: 'NOTÍCIAS E INFORMAÇÕES',
    noticias_title: 'Curadoria humana, 6 publicações diárias',
    noticias_desc: 'Conteúdo fresco, verificado e relevante para a comunidade outdoor, livre de vieses comerciais e algoritmos opacos.',
    herramientas_label: 'O ECOSSISTEMA',
    herramientas_title: 'Ferramentas que usamos',
    herramientas_desc: 'Astro, Tailwind CSS, Vite PWA e arquiteturas multiagente. Stack moderno, leve e 100% open source.',
    apoya_label: 'APOIE O PROJETO',
    apoya_title: 'Software livre precisa de sustento',
    apoya_desc: 'Sua contribuição mantém a infraestrutura viva, sem publicidade ou venda de dados. Grants e doações diretas.',
    contacto_label: 'JUNTE-SE AO PROJETO',
    contacto_title: 'Quer contribuir ou entrar em contato?',
    contacto_desc: 'Buscamos colaboradores apaixonados por esporte, tecnologia soberana e bem-estar global. Escreva-nos.',
    comunidad_label: 'COMUNIDADE E PRESENÇA',
    comunidad_title: 'Conecte-se com o SportDharma Ecosystem',
    comunidad_desc: 'Siga-nos em nossas plataformas digitais. Construindo juntos uma rede global de atletas conscientes.',
    noticias_section_title: 'Notícias e Informações',
    noticias_section_desc: 'Curadoria humana, 6 publicações diárias. Conteúdo fresco, verificado e relevante.',
    notif_title: 'Ativar Notificações',
    notif_desc: 'Sem emails, sem registro, sem tracking. Apenas notificações nativas do navegador.',
    notif_btn: 'Inscrever-se',
    rss_title: 'Feed RSS (Open Source)',
    rss_desc: 'A forma mais pura e descentralizada de acompanhar nossas novidades.',
    rss_btn: 'Ver instruções'
  },
  de: {
    fundador_label: 'GRÜNDER, TRÄUMER',
    fundador_name: 'Favio M. Giorgio Data',
    fundador_desc: 'Radreisender, 120.000 km, 84 Länder in 11 Jahren. Derzeit in Luang Prabang, Laos. Zertifizierungen in KI, Digitalem Marketing und KI-Produktmanagement.',
    manifiesto_label: 'MANIFEST',
    manifiesto_title: 'Wie SportDharma Ecosystem entstand',
    manifiesto_desc: 'Von Kindheitsbüchern zur Radreise um die Welt. Vom Buddhismus zur KI. Eine Sinnsuche, die zur freien Infrastruktur wurde.',
    ecosistema_label: 'ENTDECKEN',
    ecosistema_title: 'Was ist SportDharma Ecosystem?',
    ecosistema_desc: 'Freie, souveräne, offline-first Infrastruktur für Outdoor-Athleten. Technologie, die Ihre Privatsphäre und Umwelt respektiert.',
    pilares_label: 'DIE 9 SÄULEN',
    pilares_title: 'Prinzipien, die uns definieren',
    pilares_desc: 'Souveräne Software, Transparent, Modular, Permanente Bildung, Solidarisch, Ökologisch, Inklusiv, Ausgerichtete Nachhaltigkeit und Resilient.',
    app_label: 'MOBILE APP',
    app_title: 'Ihr Offline-Begleiter unterwegs',
    app_desc: 'Topografische Karten, GPS-Tracking und Reisetagebuch. Funktioniert 100% ohne Internet und hält Ihre Daten unter Ihrer totalen Kontrolle.',
    web_label: 'WEBSEITE',
    web_title: 'Von Menschen kuratierte Inhalte',
    web_desc: 'Nachrichten, technische Leitfäden und organisierte Ressourcen. Als PWA installierbar, mehrsprachig und vollständig offline funktional.',
    masf_label: 'MASF-ENGINE',
    masf_title: 'Menschliche Kuratierung, nicht algorithmisch',
    masf_desc: 'Multi-Agenten-Schwarm-Architektur. Menschen kuratieren, KI assistiert. Keine undurchsichtigen Algorithmen oder versteckten Verzerrungen.',
    estado_label: 'AKTUELLER STATUS',
    estado_title: 'Projekt in aktiver Entwicklung',
    estado_desc: 'Phase des Aufbaus der Basisinfrastruktur. Vorbereitung der Bewerbung beim Proton Foundation Community Project mit maximaler Qualität und Sicherheit.',
    noticias_label: 'NACHRICHTEN UND INFORMATIONEN',
    noticias_title: 'Menschliche Kuratierung, 6 tägliche Veröffentlichungen',
    noticias_desc: 'Frische, verifizierte und relevante Inhalte für die Outdoor-Community, frei von kommerziellen Verzerrungen und undurchsichtigen Algorithmen.',
    herramientas_label: 'DAS ÖKOSYSTEM',
    herramientas_title: 'Werkzeuge, die wir verwenden',
    herramientas_desc: 'Astro, Tailwind CSS, Vite PWA und Multi-Agenten-Architekturen. Moderner, leichter und 100% Open-Source-Stack.',
    apoya_label: 'UNTERSTÜTZE DAS PROJEKT',
    apoya_title: 'Freie Software braucht Unterstützung',
    apoya_desc: 'Ihr Beitrag hält die Infrastruktur am Leben, ohne Werbung oder Datenverkauf. Grants und direkte Spenden.',
    contacto_label: 'TRETE DEM PROJEKT BEI',
    contacto_title: 'Möchten Sie beitragen oder uns kontaktieren?',
    contacto_desc: 'Wir suchen Mitarbeiter, die sich für Sport, souveräne Technologie und globales Wohlbefinden begeistern. Schreiben Sie uns.',
    comunidad_label: 'COMMUNITY UND PRÄSENZ',
    comunidad_title: 'Verbinden Sie sich mit SportDharma Ecosystem',
    comunidad_desc: 'Folgen Sie uns auf unseren digitalen Plattformen. Gemeinsam bauen wir ein globales Netzwerk bewusster Athleten auf.',
    noticias_section_title: 'Nachrichten und Informationen',
    noticias_section_desc: 'Menschliche Kuratierung, 6 tägliche Veröffentlichungen. Frische, verifizierte und relevante Inhalte.',
    notif_title: 'Benachrichtigungen aktivieren',
    notif_desc: 'Keine E-Mails, keine Registrierung, kein Tracking. Nur native Browser-Benachrichtigungen.',
    notif_btn: 'Abonnieren',
    rss_title: 'RSS-Feed (Open Source)',
    rss_desc: 'Die reinste und dezentralste Art, unsere Neuigkeiten zu verfolgen.',
    rss_btn: 'Anweisungen anzeigen'
  },
  it: {
    fundador_label: 'FONDATORE, SOGNATORE',
    fundador_name: 'Favio M. Giorgio Data',
    fundador_desc: 'Cicloturista, 120.000 km, 84 paesi in 11 anni. Attualmente a Luang Prabang, Laos. Certificazioni in IA, Marketing Digitale e Gestione Prodotti IA.',
    manifiesto_label: 'MANIFESTO',
    manifiesto_title: 'Come è nato SportDharma Ecosystem',
    manifiesto_desc: 'Dai libri dell\'infanzia al giro del mondo in bicicletta. Dal buddismo all\'IA. Una ricerca di scopo diventata infrastruttura libera.',
    ecosistema_label: 'SCOPRI',
    ecosistema_title: 'Cos\'è SportDharma Ecosystem?',
    ecosistema_desc: 'Infrastruttura libera, sovrana e offline-first per atleti outdoor. Tecnologia che rispetta la tua privacy e il tuo ambiente.',
    pilares_label: 'I 9 PILASTRI',
    pilares_title: 'Principi che ci definiscono',
    pilares_desc: 'Software Sovrano, Trasparente, Modulare, Educazione Permanente, Solidale, Ecologica, Inclusiva, Sostenibilità Allineata e Resiliente.',
    app_label: 'APP MOBILE',
    app_title: 'Il tuo compagno offline in viaggio',
    app_desc: 'Mappe topografiche, tracciamento GPS e diario di viaggio. Funziona 100% senza internet, mantenendo i tuoi dati sotto il tuo totale controllo.',
    web_label: 'SITO WEB',
    web_title: 'Contenuti curati da umani',
    web_desc: 'Notizie, guide tecniche e risorse organizzate. Installabile come PWA, multilingua e completamente funzionale offline.',
    masf_label: 'MOTORE MASF',
    masf_title: 'Curazione umana, non algoritmica',
    masf_desc: 'Architettura Sciame Multi-Agente. Gli umani curano, l\'IA assiste. Nessun algoritmo opaco o bias nascosto.',
    estado_label: 'STATO ATTUALE',
    estado_title: 'Progetto in sviluppo attivo',
    estado_desc: 'Fase di costruzione dell\'infrastruttura base. Preparazione della candidatura al Proton Foundation Community Project con massima qualità e sicurezza.',
    noticias_label: 'NOTIZIE E INFORMAZIONI',
    noticias_title: 'Curazione umana, 6 pubblicazioni giornaliere',
    noticias_desc: 'Contenuti freschi, verificati e rilevanti per la comunità outdoor, liberi da bias commerciali e algoritmi opachi.',
    herramientas_label: 'L\'ECOSISTEMA',
    herramientas_title: 'Strumenti che usiamo',
    herramientas_desc: 'Astro, Tailwind CSS, Vite PWA e architetture multi-agente. Stack moderno, leggero e 100% open source.',
    apoya_label: 'SOSTIENI IL PROGETTO',
    apoya_title: 'Il software libero ha bisogno di sostegno',
    apoya_desc: 'Il tuo contributo mantiene viva l\'infrastruttura, senza pubblicità o vendita di dati. Grant e donazioni dirette.',
    contacto_label: 'UNISCITI AL PROGETTO',
    contacto_title: 'Vuoi contribuire o contattarci?',
    contacto_desc: 'Cerchiamo collaboratori appassionati di sport, tecnologia sovrana e benessere globale. Scrivici.',
    comunidad_label: 'COMUNITÀ E PRESENZA',
    comunidad_title: 'Connettiti con SportDharma Ecosystem',
    comunidad_desc: 'Seguici sulle nostre piattaforme digitali. Costruendo insieme una rete globale di atleti consapevoli.',
    noticias_section_title: 'Notizie e Informazioni',
    noticias_section_desc: 'Curazione umana, 6 pubblicazioni giornaliere. Contenuti freschi, verificati e rilevanti.',
    notif_title: 'Attiva Notifiche',
    notif_desc: 'Niente email, niente registrazione, niente tracking. Solo notifiche native del browser.',
    notif_btn: 'Iscriviti',
    rss_title: 'Feed RSS (Open Source)',
    rss_desc: 'Il modo più puro e decentralizzato di seguire le nostre novità.',
    rss_btn: 'Vedi istruzioni'
  }
};

// Actualizar archivos JSON
const langs = ['es', 'en', 'fr', 'pt', 'de', 'it'];

for (const lang of langs) {
  const filePath = path.join(I18N_DIR, `${lang}.json`);
  let existing = {};
  
  try {
    const content = await readFile(filePath, 'utf8');
    existing = JSON.parse(content);
  } catch (e) {
    // Si no existe, empezamos de cero
  }
  
  // Fusionar con las nuevas traducciones de 'home'
  existing.home = { ...existing.home, ...translations[lang] };
  
  // Escribir sin escapado
  await writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
  console.log(`✅ ${lang}.json actualizado`);
}

console.log('\n🎉 Home completamente internacionalizado');