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
      title: "Intern",
      company: "SQI College of ICT, Ogbomosho, Oyo State",
      period: "Aug 2022 - May 2023",
      bullets: [
        "Facilitated lessons for over 50 beginner web development students, teaching HTML, CSS, JavaScript, and Node.JS",
        "Built rapport with course participants resulting in a re-enrollment rate of 75% for subsequent classes",
        "Trained over 50 interns on industry-standard user experience processes & protocols"
      ]
    },
    {
      title: "Front-end Developer (Contract)",
      company: "WootLab – Remote",
      period: "Nov 2023 - Jan 2024",
      bullets: [
        "Collaborated with cross-functional teams to design and develop a cutting-edge utility app",
        "Created, tested, and optimized responsive interfaces focusing on enhancing functionality",
        "Implemented innovative front-end solutions improving the app's visual appeal and usability",
        "Maintained a 95% code quality standard through thorough testing and debugging"
      ]
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
      title: "Back-end developer/Technical writer",
      company: "Zenolynk",
      period: "August 2024 - Present",
      bullets: [
        "Building and managing Restful APIs for mobility applications using Node.JS, Typescript, MongoDB",
        "Documenting application workflow, technical processes, and system architecture"
      ]
    }
  ]

  const projects = [
    {
      title: "KIK Perfumes",
      role: "Full-stack developer",
      period: "February 2023 - April 2023",
      description: "Crafted an e-commerce application with Next.JS, Node.JS, MongoDB, and Express.JS, concentrating on replicating UI/UX."
    },
    {
      title: "TimeShoppy",
      role: "Back-end developer",
      period: "May 2023 - August 2023",
      description: "Built and managed Restful APIs using Node.JS, emphasizing robust and secure endpoints to support diverse client applications."
    },
    {
      title: "Gleam Perfumes",
      role: "Back-end developer",
      period: "March 2024 – August 2024",
      description: "Built and managed secure Restful APIs using Node.JS, Typescript, MongoDB for diverse client applications."
    },
    {
      title: "Flurrypay",
      role: "Back-end developer",
      period: "March 2024 - December 2024",
      description: "Built APIs for a financial and crypto application using Node.JS, Typeescript, Postgres."
    },
    {
      title: "Cedarbyte Technologies",
      role: "Back-end developer",
      period: "August 2024 – January 2025",
      description: "Built APIs for an AI educational tool using Node.JS, Typeescript, Postgres."
    },
    {
      title: "Nibble",
      role: "Back-end developer",
      period: "January 2025 – Present",
      description: "Building APIs for a gym management tool using Go, Gin, Postgres."
    },
    {
      title: "Creciment Tech",
      role: "Back-end developer",
      period: "January 2025 – Present",
      description: "Building APIs for a delivery platform using Node.JS, Express, Typesript, Postgres."
    }
  ]

  const skills = [
    "C# and ASP.NET Development",
    "RESTful API Development",
    "Database Operations (Microsoft SQL Server, PostgreSQL, MongoDB)",
    "Entity Framework Core ORM",
    "JavaScript/TypeScript (React.JS, Angular J.S, Node.JS, Express.JS, Adonis.JS)",
    "HTML, CSS (Bootstrap CSS, Tailwind CSS, SASS)",
    "Git and GitHub for collaboration",
    "Jest Testing Framework",
    "GraphQL API Development",
    "Golang and the Gin framework"
  ] as Skill[]

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
              Dedicated and innovative Fullstack Developer with a passion for creating cutting-edge user experiences.
              Skilled in crafting responsive interfaces, implementing innovative solutions, and ensuring optimal
              application performance through thorough testing and debugging. Proficient in utilizing a range of
              technologies, including C#, ASP.NET, and various database operations, in building APIs. Excels in
              JavaScript/Typescript frameworks such as React.JS, Angular J.S, and Node. JS. Committed to staying
              current with emerging technologies and trends to drive continuous improvement in visual appeal and
              usability.
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
      </main>

      <Footer />
    </div>
  )
}

export default App