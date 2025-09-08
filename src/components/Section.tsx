import { motion } from "framer-motion";
import { SectionProps } from "../types";

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-gray-800 dark:text-white border-b-2 border-primary pb-2 inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  )
}