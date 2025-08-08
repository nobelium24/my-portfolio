import { useState } from "react";
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

    const categoryTooltips: Record<Skill["category"], string> = {
        Languages: "Programming languages you use",
        Frameworks: "Libraries and frameworks for building apps",
        Databases: "Database technologies for storing data",
        Tools: "Development and deployment tools",
        Testing: "Testing frameworks and tools",
        DevOps: "DevOps and CI/CD tools",
        Protocols: "Communication protocols and APIs",
        Runtimes: "Execution environments for code"
    };

    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <span
            className={`relative px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${categoryColors[skill.category] || "bg-gray-100 text-gray-800"}`}
            title={categoryTooltips[skill.category]}
            onTouchStart={() => setShowTooltip(!showTooltip)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {skill.name}
            {showTooltip && (
                <span className="absolute left-1/2 top-full z-10 mt-2 w-max -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                    {categoryTooltips[skill.category]}
                </span>
            )}
        </span>
    );
}