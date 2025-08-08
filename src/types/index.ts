export interface ExperienceCardProps {
    title: string
    company: string
    period: string
    bullets: string[]
    link?: string
}


export type ProjectCardProps = {
    title: string;
    role: string;
    period: string;
    description: string;
    link?: string;
    technologies: string[]
};

export type SectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
};

// export type Skill =
//     | 'C# and ASP.NET Development'
//     | 'RESTful API Development'
//     | 'Database Operations'
//     | 'Entity Framework Core ORM'
//     | 'JavaScript/TypeScript'
//     | 'HTML, CSS'
//     | 'Git and GitHub'
//     | 'Jest Testing Framework'
//     | 'GraphQL API Development'
//     | 'Golang and Gin framework';


export type SkillCategory = "Languages" | "Frameworks" | "Databases" | "Tools" | "Testing" | "DevOps" | "Protocols" | "Runtimes";

export interface Skill {
    name: string;
    category: SkillCategory;
}
