'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './Parcours.module.scss';

export default function Parcours() {
  const [activeSection, setActiveSection] = useState('formation');

  const formationData = [
    {
      title: "Développement Web & Web Design (2ᵉ année)",
      date: "2024 - Présent",
      description: "Études en développement web full stack et design d'interface à Digital Campus."
    },
    {
      title: "Certification Développeur Web Front-End",
      date: "2023 - 2024",
      description: "Formation à distance via SCRIMBA axée sur HTML, CSS, JavaScript et React."
    },
    {
      title: "DEUG STAPS - Spécialité Éducation et Motricité",
      date: "2020 - 2022",
      description: "2 années d'études en sciences du sport à l’université STAPS."
    },
    {
      title: "Baccalauréat Scientifique - Spécialité SVT",
      date: "2019 - 2020",
      description: "Lycée Elie Faure - Mention Bien"
    }
  ];


  const experienceData = [
  {
    title: "Développeur React Native (Stage)",
    date: "Avril 2025 - Présent",
    description: "Aide au développement d’une application mobile en React Native chez Silia."
  },
  {
    title: "Barista - French Coffee Shop",
    date: "Janvier 2024 - Septembre 2024",
    description: "Préparation et service de boissons dans un centre commercial."
  },
  {
    title: "Employé polyvalent - Heiko Poké",
    date: "Mai 2022 - Septembre 2023",
    description: "Service et préparation de Poké Bowls dans une zone commerciale."
  }
];

  const currentData = activeSection === 'formation' ? formationData : experienceData;

  return (
    <section className={styles.parcours} id="parcours">
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Parcours
        </motion.h2>

        <div className={styles.buttons}>
          <button 
            className={`${styles.switchButton} ${activeSection === 'formation' ? styles.active : ''}`}
            onClick={() => setActiveSection('formation')}
          >
            Formation
          </button>
          <button 
            className={`${styles.switchButton} ${activeSection === 'experience' ? styles.active : ''}`}
            onClick={() => setActiveSection('experience')}
          >
            Expérience
          </button>
        </div>

        <div className={styles.grid}>
          {currentData.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>{item.title}</h3>
              <p className={styles.date}>{item.date}</p>
              <p className={styles.description}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 