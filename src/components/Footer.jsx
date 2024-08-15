import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className='bg-pink-400 py-10'>
            <div className='flex justify-center space-x-6'>
                <a href='https://github.com/madelinewhitt' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faGithub} size='2x' className='text-white hover:text-gray-300' />
                </a>
                <a href='https://www.linkedin.com/in/madeline-whitton-367021253/' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} size='2x' className='text-white hover:text-gray-300' />
                </a>
                <a href='https://www.instagram.com/madelinetate_/' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faInstagram} size='2x' className='text-white hover:text-gray-300' />
                </a>
            </div>
        </div>
    );
}

export default Footer;
