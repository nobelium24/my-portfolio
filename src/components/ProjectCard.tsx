import { ProjectCardProps } from "../types";

export default function ProjectCard({ title, role, period, description }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="flex justify-between items-center mb-4">
        <span className="text-secondary font-medium">{role}</span>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}