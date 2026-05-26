import { Link as RouterLink } from '@remix-run/react';
import { Icon } from '~/components/icon';
import { PixelCanvas } from '~/components/pixel-canvas';
import { classes, cssProps } from '~/utils/style';
import styles from './project-card.module.css';

const MAX_TAGS = 5;

export function ProjectCard({ project, index = 0 }) {
  const { title, blurb, tags = [], github, url, detail, accent, pixelColors, year, status } =
    project;

  // Card-level destination: internal detail page first, else live demo, else repo.
  const primaryHref = detail || url || github;
  const isInternal = Boolean(detail);
  const indexLabel = String(index + 1).padStart(2, '0');
  const visibleTags = tags.slice(0, MAX_TAGS);
  const overflow = tags.length - visibleTags.length;

  return (
    <article
      className={styles.card}
      style={cssProps({ cardAccent: accent, delay: `${index * 80}ms` })}
      data-status={status}
    >
      {pixelColors && (
        <PixelCanvas
          className={styles.pixels}
          gap={8}
          speed={30}
          colors={pixelColors}
          variant="default"
          style={{ zIndex: -1 }}
        />
      )}

      <div className={styles.inner}>
        <div className={styles.top}>
          <span className={styles.index} aria-hidden>
            {indexLabel}
          </span>
          {year && <span className={styles.year}>{year}</span>}
        </div>

        <h2 className={styles.title}>
          {/* Stretched link — clicking anywhere on the card follows this */}
          {isInternal ? (
            <RouterLink
              className={styles.titleLink}
              to={primaryHref}
              prefetch="intent"
              unstable_viewTransition
            >
              {title}
            </RouterLink>
          ) : (
            <a
              className={styles.titleLink}
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          )}
        </h2>

        <p className={styles.blurb}>{blurb}</p>

        <div className={styles.footer}>
          <ul className={styles.tags} aria-label="Tools used">
            {visibleTags.map(tag => (
              <li className={styles.tag} key={tag}>
                {tag}
              </li>
            ))}
            {overflow > 0 && <li className={classes(styles.tag, styles.tagMore)}>+{overflow}</li>}
          </ul>

          {github && (
            <a
              className={styles.codeButton}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source on GitHub`}
            >
              <Icon className={styles.codeIcon} icon="github" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
