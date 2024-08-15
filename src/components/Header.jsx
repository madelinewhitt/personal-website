import React from 'react';

function Header() {
    return (
        <header className="bg-pink-400 shadow-md py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-3xl font-bold">Madeline's Website</h1>
                    <p className="text-white text-lg italic">Welcome to my corner of the web</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
