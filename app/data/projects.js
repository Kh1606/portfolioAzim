/**
 * Single source of truth for the Projects grid and detail pages.
 *
 * Card behaviour:
 *   - `detail` set  -> clicking the card opens that internal page
 *   - else `url`    -> clicking the card opens the live demo (new tab)
 *   - else `github` -> clicking the card opens the repo (new tab)
 *   - `github` also renders the "Code" button when present
 *
 * `caseStudy` powers the concise detail template (see components/project-detail).
 * Text here is meant to be tweaked freely — it's all in one place.
 */

export const projects = [
  {
    slug: 'pitchmath',
    title: 'PitchMath',
    blurb:
      'A football analytics & betting platform. A pipeline pulls fixtures and stats from API-Football into Postgres, and a Streamlit app turns them into match, team and player betting insight.',
    tags: ['Python', 'Streamlit', 'PostgreSQL', 'API-Football', 'ML'],
    github: 'https://github.com/Kh1606/pitchmath',
    detail: '/projects/pitchmath',
    year: 2025,
    status: 'Active',
    accent: '#34d399',
    pixelColors: ['#10b981', '#34d399', '#6ee7b7'],
    caseStudy: {
      tagline: 'A football analytics & betting platform, end to end.',
      problem:
        'Betting-insight tools are scattered and shallow. I wanted one place that ingests raw match data and turns it into structured, comparable signals across many leagues.',
      whatItDoes:
        'An extraction pipeline pulls fixtures, team and player stats from API-Football into a single Postgres database. A Streamlit app then renders match analyzers, team form, player props and a "Team DNA" radar on top of it.',
      stack: ['Python', 'Streamlit', 'PostgreSQL', 'Docker', 'API-Football', 'Plotly'],
      role: ['Solo developer', 'Pipeline architecture', 'Data modeling', 'UI'],
      highlights: [
        {
          title: 'One DB, many leagues',
          text: 'An idempotent upsert pipeline loads EPL, UCL, cups and tier-2 leagues into one schema — re-runnable any time, never duplicating.',
        },
        {
          title: 'Postgres + Docker',
          text: 'Ships with a docker-compose Postgres and a SQLite fallback, plus a migration path between the two backends.',
        },
        {
          title: 'Betting-first UI',
          text: 'Analyzers compute form lines, over/under and BTTS splits — the stats a bettor actually reads, not raw dumps.',
        },
      ],
    },
  },
  {
    slug: 'aiforus',
    title: 'AIFORUS',
    blurb:
      'A production full-stack AI-news intelligence platform I built solo at Aiforus. A Python pipeline discovers and classifies global AI news; a React dashboard visualizes it on maps and charts.',
    tags: ['FastAPI', 'PostgreSQL', 'React', 'ML', 'Docker'],
    detail: '/projects/aiforus',
    year: 2024,
    status: 'Production · company project',
    accent: '#38bdf8',
    pixelColors: ['#0ea5e9', '#38bdf8', '#7dd3fc'],
    caseStudy: {
      tagline: 'AI-news intelligence platform, built solo in production.',
      problem:
        'Non-technical teams needed to track global AI developments without reading hundreds of sources every day.',
      whatItDoes:
        'A Python pipeline (FastAPI + PostgreSQL + ML tagging) continuously discovers AI-related news from global media, scrapes and normalizes it, and applies zero-shot classification. A React + Vite dashboard with Leaflet maps and Recharts visualizes the output for non-technical users.',
      stack: ['FastAPI', 'PostgreSQL', 'React', 'Vite', 'Docker', 'nginx'],
      role: [
        'Solo engineer (backend + frontend)',
        'Pipeline architecture',
        'ML integration',
        'Docker / nginx deploy',
      ],
      highlights: [
        {
          title: 'End-to-end ownership',
          text: 'Designed and shipped the whole system alone — ingestion, ML tagging, API, dashboard and deployment.',
        },
        {
          title: 'Zero-shot tagging',
          text: 'Classifies incoming articles with no per-label training data, so new topics need no retraining.',
        },
        {
          title: 'Built for non-experts',
          text: 'Map and trend views turn a noisy global feed into something a non-technical user can scan in seconds.',
        },
      ],
      note: 'Company project — source code is not public.',
    },
  },
  {
    slug: 'masil',
    title: 'masil',
    blurb:
      'Seoul pedestrian-hazard mapping. Extracts walkability features from OpenStreetMap and combines a YOLOv11 hazard detector with monocular depth estimation on stairs.',
    tags: ['Python', 'YOLOv11', 'PyTorch', 'OpenStreetMap', 'Folium'],
    github: 'https://github.com/Kh1606/masil',
    detail: '/projects/masil',
    year: 2025,
    status: 'Prototype',
    accent: '#fbbf24',
    pixelColors: ['#f59e0b', '#fbbf24', '#fcd34d'],
    caseStudy: {
      tagline: 'Mapping what makes Seoul hard to walk.',
      problem:
        'Pedestrian accessibility data — stairs, steep ramps, missing crossings — is sparse and rarely machine-readable.',
      whatItDoes:
        'Pulls pedestrian features (stairs, elevators, crossings) from a Seoul OSM extract, trains a YOLOv11 detector for accessibility features (step, stair, grab bar, ramp), and runs MiDaS / ZoeDepth depth estimation to gauge how steep a step is. A Leaflet demo overlays hazards along a route.',
      stack: ['Python', 'Ultralytics YOLOv11', 'PyTorch', 'osmium', 'Folium / Leaflet'],
      role: ['Data extraction', 'Model training', 'Depth estimation', 'Demo'],
      highlights: [
        {
          title: 'OSM → features',
          text: 'An osmium handler turns a raw .pbf extract into tidy pedestrian-feature CSVs.',
        },
        {
          title: 'Detection + depth',
          text: 'Combines object detection with monocular depth, so a detected "stair" also carries an estimate of how steep it is.',
        },
        {
          title: 'Route-level demo',
          text: 'A small Leaflet map overlays detected hazards along a walking route.',
        },
      ],
    },
  },
  {
    slug: 'ai-news-pipeline-demo',
    title: 'AI News Pipeline',
    blurb:
      'A runnable, stripped-down demo of a production AI-news pipeline — collects, tags and visualizes global AI news in a full-stack app deployed to Cloudflare Workers.',
    tags: ['React', 'Cloudflare Workers', 'ML', 'Full-stack'],
    url: 'https://ai-news-pipeline-demo.azimjon1606.workers.dev',
    year: 2025,
    status: 'Live demo',
    accent: '#a78bfa',
    pixelColors: ['#8b5cf6', '#a78bfa', '#c4b5fd'],
  },
  {
    slug: 'ai-eval',
    title: 'ai-eval',
    blurb:
      'A unified evaluation toolkit that benchmarks five AI model types — classification, detection, segmentation, speech and text — reporting both accuracy and stability across data slices.',
    tags: ['Python', 'PyTorch', 'Ultralytics', 'CLI'],
    github: 'https://github.com/Kh1606/ai-eval',
    year: 2025,
    status: 'Tool',
    accent: '#60a5fa',
    pixelColors: ['#3b82f6', '#60a5fa', '#93c5fd'],
  },
  {
    slug: 'seaweed-gan',
    title: 'Seaweed GAN',
    blurb:
      'A GAN that generates synthetic seaweed imagery — a generator and discriminator trained against each other to expand a small source dataset.',
    tags: ['Python', 'PyTorch', 'GAN', 'Deep Learning'],
    detail: '/projects/seaweed-gan',
    year: 2024,
    status: 'Research',
    accent: '#2dd4bf',
    pixelColors: ['#14b8a6', '#2dd4bf', '#5eead4'],
    caseStudy: {
      tagline: 'Generating seaweed imagery with GANs.',
      problem:
        'Small image datasets limit downstream models, so I explored generating realistic samples to expand one.',
      whatItDoes:
        'Trains a Generative Adversarial Network — a generator and a discriminator competing — to synthesize new seaweed images from a source set.',
      stack: ['Python', 'PyTorch', 'GAN'],
      role: ['Generator / discriminator design', 'Training loop', 'Evaluation'],
      highlights: [
        {
          title: 'Adversarial training',
          text: 'The generator learns to fool a discriminator that learns to spot fakes — converging toward realistic samples.',
        },
        {
          title: 'Augmentation use case',
          text: 'Synthetic images aimed at expanding a limited real dataset for downstream training.',
        },
      ],
    },
  },
  {
    slug: 'rice-leaf',
    title: 'Rice Leaf Classifier',
    blurb:
      'A CNN image classifier (ResNet18) that identifies rice-leaf diseases across multiple classes from a Kaggle dataset.',
    tags: ['Python', 'PyTorch', 'ResNet18', 'CNN'],
    detail: '/projects/rice-leaf',
    year: 2024,
    status: 'Research',
    accent: '#a3e635',
    pixelColors: ['#84cc16', '#a3e635', '#bef264'],
    caseStudy: {
      tagline: 'Classifying rice-leaf disease with a CNN.',
      problem:
        'Early disease identification in crops is valuable but needs accurate, automatable classification.',
      whatItDoes:
        'Trains a ResNet18 classifier on a multi-class Kaggle rice-leaf-disease dataset, with preprocessing, a training loop and prediction visualization.',
      stack: ['Python', 'PyTorch', 'ResNet18', 'torchvision'],
      role: ['Preprocessing', 'Model selection', 'Training loop', 'Visualization'],
      highlights: [
        {
          title: 'Transfer learning',
          text: 'Fine-tunes a pretrained ResNet18 instead of training from scratch, getting strong accuracy on a small set.',
        },
        {
          title: 'Visualized predictions',
          text: 'Outputs predicted disease classes alongside the input leaves for quick sanity checks.',
        },
      ],
    },
  },
  {
    slug: 'clt-plus',
    title: 'CLT+',
    blurb:
      'A unified viewer for Korean public-institution notices — a React/Vite UI over a hand-maintained region tree of 245 sub-entities and 372 source links.',
    tags: ['React', 'Vite', 'Supabase', 'GitHub Pages'],
    github: 'https://github.com/Kh1606/clt-plus',
    url: 'https://kh1606.github.io/clt-plus/',
    year: 2025,
    status: 'Active',
    accent: '#818cf8',
    pixelColors: ['#6366f1', '#818cf8', '#a5b4fc'],
  },
  {
    slug: 'insomnia',
    title: 'Insomnia',
    blurb:
      'An automated pipeline that extracts sleep data from tracking-app screenshots (e.g. Samsung Health) and turns it into structured CSVs for insomnia analysis.',
    tags: ['Python', 'OpenCV', 'Pandas', 'Automation'],
    detail: '/projects/insomnia',
    year: 2024,
    status: 'Research',
    accent: '#fb7185',
    pixelColors: ['#f43f5e', '#fb7185', '#fda4af'],
    caseStudy: {
      tagline: 'Turning sleep-app screenshots into data.',
      problem:
        'Sleep-tracking apps lock useful data inside images; analyzing it at scale means getting it out first.',
      whatItDoes:
        'Processes screenshots from sleep apps — detects the sleep-period graph, crops and grayscales it, extracts the values and writes structured CSVs ready for analysis and visualization.',
      stack: ['Python', 'OpenCV', 'Pandas', 'Matplotlib'],
      role: ['Image processing', 'Graph extraction', 'CSV generation', 'Visualization'],
      highlights: [
        {
          title: 'Image → table',
          text: 'Automated crop, grayscale and extraction converts a graph image into numeric rows.',
        },
        {
          title: 'Built for analysis',
          text: 'Outputs clean CSVs ready for insomnia-focused trend analysis.',
        },
      ],
    },
  },
  {
    slug: 'desktop-tools',
    title: 'Desktop Tools',
    blurb:
      'An Electron dashboard that launches a suite of small desktop utilities — audio, CSV analysis, hashing, image analysis and a system-info app with an Express backend.',
    tags: ['Electron', 'Node.js', 'Express', 'JavaScript'],
    github: 'https://github.com/Kh1606/desktop-tools',
    year: 2025,
    status: 'Prototype',
    accent: '#e879f9',
    pixelColors: ['#d946ef', '#e879f9', '#f0abfc'],
  },
  {
    slug: 'clt-plus2',
    title: 'CLT+2',
    blurb:
      'A UI-focused fork of CLT+ on a reduced dataset — a lighter React/Vite notices viewer pointing at a separate notices table.',
    tags: ['React', 'Vite', 'Supabase'],
    github: 'https://github.com/Kh1606/clt-plus2',
    url: 'https://kh1606.github.io/clt-plus2/',
    year: 2025,
    status: 'Active',
    accent: '#fb923c',
    pixelColors: ['#f97316', '#fb923c', '#fdba74'],
  },
];

export function getProject(slug) {
  return projects.find(project => project.slug === slug);
}
