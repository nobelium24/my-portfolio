import { Skill } from "../types";

export default function SkillPill({ skill }: { skill: Skill }) {
    const categoryColors: Record<Skill["category"], string> = {
        Languages: "bg-blue-100 text-blue-800",
        Frameworks: "bg-green-100 text-green-800",
        Databases: "bg-purple-100 text-purple-800",
        Tools: "bg-pink-100 text-pink-800",
        Testing: "bg-yellow-100 text-yellow-800",
        DevOps: "bg-cyan-100 text-cyan-800",
        Protocols: "bg-gray-100 text-gray-800",
        Runtimes: "bg-indigo-100 text-indigo-800"
    };

    return (
        <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${categoryColors[skill.category] || "bg-gray-100 text-gray-800"
                }`}
        >
            {skill.name}
        </span>
    );
}
