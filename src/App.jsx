import { useState, useEffect } from "react";
import hero from "./assets/hero.png";
import logo from "./assets/logo.png";

function App() {
  const [openSkills, setOpenSkills] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [showVideo, setShowVideo] = useState(false);
  const [showTaskGallery, setShowTaskGallery] = useState(false);
  const [taskIndex, setTaskIndex] = useState(0);
  const [coffeeIndex, setCoffeeIndex] = useState(0);
  const [showCoffeeGallery, setShowCoffeeGallery] = useState(false);
  const [showManagementGallery, setShowManagementGallery] = useState(false);
  const [managementIndex, setManagementIndex] = useState(0);
  const [showFinanceGallery, setShowFinanceGallery] = useState(false);
  const [financeIndex, setFinanceIndex] = useState(0);
  const coffeeImages = [
  "/projects/coffeeshop/1.png",
  "/projects/coffeeshop/2.png",
  "/projects/coffeeshop/3.png",
  "/projects/coffeeshop/4.png",
  "/projects/coffeeshop/5.png",
  "/projects/coffeeshop/6.png",
  "/projects/coffeeshop/7.png",
  "/projects/coffeeshop/8.png",
];
const taskImages = [
  "/projects/taskapp/1.PNG",
  "/projects/taskapp/2.PNG",
  "/projects/taskapp/3.PNG",
  "/projects/taskapp/4.PNG",
  "/projects/taskapp/5.PNG",
  "/projects/taskapp/6.PNG",
  "/projects/taskapp/7.PNG",
  "/projects/taskapp/8.PNG",
  "/projects/taskapp/9.PNG",
  "/projects/taskapp/10.PNG",
  "/projects/taskapp/11.PNG",
];
const managementImages = [
  "/projects/taskmanagement/1.png",
  "/projects/taskmanagement/2.png",
  "/projects/taskmanagement/3.png",
  "/projects/taskmanagement/4.png",
  "/projects/taskmanagement/5.png",
  "/projects/taskmanagement/6.png",
  "/projects/taskmanagement/8.png",
  "/projects/taskmanagement/9.png",
  "/projects/taskmanagement/10.png",
  "/projects/taskmanagement/11.png",
  "/projects/taskmanagement/12.png",
];
const financeImages = [
  "/projects/finance/1.png",
  "/projects/finance/2.png",
  "/projects/finance/3.png",
  "/projects/finance/4.png",
  "/projects/finance/5.png",
  "/projects/finance/7.png",
  "/projects/finance/8.png",
  "/projects/finance/9.png",
  "/projects/finance/10.png",
  "/projects/finance/11.png",
  "/projects/finance/12.png",
  "/projects/finance/13.png",
  "/projects/finance/14.png",
  "/projects/finance/15.png",
  "/projects/finance/16.png",
  "/projects/finance/17.png",
  "/projects/finance/18.png",
  "/projects/finance/19.png",
  "/projects/finance/20.png",
  "/projects/finance/21.png",
  "/projects/finance/22.png",
  "/projects/finance/23.png",
  "/projects/finance/24.png",
];
  const toggleSkill = (index) => {
    if (openSkills.includes(index)) {
      setOpenSkills(openSkills.filter((item) => item !== index));
    } else {
      setOpenSkills([...openSkills, index]);
    }
  };

  // Scroll spy logic to highlight active nav item
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px 0px -50px 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive UI",
        "Figma",
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Express.js",
        "Laravel",
        "PHP",
        "REST API",
        "JWT Auth",
        "MVC",
        "FAST API"
      ],
    },
    {
      title: "Database & Cloud",
      icon: "🗄️",
      skills: [
        "MongoDB",
        "MySQL",
        "Firebase",
        "MongoDB Atlas",
        "Cloudinary",
      ],
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "Java", "Kotlin", "Bash", "SQL"],
    },
    {
      title: "AI / Computer Vision",
      icon: "🤖",
      skills: [
        "Machine Learning",
        "NLP",
        "TensorFlow",
        "OpenCV",
        "MediaPipe",
      ],
    },
    {
      title: "Tools & Microsoft Stack",
      icon: "🛠️",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "CI/CD",
        "VS Code",
        "Excel",
        "PowerPoint",
        "Word",
      ],
    },
  ];

  const certificates = [
    {
      title: "Introduction to Project Management",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/JMY8DF3HM05V",
      icon: "📘",
    },
    {
      title: "Introduction to Agile Development and Scrum",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/EVMSYSFV7JZ8",
      icon: "⚡",
    },
    {
      title: "IT Service Management & ITIL",
      provider: "Alison",
      link: "https://alison.com/certification/check/a647337a27",
      icon: "🛠️",
    },
    {
      title: "Java Programming: Solving Problems",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/NZTHRZ3HW3RB",
      icon: "☕",
    },
  ];

  const projects = [
    {
      title: "DocSmart with AI Symptom Checker",
      tech: "MERN Stack",
      desc: "AI healthcare platform with chatbot that reads symptoms, suggests suitable doctors and books appointments.",
      link: "https://github.com/Sandali426/DocSmart/tree/Appoitments-related-pages",
    },
    {
      title: "Finance Tracker",
      tech: "Laravel Full Stack",
      desc: "Personal finance management system for income, expenses and budgeting.",
      link: "https://github.com/riyajkm/f-tracker/tree/main",
    },
    {
      title: "PRIMEROSE E-Commerce",
      tech: "MERN Stack",
      desc: "JWT authentication, MongoDB Atlas, Cloudinary and modern shopping UI.",
      link: "https://github.com/Husainiya/PRIMEROSE-E-commerce-Website-Full-stack-",
    },
    {
      title: "Task Reminder Mobile App",
      tech: "Kotlin / Android",
      desc: "Productivity app with reminders, alarms, stopwatch and Room DB.",
      link: "https://github.com/Husainiya/Task-Reminder-App---Kotlin",
    },
    {
      title: "CoffeeShop Website",
      tech: "Html/css Web Development",
      desc: "Stylish responsive coffee shop website with modern UI.",
      link: "https://github.com/Husainiya/CoffeeShop-Website",
    },

    {  
      title: "Task Management Web-App",
      tech: "Laravel Full Stack",
      desc: "Admin assigns tasks, tracks progress, and users view/update tasks efficiently.",
      link: "https://www.linkedin.com/in/hussainiya-hasan123/",
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      {/* Navbar with thin border line under it */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center relative border-b border-gray-700">
        <img
            src={logo}
            alt="Logo"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full shadow-lg shadow-cyan-500/40"
          />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-gray-300">
          <li><a href="#about" className={`transition ${activeSection === "about" ? "text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1" : "hover:text-cyan-400"}`}>About</a></li>
          <li><a href="#skills" className={`transition ${activeSection === "skills" ? "text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1" : "hover:text-cyan-400"}`}>Skills</a></li>
          <li><a href="#projects" className={`transition ${activeSection === "projects" ? "text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1" : "hover:text-cyan-400"}`}>Projects</a></li>
          <li><a href="#certificates" className={`transition ${activeSection === "certificates" ? "text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1" : "hover:text-cyan-400"}`}>Certificates</a></li>
          <li><a href="#contact" className={`transition ${activeSection === "contact" ? "text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1" : "hover:text-cyan-400"}`}>Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 focus:outline-none z-50"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 md:hidden z-40 shadow-xl">
            <ul className="flex flex-col py-4">
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)} className={`block px-6 py-3 transition ${activeSection === "about" ? "bg-slate-800 text-cyan-400" : "hover:bg-slate-800 hover:text-cyan-400"}`}>About</a></li>
              <li><a href="#skills" onClick={() => setMobileMenuOpen(false)} className={`block px-6 py-3 transition ${activeSection === "skills" ? "bg-slate-800 text-cyan-400" : "hover:bg-slate-800 hover:text-cyan-400"}`}>Skills</a></li>
              <li><a href="#projects" onClick={() => setMobileMenuOpen(false)} className={`block px-6 py-3 transition ${activeSection === "projects" ? "bg-slate-800 text-cyan-400" : "hover:bg-slate-800 hover:text-cyan-400"}`}>Projects</a></li>
              <li><a href="#certificates" onClick={() => setMobileMenuOpen(false)} className={`block px-6 py-3 transition ${activeSection === "certificates" ? "bg-slate-800 text-cyan-400" : "hover:bg-slate-800 hover:text-cyan-400"}`}>Certificates</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className={`block px-6 py-3 transition ${activeSection === "contact" ? "bg-slate-800 text-cyan-400" : "hover:bg-slate-800 hover:text-cyan-400"}`}>Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="text-center md:text-left">
         <p className="text-cyan-400 text-base sm:text-lg mb-3 tracking-wide">
            Hi, I'm
          </p>

          {/* Name */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-white">
            Hussainiya <br />
            <span className="text-cyan-400">Hasan</span>
          </h2>

          {/* Role Text */}
          <p className="mt-4 text-lg sm:text-xl text-cyan-200 font-medium">
            Full Stack Developer • AI Enthusiast • Problem Solver
          </p>
          <p className="mt-5 sm:mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed sm:leading-8">
            
            Building modern web applications and intelligent solutions that solve real problems.
          </p>

          <div className="mt-8 sm:mt-10 flex gap-3 sm:gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="#projects"
              className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition text-sm sm:text-base"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl border border-gray-600 hover:bg-white hover:text-black transition text-sm sm:text-base"
            >
              Contact Me
            </a>

            <a
              href="/Hussainiya_Hasan_CV.pdf"
              download
              onClick={() => {
                console.log("CV Download clicked");
              }}
              className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition text-sm sm:text-base"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center md:justify-end z-10">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-2xl animate-pulse"></div>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-cyan-500/30 shadow-2xl">
              <img
                src={hero}
                alt="Hussainiya Hasan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6 sm:mb-8 text-center md:text-left">
          About Me
        </h3>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">

          {/* Main About Card */}
          <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-cyan-400 transition">
            <p className="text-gray-300 text-base sm:text-lg leading-7 sm:leading-8">
              I am a final-year undergraduate at Sri Lanka Institute of
              Information Technology (SLIIT), currently pursuing
              BSc (Hons) in Information Technology.
            </p>
            
            <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-8 mt-4 sm:mt-5">
              I completed my internship as a Software Engineer, where I
              contributed to real-world web applications, development tasks,
              and business solutions in a professional environment.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-8 mt-4 sm:mt-5">
              I am passionate about full stack development, research work,
              AI solutions, and building impactful systems that solve
              real-world problems through technology.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
              <span className="bg-slate-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm">
                Full Stack Developer
              </span>
              <span className="bg-slate-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm">
                Software Engineer Intern
              </span>
              <span className="bg-slate-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm">
                Research Enthusiast
              </span>
              <span className="bg-slate-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm">
                AI Enthusiast
              </span>
              <span className="bg-slate-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm">
                Open to Opportunities
              </span>
            </div>
          </div>

          {/* Side Card */}
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
            <p className="text-xs sm:text-sm uppercase tracking-widest opacity-80 mb-2 sm:mb-3">
              Quick Info
            </p>

            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Professional Snapshot
            </h4>

            <div className="space-y-3 sm:space-y-4 text-white/90 text-sm sm:text-base">
              <p>🎓 SLIIT University</p>
              <p>📘 BSc (Hons) Information Technology</p>
              <p>💼 Software Engineer Internship</p>
              <p>🤖 AI / Research Interest</p>
              <p>🌍 Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6 sm:mb-8 text-center md:text-left">
          Career Journey
        </h3>

        <p className="text-gray-400 mb-8 sm:mb-12 max-w-3xl text-center md:text-left text-sm sm:text-base">
          A timeline of my academic progress, professional experience,
          and continuous growth in the technology field.
        </p>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Side Timeline */}
          <div className="relative border-l-2 border-cyan-500 ml-3 sm:ml-4 space-y-8 sm:space-y-10">

            {/* Item 1 */}
            <div className="relative pl-8 sm:pl-10">
              <div className="absolute -left-[11px] top-1 w-4 h-4 sm:w-5 sm:h-5 bg-cyan-500 rounded-full"></div>

              <span className="text-cyan-400 font-semibold text-sm sm:text-base">2026 - Present</span>

              <h4 className="text-xl sm:text-2xl font-semibold mt-2">
                Final Year Studies, AI Projects & Career Preparation
              </h4>

              <p className="text-gray-400 mt-2 leading-6 sm:leading-7 text-sm sm:text-base">
                Currently completing my final year degree while building
                AI-based systems, research-focused projects, and preparing
                for graduate opportunities in the tech industry.
              </p>
            </div>

            {/* Item 2 */}
            <div className="relative pl-8 sm:pl-10">
              <div className="absolute -left-[11px] top-1 w-4 h-4 sm:w-5 sm:h-5 bg-cyan-500 rounded-full"></div>

              <span className="text-cyan-400 font-semibold text-sm sm:text-base">2025 - 2026</span>

              <h4 className="text-xl sm:text-2xl font-semibold mt-2">
                Software Engineer Internship
              </h4>

              <p className="text-gray-400 mt-2 leading-6 sm:leading-7 text-sm sm:text-base">
                Completed a 6-month internship, gaining hands-on industry
                experience by contributing to real-world software projects,
                teamwork, and professional development practices.
              </p>
            </div>

            {/* Item 3 */}
            <div className="relative pl-8 sm:pl-10">
              <div className="absolute -left-[11px] top-1 w-4 h-4 sm:w-5 sm:h-5 bg-cyan-500 rounded-full"></div>

              <span className="text-cyan-400 font-semibold text-sm sm:text-base">2023 - 2024</span>

              <h4 className="text-xl sm:text-2xl font-semibold mt-2">
                Academic Growth & Technical Development
              </h4>

              <p className="text-gray-400 mt-2 leading-6 sm:leading-7 text-sm sm:text-base">
                Strengthened programming knowledge, software engineering
                concepts, databases, web technologies, teamwork skills,
                and practical project experience through academic studies.
              </p>
            </div>

            {/* Item 4 */}
            <div className="relative pl-8 sm:pl-10">
              <div className="absolute -left-[11px] top-1 w-4 h-4 sm:w-5 sm:h-5 bg-cyan-500 rounded-full"></div>

              <span className="text-cyan-400 font-semibold text-sm sm:text-base">2022</span>

              <h4 className="text-xl sm:text-2xl font-semibold mt-2">
                Started IT Degree Journey
              </h4>

              <p className="text-gray-400 mt-2 leading-6 sm:leading-7 text-sm sm:text-base">
                Began BSc (Hons) in Information Technology at
                Sri Lanka Institute of Information Technology (SLIIT).
              </p>
            </div>
          </div>

          {/* Right Side GIF */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 w-full max-w-md text-center shadow-xl">
              <img
                src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                alt="Coding Animation"
                className="w-full rounded-2xl"
              />

              <h4 className="text-xl sm:text-2xl font-semibold mt-5 sm:mt-6 text-cyan-400">
                Growing Every Year 🚀
              </h4>

              <p className="text-gray-400 mt-3 leading-6 sm:leading-7 text-sm sm:text-base">
                Constantly learning new technologies, building projects,
                and improving as a developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6 sm:mb-8 text-center md:text-left">
          Skills & Technologies
        </h3>

        <p className="text-gray-400 mb-8 sm:mb-10 max-w-3xl text-center md:text-left text-sm sm:text-base">
          Click cards to explore my technologies and tools.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillCategories.map((category, index) => {
            const isOpen = openSkills.includes(index);

            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-cyan-400 transition"
              >
                <button
                  onClick={() => toggleSkill(index)}
                  className="w-full p-5 sm:p-6 text-left flex justify-between items-start"
                >
                  <div>
                    <p className="text-2xl sm:text-3xl mb-2 sm:mb-3">{category.icon}</p>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      {category.title}
                    </h4>
                  </div>

                  <span className="text-cyan-400 text-2xl sm:text-3xl font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="bg-slate-800 border border-slate-700 rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-center"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* Projects */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6 sm:mb-8 text-center md:text-left">
          Projects
        </h3>

        <p className="text-gray-400 mb-8 sm:mb-10 max-w-3xl text-center md:text-left text-sm sm:text-base">
          Things I've built with code and passion.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:border-cyan-400 hover:-translate-y-2 transition flex flex-col h-full"
            >
              {/* Title */}
              <h4 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                {item.title}
              </h4>

              {/* Tech */}
              <p className="text-cyan-400 text-xs sm:text-sm mb-2 sm:mb-3">
                {item.tech}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm leading-6 sm:leading-7 flex-grow">
                {item.desc}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                {/* Main Button */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white text-sm sm:text-base transition"
                >
                  View Project
                </a>

                {/* DocSmart */}
                {item.title === "DocSmart with AI Symptom Checker" && (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-sm sm:text-base transition"
                  >
                    🎥 Demo
                  </button>
                )}

                {/* Coffee */}
                {item.title === "CoffeeShop Website" && (
                  <button
                    onClick={() => {
                      setCoffeeIndex(0);
                      setShowCoffeeGallery(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-sm sm:text-base transition"
                  >
                    📸 Screenshots
                  </button>
                )}

                {/* Task App */}
                {item.title === "Task Reminder Mobile App" && (
                  <button
                    onClick={() => {
                      setTaskIndex(0);
                      setShowTaskGallery(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-sm sm:text-base transition"
                  >
                    📸 Screenshots
                  </button>
                )}

                {/* Management */}
                {item.title === "Task Management Web-App" && (
                  <button
                    onClick={() => {
                      setManagementIndex(0);
                      setShowManagementGallery(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-sm sm:text-base transition"
                  >
                    📸 Screenshots
                  </button>
                )}

                {/* Finance */}
                {item.title === "Finance Tracker" && (
                  <button
                    onClick={() => {
                      setFinanceIndex(0);
                      setShowFinanceGallery(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-sm sm:text-base transition"
                  >
                    📸 Screenshots
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>


        <div className="mt-8 sm:mt-10 text-center">
          <a
            href="https://www.linkedin.com/in/hussainiya-hasan123/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition text-sm sm:text-base"
          >
            View More on LinkedIn
          </a>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8 sm:mb-10 text-center md:text-left">
          Certifications & Learning
        </h3>

          <p className="text-gray-400 mb-8 sm:mb-10 max-w-3xl text-center md:text-left text-sm sm:text-base">
            Continuous learning through industry-recognized certifications 
            and skill development.
         </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {certificates.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:border-cyan-400 hover:-translate-y-2 transition"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>

              <h4 className="text-base sm:text-lg font-semibold leading-6 sm:leading-7 mb-2 sm:mb-3">
                {item.title}
              </h4>

              <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-5">{item.provider}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-white text-sm sm:text-base"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <a
            href="https://www.linkedin.com/in/hussainiya-hasan123/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition text-sm sm:text-base"
          >
            View More on LinkedIn
          </a>
        </div>
      </section>

      {/* Contact */}
<section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
  <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6 sm:mb-8 text-center md:text-left">
    Connect & Explore
  </h3>

  <p className="text-gray-400 mb-8 sm:mb-12 max-w-3xl text-center md:text-left text-sm sm:text-base">
    Explore my professional profiles, projects, and feel free to contact me
    for junior roles, graduate roles, collaborations or freelance opportunities.
  </p>

  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">

    {/* Left Card */}
    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-white">
      <p className="text-base sm:text-lg opacity-90 mb-2 sm:mb-3">
        Get In Touch
      </p>

      <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6">
        Let's Build Something Great Together
      </h4>

      <p className="leading-7 sm:leading-8 text-white/90 mb-6 sm:mb-8 text-sm sm:text-base">
        If you have an opportunity, project idea, or would like to discuss
        a role, feel free to contact me anytime.
      </p>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=hussainiyahasan@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-black px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base"
      >
        Send Email
      </a>
    </div>

    {/* Right Cards */}
    <div className="space-y-4 sm:space-y-5">

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/hussainiya-hasan123/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-between items-center bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-cyan-400 transition"
      >
        <div className="flex items-center gap-4">
          <svg
            className="w-8 h-8 text-cyan-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.63 4.75 6.05V24h-4v-7.1c0-1.7-.03-3.88-2.36-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4V8z" />
          </svg>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold">LinkedIn</h4>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Professional Profile & Networking
            </p>
          </div>
        </div>

        <span className="text-cyan-400 text-lg sm:text-xl">↗</span>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Husainiya"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-between items-center bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-cyan-400 transition"
      >
        <div className="flex items-center gap-4">
          <svg
            className="w-8 h-8 text-cyan-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.95c.58.1.79-.25.79-.56v-2.02c-3.25.71-3.94-1.57-3.94-1.57-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.4-1.27.72-1.56-2.6-.3-5.34-1.3-5.34-5.77 0-1.27.45-2.3 1.2-3.12-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.2 1.2a11.1 11.1 0 015.82 0c2.22-1.51 3.2-1.2 3.2-1.2.64 1.65.24 2.87.12 3.17.75.82 1.2 1.85 1.2 3.12 0 4.48-2.74 5.47-5.36 5.77.42.36.8 1.07.8 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold">GitHub</h4>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Projects, Source Code & Contributions
            </p>
          </div>
        </div>

        <span className="text-cyan-400 text-lg sm:text-xl">↗</span>
      </a>

      {/* Email */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=hussainiyahasan@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-between items-center bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-cyan-400 transition"
      >
        <div className="flex items-center gap-4">
          <svg
            className="w-8 h-8 text-cyan-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M4 6l8 7 8-7" />
          </svg>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold">Email</h4>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 break-all">
              hussainiyahasan@gmail.com
            </p>
          </div>
        </div>

        <span className="text-cyan-400 text-lg sm:text-xl">↗</span>
      </a>

    </div>
  </div>
</section>

      {showVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
            <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 w-full max-w-4xl relative border border-slate-700">

              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-3 right-3 text-white text-2xl hover:text-red-400"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                DocSmart Demo Video
              </h3>

              <video
                controls
                autoPlay
                className="w-full rounded-xl"
              >
                <source src="/videos/docsmart.mp4" type="video/mp4" />
                Your browser does not support video.
              </video>

            </div>
          </div>
        )}

        {showCoffeeGallery && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
    <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 w-full max-w-5xl relative border border-slate-700">

      <button
        onClick={() => setShowCoffeeGallery(false)}
        className="absolute top-3 right-3 text-white text-2xl hover:text-red-400"
      >
        ✕
      </button>

      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        CoffeeShop Screenshots
      </h3>

      <img
        src={coffeeImages[coffeeIndex]}
        alt="CoffeeShop Screenshot"
        className="w-full max-h-[70vh] object-contain rounded-xl"
      />

      <p className="text-gray-400 text-sm mt-3 text-center">
        {coffeeIndex + 1} / {coffeeImages.length}
      </p>

      <div className="flex justify-between mt-4 gap-3">
        <button
          onClick={() =>
            setCoffeeIndex(
              coffeeIndex === 0
                ? coffeeImages.length - 1
                : coffeeIndex - 1
            )
          }
          className="px-5 py-2 bg-slate-800 rounded-xl hover:bg-slate-700"
        >
          ← Prev
        </button>

        <button
          onClick={() =>
            setCoffeeIndex(
              coffeeIndex === coffeeImages.length - 1
                ? 0
                : coffeeIndex + 1
            )
          }
          className="px-5 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-600"
        >
          Next →
        </button>
      </div>

    </div>
  </div>
)}

{showTaskGallery && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
    <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 w-full max-w-md relative border border-slate-700">

      <button
        onClick={() => setShowTaskGallery(false)}
        className="absolute top-3 right-3 text-white text-2xl hover:text-red-400"
      >
        ✕
      </button>

      <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">
        Task Reminder App
      </h3>

      <img
        src={taskImages[taskIndex]}
        alt="Task App Screenshot"
        className="w-full max-h-[70vh] object-contain rounded-xl mx-auto"
      />

      <p className="text-center text-gray-400 mt-3">
        {taskIndex + 1} / {taskImages.length}
      </p>

      <div className="flex justify-between mt-4">
        <button
          onClick={() =>
            setTaskIndex(
              taskIndex === 0 ? taskImages.length - 1 : taskIndex - 1
            )
          }
          className="px-4 py-2 bg-slate-800 rounded-xl hover:bg-slate-700"
        >
          ← Prev
        </button>

        <button
          onClick={() =>
            setTaskIndex(
              taskIndex === taskImages.length - 1 ? 0 : taskIndex + 1
            )
          }
          className="px-4 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-600"
        >
          Next →
        </button>
      </div>

    </div>
  </div>
)}

{showManagementGallery && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
    <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 w-full max-w-5xl relative border border-slate-700">

      <button
        onClick={() => setShowManagementGallery(false)}
        className="absolute top-3 right-3 text-white text-2xl hover:text-red-400"
      >
        ✕
      </button>

      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        Laravel Task Management Screenshots
      </h3>

      <img
        src={managementImages[managementIndex]}
        alt="Management Screenshot"
        className="w-full rounded-xl"
      />

      <p className="text-center text-gray-400 mt-3">
        {managementIndex + 1} / {managementImages.length}
      </p>

      <div className="flex justify-between mt-4">
        <button
          onClick={() =>
            setManagementIndex(
              managementIndex === 0
                ? managementImages.length - 1
                : managementIndex - 1
            )
          }
          className="px-5 py-2 bg-slate-800 rounded-xl hover:bg-slate-700"
        >
          ← Prev
        </button>

        <button
          onClick={() =>
            setManagementIndex(
              managementIndex === managementImages.length - 1
                ? 0
                : managementIndex + 1
            )
          }
          className="px-5 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-600"
        >
          Next →
        </button>
      </div>

    </div>
  </div>
)}

{showFinanceGallery && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
    <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 w-full max-w-5xl relative border border-slate-700">

      <button
        onClick={() => setShowFinanceGallery(false)}
        className="absolute top-3 right-3 text-white text-2xl hover:text-red-400"
      >
        ✕
      </button>

      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        Finance Tracker Screenshots
      </h3>

      <img
        src={financeImages[financeIndex]}
        alt="Finance Tracker Screenshot"
        className="w-full rounded-xl"
      />

      <p className="text-center text-gray-400 mt-3">
        {financeIndex + 1} / {financeImages.length}
      </p>

      <div className="flex justify-between mt-4">
        <button
          onClick={() =>
            setFinanceIndex(
              financeIndex === 0
                ? financeImages.length - 1
                : financeIndex - 1
            )
          }
          className="px-5 py-2 bg-slate-800 rounded-xl hover:bg-slate-700"
        >
          ← Prev
        </button>

        <button
          onClick={() =>
            setFinanceIndex(
              financeIndex === financeImages.length - 1
                ? 0
                : financeIndex + 1
            )
          }
          className="px-5 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-600"
        >
          Next →
        </button>
      </div>

    </div>
  </div>
)}

      {/* Footer */}
      <footer className="border-t border-slate-800 text-center py-6 sm:py-8 text-gray-500 text-xs sm:text-sm px-4">
        © 2026 Hussainiya Hasan • Designed & Developed with React + Tailwind CSS
      </footer>
    </div>
  );
}

export default App;