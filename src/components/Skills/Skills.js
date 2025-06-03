'use client';

import { motion } from 'framer-motion';
import styles from './Skills.module.scss';

const skills = [
  {
    category: "Front-end",
    items: [
      { name: "HTML5/CSS3", level: "expert" },
      { name: "JavaScript", level: "expert" },
      { name: "React", level: "confirmé" },
      { name: "Sass", level: "intermédiaire" },
      { name: "Next.js", level: "intermédiaire" },
      { name: "TypeScript", level: "débutant" }
    ]
  },
  {
    category: "Back-end",
    items: [
      { name: "Node.js", level: "débutant" },
      { name: "Express", level: "débutant" },
      { name: "MongoDB", level: "intermédiaire" },
      { name: "SQL", level: "débutant" }
    ]
  },
  {
    category: "Outils & Autres",
    items: [
      { name: "Git", level: "intermédiaire" },
      { name: "Postman", level: "intermédiaire" },
      { name: "Docker", level: "débutant" }
    ]
  },
  {
    category: "Design",
    items: [
      { name: "Figma", level: "confirmé" },
      { name: "Photoshop", level: "débutant" },
      { name: "Illustrator", level: "intermédiaire" }
    ]
  }
];

const levelOrder = ["expert", "confirmé", "intermédiaire", "débutant"];

const levelColors = {
  débutant: "var(--text-color)",
  intermédiaire: "var(--text-color)",
  confirmé: "var(--text-color)",
  expert: "var(--text-color)"
};

const levelOpacity = {
  débutant: "0.2",
  intermédiaire: "0.5",
  confirmé: "0.7",
  expert: "0.95"
};

const SkillBar = ({ name, level }) => {
  const width = {
    débutant: "25%",
    intermédiaire: "50%",
    confirmé: "75%",
    expert: "100%"
  };

  return (
    <div className={styles.skillBar}>
      <div className={styles.skillInfo}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>
          {level}
        </span>
      </div>
      <div className={styles.progressBar}>
        <motion.div
          className={styles.progress}
          initial={{ width: 0 }}
          whileInView={{ width: width[level] }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ 
            background: levelColors[level],
            opacity: levelOpacity[level]
          }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  // Trier les compétences dans chaque catégorie selon le niveau
  const sortedSkills = skills.map(category => ({
    ...category,
    items: [...category.items].sort((a, b) => 
      levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level)
    )
  }));

  return (
    <section className={styles.skills} id="competences">
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Compétences
        </motion.h2>
        
        <div className={styles.legend}>
          {levelOrder.map((level) => (
            <div key={level} className={styles.legendItem}>
              <div 
                className={styles.legendColor} 
                style={{ 
                  background: levelColors[level],
                  opacity: levelOpacity[level]
                }} 
              />
              <span>{level}</span>
            </div>
          ))}
        </div>
        
        <div className={styles.skillsGrid}>
          {sortedSkills.map((category, index) => (
            <motion.div 
              key={category.category}
              className={styles.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsList}>
                {category.items.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 