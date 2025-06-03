'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className={styles.quote} variants={itemVariants}>
            <p>&ldquo;Créer avec passion, coder avec précision&rdquo;</p>
          </motion.div>
          <motion.div className={styles.copyright} variants={itemVariants}>
            <p>&copy; {currentYear} Freddy Belz. Tous droits réservés.</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
} 