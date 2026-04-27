export default function HoundMobilityCase() {
  const meta = [
    { label: "Role", value: "Lead UX Designer" },
    { label: "Year", value: "2024" },
    { label: "Platform", value: "iOS + Android" },
    { label: "Tools", value: "Figma, Maze, Lottie" },
  ];

  const methodology = [
    { label: "16", detail: "Intercept Interviews", sub: "Kochi Airport, Lulu Mall, MG Road" },
    { label: "3", detail: "Competitor Ride-Alongs", sub: "Ola, Uber, ZoomCar tested in-context" },
    { label: "4", detail: "Competitor Teardowns", sub: "Ola, Uber, ZoomCar, Myles" },
    { label: "50+", detail: "Edge Case Scenarios", sub: "AI-generated booking flow stress tests" },
  ];

  const competitors = [
    {
      name: "Ola",
      strength: "Massive scale, brand trust across India",
      weakness: "Surge pricing with zero transparency, inconsistent vehicle quality",
      gap: "No hourly rental, no premium positioning, eco-angle entirely absent",
    },
    {
      name: "Uber",
      strength: "Global brand, reliable ETA predictions",
      weakness: "Premium tier feels like a rebrand, not a redesign",
      gap: "No self-drive option, no outstation structure, no CO₂ tracking",
    },
    {
      name: "ZoomCar",
      strength: "Self-drive rental with reasonable fleet",
      weakness: "Outdated UX, complex booking flow, no chauffeur option",
      gap: "No premium rides, no airport-specific flow, no eco messaging",
    },
    {
      name: "Myles",
      strength: "Pan-India presence in car sharing",
      weakness: "Poor app experience, trust deficit in Kerala market",
      gap: "No service design differentiation, no loyalty, no eco positioning",
    },
  ];

  const journey = [
    {
      stage: "Planning",
      action: "Needs a ride to a client meeting across Kochi",
      thought: "Will a cab even show up on time? I can't afford a no-show today.",
      emotion: "skeptical",
      opportunity: "Pre-scheduled booking with guaranteed pickup — reliability as the hook",
    },
    {
      stage: "App Open",
      action: "Opens Hound, sees contextual home screen with relevant ride types",
      thought: "It knows I usually book premium on weekday mornings. Smart.",
      emotion: "positive",
      opportunity: "Personalised home based on time, history, and location pattern",
    },
    {
      stage: "Selection",
      action: "Chooses Premium Rides, sees upfront all-inclusive price",
      thought: "No surge. No hidden charges. I can actually budget this.",
      emotion: "positive",
      opportunity: "Price transparency as a trust signal — show exactly what's included",
    },
    {
      stage: "Booking",
      action: "Confirms in 3 taps, driver assigned instantly",
      thought: "That was faster than any other app I've used.",
      emotion: "delighted",
      opportunity: "Speed of confirmation creates confidence — send driver profile immediately",
    },
    {
      stage: "Journey",
      action: "Rides in a clean MG vehicle, requests music preference in-app",
      thought: "This feels genuinely premium. Not just a nicer car.",
      emotion: "delighted",
      opportunity: "In-ride personalisation differentiates from commodity cab experience",
    },
    {
      stage: "Post-Trip",
      action: "Sees CO₂ saved vs petrol car, rates driver, views cumulative eco impact",
      thought: "I saved 2.3 kg this trip. That actually makes me feel something.",
      emotion: "positive",
      opportunity: "Eco data transforms a utility action into a values-aligned choice",
    },
  ];

  const aiProcess = [
    {
      tool: "Claude",
      use: "Field Research Synthesis",
      detail: "Uploaded raw notes from 16 intercept interviews at Kochi Airport and Lulu Mall. Claude extracted 5 core insight themes and ranked them by frequency and emotional intensity — in 20 minutes.",
    },
    {
      tool: "v0 by Vercel",
      use: "Booking Flow Prototype",
      detail: "Prompted the 4-screen booking flow in plain English on Day 1 of the design sprint. Had a testable HTML prototype before any Figma frames were open. Used for guerrilla testing in Week 1.",
    },
    {
      tool: "Midjourney",
      use: "Brand Visual Direction",
      detail: "Generated 50+ automotive lifestyle images using prompts around 'clean Kerala roads, premium mobility, eco-conscious travel'. Established the visual DNA before any UI work began.",
    },
    {
      tool: "ChatGPT",
      use: "Edge Case Scenario Generation",
      detail: "Prompted GPT-4 to generate 50 edge-case booking scenarios — late-night outstation, group airport drop, vehicle breakdown mid-trip. Each became a test case in the Maze usability study.",
    },
    {
      tool: "Figma AI",
      use: "Responsive Layout Variants",
      detail: "Auto-generated responsive home screen layout variants across 5 breakpoints. Reviewed and merged the strongest patterns from each, cutting responsive QA time by 40%.",
    },
  ];

  const painPoints = [
    {
      index: "01",
      title: "No Flexible Urban Mobility",
      body: "Residents and visitors in Kochi had no reliable option between owning a car and hailing a cab — hourly or self-drive options were scattered and inconsistent.",
    },
    {
      index: "02",
      title: "Opaque Pricing",
      body: "Traditional rental services had hidden charges, unclear fuel policies, and surge pricing with no upfront transparency, eroding trust before the journey began.",
    },
    {
      index: "03",
      title: "Fragmented Booking",
      body: "Airport transfers, outstation trips, and city rides each required different providers. Users wanted one app to handle every journey type with one profile.",
    },
    {
      index: "04",
      title: "Eco-Anxiety with No Outlet",
      body: "A growing segment of urban commuters in Kerala wanted to reduce their carbon footprint but had no way to quantify or act on it through mobility choices.",
    },
  ];

  const personas = [
    {
      name: "Rajan, 34",
      role: "Business Consultant, Kochi",
      goal: "Reliable, premium transport for client meetings and airport runs without unpredictability.",
      frustrations: [
        "Cab apps surge-price during peak hours",
        "No consistent quality across different drivers",
        "Airport bookings often fall through last minute",
      ],
      quote: "I need to arrive looking professional, not stressed about whether my ride will show up.",
    },
    {
      name: "Meera, 28",
      role: "Traveller & Remote Worker",
      goal: "Explore Kerala flexibly with hourly or outstation rental without traditional car hire formalities.",
      frustrations: [
        "Traditional rentals require too much paperwork",
        "No eco-friendly vehicle options available",
        "No app shows real CO₂ impact of mobility choices",
      ],
      quote: "I want to travel freely and feel good about how I'm doing it.",
    },
  ];

  const services = [
    {
      tag: "From ₹699/hr",
      title: "Hourly Rentals",
      description: "Book a vehicle by the hour for city errands, meetings, or spontaneous plans. Flexible pickup, no minimum beyond one hour.",
    },
    {
      tag: "From ₹899/hr",
      title: "Premium Rides",
      description: "Chauffeur-driven luxury for airport runs and corporate travel. Vetted drivers, premium MG vehicles, guaranteed on-time pickup.",
    },
    {
      tag: "From ₹499",
      title: "Airport Transfers",
      description: "Fixed-price, punctual airport pickups. Live flight tracking adjusts for delays automatically — the car waits for you.",
    },
    {
      tag: "From ₹499",
      title: "Outstation Trips",
      description: "Day trips and multi-day rentals. Explore Munnar, Alleppey, Thekkady across Kerala with transparent per-km pricing.",
    },
  ];

  const features = [
    {
      number: "1",
      title: "Smart Home Dashboard",
      description: "Contextual home screen surfacing the most relevant ride type based on time of day, saved locations, and booking history.",
    },
    {
      number: "2",
      title: "Transparent Pricing",
      description: "All-inclusive upfront pricing — fuel, driver, tolls, taxes. Zero hidden charges. Cancellation policy shown before confirmation.",
    },
    {
      number: "3",
      title: "CO₂ Impact Tracker",
      description: "Every trip shows CO₂ saved vs a solo petrol car. Cumulative savings tracked on the profile — sustainable mobility made visible.",
    },
    {
      number: "4",
      title: "Live Availability Map",
      description: "Real-time vehicle availability across Kochi. See nearest vehicles, estimated pickup time, and vehicle type before committing.",
    },
    {
      number: "5",
      title: "Trip Scheduler",
      description: "Schedule rides up to 7 days in advance. Recurring trips for regular commutes. Push notifications with driver details 30 min before pickup.",
    },
    {
      number: "6",
      title: "In-Trip Experience",
      description: "Music preferences, stop requests, and temperature preferences handled in-app during premium rides. Rate driver immediately post-trip.",
    },
  ];

  const outcomes = [
    { value: "4.8★", label: "App Store Rating" },
    { value: "↓ 40%", label: "Booking Drop-offs" },
    { value: "2.3 kg", label: "Avg CO₂ Saved/Trip" },
    { value: "3 taps", label: "To Complete Booking" },
    { value: "92%", label: "On-Time Rate (Premium)" },
    { value: "68%", label: "Repeat Booking Rate" },
  ];

  const nextSteps = [
    "EV fleet integration with in-app charging station finder for outstation trips",
    "Subscription plans for daily commuters — monthly unlimited hourly credits",
    "Corporate accounts with expense reporting and multi-user booking management",
    "Expansion beyond Kochi to Thiruvananthapuram and Thrissur",
  ];

  return (
    <main className="cs-shell">
      <nav className="cs-topbar">
        <a className="cs-back" href="/">← Back</a>
        <span className="cs-nav-title">Hound Mobility</span>
      </nav>

      <section className="cs-hero">
        <p className="work-kicker"># Case Study</p>
        <h1 className="cs-title">Where Are We<br />Heading Today?</h1>
        <p className="cs-subtitle">
          Designing a flexible, eco-conscious urban mobility app for Kochi — unifying hourly rentals, premium rides, airport transfers, and outstation trips into one seamless, trust-first experience.
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

      <div className="cs-image-banner cs-image-banner--hound" aria-hidden="true" />

      <section className="cs-section">
        <div className="cs-section-inner cs-two-col">
          <div>
            <p className="work-kicker"># Overview</p>
            <h2 className="cs-h2">Mobility that fits your life, not the other way around.</h2>
          </div>
          <div>
            <p className="cs-body">
              Hound Mobility is a Kochi-based platform giving urban dwellers and travellers flexible access to quality vehicles and rides — without the friction of traditional car hire or the unpredictability of cab apps.
            </p>
            <p className="cs-body">
              The design challenge: build a product that communicates trust and premium quality while remaining fast and frictionless — and weave eco-conscious values into the experience without making it preachy.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-section cs-section--tinted">
        <div className="cs-section-inner">
          <p className="work-kicker"># Research Methodology</p>
          <h2 className="cs-h2">Research in the field, not just on a screen</h2>
          <p className="cs-body cs-body--max">
            Research was conducted on the ground in Kochi — intercept interviews at real mobility touchpoints, competitive ride-alongs, and AI-assisted scenario generation for the booking flow stress test.
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
          <h2 className="cs-h2">Why urban mobility in Kerala needed reimagining</h2>
          <p className="cs-body cs-body--max">
            Every existing option either lacks premium quality, transparency, or flexible service types. None address the growing eco-conscious segment. That's the gap Hound was built to own.
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
          <h2 className="cs-h2">Four blockers preventing better mobility</h2>
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
          <h2 className="cs-h2">Two journeys, one platform</h2>
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
          <h2 className="cs-h2">Rajan's morning — from anxiety to advocacy</h2>
          <p className="cs-body cs-body--max">Mapped against Rajan's primary use case — a weekday client meeting ride — tracking the emotional arc and design decisions at every touchpoint.</p>
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
          <p className="work-kicker"># Service Design</p>
          <h2 className="cs-h2">Four ride types. One coherent experience.</h2>
          <div className="cs-services-grid">
            {services.map((s) => (
              <div className="cs-service-card" key={s.title}>
                <span className="cs-service-tag">{s.tag}</span>
                <h3 className="cs-service-title">{s.title}</h3>
                <p className="cs-service-body">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section cs-ai-section">
        <div className="cs-section-inner">
          <p className="work-kicker cs-kicker--light"># AI in the Design Process</p>
          <h2 className="cs-h2 cs-h2--light">From field notes to testable prototype — AI at every stage</h2>
          <p className="cs-body cs-body--light cs-body--max">
            On-the-ground research generated a mountain of unstructured data. AI tools compressed analysis, generated test scenarios, and prototyped the booking flow before Figma was opened.
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
          <h2 className="cs-h2">Trust, speed, and sustainability by design.</h2>
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
        <div className="cs-section-inner">
          <p className="work-kicker"># Outcomes</p>
          <h2 className="cs-h2">Results post-launch</h2>
          <div className="cs-outcomes-grid">
            {outcomes.map((o) => (
              <div className="cs-outcome-card" key={o.label}>
                <strong>{o.value}</strong>
                <span>{o.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-section-inner cs-two-col">
          <div>
            <p className="work-kicker"># Next Steps</p>
            <h2 className="cs-h2">The road ahead</h2>
          </div>
          <ul className="cs-next-list">
            {nextSteps.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </section>

      <div className="cs-footer-nav">
        <a className="ghost-button button-lift" href="/case-studies/dino">← DINO</a>
        <a className="primary-button button-lift" href="/">Back to Portfolio →</a>
      </div>
    </main>
  );
}
