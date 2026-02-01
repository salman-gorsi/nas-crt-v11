export interface Project {
  id: string;
  title: string;
  titleAr?: string;
  category?: string;
  image: string;
  location?: string;
  locationAr?: string;
  description?: string;
  descriptionAr?: string;
  gallery: string[];
  scope: string[];
  scopeAr?: string[];
}

export const allProjects: Project[] = [
  // Real Projects
  {
    id: "dar-al-arkan",
    title: "Dar Al Arkan & Dar Al Mashaer",
    titleAr: "دار الأركان ودار المشاعر",
    image: "/projects/dar-al-arkan-7.jpg",
    year: 2024,
    location: "Azizia, Makkah",
    locationAr: "العزيزية، مكة المكرمة",
    description:
      "Luxury residential complex in Azizia, Makkah featuring premium ACP cladding panels, perforated aluminum mesh facade, horizontal louver systems, and advanced glazing systems.",
    descriptionAr:
      "مجمع سكني فاخر في العزيزية، مكة المكرمة يتميز بلوحات تكسية ACP فاخرة، واجهة من شبك الألومنيوم المثقب، أنظمة الشرائح الأفقية، وأنظمة تزجيج متقدمة.",
    gallery: [
      "/projects/dar-al-arkan-1.png",
      "/projects/dar-al-arkan-2.jpg",
      "/projects/dar-al-arkan-3.png",
      "/projects/dar-al-arkan-4.jpg",
      "/projects/dar-al-arkan-5.jpg",
      "/projects/dar-al-arkan-6.jpg",
      "/projects/dar-al-arkan-7.jpg",
      "/projects/dar-al-arkan-8.jpg",
      "/projects/dar-al-arkan-9.jpg",
      "/projects/dar-al-arkan-10.jpg",
    ],
    scope: [
      "ACP Cladding Panels",
      "Perforated Aluminum Mesh",
      "Horizontal Louver Systems",
      "Curtain Wall Glazing",
      "Windows Installation",
    ],
    scopeAr: [
      "لوحات تكسية ACP",
      "شبك الألومنيوم المثقب",
      "أنظمة الشرائح الأفقية",
      "الجدران الزجاجية الستائرية",
      "تركيب النوافذ",
    ],
  },
  {
    id: "seven",
    title: "SEVEN - Saudi Entertainment Venture",
    titleAr: "سيفن - مشروع الترفيه السعودي",
    image: "/projects/seven-1.jpg",
    year: 2025,
    location: "Yanbu",
    locationAr: "ينبع",
    description:
      "Premium entertainment complex in Yanbu featuring advanced architectural design with innovative structural solutions including canopy systems and modern facade cladding.",
    descriptionAr: "مجمع ترفيه فاخر في ينبع يتميز بتصميم معماري متقدم مع حلول إنشائية مبتكرة.",
    gallery: ["/projects/seven-1.jpg", "/projects/seven-2.jpg", "/projects/seven-3.jpg", "/projects/seven-4.jpg"],
    scope: [
      "Canopy Installation: 6,500 m²",
      "Cladding Sheets: 5,500 m²",
      "Louver System: 2,200 m²",
      "Curtain Wall Glazing: 5,500 m²",
    ],
    scopeAr: [
      "تركيب الكنوبي: 6,500 متر مربع",
      "ألواح التكسية: 5,500 متر مربع",
      "نظام الشرائح: 2,200 متر مربع",
      "الزجاج ذو الجدران الزجاجية: 5,500 متر مربع",
    ],
  },
  {
    id: "al-khulafaa-almasy",
    title: "Al Khulafaa Almasy Hotel",
    titleAr: "فندق الخلفاء الماسي",
    image: "/projects/al-khulafaa-almasy-1.jpg",
    year: 2024,
    location: "Al Azazia, Makkah",
    locationAr: "العزيزية، مكة المكرمة",
    description:
      "Premium hotel project in Al Azazia, Makkah featuring modern glass facade installation with 1,020 m² of high-quality glazing systems.",
    descriptionAr:
      "مشروع فندقي فاخر في العزيزية، مكة المكرمة يتميز بتركيب واجهة زجاجية حديثة بمساحة 1,020 متر مربع من أنظمة التزجيج عالية الجودة.",
    gallery: [
      "/projects/al-khulafaa-almasy-1.jpg",
      "/projects/al-khulafaa-almasy-2.jpg",
      "/projects/al-khulafaa-almasy-3.jpg",
      "/projects/al-khulafaa-almasy-4.jpg",
    ],
    scope: [
      "Glass Installation: 1,020 m²",
    ],
    scopeAr: [
      "تركيب الزجاج: 1,020 متر مربع",
    ],
  },
  {
    id: "awtad-united-hotel",
    title: "Awtad United Hotel Makkah",
    titleAr: "فندق أوتاد المتحدة مكة",
    image: "/projects/awtad-united-1.jpg",
    year: 2024,
    location: "Makkah",
    locationAr: "مكة المكرمة",
    description:
      "Premium hospitality project in Makkah featuring modern glass facade installation designed to serve pilgrims and visitors with elegant architectural solutions.",
    descriptionAr:
      "مشروع ضيافة فاخر في مكة المكرمة يتميز بتركيب واجهة زجاجية حديثة مصممة لخدمة الحجاج والزوار بحلول معمارية أنيقة.",
    gallery: [
      "/projects/awtad-united-1.jpg",
      "/projects/awtad-united-2.jpg",
      "/projects/awtad-united-3.jpg",
      "/projects/awtad-united-4.jpg",
    ],
    scope: [
      "Glass Installation",
    ],
    scopeAr: [
      "تركيب الزجاج",
    ],
  },
  {
    id: "hotel-khaldia",
    title: "Hotel Khaldia",
    titleAr: "فندق الخالدية",
    image: "/projects/khaldia-after.jpg",
    year: 2024,
    location: "Makkah",
    locationAr: "مكة المكرمة",
    description:
      "Modern hotel project in Makkah featuring comprehensive facade work including glass installation, perforated aluminum screens, and louver systems with elegant architectural design.",
    descriptionAr:
      "مشروع فندقي حديث في مكة المكرمة يتميز بأعمال واجهات شاملة تشمل تركيب الزجاج والشاشات الألومنيومية المثقبة وأنظمة الشرائح بتصميم معماري أنيق.",
    gallery: [
      "/projects/khaldia-1.jpg",
      "/projects/khaldia-2.jpg",
      "/projects/khaldia-3.jpg",
      "/projects/khaldia-4.jpg",
      "/projects/khaldia-5.jpg",
      "/projects/khaldia-6.jpg",
      "/projects/khaldia-7.jpg",
      "/projects/khaldia-3d.jpg",
      "/projects/khaldia-after.jpg",
    ],
    scope: [
      "Glass Installation",
      "Perforated Aluminum Screens",
      "Louver Systems",
      "Facade Cladding",
    ],
    scopeAr: [
      "تركيب الزجاج",
      "شاشات الألومنيوم المثقبة",
      "أنظمة الشرائح",
      "تكسية الواجهات",
    ],
  },
  {
    id: "mahfaz-jan-hotel",
    title: "Mahfaz Jan Hotel",
    titleAr: "فندق محفظ جان",
    image: "/projects/mahfaz-jan-2.jpg",
    year: 2024,
    location: "Al Azizyah, Makkah",
    locationAr: "العزيزية، مكة المكرمة",
    description:
      "Modern hotel project in Al Azizyah, Makkah featuring extensive curtain wall glazing and facade cladding installation.",
    descriptionAr:
      "مشروع فندقي حديث في العزيزية، مكة المكرمة يتميز بتركيب جدران زجاجية ستائرية واسعة وتكسية واجهات.",
    gallery: [
      "/projects/mahfaz-jan-1.jpg",
      "/projects/mahfaz-jan-2.jpg",
    ],
    scope: [
      "Curtain Wall Glazing",
      "Facade Cladding",
    ],
    scopeAr: [
      "الجدران الزجاجية الستائرية",
      "تكسية الواجهات",
    ],
  },
  {
    id: "masharif-alazizyah-hotel",
    title: "Masharif AlAzizyah Hotel",
    titleAr: "فندق مشارف العزيزية",
    image: "/projects/masharif-alazizyah-1.jpg",
    year: 2024,
    location: "Al Azizyah, Makkah",
    locationAr: "العزيزية، مكة المكرمة",
    description:
      "Hotel project in Al Azizyah, Makkah featuring traditional facade design with decorative stone cladding and ornamental vertical strips.",
    descriptionAr:
      "مشروع فندقي في العزيزية، مكة المكرمة يتميز بتصميم واجهة تقليدي مع تكسية حجرية زخرفية وشرائط رأسية تزيينية.",
    gallery: [
      "/projects/masharif-alazizyah-1.jpg",
      "/projects/masharif-alazizyah-2.jpg",
      "/projects/masharif-alazizyah-3.jpg",
      "/projects/masharif-alazizyah-4.jpg",
      "/projects/masharif-alazizyah-5.jpg",
    ],
    scope: [
      "Stone Facade Cladding",
      "Decorative Vertical Strips",
      "Window Frames Installation",
    ],
    scopeAr: [
      "تكسية واجهات حجرية",
      "شرائط رأسية زخرفية",
      "تركيب إطارات النوافذ",
    ],
  },
]
