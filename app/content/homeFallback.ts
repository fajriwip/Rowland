/**
 * Hardcoded content pulled from the Figma design (node-id=25-935), used as the
 * fallback whenever a Storyblok field is empty. See docs/adr/0001.
 */

export const profile = {
  photo: "/images/profile-photo.png",
  name: "Oliver Rowland",
  position: "Full Stack Developer",
  tagline: "Focused on high-performance web development, clean interfaces, and reliable backend systems.",
  signature: "/images/signature.svg",
  location: "Houston, Texas",
  yearsExperience: "5+ years experience",
  availability: "Open to remote work",
  cvFile: "",
  email: "hello@oliverrowland.dev",
  socialLinks: [
    { platform: "linkedin", url: "https://linkedin.com" },
    { platform: "x", url: "https://x.com" },
    { platform: "facebook", url: "https://facebook.com" },
  ],
};

export const hero = {
  illustration: "/images/illustration-hero.svg",
  heading: "Full Stack Developer",
  subheading: "Building scalable web applications with clean architecture, modern tools, and thoughtful user experience.",
  exploreLogos: ["/images/explore-logo-1.png", "/images/explore-logo-2.png", "/images/explore-logo-3.png"],
  exploreLabel: "View Experience",
  exploreLink: "#experience",
};

export const about = {
  heading: "About",
  text: "I'm a full stack developer with experience building web applications focused on performance, scalability, and usability. I specialize in creating responsive frontend interfaces, developing reliable backend systems, and working across the full product development process using modern technologies and clean development practices.",
  skillsLabel: "Key skills:",
  skills: [
    "React & Next.js",
    "Node.js & APIs",
    "Responsive interfaces",
    "Backend architecture",
    "TypeScript",
    "Database management",
    "Performance optimization",
  ],
};

export const experience = {
  heading: "Experience",
  items: [
    {
      logo: "/images/company-logo-northstack.png",
      role: "Senior Full Stack Developer",
      company: "Northstack",
      employmentType: "Full-Time",
      dateRange: "Jan 2025 – Present",
      description: "Leading full-stack development for scalable web applications and reliable digital products across teams.",
      bullets: [
        "Improved platform performance and stability",
        "Built frontend and backend product features",
        "Collaborated with product and engineering teams",
      ],
    },
    {
      logo: "/images/company-logo-northstack.png",
      role: "Full Stack Developer",
      company: "Northstack",
      employmentType: "Full-Time",
      dateRange: "Jan 2023 – Dec 2024",
      description: "Worked on responsive web applications, API integrations, and backend systems using modern frameworks.",
      bullets: [],
    },
    {
      logo: "/images/company-logo-pixelbase.png",
      role: "Frontend Developer",
      company: "Pixelbase",
      employmentType: "Full-Time",
      dateRange: "Apr 2021 – Dec 2022",
      description: "Developed responsive user interfaces and interactive web experiences for client and internal digital products, focusing on usability, accessibility, and performance.",
      bullets: [],
    },
    {
      logo: "/images/company-logo-cloudcore.png",
      role: "Junior Web Developer",
      company: "CloudCore",
      employmentType: "Part-Time",
      dateRange: "Aug 2020 – May 2021",
      description: "Supported frontend and backend development tasks while contributing to modern web projects, maintaining internal systems, and improving workflow efficiency.",
      bullets: [
        "Assisted in developing responsive website interfaces",
        "Worked with REST APIs and backend integrations",
      ],
    },
  ],
};

export const education = {
  heading: "Education",
  items: [
    {
      degree: "Master of Software Engineering",
      school: "Texas State University",
      dateRange: "2018 – 2020",
      description: "Specialized in scalable systems, application architecture, and advanced modern software development.",
    },
    {
      degree: "Bachelor of Computer Science",
      school: "University of Houston",
      dateRange: "2014 – 2018",
      description: "Focused on software engineering, web development, database systems, and application development.",
    },
  ],
};

export const certifications = {
  heading: "Certifications",
  items: [
    {
      logo: "/images/cert-logo-codebridge.png",
      title: "Advanced Web Development",
      issuer: "Codebridge Academy",
      issuedDate: "Issued May 2023",
      link: "#",
    },
    {
      logo: "/images/cert-logo-brightlayer.png",
      title: "Scalable Backend Systems",
      issuer: "BrightLayer",
      issuedDate: "Issued Sep 2022",
      link: "#",
    },
    {
      logo: "/images/cert-logo-devlane.png",
      title: "Full-Stack JavaScript Certification",
      issuer: "Devlane School",
      issuedDate: "Issued Jul 2022",
      link: "#",
    },
  ],
};

export const skills = {
  heading: "Skills",
  skills: [
    "Backend architecture",
    "Cloud deployment",
    "Database management",
    "Git & version control",
    "Node.js & APIs",
    "Performance optimization",
    "Problem solving",
    "React & Next.js",
    "Responsive interfaces",
    "REST API integration",
    "Scalable systems",
    "Team collaboration",
    "Technical documentation",
    "TypeScript",
  ],
  stackLabel: "Technologies & tools:",
  stackLogos: [
    "react",
    "nextjs-icon",
    "nodejs-icon",
    "typescript-icon",
    "javascript",
    "tailwindcss-icon",
    "postgresql",
    "mongodb-icon",
    "docker-icon",
    "github-icon",
    "aws",
  ],
};

export const languages = {
  heading: "Languages",
  items: [
    { flag: "us", name: "English", proficiency: "Native or bilingual proficiency" },
    { flag: "fr", name: "French", proficiency: "Professional working proficiency" },
  ],
};

export const recommendations = {
  heading: "Recommendations",
  items: [
    {
      avatar: "/images/avatar-maya-chen.png",
      name: "Maya Chen",
      role: "Product Manager at Northstack",
      quote: "Oliver brings a strong balance of technical skill, clear communication, and reliable execution. He consistently delivered thoughtful, effective solutions across frontend and backend development tasks.",
      sourceLink: "#",
    },
    {
      avatar: "/images/avatar-daniel-foster.png",
      name: "Daniel Foster",
      role: "Engineering Lead at BrightLayer",
      quote: "Oliver consistently approached projects with strong technical understanding and attention to detail. His ability to solve complex problems and collaborate effectively made him a valuable part of the development team.",
      sourceLink: "#",
    },
  ],
};

export const contact = {
  heading: "Let's Connect",
  subtext: "Currently available for full-time roles, freelance work, and collaborations.",
  contactMethods: [
    { icon: "envelope", label: "Email Me", value: "hello@oliverrowland.dev" },
    { icon: "phone", label: "Call Me", value: "+1 (713) 555-2841" },
  ],
  followLabel: "Join my network:",
  socialLinks: [
    { platform: "linkedin", url: "https://linkedin.com" },
    { platform: "x", url: "https://x.com" },
    { platform: "facebook", url: "https://facebook.com" },
  ],
  illustration: "/images/illustration-contact.svg",
};

export const menu = {
  items: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
  ],
  ctaLabel: "Contact Me",
  ctaHref: "#contact",
};

export const footer = {
  copyright: `© ${new Date().getFullYear()} Rowland`,
  backToTopLabel: "Back to Top",
};
