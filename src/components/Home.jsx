import React from 'react';
import NavBar from './NavBar';

function Home() {
    return (
        <>
            <section
                className="h-screen flex flex-col bg-hero_background_placeholder shadow-md bg-center bg-cover bg-blend-overlay bg-white/60 justify-center items-center px-4"
                id="hero-section"
            >
                <h1 className="text-black-400 text-4xl sm:text-5xl font-bold font-raleway text-center">
                    <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-pink-400 animate-typing">
                        I'm Madeline Whitton<span className="text-pink-400">.</span>
                    </span>
                </h1>
                <h2 className="text-black-400 text-xl sm:text-2xl font-light mt-4 text-center">
                    Welcome to my personal website
                </h2>
            </section>
        </>
    );
}

export default Home;
