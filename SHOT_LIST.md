# Portfolio screenshot shot-list

How this works:
1. Capture the screens listed for a project.
2. Drop the files into `app/assets/projects/<slug>/` (create the folder).
3. Tell me — I wire them into the project's `media` array in `app/data/projects.js`
   and they appear in a gallery on that project's info page.

**Specs:** PNG or JPG, ~1400–1800px wide, clean (no personal data / secrets visible).
A short screen recording (15–30s MP4 or GIF) also works great for app demos.

We're doing this **one project at a time**. Current: **pitchmath**.

---

## pitchmath  →  `app/assets/projects/pitchmath/`
(No live demo — Streamlit + Postgres can't be free-hosted statically, so these
screens *are* the demo. A short screen recording would be ideal as the hero.)

Capture, in priority order:
1. **Match Analyzer** — the head-to-head betting view (the headline screen).
2. **Team Analyzer / "Team DNA" radar** — the radar chart + team form.
3. **Player Analyzer** — player props / per-match stats.
4. **Fixtures** — upcoming-match schedule across competitions.
5. *(optional)* extractor running in the terminal, or the Postgres schema — shows the pipeline side.

Best single asset: a **15–30s screen recording** clicking through Match → Team → Player.

---

## (later projects — to be detailed when we reach them)
- masil — map demo will be live; screens optional (detection samples, depth output).
- ai-eval — a sample report: confusion matrix / PR curve / metrics CSV.
- desktop-tools — the launcher dashboard + one or two sub-apps.
- aiforus — dashboard map + trends (only what's OK to show publicly).
- seaweed-gan / rice-leaf / insomnia — result images.
