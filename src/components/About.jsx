import React from 'react';
import profilePic from '../assets/MadelineEDIT.jpg'
import NavBar from './NavBar';

function About() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-4xl font-bold mb-6 text-black">About Me<span className="text-pink-400">.</span></h1>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="flex-1 md:mr-6">
                        <p className="text-base text-gray-700 mt-4">
                            I am a dedicated and accomplished 21-year-old student at Florida State University, where I am pursuing a Bachelor of Science in Computer Science. With a strong foundation in software engineering, I have gained valuable experience through three prestigious internships. I have contributed to groundbreaking projects at NASA, Terran Orbital, and Neurotone AI, showcasing my ability to excel in diverse and challenging environments.
                        </p>
                        <p className="text-base text-gray-700 mt-4">
                            In addition to my academic and professional pursuits, I am a creative and multifaceted individual. I enjoy spending my free time crocheting intricate designs, making music, cooking delicious meals, exercising, and traveling with my wonderful boyfriend. Below are some photos of my most recent trip! My diverse interests and passions reflect my well-rounded personality and commitment to continuous growth and development.
                        </p>
                        <p className="text-base text-gray-700 mt-4">
                            My unique blend of technical expertise, creativity, and drive makes me a promising talent in the field of computer science. I look forward to leveraging my skills and experiences to make meaningful contributions to the tech industry and beyond.
                        </p>
                    </div>
                    <div className="flex-1 mt-6 md:mt-0">
                        <img src={profilePic} alt="Profile" className="w-full max-h-1/2 rounded-lg shadow-md self-center" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;