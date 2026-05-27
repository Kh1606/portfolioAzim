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
 *
 * Screenshots: import the asset and reference it in the project's `media` array.
 */

import pitchmathMatchStats from '~/assets/projects/pitchmath/match-stats.png';
import pitchmathTeamDna from '~/assets/projects/pitchmath/team-dna.png';
import evalkitConfusion from '~/assets/projects/evalkit/cls-confusion-matrix.png';
import evalkitRoc from '~/assets/projects/evalkit/cls-roc.png';
import evalkitSegPr from '~/assets/projects/evalkit/seg-pr-curve.png';
import evalkitDetIou from '~/assets/projects/evalkit/det-iou-histogram.png';
import evalkitAsrWer from '~/assets/projects/evalkit/asr-wer-histogram.png';

export const projects = [
  {
    slug: 'pitchmath',
    title: 'PitchMath',
    blurb:
      'A football analytics platform. A pipeline pulls fixtures and stats from API-Football into Postgres, and a Streamlit app turns them into match, team and player insight.',
    tags: ['Python', 'Streamlit', 'PostgreSQL', 'API-Football', 'ML'],
    github: 'https://github.com/Kh1606/pitchmath',
    detail: '/projects/pitchmath',
    year: 2025,
    status: 'Active',
    accent: '#34d399',
    pixelColors: ['#10b981', '#34d399', '#6ee7b7'],
    media: [
      {
        src: pitchmathMatchStats,
        width: 855,
        height: 861,
        alt: 'PitchMath match stats — Liverpool vs Brentford xG, shots and possession comparison',
        caption: 'Match stats — full head-to-head comparison',
      },
      {
        src: pitchmathTeamDna,
        width: 1564,
        height: 891,
        alt: 'PitchMath Team Analyzer showing the Team DNA radar for Arsenal',
        caption: 'Team Analyzer — Team DNA radar',
      },
    ],
    caseStudy: {
      tagline: 'A football analytics platform, end to end.',
      problem:
        'Football stats are scattered across sites and shallow. I wanted one place that ingests raw match data and turns it into structured, comparable signals across many leagues.',
      whatItDoes:
        'An extraction pipeline pulls fixtures, team and player stats from API-Football into a single Postgres database. A Streamlit app then renders match analyzers, team form, player stats and a "Team DNA" radar on top of it.',
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
          title: 'Analytics-first UI',
          text: 'Analyzers compute form lines, scoring trends and home/away splits — the stats fans and analysts actually read, not raw dumps.',
        },
      ],
    },
  },
  {
    slug: 'aiforus',
    title: 'AIFORUS',
    blurb:
      'A production AI-news intelligence platform I built solo at Aiforus (live at aicerti.co.kr). A Python pipeline continuously discovers, fetches and normalizes global AI-related news; a React dashboard maps and charts it. A public demo + its source are open.',
    tags: ['FastAPI', 'React', 'ML', 'Docker', 'Leaflet'],
    github: 'https://github.com/Kh1606/ai-news-pipeline-demo',
    url: 'https://ai-news-pipeline-demo.azimjon1606.workers.dev',
    production: 'https://aicerti.co.kr',
    detail: '/projects/aiforus',
    year: 2024,
    status: 'In production · aicerti.co.kr',
    accent: '#38bdf8',
    pixelColors: ['#0ea5e9', '#38bdf8', '#7dd3fc'],
    caseStudy: {
      tagline: 'AI-news intelligence — built solo, shipped to production.',
      problem:
        'Non-technical teams needed to track global AI developments without reading hundreds of sources every day.',
      whatItDoes:
        'A backend continuously discovers AI-related news URLs from global media (the "clt" service), then fetches and normalizes the content ("scr" service) on a scheduler; an ML layer scores articles for AI-relevance. A React + Vite dashboard with Leaflet maps and Recharts turns the feed into something a non-technical user can scan. Live in production at aicerti.co.kr, with a stripped-down public demo (FastAPI + React, sample data) open-sourced.',
      stack: ['Python', 'FastAPI', 'React', 'Vite', 'Leaflet', 'Recharts', 'Docker', 'nginx'],
      role: [
        'Solo engineer (backend + frontend)',
        'Pipeline & scheduler architecture',
        'ML integration',
        'Docker / nginx deploy',
      ],
      highlights: [
        {
          title: 'Shipped to production',
          text: 'Designed and built the whole system solo — collection, normalization, ML scoring, API, dashboard and deploy — running in production at aicerti.co.kr.',
        },
        {
          title: 'Two-service pipeline',
          text: 'Decoupled URL discovery (clt) from content fetch + normalization (scr); each runs alone or together via an operator layer + scheduler, for stable long-term collection.',
        },
        {
          title: 'Zero-shot relevance',
          text: 'Scores incoming articles for AI-relevance with no per-label training data, so new topics need no retraining.',
        },
        {
          title: 'Built for non-experts',
          text: 'Map and trend views turn a noisy global feed into something readable at a glance.',
        },
      ],
      note: 'The production system is company IP. The linked repo + live demo are a public, stripped-down version (sample data) of the same architecture.',
    },
  },
  {
    slug: 'safestep',
    title: 'SafeStep',
    blurb:
      'Accessible pedestrian routing for Seoul. Fuses OpenStreetMap walkways, public accessibility facilities (elevators, lifts, accessible toilets) and AI-detected street hazards, routed with a custom Valhalla engine behind a FastAPI web app.',
    tags: ['Python', 'FastAPI', 'Valhalla', 'YOLO', 'Leaflet'],
    github: 'https://github.com/Kh1606/safestep',
    url: 'https://kh1606.github.io/safestep/',
    detail: '/projects/safestep',
    year: 2025,
    status: 'Prototype (Seongdong-gu)',
    accent: '#fbbf24',
    pixelColors: ['#f59e0b', '#fbbf24', '#fcd34d'],
    caseStudy: {
      tagline: 'Wheelchair-friendly walking routes for Seoul.',
      problem:
        'Normal map routing ignores whether a path is actually walkable for someone with limited mobility — stairs, missing ramps, broken sidewalks, or where the nearest elevator or accessible toilet is.',
      whatItDoes:
        'SafeStep fuses OpenStreetMap walkways, Seoul open-data accessibility POIs (elevators, wheelchair lifts, accessible toilets, escalators) and AI-detected street hazards, then routes over them with a custom Valhalla profile. A FastAPI app with a Leaflet map (prototyped in Seongdong-gu, 성동구) lets you see hazards and plan accessible routes.',
      stack: ['Python', 'FastAPI', 'Valhalla', 'YOLO (Ultralytics)', 'Leaflet', 'OpenStreetMap', 'Docker'],
      role: ['Solo developer', 'Routing engine', 'Data pipeline', 'AI hazard detection', 'Web app'],
      highlights: [
        {
          title: 'Accessibility-aware routing',
          text: 'A custom Valhalla profile routes over real walkways and avoids detected hazards, instead of treating every path as equally walkable.',
        },
        {
          title: 'Public data, fused',
          text: 'Pulls and cleans Seoul open-data POIs — elevators, wheelchair lifts, accessible toilets, escalators — into live map layers.',
        },
        {
          title: 'AI hazard detection',
          text: 'A YOLO model spots pedestrian hazards in street imagery and drops geo-located hazard points onto the map.',
        },
        {
          title: 'Full stack, dockerised',
          text: 'FastAPI backend + Leaflet frontend with Kakao geocoding, packaged with docker-compose.',
        },
      ],
    },
  },
  {
    slug: 'evalkit',
    title: 'EvalKit',
    blurb:
      'A unified CLI that benchmarks five AI model types — image classification, object detection, segmentation, speech and text — reporting not just accuracy but stability (metric variance across repeated data slices).',
    tags: ['Python', 'PyTorch', 'Ultralytics', 'Transformers', 'CLI'],
    github: 'https://github.com/Kh1606/evalkit',
    detail: '/projects/evalkit',
    year: 2025,
    status: 'Tool',
    accent: '#60a5fa',
    pixelColors: ['#3b82f6', '#60a5fa', '#93c5fd'],
    media: [
      {
        src: evalkitConfusion,
        width: 800,
        height: 600,
        alt: 'EvalKit classification confusion matrix report',
        caption: 'Classification — confusion matrix',
      },
      {
        src: evalkitRoc,
        width: 640,
        height: 480,
        alt: 'EvalKit per-class ROC curves',
        caption: 'Classification — ROC curves',
      },
      {
        src: evalkitSegPr,
        width: 640,
        height: 480,
        alt: 'EvalKit segmentation precision-recall curve',
        caption: 'Segmentation — precision / recall',
      },
      {
        src: evalkitDetIou,
        width: 640,
        height: 480,
        alt: 'EvalKit detection IoU histogram',
        caption: 'Detection — IoU histogram',
      },
      {
        src: evalkitAsrWer,
        width: 640,
        height: 480,
        alt: 'EvalKit speech-recognition WER histogram',
        caption: 'Speech — WER histogram',
      },
    ],
    caseStudy: {
      tagline: 'One CLI to benchmark any model — for accuracy and stability.',
      problem:
        'Model evaluation is usually ad-hoc and single-number: you get one accuracy figure and no sense of how much it wobbles from run to run.',
      whatItDoes:
        'EvalKit is an interactive CLI that evaluates five model families — image classification, object detection, semantic segmentation, speech recognition and text — under repeated random subsampling. For each checkpoint it reports classic metrics (accuracy, mAP, mean IoU, WER) and their stability (variance across 50% data slices), and writes rich reports: confusion matrices, ROC / PR curves, IoU / WER histograms, calibration and t-SNE plots, plus CSV summaries.',
      stack: ['Python', 'PyTorch', 'Ultralytics', 'Transformers', 'scikit-learn', 'Matplotlib', 'Rich'],
      role: ['Solo developer', 'Evaluator architecture', 'Metrics & plotting', 'Packaging (pip)'],
      highlights: [
        {
          title: 'Five tasks, one tool',
          text: 'classify / detect / seg / speech / text — a shared base class with one evaluator per task, behind a single guided CLI.',
        },
        {
          title: 'Stability, not just accuracy',
          text: 'Repeated random-subsampling reports the variance of each metric, so you see how reliable a score actually is.',
        },
        {
          title: 'Rich auto-reports',
          text: 'Every run drops confusion matrices, PR/ROC curves, histograms, calibration & t-SNE plots and a CSV summary.',
        },
        {
          title: 'Device-aware & pip-installable',
          text: 'Automatic GPU/CPU fallback; install with pip and run `evalkit`.',
        },
      ],
    },
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
    slug: 'tooldock',
    title: 'ToolDock',
    blurb:
      'A dashboard that launches a set of small utilities — audio, CSV analyser, hashing, image analysis and a system-info app. Built as Electron mini-apps; the browser-based ones run live on the web.',
    tags: ['JavaScript', 'Electron', 'Node.js', 'Express'],
    github: 'https://github.com/Kh1606/tooldock',
    url: 'https://kh1606.github.io/tooldock/',
    detail: '/projects/tooldock',
    year: 2025,
    status: 'Prototype',
    accent: '#e879f9',
    pixelColors: ['#d946ef', '#e879f9', '#f0abfc'],
    caseStudy: {
      tagline: 'A dock of small, single-purpose tools.',
      problem:
        'Little day-to-day tasks — hashing a string, eyeballing a CSV, checking an audio clip or image — usually mean hunting for a random website each time.',
      whatItDoes:
        'ToolDock is a dashboard that launches a set of self-contained mini-apps: an audio tool, a CSV analyser, a hashing tool, an image-analysis tool, and a system-info app (Node/Express). Each lives in its own folder and runs independently; the four browser-based ones are deployed live, while system-info runs locally with its backend.',
      stack: ['JavaScript', 'HTML / CSS', 'Bootstrap', 'Electron', 'Node.js', 'Express'],
      role: ['Solo developer', 'Launcher + sub-apps', 'Static web deploy'],
      highlights: [
        {
          title: 'Self-contained sub-apps',
          text: 'A Bootstrap launcher opens each tool from its own folder — add or remove a tool without touching the others.',
        },
        {
          title: 'Runs in the browser',
          text: 'The audio, CSV-analyser, hashing and image-analysis tools are pure client-side, so they work live on the web — no install.',
        },
        {
          title: 'Desktop + web',
          text: 'Packaged as Electron mini-apps for desktop, but the static ones deploy straight to GitHub Pages.',
        },
      ],
      note: 'Live demo covers the four browser-based tools; system-info needs its Express backend, so it runs locally only.',
    },
  },
  {
    slug: 'noticehub',
    title: 'NoticeHub',
    blurb:
      'A unified viewer for Korean public-institution announcements (공지사항). Scheduled scrapers feed a Supabase notices table and a React + Tailwind UI lets you browse 245+ sources by region — deployed live on GitHub Pages.',
    tags: ['React', 'Tailwind', 'Supabase', 'Vite', 'GitHub Actions'],
    github: 'https://github.com/Kh1606/noticehub',
    url: 'https://kh1606.github.io/noticehub/',
    detail: '/projects/noticehub',
    year: 2025,
    status: 'Active',
    accent: '#fb923c',
    pixelColors: ['#f97316', '#fb923c', '#fdba74'],
    caseStudy: {
      tagline: 'Every public-institution notice, in one place.',
      problem:
        'Korean public-institution announcements are scattered across hundreds of separate websites — there is no single place to track them.',
      whatItDoes:
        'NoticeHub aggregates announcements (공지사항) from 245+ public-institution sources, organized by region. Scheduled scrapers (GitHub Actions) collect notices into a Supabase table, a React + Tailwind UI browses and filters them, and a monthly job reports activity.',
      stack: ['React', 'Vite', 'Tailwind', 'Supabase', 'GitHub Actions', 'GitHub Pages'],
      role: ['Solo developer', 'Scrapers', 'Data model (Supabase)', 'UI'],
      highlights: [
        {
          title: 'Region-organized',
          text: 'Hundreds of public-institution sources arranged by region and sub-entity, so notices are easy to find.',
        },
        {
          title: 'Automated collection',
          text: 'Scheduled GitHub Actions scrape new notices into Supabase and generate a monthly report — no servers to run.',
        },
        {
          title: 'Serverless & free',
          text: 'A React/Vite front-end on GitHub Pages reads Supabase directly — fully serverless and free to host.',
        },
      ],
    },
  },
];

export function getProject(slug) {
  return projects.find(project => project.slug === slug);
}
