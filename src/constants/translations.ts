export type Language = "en" | "he";

export const translations = {
  // Navbar
  nav: {
    home: { en: "Home", he: "בית" },
    products: { en: "Products", he: "מוצרים" },
    services: { en: "Services", he: "שירותים" },
    projects: { en: "Projects", he: "פרויקטים" },
    contactUs: { en: "Contact Us", he: "צור קשר" },
  },

  // Index page
  index: {
    heroTag: { en: "Creative Parking Ltd", he: "Creative Parking Ltd" },
    heroTitle1: { en: "Space-Saving & ", he: "חנייה חוסכת מקום " },
    heroTitleHighlight: { en: "Durable", he: "ועמידה" },
    heroTitle2: { en: " Parking Solutions", he: " " },
    heroDesc: {
      en: "From simple hydraulic lifts to fully automated tower systems — we engineer innovative parking solutions for every space.",
      he: "ממעליות הידראוליות פשוטות ועד למערכות מגדל אוטומטיות — אנו מפתחים פתרונות חנייה חדשניים לכל מרחב.",
    },
    exploreProducts: { en: "Explore Products", he: "גלה מוצרים" },
    statModels: { en: "Product Models", he: "דגמי מוצרים" },
    statCapacity: { en: "Max KG Capacity", he: 'קיבולת מקס ק"ג' },
    statParkTime: { en: "Fastest Park Time", he: "זמן חנייה מהיר" },
    statWarranty: { en: "Standard Warranty", he: "אחריות סטנדרטית" },
    ourProducts: { en: "Our Products", he: "המוצרים שלנו" },
    parkingForEveryNeed: { en: "Parking Solutions for Every Need", he: "פתרונות חנייה לכל צורך" },
    viewProducts: { en: "View Products", he: "צפה במוצרים" },
    featured: { en: "Featured", he: "מומלצים" },
    popularModels: { en: "Popular Models", he: "דגמים פופולריים" },
    whyUs: { en: "Why Creative Parking", he: "למה Creative Parking" },
    builtForReliability: { en: "Built for Reliability", he: "בנוי לאמינות" },
    safetyFirst: { en: "Safety First", he: "בטיחות קודמת" },
    safetyDesc: {
      en: "Multi-layer safety with anti-fall locks, photocell sensors, and emergency stops on every unit.",
      he: "בטיחות רב-שכבתית עם מנעולי נגד נפילה, חיישנים פוטואלקטריים ועצירות חירום בכל יחידה.",
    },
    fastInstallation: { en: "Fast Installation", he: "התקנה מהירה" },
    fastInstallationDesc: {
      en: "Preassembled laser-cut parts mean faster on-site installation and easy relocation.",
      he: "חלקים מוכנים מראש חתוכים בלייזר מאפשרים התקנה מהירה באתר והעברה קלה.",
    },
    customizable: { en: "Customizable", he: "ניתן להתאמה" },
    customizableDesc: {
      en: "Colors, dimensions, voltage, and capacity — all configurable to your project requirements.",
      he: "צבעים, מידות, מתח וקיבולת — הכל ניתן להתאמה לדרישות הפרויקט שלך.",
    },
    warranty: { en: "12-Month Warranty", he: "אחריות 12 חודשים" },
    warrantyDesc: {
      en: "Every product backed by a standard warranty with extended options available.",
      he: "כל מוצר מגובה באחריות סטנדרטית עם אפשרויות הרחבה.",
    },
    ctaTitle: { en: "Ready to Optimize Your Parking Space?", he: "מוכנים לייעל את מקום החנייה שלכם?" },
    ctaDesc: {
      en: "Get in touch with our team to discuss the ideal parking solution for your project.",
      he: "צרו קשר עם הצוות שלנו כדי לדון בפתרון החנייה האידיאלי לפרויקט שלכם.",
    },
    ctaButton: { en: "Get a Free Consultation", he: "קבלו ייעוץ חינם" },
  },

  // Products page
  products: {
    ourProducts: { en: "Our Products", he: "המוצרים שלנו" },
    parkingSolutions: { en: "Parking Solutions", he: "פתרונות חנייה" },
    productsDesc: {
      en: "From simple hydraulic lifts to fully automated tower systems — explore our complete product range.",
      he: "ממעליות הידראוליות פשוטות ועד מערכות מגדל אוטומטיות — גלו את מגוון המוצרים המלא שלנו.",
    },
    allProducts: { en: "All Products", he: "כל המוצרים" },
  },

  // Product categories
  categories: {
    simple: { en: "Simple Parking Lifts", he: "מעליות חנייה פשוטות" },
    simpleDesc: {
      en: "Space-saving and durable parking solutions at low cost. Hydraulic-driven, easy to install and relocate.",
      he: "פתרונות חנייה חוסכי מקום ועמידים בעלות נמוכה. מונעים הידראולית, קלים להתקנה ולהעברה.",
    },
    "semi-auto": { en: "Semi-Auto Parking Systems", he: "מערכות חנייה חצי-אוטומטיות" },
    "semi-autoDesc": {
      en: "Intelligent semi-automated parking systems with smart controls. Ideal for residential and commercial spaces.",
      he: "מערכות חנייה חצי-אוטומטיות חכמות עם בקרה מתקדמת. אידיאליות למגורים ולמסחר.",
    },
    automated: { en: "Fully Automated Systems", he: "מערכות אוטומטיות מלאות" },
    automatedDesc: {
      en: "High-tech fully automated parking towers and rotary systems for maximum space efficiency.",
      he: "מגדלי חנייה אוטומטיים ומערכות סיבוביות היי-טק ליעילות מרחב מקסימלית.",
    },
    special: { en: "Special Platforms", he: "פלטפורמות מיוחדות" },
    specialDesc: {
      en: "Vehicle transport systems and turntables for specialized applications.",
      he: "מערכות הובלת רכב ופלטפורמות סיבוב ליישומים מיוחדים.",
    },
  },

  // Product detail
  productDetail: {
    backToProducts: { en: "Back to Products", he: "חזרה למוצרים" },
    requestQuote: { en: "Request a Quote", he: "בקש הצעת מחיר" },
    features: { en: "Features", he: "תכונות" },
    technicalSpecs: { en: "Technical Specifications", he: "מפרט טכני" },
    specsNote: {
      en: "* Most parameters can be customized based on your requirements.",
      he: "* ניתן להתאים את רוב הפרמטרים לדרישותיכם.",
    },
    safetySystem: { en: "Safety System", he: "מערכת בטיחות" },
    applicationScenarios: { en: "Application Scenarios", he: "תרחישי יישום" },
    interestedIn: { en: "Interested in the", he: "מעוניינים ב" },
    ctaDesc: {
      en: "Contact us for pricing, customization options, and project consultations.",
      he: "צרו קשר לקבלת הצעות מחיר, אפשרויות התאמה וייעוץ לפרויקטים.",
    },
    getQuote: { en: "Get a Quote", he: "קבל הצעת מחיר" },
    productNotFound: { en: "Product Not Found", he: "מוצר לא נמצא" },
  },

  // Services
  services: {
    whatWeDo: { en: "What We Do", he: "מה אנחנו עושים" },
    ourServices: { en: "Our Services", he: "השירותים שלנו" },
    servicesDesc: {
      en: "From precision machining to full R&D and on-site support — we're with you at every step.",
      he: "ממכונות דיוק ועד מחקר ופיתוח מלא ותמיכה באתר — אנחנו איתכם בכל שלב.",
    },
    odmTitle: { en: "Solid ODM Services", he: "שירותי ODM מקצועיים" },
    odmDesc: {
      en: "Thanks to our dedicated R&D team, we have designed and developed various kinds of parking products, fulfilling our clients' requirements on every aspect — from scissor lifts to cantilever pit systems.",
      he: "בזכות צוות המו\"פ המסור שלנו, תכננו ופיתחנו מגוון רחב של מוצרי חנייה, העונים על כל דרישות הלקוחות — ממעליות מספריים ועד מערכות קונזוליות.",
    },
    odmHighlights: {
      en: ["Dedicated R&D Team", "Custom Product Design", "Innovative Engineering", "Full Product Development"],
      he: ["צוות מו\"פ מסור", "עיצוב מוצרים מותאם", "הנדסה חדשנית", "פיתוח מוצר מלא"],
    },
    supportTitle: { en: "Solid Customer Services", he: "שירות לקוחות מקצועי" },
    supportDesc: {
      en: "As a customer-oriented company, we provide prompt and satisfactory support including product introduction, solution development, drawing support, transaction coordination, on-site installation guidance, and maintenance support.",
      he: "כחברה מוכוונת לקוח, אנו מספקים תמיכה מהירה ומספקת הכוללת הצגת מוצרים, פיתוח פתרונות, תמיכה בשרטוטים, תיאום עסקאות, הדרכת התקנה באתר ותמיכה בתחזוקה.",
    },
    supportHighlights: {
      en: ["Drawing Support", "On-Site Installation Guidance", "Solution Development", "Maintenance Support"],
      he: ["תמיכה בשרטוטים", "הדרכת התקנה באתר", "פיתוח פתרונות", "תמיכת תחזוקה"],
    },
    customSolution: { en: "Need a Custom Solution?", he: "צריכים פתרון מותאם?" },
    customSolutionDesc: {
      en: "Our engineering team is ready to develop a parking solution tailored to your specific requirements.",
      he: "צוות ההנדסה שלנו מוכן לפתח פתרון חנייה מותאם לדרישות הספציפיות שלכם.",
    },
    startProject: { en: "Start a Project", he: "התחילו פרויקט" },
  },

  // Projects
  projectsPage: {
    ourWork: { en: "Our Work", he: "העבודות שלנו" },
    projects: { en: "Projects", he: "פרויקטים" },
    projectsDesc: {
      en: "A selection of parking solutions we've delivered worldwide.",
      he: "מבחר פתרונות חנייה שסיפקנו ברחבי העולם.",
    },
    haveProject: { en: "Have a Project in Mind?", he: "יש לכם פרויקט בראש?" },
    letsDiscuss: { en: "Let's Discuss", he: "בואו נדבר" },
    // Project items
    golanTitle: { en: "Two-Post Parking Lift — Golan Hills", he: "מעלית חנייה דו-עמודית — רמת הגולן" },
    golanType: { en: "Simple Two-Post Car Parking Lift", he: "מעלית חנייה דו-עמודית פשוטה" },
    golanSpaces: { en: "2 parking spaces", he: "2 מקומות חנייה" },
    golanLocation: { en: "Golan Hills, Northern Israel", he: "רמת הגולן, צפון ישראל" },
    golanDesc: {
      en: "Installation of a simple two-post parking lift system in the Golan Hills area, providing an efficient double-parking solution for residential use.",
      he: "התקנת מערכת מעלית חנייה דו-עמודית פשוטה באזור רמת הגולן, המספקת פתרון חנייה כפולה יעיל לשימוש מגורים.",
    },
    photoGallery: { en: "Photo Gallery", he: "גלריית תמונות" },
  },

  // Contact
  contact: {
    getInTouch: { en: "Get in Touch", he: "צרו קשר" },
    contactUs: { en: "Contact Us", he: "צור קשר" },
    contactDesc: {
      en: "Ready to discuss your parking project? Reach out and our team will respond within 24 hours.",
      he: "מוכנים לדון בפרויקט החנייה שלכם? פנו אלינו והצוות שלנו יחזור אליכם תוך 24 שעות.",
    },
    sendMessage: { en: "Send us a Message", he: "שלחו לנו הודעה" },
    fullName: { en: "Full Name", he: "שם מלא" },
    namePlaceholder: { en: "Your name", he: "השם שלך" },
    email: { en: "Email", he: 'דוא"ל' },
    emailPlaceholder: { en: "your@email.com", he: "your@email.com" },
    phone: { en: "Phone (optional)", he: "טלפון (אופציונלי)" },
    phonePlaceholder: { en: "+1 (555) 000-0000", he: "+972 50-000-0000" },
    message: { en: "Message", he: "הודעה" },
    messagePlaceholder: { en: "Tell us about your project requirements...", he: "ספרו לנו על דרישות הפרויקט שלכם..." },
    send: { en: "Send Message", he: "שלח הודעה" },
    sending: { en: "Sending...", he: "שולח..." },
    contactInfo: { en: "Contact Information", he: "פרטי התקשרות" },
    emailLabel: { en: "Email", he: 'דוא"ל' },
    phoneLabel: { en: "Phone", he: "טלפון" },
    addressLabel: { en: "Address", he: "כתובת" },
    businessHours: { en: "Business Hours", he: "שעות פעילות" },
    monFri: { en: "Monday – Friday: 9:00 AM – 6:00 PM", he: "ראשון – חמישי: 9:00 – 18:00" },
    sat: { en: "Saturday: 9:00 AM – 1:00 PM", he: "שישי: 9:00 – 13:00" },
    sun: { en: "Sunday: Closed", he: "שבת: סגור" },
    successTitle: { en: "Message Sent!", he: "ההודעה נשלחה!" },
    successDesc: {
      en: "Thank you for reaching out. We'll get back to you shortly.",
      he: "תודה שפניתם אלינו. נחזור אליכם בהקדם.",
    },
    errorTitle: { en: "Error", he: "שגיאה" },
    errorDesc: {
      en: "Failed to send message. Please try again or contact us directly.",
      he: "שליחת ההודעה נכשלה. נסו שוב או צרו קשר ישירות.",
    },
  },

  // Footer
  footer: {
    tagline: {
      en: "Space-saving and durable parking solutions. Let's be creative with your parking needs.",
      he: "פתרונות חנייה חוסכי מקום ועמידים. בואו נהיה יצירתיים עם צרכי החנייה שלכם.",
    },
    quickLinks: { en: "Quick Links", he: "קישורים מהירים" },
    productsTitle: { en: "Products", he: "מוצרים" },
    contactTitle: { en: "Contact", he: "יצירת קשר" },
    copyright: { en: "Creative Parking Ltd. All rights reserved.", he: "Creative Parking Ltd. כל הזכויות שמורות." },
  },

  // 404
  notFound: {
    title: { en: "404", he: "404" },
    desc: { en: "Oops! Page not found", he: "אופס! העמוד לא נמצא" },
    backHome: { en: "Return to Home", he: "חזרה לדף הבית" },
  },
} as const;

export type TranslationKey = typeof translations;
