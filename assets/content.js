/*
===============================================================================
RZ INVESTMENT WEBSITE — CONTENT LAYER
===============================================================================

ALL NUMBERS IN THIS FILE ARE DUMMY / DEMONSTRATION DATA unless explicitly
replaced later with sourced research.

RESERVED FOR FUTURE:
This is the file to update when research changes. The visual system should stay
in assets/styles.css and assets/site.js.

Current seeded watchlist:
KVUE, GOOGL, MELI, MOH, SQFTP, HRB, MO, BRK.B, ADBE, DKNY, FLUT

Notes:
- SQFTP is intentionally treated as a preferred / capital-structure security.
- DKNY is retained exactly as supplied but marked VERIFY until the intended
  listed security is confirmed.
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
    ["01 / QUALITY", "Enduring ROIC"],
    ["02 / PRICE", "Implied expectations"],
    ["03 / CLAIM", "Know the seniority"],
    ["04 / TIME", "Let the gap close"]
  ],

  /*
  ---------------------------------------------------------------------------
  3D RESEARCH UNIVERSE
  ---------------------------------------------------------------------------
  DUMMY DATA.

  RESERVED FOR FUTURE per security:
  price, intrinsic value low/base/high, expected IRR, owner earnings,
  normalized ROIC, incremental ROIC, leverage, dilution, source date,
  thesis status, catalyst, falsifier, filing/source references.

  `pos` and `size` are visual coordinates and can stay unchanged when the
  fundamental research is updated.
  ---------------------------------------------------------------------------
  */
  universe: [
    {
      ticker:"KVUE", name:"Kenvue", type:"Equity / consumer health",
      conviction:"Research", horizon:"3–7Y", lens:"FCF + brand durability",
      thesis:"Dummy thesis: does the quotation over-discount slow growth while underappreciating durable brands, recurring demand and cash conversion?",
      pos:[-3.15,1.15,.45], size:.47,
      dummyData:{price:19.5, ownerEarningsYield:7.2, normalizedROIC:15.8, netDebtToEBITDA:2.4, valueLow:23, valueHigh:29}
    },
    {
      ticker:"GOOGL", name:"Alphabet", type:"Equity / quality",
      conviction:"Research", horizon:"5–10Y", lens:"Reverse DCF",
      thesis:"Dummy thesis: what Search, YouTube and Cloud economics are required by the quotation after treating AI capex and SBC as real economic costs?",
      pos:[-1.65,2.2,-.65], size:.72,
      dummyData:{price:205, ownerEarningsYield:5.8, normalizedROIC:27.5, valueLow:225, valueHigh:285, expectedIRR:14.6}
    },
    {
      ticker:"MELI", name:"MercadoLibre", type:"Equity / compounder",
      conviction:"Research", horizon:"5–10Y", lens:"Incremental ROIC",
      thesis:"Dummy thesis: can commerce, payments and credit reinvest at sufficiently high incremental returns to justify the duration embedded in the valuation?",
      pos:[.05,2.9,-1.55], size:.61,
      dummyData:{price:1960, fcfYield:2.9, normalizedROIC:24.0, growth:31.0, valueLow:1800, valueHigh:2450}
    },
    {
      ticker:"MOH", name:"Molina Healthcare", type:"Equity / special situation",
      conviction:"Live research", horizon:"2–5Y", lens:"Underwriting + ROIC",
      thesis:"Dummy thesis: is medical-cost pressure temporary enough for normalized margins and capital returns to recover above what the depressed price implies?",
      pos:[2.35,1.65,-.35], size:.61,
      dummyData:{price:175, normalizedEPS:22.5, normalizedROIC:21.0, medicalLossRatio:89.2, valueLow:225, valueHigh:300}
    },
    {
      ticker:"SQFTP", name:"Presidio Property Trust Series D Preferred", type:"Preferred / special situation",
      conviction:"Research", horizon:"Event-driven", lens:"Exchange + recovery",
      thesis:"Dummy thesis: does the preferred's discount adequately compensate for issuer liquidity, exchange mechanics, recovery uncertainty and claim seniority?",
      pos:[3.35,.05,-1.75], size:.37,
      dummyData:{price:7.5, parValue:25, currentYield:12.0, recoveryLow:6, recoveryHigh:15}
    },
    {
      ticker:"HRB", name:"H&R Block", type:"Equity / cash return",
      conviction:"Research", horizon:"3–7Y", lens:"FCF + buybacks",
      thesis:"Dummy thesis: can a mature tax franchise compound per-share value through resilient cash flow, pricing and aggressive repurchases without revenue heroics?",
      pos:[2.75,-1.2,.55], size:.49,
      dummyData:{price:52.5, ownerEarningsYield:9.8, normalizedROIC:31.0, buybackYield:7.0, valueLow:58, valueHigh:72}
    },
    {
      ticker:"MO", name:"Altria", type:"Equity / yield + decline",
      conviction:"Research", horizon:"3–7Y", lens:"FCF + terminal decline",
      thesis:"Dummy thesis: how much secular volume decline can the cash-flow yield absorb before the equity ceases to compensate for terminal risk?",
      pos:[1.05,-2.55,1.25], size:.46,
      dummyData:{price:66, ownerEarningsYield:8.9, dividendYield:6.2, normalizedROIC:40.0, valueLow:63, valueHigh:82}
    },
    {
      ticker:"BRK.B", name:"Berkshire Hathaway", type:"Equity / capital allocation",
      conviction:"Watch", horizon:"Long", lens:"Look-through earnings",
      thesis:"Dummy thesis: what prospective return remains after valuing insurance float, operating businesses, listed equities and excess liquidity separately?",
      pos:[-.75,-2.75,-.75], size:.55,
      dummyData:{price:505, normalizedEarningsYield:5.5, excessLiquidity:330, valueLow:490, valueHigh:610}
    },
    {
      ticker:"ADBE", name:"Adobe", type:"Equity / software",
      conviction:"Research", horizon:"3–7Y", lens:"FCF + AI disruption",
      thesis:"Dummy thesis: is generative AI causing durable moat impairment, or has the market over-discounted a slower growth regime for a high-ROIC franchise?",
      pos:[-2.7,-1.35,-1.05], size:.50,
      dummyData:{price:345, ownerEarningsYield:7.5, normalizedROIC:36.0, sbcToRevenue:8.0, valueLow:400, valueHigh:520}
    },
    {
      ticker:"DKNY", name:"Ticker mapping to verify", type:"Reserved / verify",
      conviction:"Verify", horizon:"TBD", lens:"Ticker verification",
      thesis:"RESERVED: confirm the intended listed security before attaching company-specific research or valuation data.",
      pos:[-3.45,-.1,1.35], size:.28,
      dummyData:{note:"No investment data should be published until ticker mapping is confirmed."}
    },
    {
      ticker:"FLUT", name:"Flutter Entertainment", type:"Equity / online gaming",
      conviction:"Research", horizon:"3–7Y", lens:"Unit economics + regulation",
      thesis:"Dummy thesis: does the price properly distinguish high-quality scale economics from regulation, promotional intensity and reinvestment risk?",
      pos:[.55,-1.35,2.35], size:.52,
      dummyData:{price:102, fcfYield:4.2, normalizedROIC:18.0, growth:14.0, valueLow:115, valueHigh:155}
    }
  ],

  featured: [
    {
      href:"equities.html#molina", category:"Equity / managed care", code:"MOH / UNDERWRITING",
      title:"Temporary pain or impaired economics?",
      text:"Dummy case: normalize medical-cost pressure, reserve behavior, acquisition economics and ROIC before deciding whether a depressed multiple is actually cheap.",
      size:"large"
    },
    {
      href:"models.html#reverse", category:"Equity / technology", code:"GOOGL / REVERSE DCF",
      title:"What must Search be worth?",
      text:"Dummy case: expense SBC, normalize AI capex and solve backward from price to the long-run economics the quotation already requires.",
      size:"medium"
    },
    {
      href:"bonds.html#cases", category:"Preferred / special situation", code:"SQFTP / CLAIM",
      title:"Discount to par is not value.",
      text:"Dummy case: underwrite issuer liquidity, exchange terms, recovery and seniority rather than anchoring on stated par.",
      size:"small"
    },
    {
      href:"equities.html#quality", category:"Cash compounder", code:"HRB / BUYBACKS",
      title:"No growth can still compound.",
      text:"Dummy case: test whether FCF yield plus share retirement creates attractive per-share returns without heroic top-line growth.",
      size:"small"
    },
    {
      href:"equities.html#cases", category:"Software / disruption", code:"ADBE / AI",
      title:"Disrupted—or merely repriced?",
      text:"Dummy case: separate genuine moat impairment from multiple compression and ask what AI-driven decline is already embedded.",
      size:"small"
    }
  ],

  equityCases: [
    {
      id:"kvue", ticker:"KVUE", name:"Kenvue", status:"Research",
      question:"Dummy question: is low organic growth being priced as permanent value destruction despite durable consumer-health brands and cash conversion?",
      lens:"FCF / brands / leverage", kind:"consumer health"
    },
    {
      id:"google", ticker:"GOOGL", name:"Alphabet", status:"Model",
      question:"Dummy question: what Search, YouTube and Cloud economics are implied after normalizing AI capex and SBC?",
      lens:"Reverse DCF / owner earnings", kind:"technology"
    },
    {
      id:"meli", ticker:"MELI", name:"MercadoLibre", status:"Research",
      question:"Dummy question: does reinvestment quality justify the long-duration valuation after credit, logistics intensity and regional risk?",
      lens:"Incremental ROIC / SOTP", kind:"commerce + fintech"
    },
    {
      id:"molina", ticker:"MOH", name:"Molina Healthcare", status:"Live research",
      question:"Dummy question: is underwriting pressure cyclical and repairable, or evidence that normalized margins and ROIC are structurally lower?",
      lens:"ROIC / MLR / reserves", kind:"managed care"
    },
    {
      id:"hrb", ticker:"HRB", name:"H&R Block", status:"Research",
      question:"Dummy question: can low-growth economics compound attractive per-share value through durable FCF, pricing and repurchases?",
      lens:"FCF yield / buybacks", kind:"tax services"
    },
    {
      id:"mo", ticker:"MO", name:"Altria", status:"Research",
      question:"Dummy question: how much secular decline can the current FCF yield absorb before terminal risk overwhelms the valuation?",
      lens:"FCF / decline / payout", kind:"tobacco"
    },
    {
      id:"brkb", ticker:"BRK.B", name:"Berkshire Hathaway", status:"Watch",
      question:"Dummy question: what prospective return remains after valuing float, operating subsidiaries, equities and excess liquidity separately?",
      lens:"Look-through earnings / SOTP", kind:"conglomerate"
    },
    {
      id:"adbe", ticker:"ADBE", name:"Adobe", status:"Research",
      question:"Dummy question: is AI causing durable moat impairment, or has the market over-discounted slower growth in a high-ROIC subscription franchise?",
      lens:"Owner earnings / AI risk", kind:"software"
    },
    {
      id:"dkny", ticker:"DKNY", name:"Ticker mapping to verify", status:"Verify",
      question:"RESERVED: confirm the intended listed security before attaching research or valuation data.",
      lens:"Ticker verification required", kind:"reserved"
    },
    {
      id:"flut", ticker:"FLUT", name:"Flutter Entertainment", status:"Research",
      question:"Dummy question: are scale economics undervalued after accounting for regulation, promotions and market-share reinvestment?",
      lens:"Unit economics / regulation", kind:"gaming"
    }
  ],

  equitySpotlight: {
    kicker:"02 / Case architecture / Molina Healthcare",
    title:"Temporary pain<br>or impaired economics?",
    market:"Dummy view: current price appears to imply underwriting pressure persists long enough to reduce normalized profitability or permanently lower returns on capital.",
    hypothesis:"Dummy view: separate cyclical medical-cost pressure and reserve effects from durable franchise economics. Explicitly test acquisition-driven growth and incremental ROIC.",
    falsifier:"Dummy falsifier: the thesis fails if normalized margins, reserve discipline or incremental ROIC do not repair within the operating period assumed in the model.",
    metrics:[
      ["Accounting lens","MLR / reserves"],
      ["Quality lens","ROIC"],
      ["Balance sheet","Debt / claims"],
      ["Valuation","Normalized FCF"]
    ]
  },

  bondSpotlight: {
    kicker:"02 / Preferred & claim analysis",
    title:"Par value is<br>not <span class=\"accent\">intrinsic value.</span>",
    intro:"Dummy framework: SQFTP should be analyzed as a claim on an issuer, not as an ordinary common equity. Recovery, liquidity, exchange mechanics and seniority drive the payoff.",
    claims:[
      ["01 / SENIOR","Senior obligations","Allocate value to more senior contractual claims before preferred recovery.","Priority"],
      ["02 / PREF","SQFTP preferred","Model contractual terms, exchange economics, liquidity and recovery under multiple scenarios.","Terms"],
      ["03 / COMMON","Residual equity","Common value can coexist with preferred impairment—or vice versa—depending on capital structure and transaction terms.","Residual"]
    ]
  },

  bondCases: [
    {
      id:"sqftp", ticker:"SQFTP", name:"Presidio Property Trust Series D Preferred", status:"Live research",
      question:"Dummy question: does the discount adequately compensate for issuer liquidity, exchange mechanics, optionality and recovery risk?",
      lens:"Preferred / recovery / exchange", kind:"preferred equity"
    },
    {
      id:"duration", ticker:"UST10Y", name:"10-Year U.S. Treasury", status:"Macro",
      question:"Dummy question: what real return is offered after duration, inflation and term-premium risk rather than merely quoting nominal yield?",
      lens:"YTM / duration / real return", kind:"sovereign"
    },
    {
      id:"credit", ticker:"CREDIT", name:"Corporate credit", status:"Framework",
      question:"Dummy question: is extra spread compensation for temporary fear, or is the market correctly pricing refinancing and impairment risk?",
      lens:"Spread / recovery / maturity wall", kind:"corporate"
    }
  ],

  research: [
    {date:"2026 / 08",cat:"Equity",status:"Working",title:"Dummy note — MOH: underwriting cycle or structural reset?",href:"equities.html#molina"},
    {date:"2026 / 08",cat:"Equity",status:"Model",title:"Dummy note — GOOGL: owner earnings after AI capex",href:"models.html#reverse"},
    {date:"2026 / 08",cat:"Equity",status:"Working",title:"Dummy note — ADBE: how much AI impairment is already priced?",href:"equities.html#cases"},
    {date:"2026 / 08",cat:"Equity",status:"Notebook",title:"Dummy note — HRB: per-share compounding without revenue growth",href:"equities.html#cases"},
    {date:"2026 / 08",cat:"Equity",status:"Notebook",title:"Dummy note — MELI: duration versus incremental ROIC",href:"equities.html#cases"},
    {date:"2026 / 08",cat:"Special Situation",status:"Working",title:"Dummy note — SQFTP: preferred recovery and exchange economics",href:"bonds.html#cases"},
    {date:"2026 / 08",cat:"Equity",status:"Watch",title:"Dummy note — KVUE: brands, leverage and slow-growth value",href:"equities.html#cases"},
    {date:"2026 / 08",cat:"Equity",status:"Watch",title:"Dummy note — FLUT: scale economics versus regulation",href:"equities.html#cases"},
    {date:"2026 / 08",cat:"Equity",status:"Watch",title:"Dummy note — MO: terminal decline versus cash yield",href:"equities.html#cases"},
    {date:"2026 / 08",cat:"Equity",status:"Watch",title:"Dummy note — BRK.B: look-through earnings and excess cash",href:"equities.html#cases"},
    {date:"2026 / 08",cat:"Equity",status:"Verify",title:"Reserved — DKNY ticker/company mapping requires confirmation",href:"equities.html#cases"}
  ]
};
