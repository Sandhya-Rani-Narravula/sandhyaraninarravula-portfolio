import React from 'react';
import { RiBookLine, RiCodeBoxLine, RiBriefcaseLine, RiProjectorLine } from 'react-icons/ri'; // Correct icons

const aboutData = [
    {
        icon: <RiBookLine />, // Represents Education
        value: "M.S. in CS",
        label: "Stony Brook University (2024-2025)",
    },
    {
        icon: <RiCodeBoxLine />, // Represents Skills/Tech
        value: "10+",
        label: "Programming Languages & Tools",
    },
    {
        icon: <RiBriefcaseLine />, // Represents Work Experience
        value: "3+ Years",
        label: "Experience in AI/ML",
    },
    {
        icon: <RiProjectorLine />, // Represents Projects
        value: "5+",
        label: "AI & ML Research Projects",
    },
];

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            {aboutData.map((item, index) => (
                <div className="about__box" key={index}>
                    <div className="about__icon">{item.icon}</div>
                    <div>
                        <h3 className="about__title">{item.value}</h3>
                        <span className="about__subtitle">{item.label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AboutBox;
