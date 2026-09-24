import { Award, Publication, TimelineEntry } from '../types.ts';

export const orcidUrl = 'https://orcid.org/0009-0009-6094-0380';

export const experience: TimelineEntry[] = [
  {
    id: 'rowad',
    role: { en: 'IT Department Intern', ar: 'متدرب بقسم تكنولوجيا المعلومات' },
    organization: { en: 'Rowad Modern Engineering', ar: 'رواد الهندسة الحديثة' },
    period: { en: 'Jul 2026', ar: 'يوليو 2026' },
    description: {
      en: 'Supported enterprise internal systems and network infrastructure alongside cross-functional IT teams in a live business environment.',
      ar: 'دعم الأنظمة الداخلية والبنية التحتية للشبكات مع فرق تقنية متعددة في بيئة عمل فعلية.'
    }
  },
  {
    id: 'tmg',
    role: { en: 'IT Infrastructure Intern', ar: 'متدرب البنية التحتية لتكنولوجيا المعلومات' },
    organization: { en: 'Talaat Mostafa Group (TMG)', ar: 'مجموعة طلعت مصطفى' },
    period: { en: 'Sep 2025', ar: 'سبتمبر 2025' },
    description: {
      en: 'Configured VLANs and inter-VLAN routing, EtherChannel (LACP), VTP and Port Security across enterprise networks, and diagnosed faults on live corporate systems.',
      ar: 'إعداد الشبكات الافتراضية (VLANs) والتوجيه بينها وEtherChannel وVTP وأمان المنافذ، وتشخيص الأعطال على أنظمة الشركة الفعلية.'
    }
  },
  {
    id: 'orange',
    role: { en: 'Access Transmission & Network Infrastructure Intern', ar: 'متدرب شبكات النفاذ والبنية التحتية' },
    organization: { en: 'Orange Egypt', ar: 'أورنج مصر' },
    period: { en: 'Sep 2024', ar: 'سبتمبر 2024' },
    description: {
      en: 'Worked with field engineers on telecom transmission lines, network topology, signal routing and access network configuration.',
      ar: 'العمل مع مهندسي الموقع على خطوط الإرسال وطوبولوجيا الشبكات وتوجيه الإشارات وإعداد شبكات النفاذ.'
    }
  },
  {
    id: 'cib',
    role: { en: 'Digital Transformation Summer Intern', ar: 'متدرب صيفي في التحول الرقمي' },
    organization: { en: 'CIB Egypt', ar: 'البنك التجاري الدولي CIB' },
    period: { en: 'Jul 2024', ar: 'يوليو 2024' },
    description: {
      en: 'Studied enterprise banking systems and how large-scale digital transformation programmes are delivered.',
      ar: 'دراسة الأنظمة المصرفية المؤسسية وكيفية تنفيذ برامج التحول الرقمي واسعة النطاق.'
    }
  }
];

export const leadership: TimelineEntry[] = [
  {
    id: 'aces-president',
    role: { en: 'President', ar: 'رئيس النشاط' },
    organization: { en: 'ACES Student Activity — Ain Shams University', ar: 'نشاط ACES الطلابي — جامعة عين شمس' },
    period: { en: 'Oct 2024 – Oct 2025', ar: 'أكتوبر 2024 – أكتوبر 2025' },
    description: {
      en: 'Led the organization as its top officer, managing 50+ members across 5+ committees, owning flagship events end to end and negotiating corporate sponsorships.',
      ar: 'قيادة النشاط كرئيس له، وإدارة أكثر من 50 عضواً في أكثر من 5 لجان، والإشراف الكامل على الفعاليات الكبرى والتفاوض على الرعايات.'
    }
  },
  {
    id: 'graduation',
    role: { en: 'Graduation Ceremony Organizer', ar: 'منظم حفل التخرج' },
    organization: { en: 'Ain Shams University', ar: 'جامعة عين شمس' },
    period: { en: 'Sep 2024', ar: 'سبتمبر 2024' },
    description: {
      en: 'Coordinated end-to-end logistics for the university graduation ceremony for hundreds of graduates and guests.',
      ar: 'تنسيق كامل الترتيبات اللوجستية لحفل تخرج الجامعة لمئات الخريجين والضيوف.'
    }
  },
  {
    id: 'ieee',
    role: { en: 'Fundraising Member', ar: 'عضو لجنة التمويل' },
    organization: { en: 'IEEE Ain Shams University Student Branch', ar: 'فرع IEEE الطلابي بجامعة عين شمس' },
    period: { en: 'Sep 2023 – Jul 2024', ar: 'سبتمبر 2023 – يوليو 2024' },
    description: {
      en: 'Supported financial planning, donor outreach and sponsorship negotiations to fund branch events.',
      ar: 'المساهمة في التخطيط المالي والتواصل مع الداعمين والتفاوض على الرعايات لتمويل فعاليات الفرع.'
    }
  }
];

export const publications: Publication[] = [
  {
    id: 'notre-dame',
    title: 'Revolutionizing Heritage Conservation: The Transformative Impact of Drones in the Restoration and Preservation of Notre-Dame Cathedral',
    authors: 'Abdelmoniem, A. M., Elreweny, Y., Shaheen, R. & Hany, M.',
    venue: 'Shedet',
    year: '2026',
    status: 'peer-reviewed',
    url: 'https://doi.org/10.21608/shedet.2025.389477.1305'
  },
  {
    id: 'coptic-museum',
    title: 'Preservation and Conservation Strategies of the Photographic Archive of the Coptic Museum in Cairo',
    authors: 'Shaheen, R. & Elreweny, Y.',
    venue: 'Springer — Lecture Notes in Mechanical Engineering (Florence Heri-Tech 2024)',
    year: '2025',
    status: 'peer-reviewed',
    url: 'https://doi.org/10.1007/978-3-031-98379-5_41'
  },
  {
    id: 'multispectral',
    title: 'A Multispectral Examination to Identify Historical Photographs',
    authors: 'Eldabaa, M., Shaheen, R., Elreweny, Y. & Abdallah, M.',
    venue: 'Springer — Lecture Notes in Mechanical Engineering (Florence Heri-Tech 2024)',
    year: '2025',
    status: 'peer-reviewed',
    url: 'https://doi.org/10.1007/978-3-031-98379-5_17'
  },
  {
    id: 'khedive-ismail',
    title: 'Conserving and Preventive Conservation Plan of Photographic Archive Belong to Khedive Ismail Pasha Back to 19th Century Storage in Vehicles Museum',
    authors: 'Shaheen, R., Elreweny, Y. & Ali, M.',
    venue: 'ISPRS Archives — 29th CIPA Symposium, Florence',
    year: '2023',
    status: 'peer-reviewed',
    url: 'https://doi.org/10.5194/isprs-archives-XLVIII-M-2-2023-1449-2023'
  },
  {
    id: 'palestinian-archive',
    title: 'Participatory Digital Archiving as a Conservation Strategy: The Palestinian Archive Platform',
    authors: 'Elreweny, Y., Khateb, O., Shaheen, R. & Hany, M.',
    venue: 'News in Conservation — International Institute for Conservation (IIC)',
    year: 'In press',
    status: 'in-press'
  },
  {
    id: 'ai-ocr',
    title: 'Development of an AI-Based OCR System for Recognizing Hieratic, Hieroglyphic, and Demotic Texts',
    authors: 'Elreweny, Y.',
    venue: 'Current Research in Egyptology 26 — TOBUNKEN, Tokyo, Japan',
    year: '2026',
    status: 'talk'
  },
  {
    id: 'roots-project',
    title: 'The Roots Project: Preserving Contested Palestinian Heritage through Digital Innovation',
    authors: 'Elreweny, Y.',
    venue: 'AIC 54th Annual Meeting — Montreal, Canada',
    year: '2026',
    status: 'talk'
  },
  {
    id: 'cre-basel',
    title: 'The Preservation of Two Fragments of Cloth Woven with Tapestry Dating Back to Thutmose III (Eighteenth Dynasty), Displayed in the Egyptian Textile Museum',
    authors: 'Shaheen, R., Eltobgy, A. & Elreweny, Y.',
    venue: 'Current Research in Egyptology — University of Basel, Switzerland',
    year: '2023',
    status: 'talk'
  },
  {
    id: 'pmg-virtual-restoration',
    title: 'Virtual Restoration of the Bio-Deteriorated Image: Applied on the Gelatin Photographs Back to 1950s',
    authors: 'Elreweny, Y., Shaheen, R., Abdelrahman, M. E., Abd Elaal, S. & Ali, M.',
    venue: 'PMG Winter Meeting — Harry Ransom Center, University of Texas at Austin',
    year: '2023',
    status: 'talk'
  }
];

export const awards: Award[] = [
  {
    id: 'faic-kress',
    title: { en: 'FAIC/Kress Foundation International Speaker Scholarship', ar: 'منحة المتحدث الدولي من FAIC ومؤسسة Kress' },
    issuer: { en: 'AIC 54th Annual Meeting — Montreal, Canada', ar: 'الاجتماع السنوي الـ54 لـ AIC — مونتريال، كندا' },
    year: '2026',
    description: {
      en: 'Selected from 100+ applicants to present research at a leading international conservation conference.',
      ar: 'تم اختياري من بين أكثر من 100 متقدم لعرض بحثي في أحد أبرز المؤتمرات الدولية للحفاظ على التراث.'
    }
  },
  {
    id: 'cre-26',
    title: { en: 'CRE 26 Conference Grant', ar: 'منحة مؤتمر CRE 26' },
    issuer: { en: 'Current Research in Egyptology — Tokyo, Japan', ar: 'مؤتمر أبحاث علم المصريات — طوكيو، اليابان' },
    year: '2026',
    description: {
      en: "Funded by Japan's Agency for Cultural Affairs to present an AI-based OCR system for ancient Egyptian scripts.",
      ar: 'بتمويل من وكالة الشؤون الثقافية اليابانية لعرض نظام تعرف ضوئي على النصوص المصرية القديمة قائم على الذكاء الاصطناعي.'
    }
  },
  {
    id: 'falling-walls',
    title: { en: '3rd Place — Falling Walls Lab', ar: 'المركز الثالث — Falling Walls Lab' },
    issuer: { en: 'DAAD Cairo', ar: 'الهيئة الألمانية للتبادل العلمي DAAD — القاهرة' },
    year: '2024',
    description: {
      en: 'Awarded for an AI-based solution for the digital preservation of cultural heritage artifacts.',
      ar: 'عن حل قائم على الذكاء الاصطناعي للحفظ الرقمي للقطع التراثية.'
    }
  },
  {
    id: 'cipa',
    title: { en: 'CIPA Symposium Grant', ar: 'منحة ندوة CIPA' },
    issuer: { en: 'International Institute for Conservation (IIC), London', ar: 'المعهد الدولي للحفاظ على التراث (IIC) — لندن' },
    year: '2023',
    description: {
      en: 'Competitive grant to present a peer-reviewed paper at the 29th CIPA Symposium in Florence, Italy.',
      ar: 'منحة تنافسية لعرض ورقة بحثية محكّمة في ندوة CIPA الـ29 في فلورنسا، إيطاليا.'
    }
  },
  {
    id: 'cre-basel',
    title: { en: 'CRE Conference Grant', ar: 'منحة مؤتمر CRE' },
    issuer: { en: 'University of Basel, Switzerland', ar: 'جامعة بازل، سويسرا' },
    year: '2023',
    description: {
      en: 'Fully funded to present research at the Current Research in Egyptology conference.',
      ar: 'تمويل كامل لعرض بحث في مؤتمر أبحاث علم المصريات.'
    }
  },
  {
    id: 'nation-builders',
    title: { en: 'Nation Builders Program & STEM Scholarships (×2)', ar: 'برنامج Nation Builders ومنحتان في العلوم والتكنولوجيا' },
    issuer: { en: 'U.S. Embassy in Cairo & AmidEast', ar: 'السفارة الأمريكية بالقاهرة ومؤسسة أميديست' },
    year: '2022 – 2023',
    description: {
      en: 'Selected for a U.S. Embassy innovation program and awarded two competitive scholarships in embedded systems, web development and Python.',
      ar: 'اختياري لبرنامج ابتكار تابع للسفارة الأمريكية، والحصول على منحتين تنافسيتين في الأنظمة المدمجة وتطوير الويب وبايثون.'
    }
  }
];
