import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.jpg'; // Replace with your actual image
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import { RiMailSendLine } from "react-icons/ri";

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <div className="home__image-container">
                    <img src={Me} alt="Profile" className='home__img' />
                </div>

                <h1 className="home__name">Sandhya Rani Narravula</h1>
                <h2 className="home__title">AI Researcher | Software Engineer | ML Enthusiast</h2>
                <p className="home__description">
                    Passionate about <strong>Artificial Intelligence, Deep Learning, and Model Optimization</strong>. 
                    Currently pursuing <strong>Master's in Computer Science at Stony Brook University</strong>, 
                    specializing in <strong>AI-driven workload scheduling, reinforcement learning, and neural compression</strong>.
                </p>

                <HeaderSocials />

                <div className="home__buttons">
                    <a href="#contact" className="btn btn-primary">
                        <RiMailSendLine className="btn-icon" /> Contact Me
                    </a>
                </div>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    );
}

export default Home;
