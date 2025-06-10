export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p>© {new Date().getFullYear()} Ogunba Joseph Adewole's Portfolio</p>
                <p className="mt-2 text-gray-400">Built with React, Tailwind CSS, and Vite</p>
            </div>
        </footer>
    )
}