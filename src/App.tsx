import Header from './components/Header'
import ExperienceCard from './components/ExperienceCard'
import ProjectCard from './components/ProjectCard'
import Section from './components/Section'
import SkillPill from './components/SkillPill'
import Footer from './components/Footer'
import { Skill } from './types'

const App = () => {
  const experiences = [
    {
      title: "Back-end developer/Technical writer",
      company: "Zenolynk",
      period: "August 2024 - July 2025",
      bullets: [
        "Built and managed Restful APIs for mobility, ride hailing and car pooling applications using Node.JS, Typescript, MongoDB",
        "Documented application workflow, technical processes, and system architecture"
      ],
      link: "https://apps.apple.com/ng/app/zeno-affordable-ride/id6746136829",
    },
    {
      title: "Instructor",
      company: "SQI College of ICT, Ibadan, Oyo State",
      period: "May 2023 – August 2024",
      bullets: [
        "Evaluated student performance resulting in 70% improvement in skill development",
        "Organized coding workshops promoting practical application of programming concepts",
        "Trained over 100 students on industry-standard UX processes",
        "Led web development lessons covering JavaScript, Node.JS, C#, ASP.NET Core, and more"
      ]
    },
    {
      title: "Front-end Developer (Contract)",
      company: "WootLab – Remote",
      period: "Nov 2023 - Jan 2024",
      bullets: [
        "Collaborated with cross-functional teams to design and develop a cutting-edge utility app with react.js",
        "Created, tested, and optimized responsive interfaces focusing on enhancing functionality",
        "Implemented innovative front-end solutions improving the app's visual appeal and usability",
        "Maintained a 95% code quality standard through thorough testing and debugging"
      ]
    },
    {
      title: "Intern",
      company: "SQI College of ICT, Ogbomosho, Oyo State",
      period: "Aug 2022 - May 2023",
      bullets: [
        "Facilitated lessons for over 50 beginner web development students, teaching HTML, CSS, JavaScript, and Node.JS",
        "Built rapport with course participants resulting in a re-enrollment rate of 75% for subsequent classes",
        "Trained over 50 interns on industry-standard user experience processes & protocols"
      ]
    },
  ]

  const projects = [
    {
      title: "KIK Perfumes",
      role: "Full-stack Developer",
      period: "February 2023 – April 2023",
      description:
        "Developed a fully functional e-commerce platform using Next.js, Node.js, Express.js, and MongoDB. Focused on replicating pixel-perfect UI/UX from design files while ensuring scalable and maintainable architecture.",
      link: "https://www.kikperfume.com/",
      technologies: ["Node.js", "TypeScript", "MongoDB", "Express.js", "Next.js", "Tailwind CSS"]
    },
    // {
    //   title: "TimeShoppy",
    //   role: "Back-end Developer",
    //   period: "May 2023 – August 2023",
    //   description:
    //     "Built and maintained RESTful APIs using Node.js, Express.js, and MongoDB to support e-commerce functionalities including product catalog, user authentication, and order management.",
    // },
    {
      title: "Gleam Perfumes",
      role: "Back-end Developer",
      period: "March 2024 – August 2024",
      description:
        "Designed and implemented RESTful APIs using Node.js, TypeScript, and MongoDB to manage inventory, customer orders, and payment processing for a luxury perfume brand.",
      link: "https://www.gleam.global/",
      technologies: ["Node.js", "TypeScript", "MongoDB", "Express.js", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Flurrypay",
      role: "Back-end Developer",
      period: "March 2024 – December 2024",
      description:
        "Engineered secure and scalable RESTful APIs using Node.js, TypeScript, Express, and PostgreSQL for a fintech application supporting fiat and cryptocurrency transactions. Integrated payment logic, KYC flows, and role-based access control.",
      link: "https://flurrypay.io/",
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "Express.js", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Cedar AI",
      role: "Back-end Developer",
      period: "August 2024 – January 2025",
      description:
        "Built high-performance APIs using Node.js, TypeScript, Express, PostgreSQL, and Redis to power an AI-driven education platform. Focused on user analytics, adaptive learning modules, and content delivery.",
      link: "testing",
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "Express.js", "Next.js", "Tailwind CSS", "Redis"]
    },
    {
      title: "Fiyifit",
      role: "Full-stack Developer",
      period: "January 2025 – Present",
      description:
        "Spearheading the development of a gym management platform using Go (Gin), PostgreSQL, and TypeScript. Responsible for core features including member subscriptions, scheduling, and real-time notifications.",
      link: "in-progress",
      technologies: ["Go", "Gin", "PostgreSQL", "TypeScript", "Next.js", "Tailwind CSS", "Docker", "React-Native"]
    },
    {
      title: "Chidori",
      role: "Back-end Developer",
      period: "January 2025 – Present",
      description:
        "Developed and maintained mission-critical APIs for a logistics and delivery platform using Node.js, TypeScript, and PostgreSQL. Enabled real-time package tracking, delivery assignment, and driver management.",
      link: "https://apps.apple.com/app/chidori-package-delivery/id6747782664",
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "Express.js", "Next.js", "Tailwind CSS", "React-Native", "WebSocket"]
    },
    {
      title: "LSACA",
      role: "Back-end Developer",
      period: "April 2025 – June 2025",
      description:
        "Built secure RESTful APIs using Node.js, Express.js, TypeScript, and PostgreSQL to manage HIV/AIDS awareness content, test center data, and case analytics for Lagos State Aids Control Agency.",
      link: "https://uat-lasaca.mydeslynkpartners.com/",
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "Express.js", "Next.js", "Tailwind CSS"]
    },
    {
      title: "ZSM",
      role: "Back-end Developer",
      period: "August 2024 – July 2025",
      description:
        "Built and managed RESTful APIs for mobility, ride-hailing, and carpooling applications using Node.js, TypeScript, and MongoDB. Focused on scalability, security, and performance optimization.",
      link: "https://apps.apple.com/ng/app/zeno-affordable-ride/id6746136829",
      technologies: ["Node.js", "TypeScript", "MongoDB", "Express.js", "Next.js", "Tailwind CSS"]
    },
    {
      title: "collab-edit",
      role: "Full-stack Developer",
      period: "July 2025 – Present",
      description:
        "Developing a collaborative code editor platform using Next.js, Golang, postgresql, and WebSocket for real-time code sharing and editing. Focused on building a responsive UI and robust back-end architecture.",
      link: "https://collab-edit-xi.vercel.app/",
      technologies: ["Next.js", "Go", "Gin", "PostgreSQL", "WebSocket", "Tailwind CSS", "React", "Docker"]
    }
  ];


  const skills: Skill[] = [
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "C#", category: "Languages" },
    { name: "Go", category: "Languages" },

    { name: "ASP.NET", category: "Frameworks" },
    { name: "Express.js", category: "Frameworks" },
    { name: "Next.js", category: "Frameworks" },
    { name: "Gin", category: "Frameworks" },
    { name: "React", category: "Frameworks" },
    { name: "React Native", category: "Frameworks" },
    { name: "Tailwind CSS", category: "Frameworks" },

    { name: "MongoDB", category: "Databases" },
    { name: "PostgreSQL", category: "Databases" },
    { name: "Redis", category: "Databases" },

    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "Docker", category: "Tools" },


    { name: "Jest", category: "Testing" },

    { name: "HTTP", category: "Protocols" },
    { name: "HTTPS", category: "Protocols" },
    { name: "REST", category: "Protocols" },
    { name: "GraphQL", category: "Protocols" },
    { name: "WebSocket", category: "Protocols" },

    { name: "Node.js", category: "Runtimes" }
  ];


  const certifications = [
    "B.Sc Chemistry (Second class upper) | Olabisi Onabanjo University, Ogun State",
    "Professional Certificate in Software Engineering | SQI College of ICT, Oyo State",
    "DevNet Associate Certification | Cisco Networking Academy"
  ]


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <Section id="about" title="Professional Summary">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700">
              Ogunba Joseph Adewole is an experienced and versatile Fullstack Engineer with 4+ years of experience building scalable and secure software systems
              across industries including e-commerce, logistics, ride-hailing, edtech, and finance. Proficient in
              designing and deploying RESTful APIs, implementing CI/CD pipelines, and managing cloud
              infrastructure (AWS & Azure). Experienced in architecting robust backend systems with Node.js,
              TypeScript, PostgreSQL, and MongoDB, as well as building responsive frontends with React
              and TypeScript. Demonstrates strong DevOps practices, system monitoring, performance
              tuning, and collaborative agile development.
            </p>
          </div>
        </Section>

        <Section id="experience" title="Work Experience">
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} {...exp} />
            ))}
          </div>
        </Section>

        <Section id="projects" title="Key Projects">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <ProjectCard key={i} {...proj} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Technical Skills">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <SkillPill key={i} skill={skill} />
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-tertiary mr-2">•</span>
                  <span className="text-gray-700">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="resume" title="View My Resume">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-700 mb-4">
              For a detailed overview of my experience and qualifications, please download or view my complete resume below.
            </p>
            <a
              href="https://drive.google.com/file/d/1v55DoiMCPEtGWA5UwP9OXl-kK7YxiYFK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              View CV
            </a>
          </div>
        </Section>

      </main>

      <Footer />
    </div>
  )
}

export default App