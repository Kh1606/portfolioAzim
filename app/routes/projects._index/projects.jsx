import { Footer } from '~/components/footer';
import { ProjectCard } from '~/components/project-card';
import { ProjectContainer, ProjectHeader, ProjectSection } from '~/layouts/project';
import { projects } from '~/data/projects';
import { baseMeta } from '~/utils/meta';
import styles from './projects.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Projects',
    description:
      'Things I have built — AI research, data pipelines, web apps and tools. Browse the cards, open a project for details, or jump straight to the code.',
  });
};

export const Projects = () => {
  return (
    <>
      <ProjectContainer className={styles.projects}>
        <ProjectHeader
          title="Projects"
          description="A selection of things I have built — AI research, data pipelines, web apps and tools. Click a card for the details, or jump straight to the code."
        />
        <ProjectSection padding="top">
          <ul className={styles.grid}>
            {projects.map((project, index) => (
              <li className={styles.gridItem} key={project.slug}>
                <ProjectCard project={project} index={index} />
              </li>
            ))}
          </ul>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
