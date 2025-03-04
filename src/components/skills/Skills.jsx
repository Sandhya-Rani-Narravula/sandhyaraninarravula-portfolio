import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Languages",
        skills: ["Python", "C", "C++", "C#", "Java", "JavaScript", "HTML", "CSS", "SQL", "Bash"],
    },
    {
        category: "Frameworks",
        skills: ["PyTorch", "TensorFlow", "Keras", "JAX", "ONNX", "Hugging Face Transformers", "CI/CD"],
    },
    {
        category: "Tools",
        skills: ["Git", "Docker", "EC2", "AIMET", "MLflow", "Weights & Biases", "TensorRT", "Open3D", "Apache Spark", "Ray", "Dask"],
    },
    {
        category: "Technologies",
        skills: ["Deep Learning", "LLMs", "Reinforcement Learning", "AWS", "Kubernetes", "Multi-Agent RL (MARL)", "Model Compression", "Transfer Learning", "Computer Vision", "NLP", "Speech AI", "MLOps", "Edge AI", "Federated Learning", "OpenCV", "Lambda"],
    },
    {
        category: "Other Skills",
        skills: ["Quantization", "Pruning", "AutoML", "Graph Neural Networks (GNNs)", "Transformer-Based AI", "Retrieval-Augmented Generation", "Model Deployment", "Performance Benchmarking", "Containerization"],
    }
];

const Skills = () => {
    return (
        <section className="skills container section" id="skills">
            <h2 className="section__title">Skills</h2>
            <div className="skills__grid">
                {skillsData.map((skillCategory, index) => (
                    <motion.div
                        key={index}
                        className="skills__category"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <h3 className="skills__category-title">{skillCategory.category}</h3>
                        <ul className="skills__list">
                            {skillCategory.skills.map((skill, idx) => (
                                <li key={idx} className="skills__item">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
