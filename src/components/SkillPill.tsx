import { Skill } from "../types"

export default function SkillPill({ skill }: { skill: Skill }) {
    const colorClasses: Record<Skill, string> = {
        'C# and ASP.NET Development': 'bg-blue-100 text-blue-800',
        'RESTful API Development': 'bg-green-100 text-green-800',
        'Database Operations': 'bg-purple-100 text-purple-800',
        'Entity Framework Core ORM': 'bg-yellow-100 text-yellow-800',
        'JavaScript/TypeScript': 'bg-red-100 text-red-800',
        'HTML, CSS': 'bg-pink-100 text-pink-800',
        'Git and GitHub': 'bg-gray-100 text-gray-800',
        'Jest Testing Framework': 'bg-indigo-100 text-indigo-800',
        'GraphQL API Development': 'bg-teal-100 text-teal-800',
        'Golang and Gin framework': 'bg-cyan-100 text-cyan-800'
    }

    return (
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${colorClasses[skill] || 'bg-gray-100 text-gray-800'}`}>
            {skill}
        </span>
    )
}