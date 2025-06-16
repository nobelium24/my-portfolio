const Header = () => {
    return (
        <header className="bg-gray-800 text-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold">OJA</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#about" className="text-white hover:text-primary">About</a></li>
                        <li><a href="#experience" className="text-white hover:text-primary">Experience</a></li>
                        <li><a href="#projects" className="text-white hover:text-primary">Projects</a></li>
                        <li><a href="#skills" className="text-white hover:text-primary">Skills</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header