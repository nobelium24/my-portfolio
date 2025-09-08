import { motion } from "framer-motion";
import { ProjectCardProps } from "../types";
import TechIcon from "./TechIcon";

function ProjectCard(project: ProjectCardProps) {
  const showLink =
    project.link && project.link !== "in-progress" && project.link !== "testing";
  const status =
    project.link === "in-progress"
      ? "In Progress"
      : project.link === "testing"
        ? "Testing"
        : null;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow" /* Changed dark:bg */
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
        {project.title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {project.period}
      </p>

      <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.technologies?.map((tech, index) => (
          <TechIcon key={index} tech={tech} />
        ))}
      </div>

      {showLink ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
        >
          Visit Project
        </a>
      ) : status ? (
        <span className="inline-block mt-5 px-3 py-1 text-sm bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 rounded-full">
          {status}
        </span>
      ) : null}
    </motion.div>
  );
}

export default ProjectCard;