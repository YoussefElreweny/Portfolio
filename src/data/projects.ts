import { Project, TechnicalProject } from '../types.ts';

export const projects: Project[] = [
  {
    id: 'circle-film',
    title: {
      en: 'Circle Film',
      ar: 'سيركل فيلم'
    },
    description: {
      en: 'A professional event-based media sharing platform designed for cinematic memories. Built as a high-performance system capable of processing 500+ high-quality uploads with a seamless, gallery-first interface.',
      ar: 'منصة احترافية لمشاركة وسائط الفعاليات مصممة للذكريات السينمائية. تم بناؤها كنظام عالي الأداء قادر على معالجة أكثر من 500 عملية رفع وسائط عالية الجودة مع واجهة تركز على الجمالية البصرية.'
    },
    tagline: {
      en: 'Live in Production',
      ar: 'يعمل في بيئة الإنتاج'
    },
    url: 'https://www.circlefilm.app/',
    bgGradient: 'from-slate-50 to-slate-100',
    images: ['/assets/images/Circle.png'],
    techStack: []
  },
  {
    id: 'the-shed',
    title: {
      en: 'The Shed',
      ar: 'ذا شيد'
    },
    description: {
      en: 'A real-time coworking space reservation platform deployed for active production. It features a custom booking engine with WebSocket integration for live availability, preventing conflicts and ensuring a smooth user experience.',
      ar: 'منصة حجز مساحات عمل مشتركة في الوقت الفعلي تم نشرها للإنتاج الفعلي. تتميز بمحرك حجز مخصص مع تكامل WebSockets للتوافر المباشر، مما يمنع التعارضات ويضمن تجربة مستخدم سلسة.'
    },
    tagline: {
      en: 'Deployed on Render Cloud',
      ar: 'مستضاف على سحابة Render'
    },
    url: 'https://the-shed-l9h3.onrender.com/',
    bgGradient: 'from-zinc-50 to-zinc-100',
    images: ['/assets/images/The Shed.png', '/assets/images/The Shed 2.png'],
    techStack: []
  },
  {
    id: 'padel-academy',
    title: {
      en: 'Smash Padel',
      ar: 'سماش بادل'
    },
    description: {
      en: 'A vibrant sports academy management system for Padel clubs. It handles court reservations, training academy schedules, and member registrations with a mobile-first approach for active players.',
      ar: 'نظام إدارة أكاديمية رياضية حيوي لأندية البادل. يتعامل مع حجوزات الملاعب، جداول التدريب الأكاديمية، وتسجيل الأعضاء بمنظور يركز على الهاتف المحمول للاعبين النشطين.'
    },
    tagline: {
      en: 'Functional Prototype',
      ar: 'نموذج أولي شغال'
    },
    url: 'https://padel-academy-rho.vercel.app/',
    bgGradient: 'from-stone-50 to-stone-100',
    images: ['/assets/images/Smash Padel.png', '/assets/images/Smash Padel 2.png'],
    techStack: []
  },
  {
    id: 'nile-international',
    title: {
      en: 'Nile International',
      ar: 'نايل إنترناشيونال'
    },
    description: {
      en: 'A corporate logistics and trade platform for global operations. Designed to provide a trustworthy and professional digital presence with clear tracking and service catalogs for international clients.',
      ar: 'منصة لوجستيات وتجارة مؤسسية للعمليات العالمية. صممت لتوفير حضور رقمي موثوق ومهني مع تتبع واضح وكتالوجات خدمات للعملاء الدوليين.'
    },
    tagline: {
      en: 'Enterprise Prototype',
      ar: 'نموذج أولي للشركات'
    },
    url: 'https://nile-international.vercel.app/',
    bgGradient: 'from-slate-50 to-slate-100',
    images: ['/assets/images/Nile International.png', '/assets/images/Nile International 2.png'],
    techStack: []
  },
  {
    id: 'couples-story',
    title: {
      en: 'Couples Story',
      ar: 'كابلز ستوري'
    },
    description: {
      en: 'An emotive digital storytelling application for wedding journeys. Features interactive timelines and professional media galleries with high-end aesthetic appeal.',
      ar: 'تطبيق قصص رقمي عاطفي لرحلات الزفاف. يتميز بخطوط زمنية تفاعلية ومعارض وسائط احترافية مع جاذبية جمالية راقية.'
    },
    tagline: {
      en: 'Storytelling Prototype',
      ar: 'نموذج أولي تفاعلي'
    },
    url: 'https://couples-story.vercel.app/',
    bgGradient: 'from-zinc-50 to-zinc-100',
    images: ['/assets/images/Couple Story.png', '/assets/images/Couple Story 2.png', '/assets/images/Couple Story 3.png'],
    techStack: []
  },
  {
    id: 'artiste-restaurant',
    title: {
      en: 'Artiste Restaurant',
      ar: 'أرتيست ريستورانت'
    },
    description: {
      en: 'A luxury fine-dining hospitality platform with a minimalist reservation system and categorized digital menu presentation for a premium guest experience.',
      ar: 'منصة ضيافة فاخرة للمأكولات الراقية مع نظام حجز بسيط وعرض قائمة رقمية مصنفة لتجربة ضيوف متميزة.'
    },
    tagline: {
      en: 'Hospitality Prototype',
      ar: 'نموذج أولي للضيافة'
    },
    url: 'https://artiste-restaurant.vercel.app/',
    bgGradient: 'from-stone-50 to-stone-100',
    images: ['/assets/images/Artiste restaurant.png', '/assets/images/Artist restaurant 2.png'],
    techStack: []
  },
  {
    id: 'modern-clinic',
    title: {
      en: 'Modern Clinic',
      ar: 'مودرن كلينيك'
    },
    description: {
      en: 'A sterile and trustworthy medical clinic interface focused on accessible patient booking flows and professional service catalogs.',
      ar: 'واجهة عيادة طبية نظيفة وموثوقة تركز على تدفقات حجز المرضى الميسرة وكتالوجات الخدمات المهنية.'
    },
    tagline: {
      en: 'Healthcare Prototype',
      ar: 'نموذج أولي طبي'
    },
    url: 'https://modern-clinic-one.vercel.app/',
    bgGradient: 'from-slate-50 to-slate-100',
    images: ['/assets/images/Modern Clinic.png', '/assets/images/Modern Clinic2.png'],
    techStack: []
  }
];

export const technicalProjects: TechnicalProject[] = [
  {
    id: 'event-checkin-backend',
    title: {
      en: 'Event Check-In System (Backend)',
      ar: 'نظام تسجيل دخول الفعاليات (الخلفية)'
    },
    description: {
      en: 'A robust REST API backend for high-traffic event management, registration, and attendee check-in.',
      ar: 'نظام خلفي REST API قوي لإدارة الفعاليات والتسجيل وتسجيل دخول الحضور ذو الكثافة العالية.'
    },
    challenge: {
      en: 'Managing thousands of concurrent check-ins without race conditions or data loss while ensuring sub-second response times.',
      ar: 'إدارة آلاف عمليات تسجيل الدخول المتزامنة دون حدوث حالات تضارب أو فقدان للبيانات مع ضمان أوقات استجابة أقل من ثانية.'
    },
    solution: {
      en: 'Built with Java 21 and Spring Boot, utilizing transactional safety, role-based security with BCrypt, and PostgreSQL for reliable persistence.',
      ar: 'تم بناؤه باستخدام Java 21 و Spring Boot، مع الاستفادة من أمان المعاملات، والأمن القائم على الأدوار مع BCrypt، و PostgreSQL للتخزين الموثوق.'
    },
    techStack: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'Docker'],
    githubUrl: 'https://github.com/YoussefElreweny'
  },
  {
    id: 'ecommerce-backend-java',
    title: {
      en: 'E-Commerce Platform Core',
      ar: 'محرك منصة التجارة الإلكترونية'
    },
    description: {
      en: 'An enterprise-ready backend for product catalogs, cart management, and secure order processing.',
      ar: 'نظام خلفي جاهز للمؤسسات لكتالوجات المنتجات وإدارة العربة ومعالجة الطلبات الآمنة.'
    },
    challenge: {
      en: 'Centralizing authentication and maintaining complex relational integrity between orders, inventory, and user profiles.',
      ar: 'مركزية المصادقة والحفاظ على النزاهة العلائقية المعقدة بين الطلبات والمخزون وملفات تعريف المستخدمين.'
    },
    solution: {
      en: 'Implemented JWT stateless authentication and utilized Spring Data JPA / Hibernate for advanced data modelling and mapping.',
      ar: 'تنفيذ مصادقة JWT عديمة الحالة واستخدام Spring Data JPA / Hibernate لنمذجة وربط البيانات المتقدمة.'
    },
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Hibernate', 'Maven'],
    githubUrl: 'https://github.com/YoussefElreweny'
  }
];

export const skillCategories = [
  {
    title: {
      en: 'Frontend & Web Architecture',
      ar: 'تطوير الواجهات وهندسة الويب'
    },
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / CSS3', 'Responsive Design', 'State Management'],
    iconName: 'Layout'
  },
  {
    title: {
      en: 'Backend & Cloud Deployment',
      ar: 'الأنظمة الخلفية والنشر السحابي'
    },
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Render Cloud', 'Vercel', 'Git & GitHub', 'Database Design', 'Cloud Integration'],
    iconName: 'Server'
  },
  {
    title: {
      en: 'Client & Localization Capabilities',
      ar: 'القدرات التنافسية والتعريب'
    },
    skills: ['English & Arabic (RTL/LTR)', 'Dark & Light Mode Systems', 'Cross-Device Responsiveness', 'Performance Optimization', 'Clean Code Architecture', 'UI/UX Prototyping'],
    iconName: 'Globe'
  },
  {
    title: {
      en: 'Computer Engineering Foundations',
      ar: 'أسس هندسة الحاسبات (جامعة عين شمس)'
    },
    skills: ['Algorithms & Data Structures', 'Software Engineering Principles', 'Computer Systems Architecture', 'Object-Oriented Design', 'Network Protocols', 'Problem Solving'],
    iconName: 'GraduationCap'
  }
];
