import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Load theme from localStorage
    // useEffect(() => {
    //     if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    //         setIsDark(true);
    //         document.documentElement.classList.add("dark");
    //     } else {
    //         setIsDark(false);
    //         document.documentElement.classList.remove("dark");
    //     }
    // }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        const html = document.documentElement;
        html.classList.toggle('dark');
        // setDarkMode(html.classList.contains('dark'));
    };

    return (
        <nav className="bg-gray-100 dark:bg-gray-900 shadow-md w-full border-b-1 dark:border-b-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Heading */}
                    <Link to="/">
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                            Student Management System
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Dashboard</Link>
                        <Link to="/students" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Students</Link>
                        <Link to="/add-new-student" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Add New</Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                            {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
                        </button>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded bg-gray-200 dark:bg-gray-800">
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-100 dark:bg-gray-900 px-4 py-3 space-y-2">
                    <Link to="/students" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">Students</Link>
                    <Link to="/students/profile" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">Profile</Link>
                    <Link to="/add-new-student" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">Add New</Link>
                </div>
            )}
        </nav>
    );
}
