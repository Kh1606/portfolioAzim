import heroImage from '~/assets/loki.jpg';
import heroPlaceholder from '~/assets/slice-background-placeholder.jpg';
import overviewImage from '~/assets/notfound.jpg';
import mapImage from '~/assets/notfound.jpg';
import trendsImage from '~/assets/notfound.jpg';
import newsPanelImage from '~/assets/notfound.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './aiforus-dashboard.module.css';

const title = 'AIFORUS Dashboard';
const description =
  'React + Vite dashboard I built at Aiforus to visualize the output of the AIFORUS news pipeline. Interactive map of global sources, time-series trend charts, and a news browser — all backed by the FastAPI service behind a small typed client.';
const roles = [
  'Frontend Engineer (solo)',
  'UI / UX',
  'Data Visualization',
  'Docker / nginx Deploy',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const AiforusDashboard = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.dashboard}>
        <ProjectBackground
          src={heroImage}
          srcSet={`${heroImage} 1280w, ${heroImage} 2560w`}
          width={1280}
          height={800}
          placeholder={heroPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader title={title} description={description} roles={roles} />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${overviewImage} 800w, ${overviewImage} 1920w`}
              width={800}
              height={500}
              placeholder={heroPlaceholder}
              alt="Overview of the AIFORUS dashboard showing map, trends, and news panel"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The brief</ProjectSectionHeading>
            <ProjectSectionText>
              The AIFORUS pipeline was generating tens of thousands of tagged articles
              a week, but the team had no good way to look at the data. They wanted a
              dashboard that a non-engineer could open and immediately answer two
              questions: <i>what is happening in AI news right now</i>, and <i>where is
              it coming from</i>.
            </ProjectSectionText>
            <ProjectSectionText>
              I built the dashboard from scratch as the solo frontend engineer — design,
              implementation, deploy.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Stack choices</ProjectSectionHeading>
              <ProjectSectionText>
                <li><b>React 19 + Vite 7</b> — fastest path to a modern SPA with good DX. No SSR was needed: the dashboard is an authenticated internal tool, not a public site.</li>
                <li><b>react-leaflet</b> for the world map — OpenStreetMap tiles, no API keys, full control over markers and overlays.</li>
                <li><b>Recharts</b> for time-series — composable React API that fit the rest of the codebase better than D3 directly.</li>
                <li><b>nginx in a multi-stage Docker image</b> — node builds, nginx serves the static bundle. Simple to deploy alongside the existing services.</li>
              </ProjectSectionText>
              <ProjectSectionText>
                I deliberately skipped a state library — React's built-ins plus a small
                fetch helper handled everything. The dashboard is read-heavy and
                stateless between views, so adding Redux/Zustand would have been
                ceremony without payoff.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Map view</ProjectSectionHeading>
              <ProjectSectionText>
                The map shows where each tracked source publishes from, sized by
                article volume in the selected window. Clicking a marker filters the
                news panel to that source. The interaction stays cheap because the
                marker layer is memoized off the source list — re-renders during
                filtering only touch the news panel, not Leaflet.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${mapImage} 1280w, ${mapImage} 2560w`}
              width={1280}
              height={800}
              placeholder={heroPlaceholder}
              alt="Leaflet world map with markers sized by article volume per source"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Trends view</ProjectSectionHeading>
              <ProjectSectionText>
                A Recharts area chart shows article volume by AI topic over time.
                Korean-language topics are surfaced as a separate stacked breakdown
                because the pipeline classifies them with a dedicated model — the UI
                follows the data, not the other way around. Hover gives the exact
                count per topic per day.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${trendsImage} 1280w, ${trendsImage} 2560w`}
              width={1280}
              height={800}
              placeholder={heroPlaceholder}
              alt="Recharts time-series area chart of article volume by AI topic"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>News panel</ProjectSectionHeading>
              <ProjectSectionText>
                The news panel is a virtualized list of articles filtered by whatever
                is selected on the map and trends. Each row shows the source, the
                detected language, and the topic tag. Clicking an article opens the
                original URL in a new tab — the dashboard never mirrors article
                content, by policy.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${newsPanelImage} 1280w, ${newsPanelImage} 2560w`}
              width={1280}
              height={800}
              placeholder={heroPlaceholder}
              alt="News panel listing articles with source, language, and topic tags"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Robustness patterns</ProjectSectionHeading>
              <ProjectSectionText>
                Two patterns I leaned on heavily: a top-level <b>ErrorBoundary</b> that
                converts unexpected runtime errors into a friendly retry surface, and
                a <b>PageShell</b> layout abstraction so every view shares the same
                header, theme, and loading-state behavior without duplication. The API
                client centralizes error mapping so a backend 502 becomes a useful
                user-facing message instead of a stack trace.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>What I'd do differently</ProjectSectionHeading>
              <ProjectSectionText>
                The dashboard launched fast because I skipped TypeScript and a state
                library — both correct calls at the time. If I started today I would
                add TS from day one: the API surface has grown enough that the lack
                of types is now the slowest part of adding new views. Recharts is
                also showing its limits for our charts roadmap — Visx or D3 directly
                is on the list for a future iteration.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
