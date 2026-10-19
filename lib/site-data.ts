export type LinkItem = { label: string; href: string };
export type Product = LinkItem & { category: string; icon: string };

export const contact = {
  phone: "+91 9646049911",
  sales: "+91 9646472008",
  email: "eknoorcctv@gmail.com",
  secondaryEmail: "eknoorcctv@gmail.com",
  address: "Eknoor CCTV, Chandigarh, India",
};

export const solutions = [
  { slug: "home-solutions", title: "Home Solutions", icon: "⌂", services: ["CCTV Camera", "Video Door Phone", "Alarm Security System", "Intercom / EPABX", "Projectors", "Smart door locks", "Sliding gate motor", "Wireless / wired networking", "Sensor Lights", "Remote Control Switches"] },
  { slug: "office-solutions", title: "Office Solutions", icon: "▦", services: ["Biometric solution", "CCTV Camera", "Access control system", "Alarm Security System", "Intercom / EPABX", "Commercial Projectors", "Wireless / Wired networking", "Payroll Solution", "PA System", "Sensor Lights"] },
  { slug: "industrial-solutions", title: "Industrial Solutions", icon: "⚙", services: ["Fire sensor solution", "Payroll system", "CCTV Camera", "Boom Barrier", "Flip flap gate", "Mirror Convex", "Walkie Talkie", "Guard Monitoring System", "Safety Shoes / Jacket", "Speed Breaker / Parking Post", "Turnstiles Gate"] },
  { slug: "society-commercial-space-solutions", title: "Society & Commercial Space", icon: "▤", services: ["Fire sensor solution", "People counting Machine", "Baggage Scanner", "Public addressable system", "CCTV Camera", "Access Point for Wi-Fi", "Wireless Lift camera solution", "POS billing Machine", "Guard Monitoring System", "ANPR camera solution"] },
  { slug: "educational-solutions", title: "Educational Solutions", icon: "◇", services: ["Fire sensor", "Biometric", "Canteen Token", "Public Addressable System", "Hand Metal Detector", "GPS", "Commercial Projectors", "Access Point for Wi-Fi", "Mirror Convex", "CCTV Camera", "Walkie Talkie", "DFMD"] },
  { slug: "hospitality-solutions", title: "Hospitality Solutions", icon: "✦", services: ["Biometric Solution", "Access Control System", "Intrusion Alarm Security System", "CCTV Camera", "Public Addressable System", "Intercom / EPABX", "Commercial Projectors", "Wireless Router / Wired networking", "Sensor Lights", "Digital Signage Display", "Fire Exhauster", "Hand Metal Detector"] },
];

export const products: Product[] = [
  { label: "MDVR Solutions", href: "/mdvr-solutions", category: "CCTV", icon: "BUS" },
  { label: "Analog & IP Camera", href: "/analog-ip-camera", category: "CCTV", icon: "CAM" },
  { label: "WI-Fi Camera", href: "/wifi-camera", category: "CCTV", icon: "WIFI" },
  { label: "4G Sim Based Camera", href: "/4g-camera", category: "CCTV", icon: "4G" },
  { label: "PTZ Camera", href: "/ptz-camera", category: "CCTV", icon: "PTZ" },
  { label: "ANPR Camera", href: "/anpr-camera", category: "CCTV", icon: "ANPR" },
  { label: "Door Access Control", href: "/door-access-control", category: "Access Control", icon: "DOOR" },
  { label: "Smart Door Lock", href: "/smart-door-lock", category: "Access Control", icon: "LOCK" },
  { label: "Video Door Phone", href: "/video-door-phone", category: "Access Control", icon: "VDP" },
  { label: "Biometric", href: "/biometric", category: "Access Control", icon: "BIO" },
  { label: "Hotel Door Lock", href: "/hotel-door-lock", category: "Access Control", icon: "HOTEL" },
  { label: "Wired Network & Optical Fiber", href: "/wired-network-optical-fiber-solution", category: "Networking", icon: "LAN" },
  { label: "Wireless Solutions", href: "/wireless-solutions", category: "Networking", icon: "WLAN" },
  { label: "Intercom / EPABX", href: "/intercom-epabx", category: "Communication", icon: "PBX" },
  { label: "Walkie Talkie", href: "/walkie-talkie", category: "Communication", icon: "RADIO" },
  { label: "PA System", href: "/pa-system", category: "Communication", icon: "PA" },
  { label: "Fire Sensor System", href: "/fire-sensor-system", category: "Security", icon: "FIRE" },
  { label: "Door Frame Metal Detector", href: "/door-frame-metal-detector", category: "Security", icon: "DFMD" },
  { label: "Instrusion Alarm System", href: "/instrusion-alarm-system", category: "Security", icon: "ALARM" },
  { label: "Automatic Gate Motor", href: "/automatic-gate-motor", category: "Automation", icon: "GATE" },
  { label: "Boom Barrier", href: "/boom-barrier", category: "Automation", icon: "BOOM" },
  { label: "Gate Barrier", href: "/gate-barrier", category: "Automation", icon: "ENTRY" },
  { label: "Smart Light Sensor System", href: "/smart-light-sensor-system", category: "Automation", icon: "LIGHT" },
  { label: "Road Safety Products", href: "/road-safety-products", category: "Road Safety Products", icon: "SAFE" },
  { label: "Projector & LED TV", href: "/projector-led-tv", category: "Screens", icon: "LED" },
  { label: "Signage TV", href: "/signage-tv", category: "Screens", icon: "SIGN" },
  { label: "Interactive Panel", href: "/interactive-panel", category: "Screens", icon: "PANEL" },
];

export const productCategories = ["CCTV", "Access Control", "Networking", "Communication", "Security", "Automation", "Road Safety Products", "Screens", "GPS"];

export const heroSlides = [
  { eyebrow: "Welcome To Eknoor CCTV", line1: "ADVANCED", accent: "CCTV & SECURITY SOLUTIONS", line2: "FOR EVERY SPACE", scene: "monitoring" },
  { eyebrow: "Welcome To Eknoor CCTV", line1: "ADVANCED", accent: "CCTV & SECURITY SOLUTIONS", line2: "FOR OFFICE SPACE", scene: "office" },
  { eyebrow: "Welcome To Eknoor CCTV", line1: "ADVANCED", accent: "CCTV & SECURITY SOLUTIONS", line2: "FOR SOCIETY", scene: "society" },
  { eyebrow: "Welcome To Eknoor CCTV", line1: "ADVANCED", accent: "CCTV & SECURITY SOLUTIONS", line2: "FOR EDUCATIONAL SPACE", scene: "education" },
];

export const testimonials = [
  { name: "Aseem bakshi", text: "I got CCTV cameras installed at my residence in Chd. Their work professional and genuine. They provide proper billing invoice with details of product and warranty. Am happy with their work." },
  { name: "Espia Yash", text: "I m very happy to deal with this company. All the product i used are very good and in best prices of market. The installation team and their service team is so good. And their response time is excellent." },
  { name: "Saurabh Arora", text: "Very professional and prompt service. On phone solutions and easy interface to use for all age groups. Setting one of the best examples for customer service. Recommend to go for for this company. Thank you" },
  { name: "Ravinder kumar", text: "The installation team and service team are responsive, professional and helpful." },
];

export const brands = ["Honeywell", "Dahua", "Panasonic", "AJAX", "HIKVISION", "TP-Link", "Godrej", "Western Digital", "CP PLUS", "TOSHIBA", "D-Link", "OZONE", "Secureye", "onetouch", "MATRIX"];

export const clientGroups: Record<string, string[]> = {
  Industrial: ["DULEVO", "BLUE STAR", "Filtration System", "Lion Services", "StockHolding", "Cosmic Healers", "Wipro", "The Indian Express", "Peninsula Data", "Maven Wave", "Metallite", "Secure Industries"],
  Society: ["Metro Town", "Piccadily", "Urban Estate", "Green Enclave", "City Homes", "Sunrise Society"],
  Pharma: ["Immunetic", "HealthCorp", "Medline", "Bio Labs", "Care Plus", "Pharma One"],
  Educational: ["SRM", "ITBP Academy", "City College", "Scholars Hub", "Public School", "Learning Tree"],
  "Malls & Commercial": ["Flipkart", "Metro Mall", "Business Park", "Market Square", "Central Plaza", "Retail Hub"],
  Hospitality: ["Piccadily", "Grand Stay", "City Hotel", "Royal Inn", "Park Suites", "Hospitality Group"],
  More: ["Brother Gym", "ITBP", "StockHolding", "Indian Express", "Maven", "Wipro"],
};

export const aboutParagraphs = [
  "Eknoor CCTV has been providing CCTV installation, access control, networking, automation and security solutions since 2013. We design, build and maintain stand-alone and integrated security systems.",
  "We provide full turnkey solutions - taking customer requirements, designing the concept, selecting the right products, and completing the installation with professional service.",
  "From development and design through installation and ongoing maintenance, we are a true partner, creating reliable security solutions that meet our customers' needs.",
];

export const allPublicSlugs = ["about-us", "contact-us", ...solutions.map((solution) => solution.slug), ...products.map((product) => product.href.slice(1))];
