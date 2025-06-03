'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Projets.module.scss';
import { projects } from '@/data/projects';

export default function Projets() {
  const [selectedTag, setSelectedTag] = useState('Tous');
  const tags = ['Tous', 'Dev', 'Design', 'Jeu', 'Projet 360°', 'UX/UI'];

  const filteredProjects = selectedTag === 'Tous'
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <section className={styles.projets} id="projets">
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projets
        </motion.h2>

        <div className={styles.filters}>
          {tags.map((tag) => (
            <button
              key={tag}
              className={`${styles.filterButton} ${selectedTag === tag ? styles.active : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((projet, index) => (
            <motion.div
              key={projet.id}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.imageContainer}>
                <img src={projet.image} alt={projet.title} />
                <div className={styles.links}>
                  {projet.liveLink && projet.liveLink !== "#" && (
                    <a href={projet.liveLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Voir le site
                    </a>
                  )}
                  {projet.githubLink && projet.githubLink !== "#" && projet.githubLink !== "" && (
                    <a href={projet.githubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                      Code source
                    </a>
                  )}
                </div>
              </div>

              <Link href={`/projets/${projet.id}`} className={styles.content}>
                <div className={styles.contentWrapper}>
                  <div className={styles.mainContent}>
                    <h3>{projet.title}</h3>
                    {projet.id === "tournis" && <span className={styles.inProgress}>En cours</span>}
                    <p className={styles.description}>{projet.description}</p>
                    <div className={styles.technologies}>
                      {projet.technologies.map((tech) => (
                        <span key={tech} className={styles.tag}>{tech}</span>
                      ))}
                    </div>
                    <div className={styles.projectTags}>
                      {projet.tags.map((tag) => (
                        <span key={tag} className={styles.projectTag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.readMore}>
                    <span>Voir plus</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 