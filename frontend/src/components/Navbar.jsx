import React from "react";

const Navbar = () => {
    return (
        <header className="w-full py-4 fixed top-0 left-0 right-0 z-10 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300 ease-in-out">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-xl font-bold">MyDevSite</a>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                                About
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
