import { projects } from '@/data/projects';
import styles from './page.module.scss';
import Link from 'next/link';

export async function generateStaticParams() {
  return projects.map((project) => ({
    projet: project.id,
  }));
}

export default function ProjetPage({ params }) {
  const project = projects.find((p) => p.id === params.projet);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <article className={styles.projetPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/#projets" className={styles.backLink}>
            ← Retour aux projets
          </Link>
          <h1>{project.title}</h1>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className={styles.mainImage}>
          <img src={project.image} alt={project.title} />
        </div>

        <div className={styles.content}>
          <div className={styles.description}>
            <h2>À propos du projet</h2>
            <p>{project.longDescription}</p>
          </div>

          <div className={styles.features}>
            <h2>Fonctionnalités principales</h2>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.challenges}>
            <h2>Défis techniques</h2>
            <p>{project.challenges}</p>
          </div>

          <div className={styles.technologies}>
            <h2>Technologies utilisées</h2>
            <div className={styles.techTags}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Voir le site
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              Code source
            </a>
          </div>
        </div>
      </div>
    </article>
  );
} 