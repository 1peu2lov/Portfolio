'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./home.module.scss";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Parcours from "@/components/Parcours/Parcours";
import Projets from "@/components/Projets/Projets";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6
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

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotate: -5
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.1
      }
    }
  };

  const qualityCardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <main className={styles.home}>
      <section className={styles.hero} id="accueil">
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants}>Freddy Belz</motion.h1>
          <motion.p className={styles.subtitle} variants={itemVariants}>
            Développeur Web
          </motion.p>
          <motion.p className={styles.description} variants={itemVariants}>
            Étudiant passionné par le développement web et le design d&apos;interfaces, je conçois des expériences numériques modernes, à la croisée de l&apos;esthétique et de la performance. 
            Actuellement spécialisé en React et Next.js, je suis à la recherche d&apos;une alternance pour continuer à progresser en équipe et contribuer à des projets concrets.
          </motion.p>
          <motion.div 
            className={styles.qualities}
            variants={containerVariants}
          >
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                ),
                title: "Full Stack",
                description: "Maîtrise complète du développement, du front-end au back-end"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                ),
                title: "UI/UX Design",
                description: "Création d'interfaces intuitives et d'expériences utilisateur fluides"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                ),
                title: "Performance",
                description: "Optimisation des performances et des bonnes pratiques de développement"
              }
            ].map((quality, index) => (
              <motion.div
                key={quality.title}
                variants={qualityCardVariants}
                custom={index}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <div className={styles.qualityCard}>
                  {quality.icon}
                  <h3>{quality.title}</h3>
                  <p>{quality.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div 
          className={styles.imageWrapper}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            src="/images/profile.jpg"
            alt="Freddy Belz"
            width={500}
            height={500}
            priority
          />
        </motion.div>
      </section>

      <Skills />

      <Parcours/>
      
      <Projets />

      <Contact />
    </main>
  );
}
