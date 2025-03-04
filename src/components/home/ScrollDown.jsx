import React from 'react';
import { motion } from 'framer-motion';
import './ScrollDown.css';

const ScrollDown = () => {
    return (
        <motion.div 
            className="scroll__down"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
            <a href="#about" className="mouse__wrapper">
                <span className="home__scroll-name">Scroll Down</span>
                <span className="mouse">
                    <span className="wheel"></span>
                </span>
            </a>
        </motion.div>
    );
}

export default ScrollDown;
