// components/TechIcon.tsx
import {
    SiNodedotjs,
    SiTypescript,
    SiMongodb,
    SiExpress,
    SiPostgresql,
    SiTailwindcss,
    SiNextdotjs,
    SiGo,
    SiGin,
    SiDocker,
    SiRedis,
    SiReact,
    SiReactrouter,
    SiSocketdotio as SiWebsocket,
} from "react-icons/si";

const techMap: Record<string, JSX.Element> = {
    "Node.js": <SiNodedotjs title="Node.js" />,
    "TypeScript": <SiTypescript title="TypeScript" />,
    "MongoDB": <SiMongodb title="MongoDB" />,
    "Express.js": <SiExpress title="Express.js" />,
    "PostgreSQL": <SiPostgresql title="PostgreSQL" />,
    "Tailwind CSS": <SiTailwindcss title="Tailwind CSS" />,
    "Next.js": <SiNextdotjs title="Next.js" />,
    "Go": <SiGo title="Go" />,
    "Gin": <SiGin title="Gin" />,
    "Docker": <SiDocker title="Docker" />,
    "Redis": <SiRedis title="Redis" />,
    "React": <SiReact title="React" />,
    "React-Native": <SiReact title="React Native" />,
    "WebSocket": <SiWebsocket title="WebSocket" />,
    "React Router": <SiReactrouter title="React Router" />,
};

export default function TechIcon({ tech }: { tech: string }) {
    return (
        <div
            className="flex items-center justify-center w-9 h-9 text-lg md:text-xl text-gray-700 dark:text-gray-200 hover:scale-110 transition-transform"
            title={tech}
        >
            {techMap[tech] || <span className="text-xs">{tech}</span>}
        </div>
    );
}
