import { useState } from 'react';
import { Menu, X, User, Briefcase, Folder, Code, Linkedin, BookOpen, Sun, Moon } from 'lucide-react';

interface HeaderProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const navItems = [
        { href: '#about', label: 'About', icon: User },
        { href: '#experience', label: 'Experience', icon: Briefcase },
        { href: '#projects', label: 'Projects', icon: Folder },
        { href: '#skills', label: 'Skills', icon: Code },
        { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
        { href: 'https://medium.com', label: 'Medium', icon: BookOpen },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap text-gray-900 dark:text-white">
                    Ogunba Joseph Adewole
                </h1>

                <nav className="hidden md:flex items-center space-x-6">
                    <ul className="flex space-x-6">
                        {navItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <li key={index} className="group relative">
                                    <a
                                        href={item.href}
                                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center transition-colors duration-200"
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        <Icon size={18} className="mr-1" />
                                        {item.label}
                                    </a>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
                                </li>
                            );
                        })}
                    </ul>

                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </nav>

                <div className="flex items-center space-x-4 md:hidden">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        className="focus:outline-none text-gray-700 dark:text-gray-300"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <div className={`md:hidden bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="px-4 pb-4 space-y-3">
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center py-2 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    <Icon size={18} className="mr-3" />
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </header>
    );
};

export default Header;