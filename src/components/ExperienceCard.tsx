import { motion } from "framer-motion";
import { ExperienceCardProps } from "../types";

const ExperienceCard = ({ title, company, period, bullets, link }: ExperienceCardProps) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5 }}
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
                    <p className="text-secondary font-medium">{company}</p>
                </div>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm w-fit">
                    {period}
                </span>
            </div>
            <ul className="mt-4 space-y-2">
                {bullets.map((bullet, i) => (
                    <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-tertiary mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{bullet}</span>
                    </motion.li>
                ))}
            </ul>

            {link && link.startsWith("http") && (
                <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-primary text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    View published App ↗
                </motion.a>
            )}
        </motion.div>
    )
}

export default ExperienceCard;