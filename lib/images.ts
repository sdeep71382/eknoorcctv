export type ImageAsset = {
  slug: string;
  category: string;
  images: string[]; // local paths under /images/
  alt?: string[];
};

export const pageImages: Record<string, ImageAsset[]> = {
  // Homepage hero slides and section images
  "/": [
    {
      slug: "/",
      category: "homepage",
      images: [
        "/images/homepage/ChatGPT-Image-Feb-5-2026-12_24_15-PM-1024x683.png",
        "/images/homepage/ChatGPT-Image-Feb-5-2026-12_29_27-PM-1024x683.png",
        "/images/homepage/ChatGPT-Image-Feb-4-2026-04_27_53-PM-1024x683.png",
        "/images/homepage/ChatGPT-Image-Feb-4-2026-01_23_27-PM-1024x683.png",
      ],
      alt: [
        "Home security installation",
        "Office CCTV camera setup",
        "Security camera system",
        "Gate automation system",
      ],
    },
  ],

  homepage: [
    {
      slug: "/",
      category: "homepage",
      images: [
        "/images/homepage/ChatGPT-Image-Feb-5-2026-12_24_15-PM-1024x683.png",
        "/images/homepage/ChatGPT-Image-Feb-5-2026-12_29_27-PM-1024x683.png",
        "/images/homepage/ChatGPT-Image-Feb-4-2026-04_27_53-PM-1024x683.png",
        "/images/homepage/ChatGPT-Image-Feb-4-2026-01_23_27-PM-1024x683.png",
      ],
      alt: [
        "Home security installation",
        "Office CCTV camera setup",
        "Security camera system",
        "Gate automation system",
      ],
    },
  ],

  // About page
  "/about-us": [
    {
      slug: "/about-us",
      category: "about-us",
      images: [
        "/images/about-us/mission-1024x683.png",
        "/images/about-us/commitment-2-1024x683.png",
      ],
      alt: ["Eknoor CCTV mission", "Eknoor CCTV commitment"],
    },
  ],

  // Solutions
  "/home-solutions": [
    {
      slug: "/home-solutions",
      category: "home-solutions",
      images: [
        "/images/home-solutions/ChatGPT-Image-Feb-5-2026-12_24_15-PM-1024x683.png",
      ],
      alt: ["Home security solutions"],
    },
  ],
  "/office-solutions": [
    {
      slug: "/office-solutions",
      category: "office-solutions",
      images: [
        "/images/office-solutions/ChatGPT-Image-Feb-5-2026-12_29_27-PM-1024x683.png",
        "/images/office-solutions/ChatGPT-Image-Feb-13-2026-10_41_26-AM-1024x683.png",
        "/images/office-solutions/Fire-Exhauster-1024x683.png",
      ],
      alt: ["Office security", "Office surveillance", "Fire safety"],
    },
  ],
  "/industrial-solutions": [
    {
      slug: "/industrial-solutions",
      category: "industrial-solutions",
      images: [
        "/images/industrial-solutions/ChatGPT-Image-Feb-4-2026-01_56_18-PM-1024x683.png",
        "/images/industrial-solutions/Mirror-Convex-1024x683.png",
        "/images/industrial-solutions/Parking-Post-1024x683.png",
        "/images/industrial-solutions/cone-1024x683.png",
      ],
      alt: ["Industrial security", "Convex mirror", "Parking post", "Traffic cone"],
    },
  ],
  "/society-commercial-space-solutions": [
    {
      slug: "/society-commercial-space-solutions",
      category: "society-commercial-space-solutions",
      images: [
        "/images/society-commercial-space-solutions/ChatGPT-Image-Feb-13-2026-12_05_52-PM-1024x683.png",
        "/images/society-commercial-space-solutions/ChatGPT-Image-Feb-13-2026-12_21_16-PM-1024x683.png",
      ],
      alt: ["Society security", "Commercial space surveillance"],
    },
  ],
  "/educational-solutions": [
    {
      slug: "/educational-solutions",
      category: "educational-solutions",
      images: [
        "/images/educational-solutions/ChatGPT-Image-Feb-13-2026-01_41_32-PM-1024x683.png",
        "/images/educational-solutions/ChatGPT-Image-Feb-4-2026-01_05_17-PM-1024x683.png",
      ],
      alt: ["Educational security", "School surveillance"],
    },
  ],
  "/hospitality-solutions": [
    {
      slug: "/hospitality-solutions",
      category: "hospitality-solutions",
      images: [
        "/images/hospitality-solutions/ChatGPT-Image-Feb-13-2026-06_10_01-PM-1024x683.png",
        "/images/hospitality-solutions/ChatGPT-Image-Feb-13-2026-06_07_57-PM-1024x683.png",
      ],
      alt: ["Hospitality security", "Hotel surveillance"],
    },
  ],

  // Products
  "/analog-ip-camera": [
    {
      slug: "/analog-ip-camera",
      category: "analog-ip-camera",
      images: [
        "/images/analog-ip-camera/ChatGPT-Image-Feb-17-2026-04_03_58-PM-1024x683.png",
        "/images/analog-ip-camera/ChatGPT-Image-Feb-17-2026-04_11_26-PM-1024x683.png",
      ],
      alt: ["Analog camera", "IP camera"],
    },
  ],
  "/wifi-camera": [
    {
      slug: "/wifi-camera",
      category: "wifi-camera",
      images: ["/images/wifi-camera/ChatGPT-Image-Feb-18-2026-06_19_02-PM-1024x683.png"],
      alt: ["WiFi camera"],
    },
  ],
  "/door-access-control": [
    {
      slug: "/door-access-control",
      category: "door-access-control",
      images: ["/images/door-access-control/door-access.jpg"],
      alt: ["Door access control"],
    },
  ],
  "/video-door-phone": [
    {
      slug: "/video-door-phone",
      category: "video-door-phone",
      images: ["/images/video-door-phone/ChatGPT-Image-Mar-6-2026-01_52_03-PM.png"],
      alt: ["Video door phone"],
    },
  ],
  "/biometric": [
    {
      slug: "/biometric",
      category: "biometric",
      images: ["/images/biometric/Focused-on-facial-recognition-technology.png"],
      alt: ["Biometric access"],
    },
  ],
  "/wireless-solutions": [
    {
      slug: "/wireless-solutions",
      category: "wireless-solutions",
      images: [
        "/images/wireless-solutions/wi-fi-1024x683.png",
        "/images/wireless-solutions/Mesh-Wi-Fi-System-1024x683.png",
        "/images/wireless-solutions/Access-Point-1024x683.png",
        "/images/wireless-solutions/Point-to-Point-P2P-1024x683.png",
      ],
      alt: ["WiFi", "Mesh WiFi", "Access point", "Point to point"],
    },
  ],
  "/intercom-epabx": [
    {
      slug: "/intercom-epabx",
      category: "intercom-epabx",
      images: ["/images/intercom-epabx/ChatGPT-Image-Feb-4-2026-12_49_14-PM.png"],
      alt: ["Intercom EPABX"],
    },
  ],
  "/walkie-talkie": [
    {
      slug: "/walkie-talkie",
      category: "walkie-talkie",
      images: ["/images/walkie-talkie/ChatGPT-Image-Feb-4-2026-01_09_20-PM.png"],
      alt: ["Walkie talkie"],
    },
  ],
  "/automatic-gate-motor": [
    {
      slug: "/automatic-gate-motor",
      category: "automatic-gate-motor",
      images: ["/images/automatic-gate-motor/ChatGPT-Image-Feb-4-2026-01_23_27-PM.png"],
      alt: ["Automatic gate motor"],
    },
  ],
  "/boom-barrier": [
    {
      slug: "/boom-barrier",
      category: "boom-barrier",
      images: ["/images/boom-barrier/ChatGPT-Image-Feb-4-2026-01_33_56-PM.png"],
      alt: ["Boom barrier"],
    },
  ],
  "/gate-barrier": [
    {
      slug: "/gate-barrier",
      category: "gate-barrier",
      images: [
        "/images/gate-barrier/tripode.jpg",
        "/images/gate-barrier/Full-Height.jpg",
        "/images/gate-barrier/Flap-Barrier.jpg",
        "/images/gate-barrier/Swing-Gate.jpg",
      ],
      alt: ["Tripod turnstile", "Full height turnstile", "Flap barrier", "Swing gate"],
    },
  ],
  "/road-safety-products": [
    {
      slug: "/road-safety-products",
      category: "road-safety-products",
      images: [
        "/images/road-safety-products/2869210_5715-1536x1367.jpg",
        "/images/road-safety-products/Rubber-Safety-Gloves.webp",
        "/images/road-safety-products/Safety-Shoes.webp",
        "/images/road-safety-products/light-Helmet.webp",
      ],
      alt: ["Road safety", "Safety gloves", "Safety shoes", "Safety helmet"],
    },
  ],
  "/interactive-panel": [
    {
      slug: "/interactive-panel",
      category: "interactive-panel",
      images: ["/images/interactive-panel/ChatGPT-Image-Feb-9-2026-05_07_59-PM.png"],
      alt: ["Interactive panel"],
    },
  ],
  "/fire-sensor-system": [
    {
      slug: "/fire-sensor-system",
      category: "fire-sensor-system",
      images: ["/images/fire-sensor-system/ChatGPT-Image-Feb-4-2026-12_44_14-PM.png"],
      alt: ["Fire sensor system"],
    },
  ],
  "/instrusion-alarm-system": [
    {
      slug: "/instrusion-alarm-system",
      category: "instrusion-alarm-system",
      images: ["/images/instrusion-alarm-system/ChatGPT-Image-Feb-4-2026-12_56_25-PM.png"],
      alt: ["Intrusion alarm system"],
    },
  ],
};

// Brand logos for the brands section (b1-b15)
export const brandLogoImages = [
  "/images/homepage/b1.png",
  "/images/homepage/b2.png",
  "/images/homepage/b3.png",
  "/images/homepage/b4.png",
  "/images/homepage/b5.png",
  "/images/homepage/b6.png",
  "/images/homepage/b7.png",
  "/images/homepage/b8.png",
  "/images/homepage/b9.png",
  "/images/homepage/b10.png",
  "/images/homepage/b11.png",
  "/images/homepage/b12.png",
  "/images/homepage/b13.png",
  "/images/homepage/b14.png",
  "/images/homepage/b15.png",
];

// Client logo tiles for the clients section (c1-c28)
export const clientLogoImages = [
  "/images/homepage/c1.png",
  "/images/homepage/c2.png",
  "/images/homepage/c3.png",
  "/images/homepage/c4.png",
  "/images/homepage/c5.png",
  "/images/homepage/c6.png",
  "/images/homepage/c7.png",
  "/images/homepage/c8.png",
  "/images/homepage/c9.png",
  "/images/homepage/c10.png",
  "/images/homepage/c11.png",
  "/images/homepage/c19.png",
  "/images/homepage/c20.png",
  "/images/homepage/c22.png",
  "/images/homepage/c25.png",
  "/images/homepage/c28.png",
];

// Homepage section images
export const homepageImages = {
  logo: "/images/homepage/logo-png-3-1536x388.png",
  hero1: "/images/homepage/ChatGPT-Image-Feb-5-2026-12_24_15-PM-1024x683.png",
  hero2: "/images/homepage/ChatGPT-Image-Feb-5-2026-12_29_27-PM-1024x683.png",
  hero3: "/images/homepage/ChatGPT-Image-Feb-4-2026-04_27_53-PM-1024x683.png",
  hero4: "/images/homepage/ChatGPT-Image-Feb-4-2026-01_23_27-PM-1024x683.png",
  aboutInstallation:
    "/images/homepage/ChatGPT-Image-Feb-4-2026-01_02_24-PM-1024x683.png",
  aboutMonitoring:
    "/images/homepage/ChatGPT-Image-Feb-4-2026-12_36_42-PM-1024x683.png",
  whatsappBanner: "/images/homepage/whatsapp-complain-1.png",
  skyHero: "/images/homepage/sky-1024x576.png",
};
