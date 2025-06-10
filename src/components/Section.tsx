import { SectionProps } from "../types";

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-primary pb-2 inline-block">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}