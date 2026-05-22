import heroImage from '~/assets/spr-background.jpg';
import heroPlaceholder from '~/assets/spr-background-placeholder.jpg';
import architectureImage from '~/assets/notfound.jpg';
import cltImage from '~/assets/notfound.jpg';
import scrImage from '~/assets/notfound.jpg';
import tagImage from '~/assets/notfound.jpg';
import apiImage from '~/assets/notfound.jpg';
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
import styles from './aiforus-pipeline.module.css';

const title = 'AIFORUS News Pipeline';
const description =
  'Production AI news collection pipeline I designed and built at Aiforus (Seoul). The system continuously discovers AI-related news URLs from global media, fetches and normalizes article content, and applies zero-shot AI tagging — separating policy from code through a bilingual governance layer.';
const roles = [
  'Backend Engineer (solo)',
  'Pipeline Architecture',
  'ML Integration',
  'Database Design',
  'Docker Operations',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const AiforusPipeline = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.pipeline}>
        <ProjectBackground
          src={heroImage}
          srcSet={`${heroImage} 1080w, ${heroImage} 2160w`}
          placeholder={heroPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader title={title} description={description} roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${architectureImage} 1280w, ${architectureImage} 2560w`}
              width={1280}
              height={800}
              placeholder={heroPlaceholder}
              alt="High-level architecture of the AIFORUS news collection pipeline"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Aiforus needed a foundation for AI-news intelligence that could grow over
              years without being rewritten. The first step was a collection layer that
              kept up with thousands of global sources, recovered cleanly from failures,
              and stayed neutral about downstream interpretation — so summarization,
              scoring, and analytics could be iterated independently above it.
            </ProjectSectionText>
            <ProjectSectionText>
              I built that layer end-to-end as the solo backend engineer: source
              discovery, content normalization, an AI tagging step, the FastAPI surface
              that exposes results, and the operations around scheduling and Docker.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Architecture: four services, one operator</ProjectSectionHeading>
              <ProjectSectionText>
                The system is split into four independently runnable services
                orchestrated by a thin operator layer. Each service owns one
                responsibility and never reaches across boundaries.
              </ProjectSectionText>
              <ProjectSectionText>
                <li><b>CLT</b> — discovers and collects news URLs from global feeds and sitemaps.</li>
                <li><b>SCR</b> — fetches each URL, parses the article body, normalizes it.</li>
                <li><b>TAG</b> — applies AI tagging: language detection, AI relevance scoring, and zero-shot topic classification.</li>
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
              alt="Diagram of CLT, SCR, TAG, and API services with the policy layer alongside"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>CLT — URL discovery</ProjectSectionHeading>
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

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>SCR — content normalization</ProjectSectionHeading>
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
                with a reason code, which I found essential when debugging source-set
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

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>TAG — AI tagging without a model lock-in</ProjectSectionHeading>
              <ProjectSectionText>
                The tagger applies three independent passes per article: an AI
                relevance score, a zero-shot topic classification, and a separate
                Korean-language topic detector built on anchor phrases. Each pass
                writes to its own column so we can run shadow versions side-by-side
                without breaking consumers.
              </ProjectSectionText>
              <ProjectSectionText>
                Models live behind a thin abstraction — <b>sentence-transformers</b>
                today, but the interface is small enough that swapping to an LLM
                API tomorrow is a contained change. This matters because Aiforus's
                team explicitly does not want to be locked to one vendor's model.
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

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>API + operations</ProjectSectionHeading>
              <ProjectSectionText>
                A FastAPI service exposes the data to the dashboard via a small set of
                read endpoints (trends, articles, sources). The collector and scraper
                run on a scheduled operator. Everything ships as two Docker images
                (API and scheduler), pinned to a Postgres backend with additive-only
                migrations so a new schema column never breaks a running deploy.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${apiImage} 1280w, ${apiImage} 2560w`}
              width={1280}
              height={800}
              placeholder={heroPlaceholder}
              alt="FastAPI surface, scheduled operator, and Docker deployment topology"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>What I learned</ProjectSectionHeading>
              <ProjectSectionText>
                The biggest win wasn't a clever model — it was treating failures and
                policy changes as first-class workflows. Once "this source broke" and
                "we now classify Korean articles differently" stopped being incidents
                and became routine operations, the system started compounding instead
                of degrading.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
