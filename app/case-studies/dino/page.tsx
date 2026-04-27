export default function DinoCase() {
  const meta = [
    { label: "Role", value: "Product Designer" },
    { label: "Year", value: "2024" },
    { label: "Platform", value: "iOS + Android" },
    { label: "Tools", value: "Figma, Principle, Maze" },
  ];

  const methodology = [
    { label: "20", detail: "User Interviews", sub: "Frequent fine diners, aged 24–45" },
    { label: "4", detail: "Contextual Observations", sub: "In-restaurant shadowing sessions" },
    { label: "5", detail: "Competitor Teardowns", sub: "Zomato, OpenTable, Resy, TheFork, Yelp" },
    { label: "200+", detail: "Reviews Analysed", sub: "AI-parsed Zomato & Google reviews" },
  ];

  const competitors = [
    {
      name: "Zomato",
      strength: "Massive restaurant database, brand recognition",
      weakness: "Treats fine dining as just another listing category",
      gap: "No editorial curation, no pre-browse menu depth, rewards feel generic",
    },
    {
      name: "OpenTable",
      strength: "Reliable booking infrastructure",
      weakness: "Cold, transactional UX with no discovery dimension",
      gap: "No loyalty meaningful to fine diners, no menu exploration before booking",
    },
    {
      name: "Resy",
      strength: "Premium positioning, loyal US fanbase",
      weakness: "Limited global presence, no real menu deep-dive",
      gap: "Doesn't serve the Indian fine dining market or tier-2 cities",
    },
    {
      name: "TheFork",
      strength: "Good discount-based discovery in Europe",
      weakness: "Discount framing undermines premium perception",
      gap: "Rewards feel transactional, not experiential — opposite of fine dining",
    },
  ];

  const journey = [
    {
      stage: "Craving",
      action: "Decides to book a special dinner for an anniversary",
      thought: "I want somewhere exceptional — not just good food, something memorable",
      emotion: "positive",
      opportunity: "Occasion-first entry point: 'What's the moment?' before 'Where?'",
    },
    {
      stage: "Discovery",
      action: "Browses curated restaurant list filtered by occasion",
      thought: "These feel handpicked. Not just sorted by rating.",
      emotion: "positive",
      opportunity: "Editorial voice + chef stories create emotional connection pre-visit",
    },
    {
      stage: "Menu Browse",
      action: "Previews full menu with HD images and chef notes",
      thought: "I've never been able to do this before booking. This changes everything.",
      emotion: "delighted",
      opportunity: "Wishlist feature — save dishes to discuss with companion",
    },
    {
      stage: "Booking",
      action: "Selects date, time, party size, occasion, dietary needs",
      thought: "Three taps and it's confirmed? That was surprisingly easy.",
      emotion: "positive",
      opportunity: "Instant confirmation with personalised pre-arrival note from restaurant",
    },
    {
      stage: "Arrival",
      action: "Restaurant has the occasion details, table is pre-set",
      thought: "They knew it was an anniversary. This feels considered.",
      emotion: "delighted",
      opportunity: "DINO passes occasion data to restaurant — closing the loop digitally",
    },
    {
      stage: "Reward",
      action: "Earns points, moves to Silver tier, leaves structured review",
      thought: "I want to come back just to hit Gold. And I have opinions worth sharing.",
      emotion: "positive",
      opportunity: "Loyalty drives return visits — review feeds curation algorithm",
    },
  ];

  const aiProcess = [
    {
      tool: "Claude",
      use: "Review Analysis",
      detail: "Fed 200+ Zomato and Google reviews into Claude with a prompt to extract recurring fine dining pain points, grouped by sentiment. Surfaced 'menu anxiety before booking' as the #1 unsolved frustration in 40 minutes.",
    },
    {
      tool: "Midjourney",
      use: "Visual & Mood Direction",
      detail: "Prompted 60+ restaurant atmosphere images to define the visual language — 'candlelight editorial photography meets clean iOS UI'. Used outputs directly in stakeholder mood board decks.",
    },
    {
      tool: "DALL-E",
      use: "Reward Badge Concepts",
      detail: "Generated 30 loyalty tier badge directions (Bronze → Obsidian) as concept starters. Designer selected, refined, and vectorised the strongest three directions in Figma.",
    },
    {
      tool: "ChatGPT",
      use: "Usability Test Scripts",
      detail: "Generated 20 realistic user scenarios for testing sessions — including edge cases like group bookings with mixed dietary needs and last-minute cancellations. Saved 4 hours of script writing.",
    },
    {
      tool: "Figma AI",
      use: "Menu Card Variants",
      detail: "Auto-generated 12 menu card layout variations. Reviewed, merged the strongest interaction patterns, and A/B tested two variants in Maze — reducing iteration time by 50%.",
    },
  ];

  const painPoints = [
    {
      index: "01",
      title: "Discovery is Broken",
      body: "Finding a fine-dining restaurant for a specific occasion requires cross-referencing multiple apps with inconsistent quality signals.",
    },
    {
      index: "02",
      title: "Booking is Clunky",
      body: "Most restaurant booking flows require phone calls, third-party redirects, or give no real-time availability. Confirmation is unclear.",
    },
    {
      index: "03",
      title: "Menus Are an Afterthought",
      body: "Users want to pre-browse menus, allergen filters, and wine pairings before committing to a reservation. Current platforms offer static PDFs at best.",
    },
    {
      index: "04",
      title: "No Loyalty Payoff",
      body: "Frequent fine diners have no mechanism to accumulate meaningful value. Rewards from existing apps feel generic and disconnected from premium experience.",
    },
  ];

  const personas = [
    {
      name: "Priya, 31",
      role: "Marketing Director",
      goal: "Book premium dining for client entertainment without the research overhead.",
      frustrations: [
        "Wastes 40 minutes per booking across multiple apps",
        "No confidence in online ratings for fine dining",
        "Gets no recognition despite dining out 10+ times monthly",
      ],
      quote: "If I'm spending ₹8,000 on a meal, the booking experience should match the occasion.",
    },
    {
      name: "Arjun, 26",
      role: "Food Enthusiast & Content Creator",
      goal: "Explore fine dining concepts, earn rewards, and share curated experiences with his audience.",
      frustrations: [
        "No app truly understands fine dining as a category",
        "Menu photos are low quality or completely absent",
        "Rewards expire before he can use them meaningfully",
      ],
      quote: "I want an app that takes food as seriously as I do.",
    },
  ];

  const userFlow = [
    { step: "1", action: "Set the Occasion", detail: "Anniversary, business dinner, birthday — context-first entry" },
    { step: "2", action: "Curated Discovery", detail: "Editorial profiles, chef stories, mood-matched venues" },
    { step: "3", action: "Pre-Browse Menu", detail: "HD photography, allergens, sommelier notes, wish-listing" },
    { step: "4", action: "Book in 3 Taps", detail: "Live availability, occasion notes, instant confirmation" },
    { step: "5", action: "Arrive & Dine", detail: "Restaurant pre-briefed, digital menu at table, sommelier chat" },
    { step: "6", action: "Earn & Return", detail: "Points logged, tier progress shown, structured review" },
  ];

  const features = [
    {
      number: "1",
      title: "Curated Discovery",
      description: "Hand-picked fine dining restaurants with rich editorial profiles — chef story, tasting notes, ambience mood, and occasion suitability tags.",
    },
    {
      number: "2",
      title: "Real-Time Table Booking",
      description: "Live seat availability with flexible time slots. Specify occasion and dietary needs at reservation. Instant confirmation, zero phone calls.",
    },
    {
      number: "3",
      title: "Interactive Digital Menu",
      description: "Full menu browsable before booking — HD photography, sommelier notes, allergen filters, and chef's recommendations. Build a wishlist before arrival.",
    },
    {
      number: "4",
      title: "DINO Rewards",
      description: "Tiered loyalty — Bronze, Silver, Gold, Obsidian — accumulating per visit, spend, and review. Redeemable for upgrades, priority booking, and exclusive events.",
    },
    {
      number: "5",
      title: "Occasion Planner",
      description: "Set the context and DINO surfaces venues, menu suggestions, and add-ons (flowers, cakes, private rooms) curated to the moment.",
    },
    {
      number: "6",
      title: "Structured Review System",
      description: "Score ambience, service, plating, taste, and value independently. Reviews designed for fine dining — not the same form as a fast food chain.",
    },
  ];

  const nextSteps = [
    "Private dining and chef's table exclusive booking for Obsidian tier members",
    "AI sommelier chat for wine pairing recommendations during the meal",
    "Restaurant partner dashboard for managing reservations and customer insights",
    "DINO Experiences — curated food events, chef pop-ups, and tasting tours",
  ];

  return (
    <main className="cs-shell">
      <nav className="cs-topbar">
        <a className="cs-back" href="/">← Back</a>
        <span className="cs-nav-title">DINO</span>
      </nav>

      <section className="cs-hero">
        <p className="work-kicker"># Case Study</p>
        <h1 className="cs-title">Fine Dining,<br />Beautifully Simplified</h1>
        <p className="cs-subtitle">
          Designing an end-to-end fine dining app that transforms how people discover restaurants, book tables, explore menus, and earn rewards — making every meal feel like a considered experience, not a transaction.
        </p>
        <div className="cs-meta-row">
          {meta.map((m) => (
            <div className="cs-meta-chip" key={m.label}>
              <span className="cs-meta-label">{m.label}</span>
              <span className="cs-meta-value">{m.value}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="cs-image-banner cs-image-banner--dino" aria-hidden="true" />

      <section className="cs-section">
        <div className="cs-section-inner cs-two-col">
          <div>
            <p className="work-kicker"># Overview</p>
            <h2 className="cs-h2">Dining out deserves a better app.</h2>
          </div>
          <div>
            <p className="cs-body">
              DINO is a fine dining companion built for people who take food seriously. The premise: discovering and booking a premium restaurant should match the quality of the meal itself.
            </p>
            <p className="cs-body">
              The design challenge was to create a product that felt premium without being intimidating — bringing the warmth of a maître d' recommendation into a mobile interface, while solving real friction across discovery, booking, menus, and loyalty.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-section cs-section--tinted">
        <div className="cs-section-inner">
          <p className="work-kicker"># Research Methodology</p>
          <h2 className="cs-h2">How we uncovered the fine dining gap</h2>
          <p className="cs-body cs-body--max">
            Six weeks of research before wireframes. Qualitative interviews, in-restaurant contextual sessions, and AI-assisted review analysis across 5 platforms.
          </p>
          <div className="cs-methodology-grid">
            {methodology.map((m) => (
              <div className="cs-methodology-card" key={m.detail}>
                <strong>{m.label}</strong>
                <h3>{m.detail}</h3>
                <p>{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-section-inner">
          <p className="work-kicker"># Competitor Analysis</p>
          <h2 className="cs-h2">Why fine dining needs its own app</h2>
          <p className="cs-body cs-body--max">
            Every existing platform either scales down premium or ignores loyalty entirely. DINO exists in the gap between them.
          </p>
          <div className="cs-competitor-grid">
            {competitors.map((c) => (
              <div className="cs-competitor-card" key={c.name}>
                <h3 className="cs-competitor-name">{c.name}</h3>
                <div className="cs-competitor-row">
                  <span className="cs-tag cs-tag--green">Strength</span>
                  <p>{c.strength}</p>
                </div>
                <div className="cs-competitor-row">
                  <span className="cs-tag cs-tag--muted">Weakness</span>
                  <p>{c.weakness}</p>
                </div>
                <div className="cs-competitor-row">
                  <span className="cs-tag cs-tag--dark">Gap we fill</span>
                  <p>{c.gap}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section cs-section--tinted">
        <div className="cs-section-inner">
          <p className="work-kicker"># Research Findings</p>
          <h2 className="cs-h2">What fine diners are really struggling with</h2>
          <div className="cs-pain-grid">
            {painPoints.map((p) => (
              <div className="cs-pain-card" key={p.index}>
                <span className="cs-pain-index">{p.index}</span>
                <h3 className="cs-pain-title">{p.title}</h3>
                <p className="cs-pain-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-section-inner">
          <p className="work-kicker"># User Personas</p>
          <h2 className="cs-h2">Two types of fine diners, one experience</h2>
          <div className="cs-persona-grid">
            {personas.map((p) => (
              <div className="cs-persona-card" key={p.name}>
                <div className="cs-persona-head">
                  <div className="cs-persona-avatar">{p.name[0]}</div>
                  <div>
                    <h3 className="cs-persona-name">{p.name}</h3>
                    <p className="cs-persona-role">{p.role}</p>
                  </div>
                </div>
                <div className="cs-persona-goal">
                  <span>Goal</span>
                  <p>{p.goal}</p>
                </div>
                <div className="cs-persona-frustrations">
                  <span>Pain Points</span>
                  <ul>{p.frustrations.map((f) => <li key={f}>{f}</li>)}</ul>
                </div>
                <blockquote className="cs-persona-quote">"{p.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section cs-section--tinted">
        <div className="cs-section-inner">
          <p className="work-kicker"># User Journey Map</p>
          <h2 className="cs-h2">From craving to reward — Priya's evening</h2>
          <p className="cs-body cs-body--max">Mapped against our primary persona Priya — tracking every action, emotional shift, and design opportunity across the full dining journey.</p>
          <div className="cs-journey-scroll">
            <div className="cs-journey-map">
              {journey.map((j) => (
                <div className="cs-journey-col" key={j.stage}>
                  <div className="cs-journey-stage">{j.stage}</div>
                  <div className="cs-journey-action">{j.action}</div>
                  <div className={`cs-journey-emotion cs-journey-emotion--${j.emotion}`}>
                    <span className="cs-emotion-dot" />
                    <span className="cs-emotion-label">{j.emotion}</span>
                  </div>
                  <div className="cs-journey-thought">"{j.thought}"</div>
                  <div className="cs-journey-opportunity">{j.opportunity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-section-inner">
          <p className="work-kicker"># User Flow</p>
          <h2 className="cs-h2">From craving to reward in six steps</h2>
          <div className="cs-flow-grid">
            {userFlow.map((f, i) => (
              <div className="cs-flow-step" key={f.step}>
                <div className="cs-flow-connector">
                  <span className="cs-flow-dot" />
                  {i < userFlow.length - 1 && <span className="cs-flow-line" />}
                </div>
                <div className="cs-flow-content">
                  <h3 className="cs-flow-action">{f.action}</h3>
                  <p className="cs-flow-detail">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section cs-ai-section">
        <div className="cs-section-inner">
          <p className="work-kicker cs-kicker--light"># AI in the Design Process</p>
          <h2 className="cs-h2 cs-h2--light">AI did the heavy lifting so design could focus on nuance</h2>
          <p className="cs-body cs-body--light cs-body--max">
            From synthesising hundreds of reviews to generating menu card variations — AI compressed weeks of work into hours and surfaced insights that manual methods would have missed.
          </p>
          <div className="cs-ai-grid">
            {aiProcess.map((a) => (
              <div className="cs-ai-card" key={a.tool}>
                <div className="cs-ai-card-head">
                  <span className="cs-ai-tool">{a.tool}</span>
                  <span className="cs-ai-use">{a.use}</span>
                </div>
                <p className="cs-ai-detail">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-section-inner">
          <p className="work-kicker"># Design Solution</p>
          <h2 className="cs-h2">Six features that earn a Michelin star.</h2>
          <div className="cs-features-grid">
            {features.map((f) => (
              <div className="cs-feature-card" key={f.number}>
                <span className="cs-feature-number">{f.number}</span>
                <h3 className="cs-feature-title">{f.title}</h3>
                <p className="cs-feature-body">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section cs-section--tinted">
        <div className="cs-section-inner cs-two-col">
          <div>
            <p className="work-kicker"># Next Steps</p>
            <h2 className="cs-h2">Building the full table</h2>
          </div>
          <ul className="cs-next-list">
            {nextSteps.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </section>

      <div className="cs-footer-nav">
        <a className="ghost-button button-lift" href="/case-studies/progrize">← Progrize</a>
        <a className="primary-button button-lift" href="/case-studies/hound-mobility">Next: Hound Mobility →</a>
      </div>
    </main>
  );
}
