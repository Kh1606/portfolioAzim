import { Link as RouterLink } from '@remix-run/react';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { ProjectContainer } from '~/layouts/project';
import { Section } from '~/components/section';
import { cssProps } from '~/utils/style';
import styles from './project-detail.module.css';

/**
 * Concise, scannable project detail page. Driven entirely by a project entry
 * from app/data/projects.js (its `caseStudy` block). Renders: hero (title,
 * tagline, meta, actions) → glance (problem / what it does) → stack + role →
 * highlights → CTA. Sections with no data are skipped, so there are never
 * empty placeholder dumps.
 */
export function ProjectDetail({ project }) {
  const { title, blurb, github, url, accent, year, status, caseStudy = {} } = project;
  const { tagline, problem, whatItDoes, stack, role, highlights, note } = caseStudy;

  const metaItems = [role?.length && role[0], status, year].filter(Boolean);

  return (
    <ProjectContainer className={styles.detail} style={cssProps({ detailAccent: accent })}>
      <Section as="section" className={styles.hero}>
        <RouterLink className={styles.back} to="/projects" prefetch="intent" unstable_viewTransition>
          ← All projects
        </RouterLink>

        <Heading className={styles.title} level={2} as="h1">
          {title}
        </Heading>
        <Text className={styles.tagline} size="xl" as="p">
          {tagline || blurb}
        </Text>

        {metaItems.length > 0 && (
          <ul className={styles.meta}>
            {metaItems.map(item => (
              <li className={styles.metaItem} key={item}>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.actions}>
          {github && (
            <Button icon="github" href={github}>
              View code
            </Button>
          )}
          {url && (
            <Button secondary iconEnd="chevron-right" iconHoverShift href={url}>
              Live demo
            </Button>
          )}
        </div>
      </Section>

      <Section as="section" className={styles.body}>
        {(problem || whatItDoes) && (
          <div className={styles.glance}>
            {problem && (
              <div className={styles.glanceItem}>
                <h2 className={styles.glanceLabel}>The problem</h2>
                <Text as="p" size="l" className={styles.glanceText}>
                  {problem}
                </Text>
              </div>
            )}
            {whatItDoes && (
              <div className={styles.glanceItem}>
                <h2 className={styles.glanceLabel}>What it does</h2>
                <Text as="p" size="l" className={styles.glanceText}>
                  {whatItDoes}
                </Text>
              </div>
            )}
          </div>
        )}

        {(stack?.length || role?.length) && (
          <div className={styles.specs}>
            {stack?.length > 0 && (
              <div className={styles.specBlock}>
                <h3 className={styles.specLabel}>Stack</h3>
                <ul className={styles.chips}>
                  {stack.map(item => (
                    <li className={styles.chip} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {role?.length > 0 && (
              <div className={styles.specBlock}>
                <h3 className={styles.specLabel}>My role</h3>
                <ul className={styles.chips}>
                  {role.map(item => (
                    <li className={styles.chip} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {highlights?.length > 0 && (
          <div className={styles.highlights}>
            <h2 className={styles.sectionLabel}>Highlights</h2>
            <div className={styles.highlightGrid}>
              {highlights.map(item => (
                <article className={styles.highlight} key={item.title}>
                  <h3 className={styles.highlightTitle}>{item.title}</h3>
                  <Text as="p" className={styles.highlightText}>
                    {item.text}
                  </Text>
                </article>
              ))}
            </div>
          </div>
        )}

        {note && <p className={styles.note}>{note}</p>}

        <div className={styles.cta}>
          {github && (
            <Button icon="github" href={github}>
              View on GitHub
            </Button>
          )}
          <Button secondary iconEnd="chevron-right" iconHoverShift href="/projects">
            All projects
          </Button>
        </div>
      </Section>

      <Footer />
    </ProjectContainer>
  );
}
