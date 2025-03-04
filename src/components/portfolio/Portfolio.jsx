import React, { useState } from "react";
import "./Portfolio.css";

import Menu from "./Menu";
import { RiGithubLine, RiLink } from "react-icons/ri";
import { motion } from "framer-motion";

const Portfolio = () => {
	const [items, setItems] = useState(Menu);
	const [activeFilter, setActiveFilter] = useState(0);

	const filterItems = (categoryItem) => {
		const updatedItems = Menu.filter((curElem) => {
			return curElem.category.includes(categoryItem);
		});
		setItems(updatedItems);
	};

	return (
		<section className="portfolio container section" id="portfolio">
			<h2 className="section__title">Recent Projects</h2>

			<div className="portfolio__filters">
				<button 
					className={activeFilter === 0 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'}
					onClick={() => { setItems(Menu); setActiveFilter(0); }}
				>
					All
				</button>
				<button 
					className={activeFilter === 1 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'}
					onClick={() => { filterItems("AI"); setActiveFilter(1); }}
				>
					AI
				</button>
				<button 
					className={activeFilter === 2 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'}
					onClick={() => { filterItems("Reinforcement Learning"); setActiveFilter(2); }}
				>
					Reinforcement Learning
				</button>
				<button 
					className={activeFilter === 3 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'}
					onClick={() => { filterItems("Healthcare"); setActiveFilter(3); }}
				>
					Healthcare
				</button>
				<button 
					className={activeFilter === 4 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'}
					onClick={() => { filterItems("NLP"); setActiveFilter(4); }}
				>
					NLP
				</button>
				<button 
					className={activeFilter === 5 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'}
					onClick={() => { filterItems("Model Optimization"); setActiveFilter(5); }}
				>
					Model Optimization
				</button>
			</div>

			<div className="portfolio__container grid">
				{items.map((elem) => {
					const { id, title, category, description, url, repositoryUrl } = elem;

					return (
						<motion.div
							layout
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="portfolio__card"
							key={id}>
							
							<div className="portfolio__content">
								<span className="portfolio__category">{category.join(', ')}</span>
								<h3 className="portfolio__title">{title}</h3>
								<p className="portfolio__description">{description}</p>
								
								<div className="portfolio__buttons">
									{url && (
										<a href={url} target="_blank" rel="noreferrer" className="portfolio__button">
											<RiLink className="portfolio__button-icon" /> Demo
										</a>
									)}
									{repositoryUrl && (
										<a href={repositoryUrl} target="_blank" rel="noreferrer" className="portfolio__github-button">
											<RiGithubLine className="portfolio__button-icon" /> GitHub
										</a>
									)}
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
