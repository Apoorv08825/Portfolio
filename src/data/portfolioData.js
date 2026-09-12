export const personalInfo = {
  name: "Apoorv Suryawanshi",
  role: "Computer Science & Engineering Student",
  institution: "Lovely Professional University",
  status: "CSE Student • Developer • Builder",
  location: "Phagwara, Punjab, India",
  email: "apoorv08825@gmail.com",
  phone: "+91 9685639904",
  github: "https://github.com/Apoorv08825",
  linkedin: "https://www.linkedin.com/in/apoorv088",
  resumePdf: "/Apoorv_Suryawanshi_Resume.pdf",
  resumeDocx: "/APOORV_CV.docx",
  
  hero: {
    eyebrow: "COMPUTER SCIENCE • SOFTWARE • AI/ML",
    headline: "Turning ideas into things that actually work.",
    subtext: "A Computer Science & Engineering student building practical software across Android, AI/ML, security, and full-stack development.",
    whoami: "Apoorv Suryawanshi",
    focus: "Software • AI/ML • Android",
    currently: "Building & learning"
  },

  about: {
    lead: "I am a Computer Science & Engineering student at Lovely Professional University passionate about building practical software systems, developing native Android solutions, and experimenting with applied Machine Learning.",
    narrative: "My journey centers around the engineering loop: understanding the core problem, designing clean architecture, and building tools that deliver measurable utility. Whether developing emergency response mobile platforms with location-aware dispatch, modeling Bitcoin volatility with Scikit-learn, or designing cryptographic authentication pipelines, I value software that is robust, accessible, and grounded in real-world logic.",
    traits: [
      {
        id: "01",
        title: "Developer",
        category: "BUILD",
        description: "Writing structured, maintainable code across C++, Python, Java, and Kotlin with strong foundational practices in OOP and system design."
      },
      {
        id: "02",
        title: "Builder",
        category: "BUILD",
        description: "Turning concepts into deployable digital products—from bilingual disaster relief Android apps to interactive ML forecasting dashboards."
      },
      {
        id: "03",
        title: "Learner",
        category: "EXPLORE",
        description: "Continuously deepening technical expertise through verified certifications in Oracle Cloud AI, Infosys DBMS, and advanced mobile frameworks."
      },
      {
        id: "04",
        title: "Problem Solver",
        category: "SOLVE",
        description: "Approaching challenges methodically with analytical decomposition, algorithmic thinking, and rigorous error handling."
      }
    ]
  }
};

export const skillsData = {
  languages: [
    { name: "C++", level: "Core", projects: ["General Systems", "Problem Solving"] },
    { name: "Python", level: "Core", projects: ["CryptoSight SaaS", "ML Pipelines"] },
    { name: "Java", level: "Core", projects: ["Android Development", "OOP Systems"] }
  ],
  toolsAndPlatforms: [
    { name: "Google Colab", category: "ML Research", projects: ["CryptoSight SaaS"] },
    { name: "Kaggle", category: "Data Science", projects: ["CryptoSight SaaS"] },
    { name: "Vercel", category: "Deployment", projects: ["Secure Authentication Framework", "Web Apps"] },
    { name: "Firebase", category: "Backend & Auth", projects: ["ResQMap", "Android Apps"] },
    { name: "Android Studio", category: "Mobile IDE", projects: ["ResQMap", "Training"] }
  ],
  softSkills: [
    { name: "Problem-Solving", description: "Structured analytical thinking and algorithmic debugging" },
    { name: "Team Player", description: "Collaborative mindset across technical workflows" },
    { name: "Adaptability", description: "Quick adjustment to evolving tech stacks and environments" },
    { name: "Quick Learner", description: "Rapid grasp of new APIs, frameworks, and domain concepts" }
  ]
};

export const projectsData = [
  {
    id: "resqmap",
    number: "01",
    name: "ResQMap",
    tagline: "Centralized Emergency Response & SOS Android Application",
    badge: "Android • Emergency System",
    category: "BUILD",
    date: "Jul 2026",
    technologies: ["Kotlin", "XML", "Firebase Auth", "Firebase Cloud Storage", "GPS API", "Android Intents"],
    shortDescription: "A centralized emergency response Android application designed to simplify disaster reporting, SOS communication, and access to relief centres through a single intuitive platform.",
    accentColor: "rose",
    
    keyFeatures: [
      "Firebase Authentication for secure citizen access",
      "GPS-based automatic location detection with high accuracy",
      "Manual location entry fallback for low-signal zones",
      "Firebase cloud storage for incident multimedia & data",
      "Structured incident reporting pipeline with categorization",
      "Android Intent-based instant SOS communication",
      "Bilingual user interface supporting Hindi & English",
      "Location-aware reporting with status and timestamp tracking",
      "User-confirmed SOS messaging to prevent accidental triggers",
      "Foundation for real-time emergency alert and service dispatch"
    ],

    deepDive: {
      problem: "During disasters and critical emergencies, citizens often face fragmented reporting channels, language barriers, and difficulties in conveying precise coordinates to rescue teams, delaying relief dispatch.",
      solution: "Engineered ResQMap as an integrated mobile response application providing bilingual emergency reporting, automatic GPS positioning, and confirmed SOS message generation via native Android Intents.",
      implementation: "Developed natively in Android Studio using Kotlin and XML layouts. Integrated Firebase Authentication for user accounts, Firebase Cloud Storage for incident data, and Android Location Services for GPS telemetry.",
      outcome: "Successfully established a reliable, bilingual mobile architecture with location-aware incident logs, report status tracking, and safe SOS confirmation workflows."
    },
    githubUrl: "https://github.com/Apoorv08825",
    image: "/projects/resqmap.png",
    demoUrl: "/ResQMap.apk",
    liveUrl: "/ResQMap.apk",
    demoLabel: "Download APK",
    isDownload: true,
    downloadName: "ResQMap.apk"
  },
  {
    id: "cryptosight",
    number: "02",
    name: "CryptoSight SaaS",
    tagline: "ML-Powered Cryptocurrency Analytics & Forecasting System",
    badge: "Machine Learning • Analytics",
    category: "SOLVE",
    date: "May 2026",
    technologies: ["Python", "JavaScript", "Google Colab", "Scikit-learn", "React", "Vite"],
    shortDescription: "An ML-powered cryptocurrency analytics system to analyze historical Bitcoin data and support data-driven market analysis through price prediction, trend identification, volatility analysis, and investor profiling.",
    accentColor: "emerald",

    keyFeatures: [
      "End-to-end ML pipeline built with Python and Scikit-learn",
      "Regression models for continuous price trend analysis",
      "Random Forest & AdaBoost ensemble methods for predictive accuracy",
      "K-Means clustering for behavioral investor segmentation",
      "Next-day price prediction & 7-day multi-horizon forecasting",
      "Automated volatility classification and market risk tiers",
      "CSV-based historical Bitcoin dataset processing",
      "API-independent interactive analytics platform built with React & Vite",
      "Consistent offline market predictions without API rate limits or latency"
    ],

    deepDive: {
      problem: "Cryptocurrency market volatility creates substantial risk for retail participants, while external financial APIs often suffer from rate limits, high latency, and abrupt downtime during peak volatility.",
      solution: "Constructed CryptoSight SaaS as an API-independent analytics platform utilizing trained Scikit-learn models over curated historical Bitcoin datasets to deliver continuous forecasting and risk clustering.",
      implementation: "Designed the machine learning workflow in Google Colab using Scikit-learn (Linear Regression, Random Forest, AdaBoost, and K-Means). Exported model parameters and integrated them into a fast, responsive React and Vite interface for instant visual exploration.",
      outcome: "Delivered a self-contained analytics dashboard providing reliable 7-day price trajectories, volatility risk scoring, and investor behavioral profiling without third-party API dependencies."
    },
    githubUrl: "https://github.com/Apoorv08825",
    image: "/projects/cryptosight.png",
    demoUrl: "https://mlproject-lyart-one.vercel.app/",
    liveUrl: "https://mlproject-lyart-one.vercel.app/",
    demoLabel: "Live Demo",
    isDownload: false
  },
  {
    id: "secure-auth",
    number: "03",
    name: "Secure Authentication Framework for Operating Systems",
    tagline: "Production-Style Full-Stack Authentication & Security Monitoring",
    badge: "Security • Full-Stack",
    category: "EXPLORE",
    date: "Apr 2026",
    technologies: ["React", "Tailwind CSS", "Supabase", "Node.js", "JWT", "TOTP MFA", "bcrypt"],
    shortDescription: "A production-style full-stack authentication system to provide secure user authentication, session management, and protection against common authentication threats using React, Node.js, and Supabase.",
    accentColor: "indigo",

    keyFeatures: [
      "Cryptographically secure JWT-based session management",
      "Time-based One-Time Password (TOTP) multi-factor authentication",
      "bcrypt salted credential verification on backend services",
      "Instant server-side session revocation & token invalidation",
      "Active attack detection simulating brute-force & credential stuffing defense",
      "Immutable audit logging tracking IP, timestamp, and auth status",
      "Real-time security monitoring dashboard with event inspection",
      "Responsive user interface styled with Tailwind CSS"
    ],

    deepDive: {
      problem: "Standard authentication implementations often lack multi-factor defenses, server-side session revocation capabilities, and real-time visibility into unauthorized access attempts.",
      solution: "Developed a comprehensive security framework simulating operating system-level user authentication with TOTP MFA, instant session revocation, and continuous attack telemetry.",
      implementation: "Engineered frontend with React and Tailwind CSS; connected to Node.js and Supabase backend services. Structured JWT validation lifecycle, TOTP verification routines, and granular audit log event pipelines.",
      outcome: "Demonstrated a robust security architecture capable of detecting anomalous login patterns, enforcing MFA, and allowing administrators to immediately revoke active sessions."
    },
    githubUrl: "https://github.com/Apoorv08825",
    image: "/projects/secure-auth.png",
    demoUrl: "https://os-authenticator.vercel.app/",
    liveUrl: "https://os-authenticator.vercel.app/",
    demoLabel: "Live Demo",
    isDownload: false
  }
];

export const trainingData = [
  {
    role: "Android Development using Kotlin",
    institution: "Lovely Professional University (LPU)",
    period: "Jun 2026 – Jul 2026",
    type: "Summer Training & Specialization",
    description: "Intensive training program focused on native Android architecture, modern UI design, and cloud synchronization.",
    highlights: [
      "Developed native Android applications using Kotlin and Android Studio with XML layouts.",
      "Implemented core Android architecture including Activity Lifecycle, navigation components, explicit/implicit intents, and event handling.",
      "Integrated Firebase services and REST APIs for user authentication, cloud database synchronization, and real-time application features."
    ],
    skillsLearned: ["Kotlin", "Android Studio", "XML", "Activity Lifecycle", "Intents", "Firebase", "APIs"]
  }
];

export const certificationsData = [
  {
    id: "lpu-android",
    title: "Android for Beginners: Build Your First App!",
    issuer: "Lovely Professional University",
    date: "Jul 2026",
    badge: "Mobile Development",
    description: "Official Certificate of Merit (Grade O — Outstanding 90%+) awarded by Centre for Professional Enhancement for native Android development.",
    image: "/certificates/lpu-android.png",
    pdf: "/certificates/lpu-android.pdf",
    certNo: "489473",
    regNo: "12412593",
    grade: "Grade O (90%+)",
    verificationUrl: null
  },
  {
    id: "infosys-dbms1",
    title: "Database Management System Part - 1",
    issuer: "Infosys Springboard",
    date: "Jul 2026",
    badge: "Database Systems",
    description: "Official course completion certification covering relational database principles, SQL querying, ER modeling, and relational schema normalization.",
    image: "/certificates/infosys-dbms1.png",
    pdf: "/certificates/infosys-dbms1.pdf",
    verificationUrl: "https://verify.onwingspan.com"
  },
  {
    id: "infosys-dbms2",
    title: "Database Management System Part - 2",
    issuer: "Infosys Springboard",
    date: "Aug 2026",
    badge: "Database Systems",
    description: "Official course completion certification covering transaction processing, concurrency control, ACID properties, and database optimization.",
    image: "/certificates/infosys-dbms2.png",
    pdf: "/certificates/infosys-dbms2.pdf",
    verificationUrl: "https://verify.onwingspan.com"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology — Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "Aug 2026 – Present",
    score: "CGPA: 7.41",
    highlights: [
      "Core focus in Data Structures, Algorithms, Operating Systems, Database Systems, and Object-Oriented Programming.",
      "Hands-on project work in Android engineering, Machine Learning pipelines, and full-stack web applications."
    ]
  },
  {
    degree: "Higher Secondary Certificate (XII)",
    institution: "First Step Higher Secondary School",
    location: "Chhindwara, Madhya Pradesh",
    period: "Mar 2022 – May 2023",
    score: null,
    highlights: [
      "Rigorous coursework in Mathematics, Physics, Chemistry, and Physical Education."
    ]
  }
];
