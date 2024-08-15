import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link to="/" className="text-pink-400 hover:text-pink-600 font-medium">Home</Link>
                        <Link to="/about" className="text-pink-400 hover:text-pink-600 font-medium">About</Link>
                        <Link to="/experience" className="text-pink-400 hover:text-pink-600 font-medium">Experience</Link>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-pink-400 hover:text-pink-600">Home</Link>
                        <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-pink-400 hover:text-pink-600">About</Link>
                        <Link to="/experience" className="block px-3 py-2 rounded-md text-base font-medium text-pink-400 hover:text-pink-600">Experience</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
