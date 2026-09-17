# RZ Investment Site v4.1

This version preserves the original dark / lime / cinematic design and moves detailed research into subpages.

## Pages
- `index.html` — personal homepage, research universe, selected investigations
- `equities.html` — equity cases and equity research method
- `report.html?ticker=ADBE` — reusable ticker-analysis template; every equity row links here
- `bonds.html` — bond / credit / capital-structure research
- `research.html` — filterable research archive
- `models.html` — interactive equity and bond valuation tools
- `about.html` — background and research philosophy

## The important design decision
**Content is separated from design.**

Most changing investment content lives in:
`assets/content.js`

The equity table is driven by `RZ_DATA.equityCases`; the full ticker reports
are driven by `RZ_DATA.reports`. Add or revise report content there without
changing the report layout.

To replace a security or thesis later, edit the data objects in `content.js`.
You should not need to touch:
- `assets/styles.css`
- page layout
- WebGL code
- animation code

This lets future ChatGPT sessions update your research without redesigning the website.

## Before deployment
1. Replace `hello@example.com` in `assets/content.js`.
2. Refresh dated market-price snapshots and reported facts before publishing.
3. Load security-specific model assumptions before publishing an intrinsic-value conclusion.
4. Static deployment works on Netlify, Vercel, Cloudflare Pages or GitHub Pages.

## Dependencies
Loaded from public CDNs:
- Three.js
- GSAP / ScrollTrigger
- Lenis
- Google Fonts

No build step is required.


## Research data and future replacement

`assets/content.js` contains the current research universe, dated market
snapshots, reported operating facts, thesis questions, source URLs and
falsifiers. Reported facts and research judgments are deliberately separated.

The site does not publish invented fair values, owner earnings, ROIC or IRRs.
Those fields should be added only after the underlying bridge and assumptions
are sourced. The models page remains an assumption laboratory, not a live feed.

For future research updates, edit `assets/content.js` only unless the design
itself needs to change.


## v3.1 bug fixes

- Fixed `LIVE RESEARCH` badge collision:
  the hero indicator now uses `.live-dot` and research statuses use
  `.status-live`, so status badges no longer inherit dot dimensions.

- Fixed research-universe discoverability:
  every 3D security now has a projected ticker label positioned over its
  corresponding WebGL node. Labels are clickable/tappable and update the
  thesis panel directly.

- The homepage research universe contains:
  ADBE, LULU, GOOGL, MELI, UST20Y, INTU, XLE, GOLD, HRB, IT, ALGN, MBGAF.

- Each object includes a dated evidence line and a direct source link.


## v4 — Project Investing research extraction

- Replaced the placeholder watchlist with the selected Project Investing universe.
- Removed all securities outside the requested research set.
- Replaced unsupported valuation figures with sourced reported facts.
- Added current thesis framing for Adobe, lululemon, Alphabet, MercadoLibre,
  Intuit, XLE, gold, H&R Block, Gartner, Align and Mercedes-Benz.
- Reframed the 20-year Treasury as a curve/duration thesis rather than a
  mechanical policy-rate bet.
- Added visible evidence timestamps and source links to the 3D detail card.
- Standardized Mercedes-Benz's U.S. OTC symbol to MBGAF.


## v4.1 — Clickable analysis reports

- Every row in the equity research table is clickable and keyboard accessible.
- Each ticker opens a dedicated analysis route such as
  `report.html?ticker=ADBE` or `report.html?ticker=LULU`.
- One reusable report template renders ticker-specific thesis, evidence,
  underwriting questions, catalysts, risks, falsifier and valuation status.
- Previous / next navigation connects all ten reports.
- Report content remains separate from layout in `assets/content.js`.


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
