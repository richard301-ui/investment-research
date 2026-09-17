# RZ Investment Site v3

This version preserves the original dark / lime / cinematic design and moves detailed research into subpages.

## Pages
- `index.html` — personal homepage, research universe, selected investigations
- `equities.html` — equity cases and equity research method
- `bonds.html` — bond / credit / capital-structure research
- `research.html` — filterable research archive
- `models.html` — interactive equity and bond valuation tools
- `about.html` — background and research philosophy

## The important design decision
**Content is separated from design.**

Most changing investment content lives in:
`assets/content.js`

To replace a security or thesis later, edit the data objects in `content.js`.
You should not need to touch:
- `assets/styles.css`
- page layout
- WebGL code
- animation code

This lets future ChatGPT sessions update your research without redesigning the website.

## Before deployment
1. Replace `hello@example.com` in `assets/content.js`.
2. Replace demo model inputs with sourced figures before publishing any investment conclusion.
3. Static deployment works on Netlify, Vercel, Cloudflare Pages or GitHub Pages.

## Dependencies
Loaded from public CDNs:
- Three.js
- GSAP / ScrollTrigger
- Lenis
- Google Fonts

No build step is required.


## Dummy data and future replacement

`assets/content.js` now contains deliberately labeled **dummy / demonstration data**.

The code includes `RESERVED FOR FUTURE` and `TODO` descriptions for:
- real equity metrics
- bond-level data
- intrinsic-value ranges
- reverse-DCF assumptions
- expected IRR
- capital-structure scenarios
- research timestamps
- filing / source references
- future live market data
- valuation history
- thesis history

The dummy numbers are not intended to represent current market data or investment recommendations.

For future updates, edit `assets/content.js` only unless the design itself needs to change.


## v3.1 bug fixes

- Fixed `LIVE RESEARCH` badge collision:
  the hero indicator now uses `.live-dot` and research statuses use
  `.status-live`, so status badges no longer inherit dot dimensions.

- Fixed research-universe discoverability:
  every 3D security now has a projected ticker label positioned over its
  corresponding WebGL node. Labels are clickable/tappable and update the
  thesis panel directly.

- The homepage research universe is seeded with:
  KVUE, GOOGL, MELI, MOH, SQFTP, HRB, MO, BRK.B, ADBE, DKNY, FLUT.

- All valuation figures remain dummy demonstration data.


## v3.2 orbit interaction fix

The research-universe drag system was rebuilt.

Root cause:
the previous version listened for pointer dragging only on the WebGL canvas.
After ticker labels were added as a DOM layer above the canvas, starting a
gesture on a label could bypass the canvas and make orbiting feel broken.

v3.2:
- attaches orbit pointer capture to the entire `.universe-wrap`
- tracks pointer movement at window level
- allows drag gestures to start over ticker labels
- suppresses accidental label clicks after a drag
- adds mild inertial orbit after release
- adds visible X/Y orbit readout
- adds Reset Orbit control
- adds keyboard orbit support (arrow keys; Home resets)
- retains vertical page scrolling behavior on touch devices


## v3.3 — actual WebGL root-cause fix

The earlier page referenced:

`three@0.180.0/build/three.min.js`

That file does not exist in modern Three.js releases because the classic
`three.js` / `three.min.js` builds were removed beginning with r161.

The site uses the classic global `THREE` API, so v3.3 pins Three.js to:

`three@0.160.0/build/three.min.js`

r160 is the last Three.js release that still provides this browser build.

A visible WebGL-dependency error is also shown inside the research universe if
Three.js ever fails to load again, instead of leaving a blank canvas that looks
like a broken drag interaction.
