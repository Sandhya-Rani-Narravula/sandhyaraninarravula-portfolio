import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './HeaderSocials.css';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            {/* GitHub Profile */}
            <a href='https://github.com/Sandhya-Rani-Narravula' 
               className='home__social-link' 
               target='_blank' 
               rel='noreferrer'>
                <FaGithub className='home__social-icon' />
            </a>

            {/* LinkedIn Profile */}
            <a href='https://linkedin.com/in/sandhya-rani-narravula-34132b1ab' 
               className='home__social-link' 
               target='_blank' 
               rel='noreferrer'>
                <FaLinkedinIn className='home__social-icon' />
            </a>
        </div>
    );
};

export default HeaderSocials;
