import { ExperienceCardProps } from "../types"


const ExperienceCard = ({ title, company, period, bullets }: ExperienceCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                    <p className="text-secondary font-medium">{company}</p>
                </div>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {period}
                </span>
            </div>
            <ul className="mt-4 space-y-2">
                {bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                        <span className="text-tertiary mr-2">•</span>
                        <span className="text-gray-600">{bullet}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceCard