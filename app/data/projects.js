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
import seaweedFlow from '~/assets/projects/seaweed-gan/howitworks.png';
import seaweedArch from '~/assets/projects/seaweed-gan/architecture.png';
import seaweedSample1 from '~/assets/projects/seaweed-gan/sample1.jpg';
import seaweedSample2 from '~/assets/projects/seaweed-gan/sample2.jpg';
import seaweedSample3 from '~/assets/projects/seaweed-gan/sample3.jpg';
import seaweedSample4 from '~/assets/projects/seaweed-gan/sample4.jpg';
import insomniaCrop from '~/assets/projects/insomnia/cropped-graph.png';
import insomniaGray from '~/assets/projects/insomnia/grayscale.png';
import insomniaCsv from '~/assets/projects/insomnia/csv-output.png';
import riceClasses from '~/assets/projects/rice-leaf/classes.png';
import riceLoss from '~/assets/projects/rice-leaf/loss-curve.png';
import ricePredictions from '~/assets/projects/rice-leaf/predictions.png';
import ricePredictionExample from '~/assets/projects/rice-leaf/prediction-example.png';
import seoulairCorr from '~/assets/projects/seoulair/correlation.png';
import seoulairTs from '~/assets/projects/seoulair/pm25-timeseries.png';
import seoulairMonthly from '~/assets/projects/seoulair/monthly-pm.png';
import aiforusFlow from '~/assets/projects/aiforus/howitworks.png';
import safestepFlow from '~/assets/projects/safestep/howitworks.png';
import noticehubFlow from '~/assets/projects/noticehub/howitworks.png';
import evalkitFlow from '~/assets/projects/evalkit/howitworks.png';
import pitchmathFlow from '~/assets/projects/pitchmath/howitworks.png';
import seoulairFlow from '~/assets/projects/seoulair/howitworks.png';

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
        src: pitchmathFlow,
        width: 973,
        height: 638,
        alt: 'PitchMath architecture — API-Football to Python extractor to Postgres to Streamlit',
        caption: 'How it works — API-Football → extractor → Postgres → Streamlit',
      },
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
    media: [
      {
        src: aiforusFlow,
        width: 1681,
        height: 467,
        alt: 'AIFORUS architecture — clt/scr collector, ML scoring, Postgres, FastAPI, React dashboard',
        caption: 'How it works — collector → scoring → API → dashboard',
      },
    ],
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
    media: [
      {
        src: safestepFlow,
        width: 1222,
        height: 1008,
        alt: 'SafeStep architecture — OSM + accessibility POIs + YOLO hazards into Valhalla and a Leaflet UI',
        caption: 'How it works — sources → Valhalla + FastAPI → Leaflet UI',
      },
    ],
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
        src: evalkitFlow,
        width: 1123,
        height: 1528,
        alt: 'EvalKit architecture — CLI dispatches to one of five task evaluators with repeated subsampling',
        caption: 'How it works — CLI → 5 evaluators → reports + CSV',
      },
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
      'A DCGAN that generates synthetic dried-seaweed (gim) sheet images — a generator turns noise into seaweed textures while a discriminator learns to tell real from fake.',
    tags: ['Python', 'TensorFlow', 'Keras', 'GAN', 'Deep Learning'],
    github: 'https://github.com/Kh1606/seaweed-gan',
    detail: '/projects/seaweed-gan',
    year: 2024,
    status: 'Research',
    accent: '#2dd4bf',
    pixelColors: ['#14b8a6', '#2dd4bf', '#5eead4'],
    media: [
      {
        src: seaweedFlow,
        width: 986,
        height: 996,
        alt: 'How Seaweed GAN works — adversarial training loop diagram',
        caption: 'How it works — adversarial training loop',
      },
      {
        src: seaweedArch,
        width: 756,
        height: 558,
        alt: 'GAN setup: generator vs discriminator',
        caption: 'The GAN setup — generator vs discriminator',
      },
      {
        src: seaweedSample1,
        width: 512,
        height: 512,
        alt: 'Generated dried-seaweed sheet sample 1',
        caption: 'Generated sample',
      },
      {
        src: seaweedSample2,
        width: 512,
        height: 512,
        alt: 'Generated dried-seaweed sheet sample 2',
        caption: 'Generated sample',
      },
      {
        src: seaweedSample3,
        width: 512,
        height: 512,
        alt: 'Generated dried-seaweed sheet sample 3',
        caption: 'Generated sample',
      },
      {
        src: seaweedSample4,
        width: 512,
        height: 512,
        alt: 'Generated dried-seaweed sheet sample 4',
        caption: 'Generated sample',
      },
    ],
    caseStudy: {
      tagline: 'Generating dried-seaweed sheets with a DCGAN.',
      problem:
        'I wanted to see how well a GAN could synthesize a very texture-heavy, niche subject — dried-seaweed (gim) sheets — and learn DCGAN training hands-on.',
      whatItDoes:
        'Trains a DCGAN: a generator turns random noise into seaweed-sheet textures while a discriminator learns to tell real sheets from generated ones; the two compete until the fakes look convincing. Produces 512×512 and upscaled 1600×1600 samples.',
      stack: ['Python', 'TensorFlow', 'Keras', 'DCGAN', 'NumPy', 'Matplotlib'],
      role: ['Generator / discriminator design', 'Training loop', 'Sample generation'],
      highlights: [
        {
          title: 'Adversarial training',
          text: 'The generator learns to fool a discriminator that learns to spot fakes — converging toward realistic seaweed textures.',
        },
        {
          title: 'Texture-faithful output',
          text: 'Captures the speckled, fibrous look of real gim sheets, not just blurry blobs.',
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
    github: 'https://github.com/Kh1606/rice-leaf',
    detail: '/projects/rice-leaf',
    year: 2024,
    status: 'Research',
    accent: '#a3e635',
    pixelColors: ['#84cc16', '#a3e635', '#bef264'],
    media: [
      {
        src: riceClasses,
        width: 740,
        height: 990,
        alt: 'Sample rice-leaf images across the disease classes',
        caption: 'The disease classes',
      },
      {
        src: riceLoss,
        width: 826,
        height: 451,
        alt: 'Train and validation loss curves',
        caption: 'Train / validation loss',
      },
      {
        src: ricePredictions,
        width: 1553,
        height: 812,
        alt: 'Grid of predictions vs ground truth on test leaves',
        caption: 'Predictions vs. ground truth',
      },
      {
        src: ricePredictionExample,
        width: 513,
        height: 411,
        alt: 'Single prediction on a rice-leaf image',
        caption: 'A single prediction',
      },
    ],
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
    github: 'https://github.com/Kh1606/insomnia',
    detail: '/projects/insomnia',
    year: 2024,
    status: 'Research',
    accent: '#fb7185',
    pixelColors: ['#f43f5e', '#fb7185', '#fda4af'],
    media: [
      {
        src: insomniaCrop,
        width: 1084,
        height: 544,
        alt: 'Cropped sleep-stage graph extracted from a sleep-app screenshot',
        caption: 'Cropped sleep-stage graph',
      },
      {
        src: insomniaGray,
        width: 678,
        height: 602,
        alt: 'Grayscaled graph prepared for value extraction',
        caption: 'Grayscaled for extraction',
      },
      {
        src: insomniaCsv,
        width: 398,
        height: 312,
        alt: 'Structured per-minute sleep-status CSV output',
        caption: 'Structured per-minute output',
      },
    ],
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
    media: [
      {
        src: noticehubFlow,
        width: 1025,
        height: 676,
        alt: 'NoticeHub architecture — scheduled scrapers, Supabase notices table, React UI',
        caption: 'How it works — scheduled scrapers → Supabase → UI',
      },
    ],
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
  {
    slug: 'seoulair',
    title: 'SeoulAir',
    blurb:
      'Cleans, fills and merges scattered Seoul air-quality + weather exports (2022–2023) into analysis-ready datasets, then analyzes how the pollutants (PM2.5/PM10/O3/NO2/CO/SO2) relate to each other and the weather.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Data Engineering'],
    github: 'https://github.com/Kh1606/seoulair',
    detail: '/projects/seoulair',
    year: 2024,
    status: 'Data analysis',
    accent: '#22d3ee',
    pixelColors: ['#06b6d4', '#22d3ee', '#67e8f9'],
    media: [
      {
        src: seoulairFlow,
        width: 1186,
        height: 626,
        alt: 'SeoulAir architecture — AQI + weather xlsx through pandas to Jupyter analysis and charts',
        caption: 'How it works — AQI + weather → pandas → unified CSV → charts',
      },
      {
        src: seoulairCorr,
        width: 780,
        height: 650,
        alt: 'Correlation heatmap of Seoul air pollutants',
        caption: 'Pollutant correlations',
      },
      {
        src: seoulairTs,
        width: 1170,
        height: 455,
        alt: 'Daily mean PM2.5 across Seoul over a year',
        caption: 'Daily PM2.5 across Seoul',
      },
      {
        src: seoulairMonthly,
        width: 1040,
        height: 520,
        alt: 'Monthly average PM2.5 vs PM10',
        caption: 'Monthly PM2.5 vs PM10',
      },
    ],
    caseStudy: {
      tagline: 'Making messy Seoul air-quality data analysis-ready.',
      problem:
        'Seoul air-quality and weather come as scattered monthly exports with gaps and inconsistent timestamps — not something you can analyze directly.',
      whatItDoes:
        'Ingests monthly Seoul air-quality exports (PM10, PM2.5, O3, NO2, CO, SO2 by district) plus weather data, normalizes timestamps, fills gaps and merges everything into clean unified tables — then runs correlation analysis across pollutants and weather.',
      stack: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
      role: ['Data collection', 'Cleaning & gap-filling', 'Merging', 'Correlation analysis'],
      highlights: [
        {
          title: 'Scattered → unified',
          text: 'Monthly per-district exports across two years, normalized and joined into one analysis-ready dataset.',
        },
        {
          title: 'Sensible signals',
          text: 'PM2.5 tracks CO and NO2 (combustion / traffic) and peaks in winter; ozone is anti-correlated with NO2 — the expected photochemistry.',
        },
        {
          title: 'Reproducible figures',
          text: 'A small script regenerates the charts from the cleaned sample CSV.',
        },
      ],
    },
  },
];

export function getProject(slug) {
  return projects.find(project => project.slug === slug);
}
