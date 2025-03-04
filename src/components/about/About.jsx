import React from 'react';
import './About.css';
import Resume from '../../assets/SandhyaRaniNarravula_Resume_2025.pdf';
import AboutBox from './AboutBox';
import Image from '../../assets/5141092.jpg';
import { RiDownload2Line, RiMailSendLine } from "react-icons/ri";  

const About = () => {
    const downloadResume = () => {
        window.open(Resume, '_blank');
    };

    const sendEmail = () => {
        window.location.href = "mailto:narravulsandhyarani@gmail.com";
    };

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <div className="about__image">
                    <img src={Image} alt="Profile" className='about__img' />
                </div>

                <div className="about__data">
                    <h3 className="about__name">Sandhya Rani Narravula</h3>
                    <p className="about__title">AI Researcher | Software Engineer | Machine Learning Enthusiast</p>

                    <p className="about__description">
                        I’m currently pursuing my <strong>Master’s in Computer Science</strong> at <strong>Stony Brook University</strong>, 
                        specializing in <strong>AI, Deep Learning, and Model Optimization</strong>. <br /><br />
                        With hands-on experience in <strong>neural compression, reinforcement learning, and NLP</strong>, I thrive on solving 
                        complex challenges in AI-driven applications. <br /><br />
                        My recent projects focus on optimizing <strong>LLM fine-tuning</strong>, <strong>AI-powered workload scheduling</strong>, 
                        and <strong>autonomous system intelligence</strong>. I’m passionate about <strong>building scalable, efficient AI solutions</strong> 
                        that make an impact!
                    </p>

                    <h4 className="about__skills-title">Technical Skills</h4>
                    <ul className="about__skills-list">
                        <li>Python, C++, Java</li>
                        <li>TensorFlow, PyTorch, ONNX</li>
                        <li>Reinforcement Learning & Model Compression</li>
                        <li>Computer Vision & NLP</li>
                        <li>AWS (EC2, S3, Lambda), Kubernetes</li>
                    </ul>

                    <div className="about__buttons">
                        <button className="btn btn-primary" onClick={downloadResume}>
                            <RiDownload2Line className="btn-icon" /> Download CV
                        </button>
                        <button className="btn btn-secondary" onClick={sendEmail}>
                            <RiMailSendLine className="btn-icon" /> Email Me
                        </button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
};

export default About;
