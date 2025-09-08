import { motion } from "framer-motion";
import { Skill } from "../types";

export default function SkillPill({ skill }: { skill: Skill }) {
    const categoryColors: Record<Skill["category"], string> = {
        Languages: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        Frameworks: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        Databases: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
        Tools: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
        Testing: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
        DevOps: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
        Protocols: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
        Runtimes: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
    };

    return (
        <motion.span
            className={`relative px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${categoryColors[skill.category] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}`} // Added dark mode
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {skill.name}
        </motion.span>
    );
}