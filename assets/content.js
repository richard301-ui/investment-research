/*
===============================================================================
RZ INVESTMENT WEBSITE — RESEARCH CONTENT LAYER
===============================================================================

Design and interaction code live elsewhere. Update this file when a thesis,
reported fact, source, status, or valuation view changes.

Research set as of 2026-09-17:
ADBE, LULU, GOOGL, MELI, UST 20Y, INTU, XLE, GOLD, HRB, IT, ALGN, MBGAF.

DATA DISCIPLINE
- `reported` contains a sourced public fact, not an intrinsic-value claim.
- `thesis`, `question`, `hypothesis`, and `falsifier` are research judgments.
- Market-price snapshots are dated and will become stale.
- No unsupported fair values or expected returns are published here.
- Add a valuation only after the owner-earnings bridge and assumptions exist.
===============================================================================
*/

window.RZ_DATA = {
  site: {
    name: "Richard Zhou",
    mark: "RZ / CAPITAL",
    strap: "Independent research / mispriced securities",
    email: "hello@example.com"
  },

  philosophy: [
    ["01 / ECONOMICS", "Normalize owner earnings"],
    ["02 / EXPECTATIONS", "Reverse the price"],
    ["03 / RETURNS", "Demand a 15% hurdle"],
    ["04 / RISK", "Write the falsifier first"]
  ],

  /*
  Visual coordinates (`pos`, `size`) are design data. Everything else is
  research content and may be replaced without changing the WebGL system.
  */
  universe: [
    {
      ticker:"ADBE", name:"Adobe", type:"Equity / software",
      conviction:"Core research", horizon:"3–7Y", lens:"Owner earnings / AI",
      thesis:"Is generative AI impairing Adobe's moat, or has the market priced a mature-growth outcome before monetization and retention actually break?",
      reported:"FY Q3 revenue was $6.76B, +12% YoY; AI-first ARR grew more than 150% YoY.",
      asOf:"FY Q3 2026 / price 09.16.26: $250.50",
      sourceUrl:"https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/ADBE-Q3FY26-Earnings-Script-and-Slides.pdf",
      pos:[-3.15,1.15,.45], size:.58
    },
    {
      ticker:"LULU", name:"lululemon", type:"Equity / consumer",
      conviction:"Live research", horizon:"2–5Y", lens:"Normalized FCF",
      thesis:"At roughly 1× revised sales, does temporary Americas weakness hide a brand that can recover $1.3–$1.5B of normalized FCF? That recovery range is my estimate, not guidance.",
      reported:"Q2 revenue was $2.42B, -4% YoY; FY2026 revenue guidance was cut to $10.35–$10.50B.",
      asOf:"Q2 2026 / price 09.16.26: $95.98",
      sourceUrl:"https://corporate.lululemon.com/media/our-stories/2026/lululemon-athletica-inc-announces-second-quarter-fiscal-2026-results",
      pos:[-1.65,2.2,-.65], size:.68
    },
    {
      ticker:"GOOGL", name:"Alphabet", type:"Equity / quality",
      conviction:"Core research", horizon:"5–10Y", lens:"Reverse DCF / AI capex",
      thesis:"How much of Search's distribution advantage survives an AI-first interface—and what return must the expanding infrastructure bill earn?",
      reported:"Q2 revenue was $119.8B, +24% YoY; Cloud reached $24.8B as 2026 capex guidance rose to $195–$205B.",
      asOf:"Q2 2026 / price 09.16.26: $342.87",
      sourceUrl:"https://abc.xyz/investor/",
      pos:[.05,2.9,-1.55], size:.73
    },
    {
      ticker:"MELI", name:"MercadoLibre", type:"Equity / compounder",
      conviction:"Hold / research", horizon:"5–10Y", lens:"Incremental ROIC",
      thesis:"Can commerce, payments and credit keep compounding at high incremental returns without credit losses, logistics intensity and FX consuming the economics?",
      reported:"Q2 net revenue and financial income rose 50% YoY to $10.2B; operating income was $683M.",
      asOf:"Q2 2026 / price 09.16.26: $1,839.71",
      sourceUrl:"https://investor.mercadolibre.com/",
      pos:[2.35,1.65,-.35], size:.63
    },
    {
      ticker:"UST20Y", name:"20-Year U.S. Treasury", type:"Sovereign / duration",
      conviction:"Rate-cut bid", horizon:"Tactical", lens:"Duration / term premium",
      thesis:"The position is a bid for lower long-end yields—not merely lower Fed funds. Cuts help only if disinflation and growth outweigh fiscal supply and term-premium pressure.",
      reported:"After the Sep. 16 hike, the 10Y closed at 5.003% and the 30Y at 5.346%; the long end was not validating an easy-cut narrative.",
      asOf:"Market close 09.16.26",
      sourceUrl:"https://home.treasury.gov/policy-issues/financing-the-government/interest-rate-statistics",
      pos:[3.35,.05,-1.75], size:.45
    },
    {
      ticker:"INTU", name:"Intuit", type:"Equity / financial software",
      conviction:"Research", horizon:"3–7Y", lens:"AI threat / ecosystem",
      thesis:"Does proprietary financial data and workflow integration protect pricing power, or can AI compress the value of TurboTax and assisted guidance faster than costs reset?",
      reported:"FY2026 revenue was $21.45B, +14%; management paired an AI-platform pivot with a workforce reduction of roughly 17%.",
      asOf:"FY2026 / price 09.16.26: $318.13",
      sourceUrl:"https://investors.intuit.com/",
      pos:[2.75,-1.2,.55], size:.54
    },
    {
      ticker:"XLE", name:"Energy Select Sector SPDR", type:"ETF / energy",
      conviction:"Macro sleeve", horizon:"Cycle", lens:"Cash yield / oil sensitivity",
      thesis:"The basket monetizes oil, refining and geopolitical scarcity, but concentration means this is chiefly an Exxon-Chevron-plus-refiners exposure—not a neutral energy index.",
      reported:"Exxon and Chevron were 20.31% and 15.29% of XLE; the top two holdings were 35.60% combined.",
      asOf:"Holdings 09.15.26 / price 09.16.26: $64.03",
      sourceUrl:"https://www.ssga.com/us/en/intermediary/etfs/state-street-energy-select-sector-spdr-etf-xle",
      pos:[1.05,-2.55,1.25], size:.50
    },
    {
      ticker:"GOLD", name:"Gold", type:"Real asset / monetary hedge",
      conviction:"Portfolio hedge", horizon:"Long", lens:"Real rates / fiscal regime",
      thesis:"Gold is insurance against fiscal dominance, reserve diversification and currency debasement—not a cash-flow asset and not a substitute for short-term liquidity.",
      reported:"Global physically backed gold ETFs drew $18B in August; holdings rose 121 tonnes to a record 4,189 tonnes.",
      asOf:"World Gold Council / Aug. 2026",
      sourceUrl:"https://www.gold.org/goldhub/research/gold-etf-commentary/2026/09",
      pos:[-.75,-2.75,-.75], size:.49
    },
    {
      ticker:"HRB", name:"H&R Block", type:"Equity / cash return",
      conviction:"Research", horizon:"3–7Y", lens:"FCF / buybacks",
      thesis:"Can a mature tax franchise compound per-share value through pricing, cash conversion, dividends and repurchases without requiring meaningful filing growth?",
      reported:"Fiscal Q4 revenue was $1.14B; the quarterly dividend rose 10% to $0.46, while FY2027 adjusted EPS guidance was $6.04–$6.24.",
      asOf:"FY Q4 2026 / price 09.16.26: $45.11",
      sourceUrl:"https://investors.hrblock.com/",
      pos:[-2.7,-1.35,-1.05], size:.51
    },
    {
      ticker:"IT", name:"Gartner", type:"Equity / research subscription",
      conviction:"Live research", horizon:"3–7Y", lens:"Contract value / FCF",
      thesis:"Is weak contract-value growth cyclical enough that buybacks amplify recovery, or is AI structurally reducing the value of research intermediation?",
      reported:"Q2 contract value was $5.3B, +1.7% FX-neutral YoY; FCF was $378M and repurchases totaled $547M.",
      asOf:"Q2 2026 / price 09.16.26: $191.57",
      sourceUrl:"https://investor.gartner.com/news-releases/news-release-details/gartner-reports-second-quarter-2026-financial-results",
      pos:[-3.45,-.1,1.35], size:.48
    },
    {
      ticker:"ALGN", name:"Align Technology", type:"Equity / medical devices",
      conviction:"Research", horizon:"3–7Y", lens:"Volume / scanner ecosystem",
      thesis:"Can clear-aligner volume and international adoption restore operating leverage while scanner weakness and competition remain contained?",
      reported:"Q2 revenue reached $1.06B, +4.3%; clear-aligner shipments rose 7.4%, while Systems and Services revenue fell 10.8%.",
      asOf:"Q2 2026 / price 09.16.26: $150.45",
      sourceUrl:"https://investor.aligntech.com/",
      pos:[.55,-1.35,2.35], size:.52
    },
    {
      ticker:"MBGAF", name:"Mercedes-Benz Group", type:"Equity / cyclical value",
      conviction:"Risk-controlled", horizon:"Cycle", lens:"Normalized auto FCF",
      thesis:"Is the low multiple paying for normalized premium-brand cash flow, or correctly discounting China share loss, auto-cycle leverage, tariffs, FX and captive-finance risk?",
      reported:"Q2 revenue was €32.1B and Group EBIT €1.5B; passenger-car sales in China fell 30% and total unit sales fell 6%.",
      asOf:"Q2 2026 / OTC symbol standardized to MBGAF",
      sourceUrl:"https://group.mercedes-benz.com/investors/reports-news/financial-results/2026q2/",
      pos:[3.05,-.15,1.65], size:.56
    }
  ],

  featured: [
    {href:"equities.html#lululemon",category:"Equity / consumer",code:"LULU / NORMALIZED FCF",title:"Broken brand—or broken expectations?",text:"Q2 revenue fell 4% and guidance reset. The work is separating temporary product and Americas weakness from a permanently lower earnings base.",size:"large"},
    {href:"equities.html#cases",category:"Software / disruption",code:"ADBE / AI IMPAIRMENT",title:"Growth held. The multiple did not.",text:"Adobe delivered 12% Q3 revenue growth while the quote kept compressing. The question is whether AI expands the funnel or destroys the tollbooth.",size:"medium"},
    {href:"bonds.html#duration-case",category:"Rates / duration",code:"UST20Y / CUT BID",title:"A cut is not the thesis.",text:"Long-duration returns depend on the entire curve. Inflation, issuance and term premium can overpower an easier policy rate.",size:"small"},
    {href:"equities.html#cases",category:"Subscription research",code:"IT / CONTRACT VALUE",title:"Cash flow against slowing CV.",text:"Gartner returned $547M through buybacks in Q2 while contract value grew only 1.7% FX-neutral. Cheapness depends on which signal persists.",size:"small"},
    {href:"research.html",category:"Real assets",code:"GOLD / FISCAL REGIME",title:"Insurance got crowded.",text:"Record ETF holdings support the monetary-hedge thesis, but also raise the price paid for fiscal and geopolitical insurance.",size:"small"}
  ],

  equityCases: [
    {id:"adbe",ticker:"ADBE",name:"Adobe",status:"Core research",question:"Q3 revenue grew 12%. Is AI impairing the moat, or is the quotation capitalizing a mature-growth outcome too early?",lens:"Owner earnings / SBC / AI",kind:"software"},
    {id:"lulu",ticker:"LULU",name:"lululemon",status:"Live research",question:"After a 4% Q2 revenue decline and guidance cut, what normalized Americas margin and FCF can the brand still earn?",lens:"Normalized FCF / comps",kind:"consumer"},
    {id:"google",ticker:"GOOGL",name:"Alphabet",status:"Core research",question:"What Search durability and Cloud returns are needed to justify a $195–$205B annual capex program?",lens:"Reverse DCF / AI capex",kind:"technology"},
    {id:"meli",ticker:"MELI",name:"MercadoLibre",status:"Hold / research",question:"Does 50% revenue growth still translate into high incremental ROIC after credit, logistics, currency and funding costs?",lens:"Incremental ROIC / SOTP",kind:"commerce + fintech"},
    {id:"intu",ticker:"INTU",name:"Intuit",status:"Research",question:"Does proprietary financial data defend TurboTax and QuickBooks as AI compresses standalone tax guidance?",lens:"Ecosystem / AI / pricing",kind:"financial software"},
    {id:"xle",ticker:"XLE",name:"Energy Select Sector SPDR",status:"Macro sleeve",question:"Does cash return compensate for commodity-cycle risk when Exxon and Chevron alone represent 35.6% of the fund?",lens:"Oil beta / concentration",kind:"energy ETF"},
    {id:"hrb",ticker:"HRB",name:"H&R Block",status:"Research",question:"Can pricing, dividends and repurchases drive per-share value with little or no filing-volume growth?",lens:"FCF yield / buybacks",kind:"tax services"},
    {id:"gartner",ticker:"IT",name:"Gartner",status:"Live research",question:"Is +1.7% contract-value growth a cyclical trough or evidence that AI weakens research intermediation?",lens:"Contract value / FCF",kind:"research subscription"},
    {id:"align",ticker:"ALGN",name:"Align Technology",status:"Research",question:"Can 7.4% clear-aligner shipment growth restore operating leverage despite scanner weakness?",lens:"Volume / margin / ecosystem",kind:"medical devices"},
    {id:"mercedes",ticker:"MBGAF",name:"Mercedes-Benz Group",status:"Risk-controlled",question:"Does the multiple overstate China and cycle risk, or understate a structurally lower earnings base?",lens:"Auto FCF / China / finance",kind:"automotive"}
  ],

  equitySpotlight: {
    kicker:"02 / Case architecture / lululemon",
    title:"Bad quarter<br>or broken brand?",
    market:"At $95.98, the equity was valued at about $10.84B—roughly 1× revised FY2026 revenue guidance. The quotation implies more than a temporary reset in Americas demand and product execution.",
    hypothesis:"Reported FY2025 FCF was about $0.9B. My recovery case uses $1.3–$1.5B of normalized FCF as an underwriting estimate—not company guidance—supported by international growth, product repair and buybacks.",
    falsifier:"The thesis fails if Americas comparables do not progress from deeply negative toward flat, product innovation remains weak, or margin and cash conversion deteriorate faster than buybacks can create per-share value.",
    metrics:[["09.16.26 price","$95.98"],["Market cap","$10.84B"],["Q2 revenue","$2.42B"],["FY26 revenue guide","$10.35–10.50B"]]
  },

  bondSpotlight: {
    kicker:"02 / Duration case / 20-Year Treasury",
    title:"The cut is<br>not <span class=\"accent\">enough.</span>",
    intro:"The rate-cut bid is a long-end yield thesis. A lower policy rate can coexist with a poor 20-year Treasury return if inflation, fiscal issuance or term premium keeps the long end elevated.",
    claims:[
      ["01 / CARRY","Starting yield","Carry provides a buffer, but the total-return outcome remains dominated by duration when yields move.","Income"],
      ["02 / CURVE","Long-end repricing","A 100 bp decline creates meaningful price upside; a renewed rise produces the mirror-image drawdown before convexity.","Duration"],
      ["03 / REGIME","Term-premium risk","The thesis needs disinflation and softer growth to beat fiscal supply, energy shocks and inflation persistence.","Falsifier"]
    ]
  },

  bondCases: [
    {id:"duration-case",ticker:"UST20Y",name:"20-Year U.S. Treasury",status:"Rate-cut bid",question:"Will long yields fall enough to monetize duration, or will fiscal supply and inflation keep the curve high even after eventual policy easing?",lens:"Duration / convexity / term premium",kind:"sovereign"}
  ],

  /*
  ---------------------------------------------------------------------------
  EQUITY ANALYSIS REPORTS
  ---------------------------------------------------------------------------
  `report.html?ticker=...` reads these objects. Add or revise report content
  here; the page layout, navigation and interactions should not need changes.
  ---------------------------------------------------------------------------
  */
  reports: {
    ADBE: {
      stance:"Core research", deck:"AI disruption versus cash-generative workflow ownership",
      marketView:"The quotation appears to treat Adobe as a mature software franchise whose pricing power and creative moat are being eroded by lower-cost generative tools.",
      workingThesis:"Adobe still owns professional workflows, formats, distribution and enterprise trust. AI may expand creation and the top of the funnel, but value accrues to shareholders only if usage converts into paid retention without permanently higher infrastructure and acquisition costs.",
      evidence:["FY Q3 revenue: $6.76B, +12% YoY","AI-first ARR growth: more than 150% YoY","Adjusted EPS: $6.13","09.16.26 price: $250.50"],
      focus:["Rebuild owner earnings after expensing SBC","Track net-new Digital Media ARR, renewal and pricing","Separate AI engagement from paid monetization","Underwrite the CEO transition and product cadence"],
      catalysts:["AI-first users convert to paid Creative Cloud tiers","ARR growth stabilizes while margins hold","New leadership clarifies capital allocation"],
      risks:["Creative workflows commoditize","Freemium growth dilutes ARPU and margins","Canva, Figma and native AI tools weaken switching costs"],
      falsifier:"The thesis breaks if AI-first usage grows but paid conversion, retention and pricing weaken enough to make normalized owner earnings structurally decline.",
      valuation:"Model pending: normalize FCF after SBC and AI infrastructure cost, then test against the 15% return hurdle."
    },
    LULU: {
      stance:"Live research", deck:"A brand-repair case hidden inside a guidance reset",
      marketView:"At roughly 1× revised revenue guidance, the market is pricing more than a bad product cycle: it is discounting prolonged Americas weakness and a structurally lower earnings base.",
      workingThesis:"The brand can still create value if product relevance and Americas comparables repair while China and other international markets compound. The recovery case uses $1.3–$1.5B of normalized FCF as an underwriting estimate, not management guidance.",
      evidence:["Q2 revenue: $2.42B, -4% YoY","FY2026 revenue guide: $10.35–$10.50B","Reported FY2025 FCF: about $0.9B","09.16.26 market cap: about $10.84B"],
      focus:["Bridge Americas comparable sales to normalized revenue","Reconcile store economics with aggregate margin pressure","Test markdown, tariff and product-mix effects","Measure buybacks against declining or recovering earnings"],
      catalysts:["Americas comps progress toward flat","Product launches restore traffic and full-price sell-through","International growth and buybacks lift per-share FCF"],
      risks:["Brand share loss persists","Promotions reset gross margin lower","International growth cannot offset Americas deterioration"],
      falsifier:"The case fails if Americas comparables do not repair, product innovation remains weak, or normalized FCF stays near the depressed base despite continued buybacks.",
      valuation:"Recovery framework: bear near $80, base near $145–$150, bull above $220; refresh after each comparable-sales and margin update."
    },
    GOOGL: {
      stance:"Core research", deck:"Search durability against an unprecedented AI capital cycle",
      marketView:"The price recognizes Alphabet's current cash generation but demands that a much larger infrastructure base earn acceptable returns while AI changes the search interface.",
      workingThesis:"Distribution, query intent, advertiser tools, YouTube and Cloud create multiple monetization paths. The central issue is not whether Alphabet can build AI—it is whether incremental AI capex preserves or expands owner earnings per share.",
      evidence:["Q2 revenue: $119.8B, +24% YoY","Google Cloud revenue: $24.8B","2026 capex guidance: $195–$205B","09.16.26 price: $342.87"],
      focus:["Normalize earnings by separating investment gains","Track Search monetization as AI answers expand","Estimate incremental return on AI infrastructure","Expense SBC and test buybacks against dilution"],
      catalysts:["AI search preserves commercial-query economics","Cloud converts infrastructure demand into operating leverage","Capex growth peaks without revenue deceleration"],
      risks:["Search distribution or query share erodes","Capex outruns monetization","Regulatory remedies weaken default placement or ad economics"],
      falsifier:"The thesis breaks if Search monetization deteriorates while AI capex continues rising, causing normalized owner earnings per share to stagnate despite revenue growth.",
      valuation:"Use a segment-aware reverse DCF; do not capitalize one-time investment gains or assume today's capex earns legacy Search returns."
    },
    MELI: {
      stance:"Hold / research", deck:"High incremental returns with credit and duration attached",
      marketView:"The quotation assumes that commerce, payments, logistics and credit can sustain unusually high growth and reinvestment returns across volatile currencies and funding conditions.",
      workingThesis:"MercadoLibre's ecosystem can deepen engagement and lower acquisition cost across commerce and fintech. The thesis depends on incremental ROIC—not revenue growth alone—and requires disciplined credit underwriting.",
      evidence:["Q2 net revenue and financial income: $10.2B","Q2 growth: +50% YoY","Q2 operating income: $683M","09.16.26 price: $1,839.71"],
      focus:["Separate commerce margin from fintech and credit economics","Track NPLs, provisions and funding cost","Measure logistics capex against retention and take rate","Translate local-currency growth into owner earnings"],
      catalysts:["Payments engagement improves ecosystem unit economics","Credit growth remains disciplined","Logistics density expands contribution margin"],
      risks:["Credit losses and funding costs rise","Currency depreciation consumes reported growth","Valuation duration amplifies higher real rates"],
      falsifier:"The case weakens materially if credit expands faster than risk-adjusted returns or if incremental investment no longer produces improving engagement and contribution economics.",
      valuation:"Use a commerce/fintech/credit SOTP with conservative funding and loss assumptions; require a return premium for currency and regulatory risk."
    },
    INTU: {
      stance:"Research", deck:"Proprietary financial data versus AI-compressed tax guidance",
      marketView:"The repricing reflects fear that general AI can reproduce much of TurboTax's guidance and weaken premium pricing before Intuit's ecosystem gains offset the disruption.",
      workingThesis:"Tax history, accounting workflows, payroll, payments and consumer financial data can make Intuit's AI more useful than a standalone assistant. The burden of proof is paid retention and cross-product economics, not AI product announcements.",
      evidence:["FY2026 revenue: $21.45B, +14%","AI-platform restructuring announced","Workforce reduction: roughly 17%","09.16.26 price: $318.13"],
      focus:["Track TurboTax units, mix and realized pricing","Separate restructuring savings from durable margin","Test Mailchimp and mid-market returns","Expense SBC and acquisition-related claims"],
      catalysts:["AI improves assisted conversion and retention","Cost reset expands normalized margin","QuickBooks ecosystem offsets slower consumer tax growth"],
      risks:["Low-cost AI tools compress tax pricing","Customer losses exceed price increases","Restructuring masks weaker organic economics"],
      falsifier:"The thesis fails if premium tax customers continue leaving while AI features do not improve paid conversion, retention or ecosystem attach rates.",
      valuation:"Build owner earnings after restructuring, SBC and acquisition costs; use conservative terminal growth for the consumer-tax franchise."
    },
    XLE: {
      stance:"Macro sleeve", deck:"Cash-return exposure to oil, refining and geopolitical scarcity",
      marketView:"XLE is often treated as broad energy exposure, but its return is dominated by a concentrated group of integrated producers and refiners with direct oil-price sensitivity.",
      workingThesis:"Energy equities can hedge inflation and geopolitical supply shocks while returning cash. The trade is attractive only when balance sheets and shareholder returns survive a lower-price scenario—not because spot oil is high.",
      evidence:["Exxon weight: 20.31%","Chevron weight: 15.29%","Top-two concentration: 35.60%","09.16.26 price: $64.03"],
      focus:["Stress FCF at lower oil and refining margins","Look through ETF concentration by company","Separate maintenance from growth capex","Track dividends and buybacks through the cycle"],
      catalysts:["Supply discipline sustains free cash flow","Geopolitical risk raises scarcity premium","Capital returns remain intact at mid-cycle oil"],
      risks:["Global demand weakens","Producers reaccelerate uneconomic capex","Policy and transition costs lower terminal value"],
      falsifier:"The hedge fails if constituents cut shareholder returns or lever balance sheets during an ordinary commodity downturn.",
      valuation:"Value constituent cash flows at mid-cycle commodity assumptions; never annualize a peak oil or refining environment."
    },
    HRB: {
      stance:"Research", deck:"Per-share compounding without heroic top-line growth",
      marketView:"The market treats tax preparation as mature and exposed to DIY competition, IRS simplification and AI. The investment case rests on cash yield and capital allocation rather than structural revenue growth.",
      workingThesis:"A resilient assisted franchise can create attractive per-share returns through pricing, dividends and repurchases if customer attrition remains controlled and leverage is not used to manufacture EPS.",
      evidence:["Fiscal Q4 revenue: $1.14B","Quarterly dividend: $0.46, +10%","FY2027 adjusted EPS guide: $6.04–$6.24","09.16.26 price: $45.11"],
      focus:["Bridge adjusted EPS to owner earnings","Track assisted-client count and realized pricing","Measure buybacks net of dilution and leverage","Stress IRS and AI disintermediation"],
      catalysts:["Pricing and mix offset unit pressure","Repurchases retire shares below intrinsic value","Dividend growth confirms cash durability"],
      risks:["Free or AI-assisted filing accelerates share loss","Debt-funded repurchases reduce resilience","Adjusted earnings overstate cash economics"],
      falsifier:"The thesis fails if client losses accelerate enough that pricing and buybacks can no longer protect recurring owner earnings per share.",
      valuation:"Use a no-growth owner-earnings model first; treat any sustained volume or adjacent-product growth as upside rather than the base case."
    },
    IT: {
      stance:"Live research", deck:"Slowing contract value against aggressive capital return",
      marketView:"The quote reflects concern that weak contract-value growth is not merely cyclical—that AI and alternative information sources may reduce Gartner's intermediation value.",
      workingThesis:"Mission-critical benchmarking, analyst access and enterprise workflow integration can remain durable. Buybacks create value only if contract-value growth stabilizes and the business is not repurchasing into structural decline.",
      evidence:["Q2 contract value: $5.3B","FX-neutral CV growth: +1.7% YoY","Q2 free cash flow: $378M","Q2 repurchases: $547M"],
      focus:["Track GTS and GBS contract value separately","Measure retention, wallet and sales productivity","Normalize FCF after restructuring and divestiture","Compare buyback yield with organic deterioration"],
      catalysts:["Contract-value growth reaccelerates","Sales productivity improves","Repurchases materially lift per-share FCF"],
      risks:["AI substitutes for entry-level research","Enterprise budgets remain pressured","Buybacks consume balance-sheet flexibility"],
      falsifier:"The thesis breaks if contract value remains near flat while retention, wallet share or pricing weakens, indicating that cash return is masking franchise erosion.",
      valuation:"Normalize post-divestiture FCF and require a margin of safety against lower terminal contract-value growth."
    },
    ALGN: {
      stance:"Research", deck:"Clear-aligner volume versus scanner and margin weakness",
      marketView:"The valuation discounts slower category economics, scanner pressure and competition despite continued clear-aligner shipment growth.",
      workingThesis:"The installed doctor ecosystem, brand and international runway can restore operating leverage if volume growth converts into revenue and scanners remain a useful—not value-destructive—distribution layer.",
      evidence:["Q2 revenue: $1.06B, +4.3%","Clear-aligner revenue growth: +8.2%","Clear-aligner shipments: 691.8K, +7.4%","Systems & Services revenue: -10.8%"],
      focus:["Reconcile shipment growth with revenue per case","Track scanner placements, utilization and service economics","Separate restructuring benefits from core margin","Measure international mix and FX"],
      catalysts:["International volume sustains double-digit growth","Scanner weakness stabilizes","Cost actions restore operating leverage"],
      risks:["Case pricing erodes","Scanner ecosystem loses relevance","Competition raises doctor acquisition and support cost"],
      falsifier:"The thesis fails if shipment growth persists without revenue and margin conversion, showing that volume is being purchased rather than economically earned.",
      valuation:"Model clear aligners and Systems & Services separately; base value on normalized margin, not peak historical multiples."
    },
    MBGAF: {
      stance:"Risk-controlled", deck:"A low multiple with China, cycle and financing embedded",
      marketView:"The low valuation may be compensation for a structurally weaker China franchise, normal auto cyclicality, tariff and FX exposure, and captive-finance credit risk.",
      workingThesis:"Mercedes can produce substantial normalized cash flow through premium mix, cost control and capital return. The security is attractive only if today's earnings pressure is cyclical rather than permanent brand and market-share impairment.",
      evidence:["Q2 revenue: €32.1B","Q2 Group EBIT: €1.5B","China passenger-car sales: -30%","Total unit sales: -6%"],
      focus:["Normalize industrial FCF across the auto cycle","Separate manufacturing from Financial Services risk","Track China price, mix and dealer inventory","Stress tariffs, FX and EV transition capex"],
      catalysts:["China pressure stabilizes","Cost reductions lift industrial cash conversion","Capital returns continue through the down-cycle"],
      risks:["China share loss becomes structural","Captive-finance losses rise","Tariffs and EV investment compress normalized FCF"],
      falsifier:"The thesis breaks if premium pricing and China economics fail to recover while Financial Services losses rise, making the apparent low multiple a value trap.",
      valuation:"Use mid-cycle industrial FCF plus a separately capitalized Financial Services segment; apply a cyclical discount and FX sensitivity."
    }
  },

  research: [
    {date:"2026 / 09",cat:"Equity",status:"Working",title:"ADBE — 12% growth, compressed multiple, unresolved AI economics",href:"equities.html#cases"},
    {date:"2026 / 09",cat:"Equity",status:"Live",title:"LULU — normalize the brand after the guidance reset",href:"equities.html#lululemon"},
    {date:"2026 / 09",cat:"Equity",status:"Model",title:"GOOGL — owner earnings after a $195–$205B capex plan",href:"models.html#reverse"},
    {date:"2026 / 09",cat:"Equity",status:"Monitor",title:"MELI — 50% growth versus credit and duration risk",href:"equities.html#cases"},
    {date:"2026 / 09",cat:"Macro",status:"Position",title:"UST20Y — bidding for cuts while the long end resists",href:"bonds.html#duration-case"},
    {date:"2026 / 09",cat:"Equity",status:"Working",title:"INTU — proprietary data or AI-disrupted tax guidance?",href:"equities.html#cases"},
    {date:"2026 / 09",cat:"Real Assets",status:"Position",title:"XLE — oil beta inside a concentrated equity basket",href:"equities.html#cases"},
    {date:"2026 / 09",cat:"Real Assets",status:"Hedge",title:"GOLD — fiscal insurance after record ETF holdings",href:"research.html"},
    {date:"2026 / 09",cat:"Equity",status:"Working",title:"HRB — per-share compounding without heroic growth",href:"equities.html#cases"},
    {date:"2026 / 09",cat:"Equity",status:"Live",title:"IT — contract-value slowdown against aggressive buybacks",href:"equities.html#cases"},
    {date:"2026 / 09",cat:"Equity",status:"Working",title:"ALGN — aligner volume versus scanner weakness",href:"equities.html#cases"},
    {date:"2026 / 09",cat:"Equity",status:"Risk",title:"MBGAF — low multiple, China pressure and cycle leverage",href:"equities.html#cases"}
  ]
};
