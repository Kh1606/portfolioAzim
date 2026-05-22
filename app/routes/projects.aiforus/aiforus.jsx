// === IMAGE PLACEHOLDERS ===
// All images below are placeholders. See PLACEHOLDER_MAP comment at end of file
// for what to swap each one with.
import heroImage from '~/assets/loki.jpg';                    // [1] HERO BANNER
import heroPlaceholder from '~/assets/slice-background-placeholder.jpg';
import overviewImage from '~/assets/notfound.jpg';            // [2] OVERVIEW SHOT
import architectureImage from '~/assets/notfound.jpg';        // [3] ARCHITECTURE DIAGRAM
import cltImage from '~/assets/notfound.jpg';                 // [4] CLT IMAGE
import scrImage from '~/assets/notfound.jpg';                 // [5] SCR IMAGE
import tagImage from '~/assets/notfound.jpg';                 // [6] TAG IMAGE
import mapImage from '~/assets/notfound.jpg';                 // [7] DASHBOARD MAP
import trendsImage from '~/assets/notfound.jpg';              // [8] DASHBOARD TRENDS
import newsPanelImage from '~/assets/notfound.jpg';           // [9] DASHBOARD NEWS PANEL
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './aiforus.module.css';

const title = 'AIFORUS — AI News Intelligence Platform';
const description =
  'Production full-stack system I designed and built solo at Aiforus (Seoul). A Python pipeline (FastAPI + PostgreSQL + ML tagging) continuously discovers AI-related news from global media, scrapes and normalizes content, and applies zero-shot classification. A React + Vite dashboard with Leaflet maps and Recharts visualizes the output for non-technical users.';
const roles = [
  'Solo Engineer (backend + frontend)',
  'Pipeline Architecture',
  'ML Integration',
  'Data Visualization',
  'Docker / nginx Deploy',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Aiforus = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.aiforus}>
        <ProjectBackground
          src={heroImage}
          srcSet={`${heroImage} 1280w, ${heroImage} 2560w`}
          width={1280}
          height={800}
          placeholder={heroPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader title={title} description={description} roles={roles} />

        {/* [2] OVERVIEW SHOT — first image after header */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${overviewImage} 1280w, ${overviewImage} 2560w`}
              width={1280}
              height={800}
              placeholder={heroPlaceholder}
              alt="Overview of the AIFORUS system: pipeline feeding the dashboard"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Aiforus needed a foundation for AI-news intelligence that could grow
              over years without being rewritten. The first step was a collection
              layer that kept up with thousands of global sources, recovered cleanly
              from failures, and stayed neutral about downstream interpretation — so
              summarization, scoring, and analytics could be iterated independently
              above it. The second step was a dashboard that a non-engineer could
              open and immediately answer two questions: what is happening in AI
              news right now, and where is it coming from.
            </ProjectSectionText>
            <ProjectSectionText>
              I built both ends — the Python pipeline and the React dashboard — as
              the solo engineer on the project.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        {/* [3] ARCHITECTURE DIAGRAM */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Architecture: pipeline + dashboard</ProjectSectionHeading>
              <ProjectSectionText>
                The backend is split into four independently runnable services
                orchestrated by a thin operator layer. Each service owns one
                responsibility and never reaches across boundaries.
              </ProjectSectionText>
              <ProjectSectionText>
                <li><b>CLT</b> — discovers and collects news URLs from global feeds and sitemaps.</li>
                <li><b>SCR</b> — fetches each URL, parses the article body, normalizes it.</li>
                <li><b>TAG</b> — applies AI tagging: language detection, AI relevance scoring, zero-shot topic classification.</li>
                <li><b>API</b> — a FastAPI surface that exposes trends and articles to the dashboard.</li>
              </ProjectSectionText>
              <ProjectSectionText>
                A separate <b>policy/</b> directory holds the rules in bilingual KO/EN
                docs. Policy is authoritative: the code implements the spec, not the
                other way around. This keeps the system audit-friendly and lets
                non-engineers evolve the rules without touching Python.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${architectureImage} 1280w, ${architectureImage} 2560w`}
              width={1280}
              height={800}
              placeholder={heroPlaceholder}
              alt="End-to-end architecture: CLT, SCR, TAG, API, policy layer, and React dashboard"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* [4] CLT IMAGE */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Backend — URL discovery (CLT)</ProjectSectionHeading>
              <ProjectSectionText>
                The collector reads from per-country source sets that I maintain
                separately from the code. Each source has its own discovery
                strategy — RSS, sitemap, listing pages — and its own polling cadence.
                Failures are first-class: a source that throws on Tuesday is expected
                to recover on Wednesday, and the scheduler treats the failure log as
                signal rather than an exception.
              </ProjectSectionText>
              <ProjectSectionText>
                The CLT service writes only discovered URLs and metadata. It never
                fetches article bodies and never makes editorial decisions — that
                lives downstream so the collection layer stays cheap and unopinionated.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${cltImage} 1280w, ${cltImage} 2560w`}
              width={1280}
              height={800}
              placeholder={heroPlaceholder}
              alt="CLT scheduler running per-country source sets with failure logging"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* [5] SCR IMAGE */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Backend — content normalization (SCR)</ProjectSectionHeading>
              <ProjectSectionText>
                The scraper picks up new URLs from the queue, fetches the page, and
                runs it through a two-stage parser: <b>trafilatura</b> for the primary
                extraction and <b>newspaper3k</b> as a fallback for pages where
                trafilatura under-performs. Language is detected with <b>fasttext</b>
                so downstream tagging knows which model to apply.
              </ProjectSectionText>
              <ProjectSectionText>
                Each fetch goes through a filter chain — paywalls, JS-only pages,
                duplicate canonicals — before normalization. Rejected URLs are kept
                with a reason code, which was essential for debugging source-set
                quality.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${scrImage} 1280w, ${scrImage} 2560w`}
              width={1280}
              height={800}
              placeholder={heroPlaceholder}
              alt="SCR fetch and parse pipeline with trafilatura primary and newspaper3k fallback"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* [6] TAG IMAGE */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Backend — AI tagging (TAG)</ProjectSectionHeading>
              <ProjectSectionText>
                The tagger applies three independent passes per article: an AI
                relevance score, a zero-shot topic classification, and a separate
                Korean-language topic detector built on anchor phrases. Each pass
                writes to its own column so we can run shadow versions side-by-side
                without breaking consumers.
              </ProjectSectionText>
              <ProjectSectionText>
                Models live behind a thin abstraction — <b>sentence-transformers</b>
                today, but the interface is small enough that swapping to an LLM API
                tomorrow is a contained change. This matters because the team
                explicitly does not want to be locked to one vendor's model.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${tagImage} 1280w, ${tagImage} 2560w`}
              width={1280}
              height={800}
              placeholder={heroPlaceholder}
              alt="TAG service applying AI scoring, zero-shot classification, and Korean topic detection"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* [7] DASHBOARD MAP */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Dashboard — map view</ProjectSectionHeading>
              <ProjectSectionText>
                The dashboard is a React 19 + Vite SPA that consumes the FastAPI
                surface and visualizes the pipeline's output. The map view uses
                <b> react-leaflet</b> to plot tracked sources, sized by article volume
                in the selected window. Clicking a marker filters the news panel to
                that source. The marker layer is memoized so re-renders during
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

        {/* [8] DASHBOARD TRENDS */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Dashboard — trends view</ProjectSectionHeading>
              <ProjectSectionText>
                A <b>Recharts</b> area chart shows article volume by AI topic over time.
                Korean-language topics surface as a separate stacked breakdown because
                the pipeline classifies them with a dedicated model — the UI follows
                the data, not the other way around. Hover gives the exact count per
                topic per day.
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

        {/* [9] DASHBOARD NEWS PANEL */}
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Dashboard — news panel</ProjectSectionHeading>
              <ProjectSectionText>
                The news panel is a virtualized list of articles filtered by whatever
                is selected on the map and trends views. Each row shows the source,
                the detected language, and the topic tag. Clicking opens the original
                URL in a new tab — the dashboard never mirrors article content, by
                policy. A top-level ErrorBoundary plus a centralized API client keeps
                backend hiccups from breaking the UI.
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

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Stack & operations</ProjectSectionHeading>
              <ProjectSectionText>
                Backend: Python 3.11, FastAPI, PostgreSQL with additive-only
                migrations, torch / transformers / sentence-transformers for the AI
                passes, fasttext for language detection, trafilatura + newspaper3k
                for parsing. Two Docker images (API + scheduler) plus a docker-compose
                dev stack.
              </ProjectSectionText>
              <ProjectSectionText>
                Frontend: React 19, Vite 7, react-leaflet, Recharts, served from a
                multi-stage nginx Docker image. No state library — React built-ins
                plus a small fetch helper were enough for a read-heavy, stateless-
                between-views dashboard.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>What I learned</ProjectSectionHeading>
              <ProjectSectionText>
                The biggest win wasn't a clever model — it was treating failures and
                policy changes as first-class workflows. Once "this source broke" and
                "we now classify Korean articles differently" stopped being incidents
                and became routine operations, the system started compounding instead
                of degrading. On the frontend side, the dashboard launched fast
                because I skipped TypeScript and a state library — both correct calls
                at the time, but TS is the next thing I'd add given how much the API
                surface has grown.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

/*
=== PLACEHOLDER_MAP ===

Each placeholder image is imported at the top of this file with a [N] marker.
To replace a placeholder: put the real file in app/assets/ and change the
import path. Suggested filename in parentheses.

[1] heroImage              — Hero banner (background of the whole page header)
                             What: A wide, atmospheric "hero" shot. Could be:
                                   (a) blurred screenshot of the dashboard main view, OR
                                   (b) an abstract dark-blue/teal background that hints at "data"
                             Size: 1920×1080 or wider. Will be darkened by 70% opacity.
                             Don't: include any visible UI text with sensitive content.
                             (suggest filename: aiforus-hero.jpg)

[2] overviewImage          — Big "money shot" right after the header
                             What: One clean screenshot of the dashboard main page — the most
                                   impressive single view. Map + trends + news panel all visible.
                             Size: ~1280×800.
                             Don't: show internal IPs, the URL bar, any auth tokens.
                             (suggest filename: aiforus-overview.png)

[3] architectureImage      — Architecture diagram
                             What: A box-and-arrow diagram of the full system:
                                   Sources → CLT → SCR → TAG → PostgreSQL → FastAPI → Dashboard
                                   Show policy/ as a sidebar feeding into all four backend services.
                             Size: ~1280×800. Excalidraw / tldraw / Mermaid all work.
                             Don't: include real IPs, ports, or DB credentials.
                             (suggest filename: aiforus-architecture.png)

[4] cltImage               — CLT (URL discovery) image
                             What: Either a small diagram showing "source-set polling → URL queue",
                                   OR a screenshot of the CLT scheduler logs / collected-URL counts.
                             Size: ~1280×800.
                             Don't: leak actual source URLs from configs/sources.json.
                             (suggest filename: aiforus-clt.png)

[5] scrImage               — SCR (scraping) image
                             What: A before/after example showing raw article HTML on the left and
                                   the trafilatura-cleaned text on the right. OR a small flow diagram
                                   "URL → fetch → trafilatura → newspaper3k fallback → DB".
                             Size: ~1280×800.
                             Don't: use a real source's content with their logo visible.
                             (suggest filename: aiforus-scr.png)

[6] tagImage               — TAG (AI tagging) image
                             What: A screenshot of a tagged article row — title, source, AI score,
                                   topic tag, language. OR a small diagram of the three passes.
                             Size: ~1280×800.
                             Don't: show real DB row IDs / internal article URLs.
                             (suggest filename: aiforus-tag.png)

[7] mapImage               — Dashboard map view
                             What: A clean screenshot of the Leaflet map with several markers visible.
                             Size: ~1280×800.
                             Don't: hover state showing a real source name + count if that's sensitive.
                             (suggest filename: aiforus-dashboard-map.png)

[8] trendsImage            — Dashboard trends view
                             What: Screenshot of the Recharts time-series area chart with multiple
                                   topics stacked.
                             Size: ~1280×800.
                             Don't: include a date range that reveals internal launch dates.
                             (suggest filename: aiforus-dashboard-trends.png)

[9] newsPanelImage         — Dashboard news panel
                             What: Screenshot of the news list with 5-10 article rows visible.
                             Size: ~1280×800.
                             Don't: show real headlines if you'd rather keep the dashboard internal.
                                    Either blur titles, or pick a time window of generic AI news.
                             (suggest filename: aiforus-dashboard-news.png)

Plus one more for the home page tile (not in this file — set in home.jsx):

[H] home-page hero tile    — The small textured "laptop" preview on the home page
                             What: A square-ish screenshot, since it shows up small.
                                   I recommend reusing [2] overviewImage scaled down.
                             Currently in home.jsx as: aiforusTexture (uses loki.jpg placeholder)
                             (suggest filename: aiforus-home.png)
*/
