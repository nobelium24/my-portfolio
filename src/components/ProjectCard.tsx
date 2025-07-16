import { ProjectCardProps } from "../types";

export default function ProjectCard({ title, role, period, description, link }: ProjectCardProps) {
  const isValidLink =
    link && !["in-progress", "testing"].includes(link.toLowerCase()) && link.startsWith("http");

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6 hover:shadow-lg transition duration-300 ease-in-out">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-gray-600 font-medium">{role}</span>
        <span className="text-sm text-gray-400">{period}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>

      {isValidLink && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition"
        >
          Visit project
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      )}

      {link === "in-progress" && (
        <p className="text-sm text-yellow-600 italic">🚧 Project is still in progress</p>
      )}

      {link === "testing" && (
        <p className="text-sm text-orange-600 italic">🧪 Link currently being tested</p>
      )}
    </div>
  );
}
