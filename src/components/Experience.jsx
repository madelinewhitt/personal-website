import React from 'react';
import resume from '../assets/Madeline_s_Resume.pdf';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: 'Neurotone AI',
        role: 'Software Engineer Intern',
        duration: 'May 2024 - August 2024',
        description: 'Developed a full-stack iPhone app with React.js and AVFoundation for tinnitus relief. Mastered Expo Go for efficient deployment and used Linear to track progress and participate in daily stand-ups.'
    },
    {
        company: 'Florida State University',
        role: 'Learning Assistant',
        duration: 'January 2022 - Present',
        description: 'Demonstrated mastery of topics to ensure student success. Assisted students in learning object oriented programming and advanced mathematics revolving around trigonometry.'
    },
    {
        company: 'Terran Orbital',
        role: 'Software Engineer Intern',
        duration: 'May 2023 - August 2023',
        description: 'Designed a Qt/C++ GUI to interface with satellite payload software. Developed unit tests with GoogleTest/GoogleMock and streamlined documentation using LaTeX for satellite software components.'
    },
    {
        company: 'NASA',
        role: 'Software Engineer Intern',
        duration: 'January 2023 - April 2023',
        description: 'Analyzed the effects of deep space radiation and lunar/martian gravity on rodent cardiovascular and lymphatic systems using Python.'
    },
];

const ExperiencePage = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 py-20">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-10">Experience<span className="text-pink-400">.</span></h1>
                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.3 }}
                            >
                                <h2 className="text-2xl font-bold text-gray-800">{experience.company}</h2>
                                <p className="text-xl text-pink-400">{experience.role}</p>
                                <p className="text-gray-500">{experience.duration}</p>
                                <p className="mt-4 text-gray-700">{experience.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="text-center mb-10 py-5">
                    <a
                        href={resume}
                        download="Madeline_Whitton_Resume.pdf"
                        className="bg-pink-400 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </>
    );
};

export default ExperiencePage;
