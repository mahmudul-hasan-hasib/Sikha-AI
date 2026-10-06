# ShunnoShikha AI · ShikhaSpace

**AI-Powered Fire Safety Intelligence for the Future of Space.**

An independent high-fidelity web UI created for the **NASA Space Apps Challenge 2026** — Challenge: **Flame in Freefall**.

> **Status: Design / UI prototype.** This repository currently contains the front-end design and interaction layer only. All data, telemetry, simulations and AI responses shown in the interface are representative mock data — no live backend, model or NASA API is wired up yet.

---

## Team HASH

| Role | Member |
| --- | --- |
| Design | **Meherun Nahar Shorna** |
| Team Leader / Development | **Mahmudul Hasan Hasib** |
| Team | Team HASH |

---

## What this is

ShikhaSpace is a research workspace concept for spacecraft habitat fire safety. It turns public NASA combustion research into an explorable interface with an evidence-grounded AI assistant.

### Sections (pages)

| Page | Description |
| --- | --- |
| **Landing** | Mission intro, capabilities and entry points |
| **Mission Overview** | Habitat telemetry cards, flame propagation chart (1G vs microgravity), mission log, AI copilot preview |
| **Materials** | Material flammability matrix (PMMA, Nomex, Silicone, Kapton) with risk ratings, evidence counts and a detail drawer |
| **Simulation** | Interactive microgravity flame simulation workspace — O₂ concentration, airflow, pressure, gravity mode controls with animated combustion visualization |
| **AI Copilot** | "ShunnoShikha AI" chat-style research assistant with reasoning summary, citations and a retrieved-evidence side panel |
| **Data Sources** | Connected NASA research repositories with pipeline health status |

### Design principles

- **Evidence-grounded AI** — generated synthesis is always visually separated from retrieved source material, with citations and confidence indicators.
- **Scientific caution** — the UI repeatedly states that outputs are comparative/experimental trends, not certification limits.
- **Independent notice** — the product explicitly states it is not affiliated with or endorsed by NASA.

---

## Connected research sources (conceptual)

- **NASA PSI** — Physical Sciences Informatics
- **BASS-II** — Burning and Suppression of Solids
- **SAFFIRE** — Spacecraft Fire Experiment
- **NTRS** — NASA Technical Reports Server
- **OSDR** — Open Science Data Repository

---

## Tech stack

- **React 19** + **React DOM 19**
- **TypeScript 5.7**
- **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **oxfmt** for formatting
- Single-file UI composition in `src/App.tsx`, styling in `src/index.css`

## Getting started

```bash
pnpm install
pnpm dev        # start Vite dev server
pnpm build      # production build
pnpm preview    # preview the build
pnpm format     # format with oxfmt
```

## Project structure

```
index.html            # Vite HTML shell
src/main.tsx          # React entrypoint
src/App.tsx           # All pages, components and mock data
src/index.css         # Global styles + Tailwind v4 import
vite.config.ts        # Vite, React, Tailwind and Figma Make plugins
```

---

## Roadmap

- [x] High-fidelity UI for all six sections
- [x] Responsive layout with mobile navigation
- [ ] Wire up real NASA data sources (PSI / NTRS / OSDR)
- [ ] Backend retrieval + evidence verification pipeline
- [ ] LLM integration for the ShunnoShikha AI Copilot
- [ ] Actual combustion model behind the simulation workspace

---

## Disclaimer

ShunnoShikha AI is an independent project developed by Team HASH for the NASA Space Apps Challenge 2026. It does not imply official NASA endorsement. Risk classifications and simulation outputs in this design are illustrative and do not replace mission-specific qualification testing.

---

Designed by **Meherun Nahar Shorna** · Built and led by **Mahmudul Hasan Hasib** · **Team HASH**
