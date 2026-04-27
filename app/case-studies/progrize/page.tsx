export default function ProgrizeCase() {
  const meta = [
    { label: "Role", value: "Lead UX Designer" },
    { label: "Year", value: "2023 – 2024" },
    { label: "Platform", value: "Web + Mobile" },
    { label: "Tools", value: "Figma, FigJam, Maze, Hotjar" },
  ];

  const methodology = [
    { label: "28", detail: "User Interviews", sub: "Professionals across 5 countries" },
    { label: "6", detail: "Diary Studies", sub: "2-week job-search observation" },
    { label: "4", detail: "Competitor Teardowns", sub: "LinkedIn, Glassdoor, MentorCruise, Huntr" },
    { label: "12", detail: "Usability Tests", sub: "Lo-fi prototype validation sessions" },
  ];

  const competitors = [
    {
      name: "LinkedIn",
      strength: "Massive professional network",
      weakness: "Job matching is keyword-based, not intelligent",
      gap: "No mentorship structure or application tracking",
    },
    {
      name: "Indeed",
      strength: "Largest job database globally",
      weakness: "Zero post-application visibility or guidance",
      gap: "No mentorship, no CV intelligence, no tracking",
    },
    {
      name: "MentorCruise",
      strength: "High-quality vetted mentorship",
      weakness: "Isolated — no job search or applications",
      gap: "Mentorship without career context is limited",
    },
    {
      name: "Huntr",
      strength: "Good application tracker board",
      weakness: "No job discovery or mentor connection",
      gap: "Tracker without discovery forces multi-app juggling",
    },
  ];

  const journey = [
    {
      stage: "Awareness",
      action: "Discovers Progrize via referral or LinkedIn ad",
      thought: "Another job platform? Do I really need this?",
      emotion: "skeptical",
      opportunity: "Lead with the 'one platform' value — show what gets eliminated",
    },
    {
      stage: "Sign Up",
      action: "Creates profile, imports CV, answers skill prompts",
      thought: "This is taking longer than expected but feels more thorough",
      emotion: "neutral",
      opportunity: "AI-assisted profile builder to reduce setup friction by 60%",
    },
    {
      stage: "Exploration",
      action: "Browses matched jobs and mentor directory",
      thought: "These matches actually look relevant. How did it know?",
      emotion: "positive",
      opportunity: "Surface the AI reasoning — explain why a job was matched",
    },
    {
      stage: "Applying",
      action: "Applies with AI-tailored CV, tracks via dashboard",
      thought: "I can finally see everything in one place",
      emotion: "positive",
      opportunity: "Progress indicators and nudges to prevent application abandonment",
    },
    {
      stage: "Mentorship",
      action: "Books first mentor session from marketplace",
      thought: "I didn't expect this to feel so personal and structured",
      emotion: "delighted",
      opportunity: "Post-session action plan auto-generated and linked to job goals",
    },
    {
      stage: "Hired",
      action: "Accepts offer, shares outcome on platform",
      thought: "This genuinely helped. I want to become a mentor now.",
      emotion: "positive",
      opportunity: "Flywheel: hired users become mentors, strengthening supply",
    },
  ];

  const aiProcess = [
    {
      tool: "Claude",
      use: "Research Synthesis",
      detail: "Uploaded all 28 interview transcripts. Claude clustered recurring themes into 6 insight pillars in under 15 minutes — work that would have taken 2 days manually.",
    },
    {
      tool: "Midjourney",
      use: "Visual Exploration",
      detail: "Generated 40+ mood board directions using prompts like 'professional ambition meets calm clarity'. Narrowed to 3 visual directions before a single Figma frame was opened.",
    },
    {
      tool: "v0 by Vercel",
      use: "Rapid Prototyping",
      detail: "Prompted the application tracker dashboard UI in plain English. Had a testable HTML prototype in 20 minutes. Used for guerrilla testing before committing to Figma.",
    },
    {
      tool: "ChatGPT",
      use: "Persona Pressure Testing",
      detail: "Fed draft personas back to GPT-4 and asked it to identify blind spots. It surfaced career-changer users we had underweighted — a segment that became 30% of beta signups.",
    },
    {
      tool: "Figma AI",
      use: "Component Generation",
      detail: "Auto-generated responsive layout variants for the dashboard. Reviewed, edited, and merged the strongest patterns rather than building from scratch.",
    },
  ];

  const painPoints = [
    {
      index: "01",
      title: "Tool Fragmentation",
      body: "Professionals managed LinkedIn, job boards, mentor platforms, and CV builders separately — losing hours switching context daily.",
    },
    {
      index: "02",
      title: "Invisible Progress",
      body: "Applications disappeared into black holes. No unified view of where they stood across dozens of active applications.",
    },
    {
      index: "03",
      title: "Mentorship Access Gap",
      body: "Quality mentorship was gated behind expensive coaches or cold LinkedIn outreach — inaccessible to early-career professionals.",
    },
    {
      index: "04",
      title: "Mismatched Opportunities",
      body: "Generic job recommendations wasted time. Users needed AI that understood their skill trajectory, not keyword matching.",
    },
  ];

  const personas = [
    {
      name: "Ayesha, 27",
      role: "Junior Software Engineer",
      goal: "Land a senior role within 12 months with mentorship to bridge the skill gap.",
      frustrations: [
        "Spends 3+ hours daily juggling platforms",
        "No feedback after applications go silent",
        "Can't afford a career coach",
      ],
      quote: "I know I'm qualified — I just can't get in front of the right people.",
    },
    {
      name: "Marcus, 42",
      role: "Talent Acquisition Lead",
      goal: "Fill 15 mid-senior roles per quarter without drowning in unqualified CVs.",
      frustrations: [
        "90% of applicants don't match the brief",
        "Employer branding is an afterthought on most platforms",
        "No insight into a candidate's growth potential",
      ],
      quote: "I need a signal, not more noise.",
    },
  ];

  const features = [
    {
      number: "1",
      title: "AI Match Engine",
      description: "Surfaces roles aligned to a user's actual skill trajectory — not keyword matching — reducing irrelevant applications by 60%.",
    },
    {
      number: "2",
      title: "Application Command Centre",
      description: "A single dashboard tracking every active application, follow-up, and interview stage so nothing falls through the cracks.",
    },
    {
      number: "3",
      title: "1:1 Mentorship Marketplace",
      description: "Browse and book sessions with 350+ vetted industry experts. Structured session templates ensure every call delivers actionable outcomes.",
    },
    {
      number: "4",
      title: "CV Intelligence",
      description: "Instant analysis against live job descriptions. Highlights gaps, suggests improvements, and benchmarks against 15,000+ CVs.",
    },
    {
      number: "5",
      title: "Employer Branding Studio",
      description: "Organisations craft rich company profiles and targeted talent pipelines — attracting quality candidates before a role is posted.",
    },
    {
      number: "6",
      title: "End-to-End Encryption",
      description: "GDPR-compliant data handling with candidate-controlled privacy settings — trust as a core feature, not an afterthought.",
    },
  ];

  const outcomes = [
    { value: "2,400+", label: "Beta Users" },
    { value: "92%", label: "Placement Rate" },
    { value: "5+", label: "Countries Active" },
    { value: "350+", label: "Active Mentors" },
    { value: "15k+", label: "CVs Analysed" },
    { value: "↓ 60%", label: "Irrelevant Applications" },
  ];

  const nextSteps = [
    "Mobile-native app for on-the-go application tracking and mentor messaging",
    "Salary benchmarking tool integrated with live market data",
    "Cohort-based learning paths co-designed with mentor community",
    "Recruiter analytics with diversity and inclusion hiring metrics",
  ];

  return (
    <main className="cs-shell">
      <nav className="cs-topbar">
        <a className="cs-back" href="/">← Back</a>
        <span className="cs-nav-title">Progrize</span>
      </nav>

      <section className="cs-hero">
        <p className="work-kicker"># Case Study</p>
        <h1 className="cs-title">The Career Platform<br />That Moves You Forward</h1>
        <p className="cs-subtitle">
          Designing a unified AI-powered career platform that replaces five fragmented tools with one intelligent, human-centred experience — for professionals and the organisations hiring them.
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

      <div className="cs-image-banner cs-image-banner--progrize" aria-hidden="true" />

      <section className="cs-section">
        <div className="cs-section-inner cs-two-col">
          <div>
            <p className="work-kicker"># Overview</p>
            <h2 className="cs-h2">One platform.<br />Every career move.</h2>
          </div>
          <div>
            <p className="cs-body">
              Progrize was born from a simple frustration: building a career in 2024 requires stitching together a dozen disconnected tools. Job boards. LinkedIn. Mentor marketplaces. CV optimisers. Application trackers. Each solves one slice while creating friction everywhere else.
            </p>
            <p className="cs-body">
              The design challenge was to unify these experiences into one intelligent platform — without sacrificing depth for simplicity — keeping it approachable for a junior developer and powerful for a hiring director.
            </p>
          </div>
        </div>
      </section>

      <section className="cs-section cs-section--tinted">
        <div className="cs-section-inner">
          <p className="work-kicker"># Research Methodology</p>
          <h2 className="cs-h2">How we found the truth</h2>
          <p className="cs-body cs-body--max">
            A mixed-methods research sprint over six weeks — combining qualitative depth with quantitative signal — before a single wireframe was drawn.
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
          <h2 className="cs-h2">What the market gets wrong</h2>
          <p className="cs-body cs-body--max">
            Every existing tool owns one vertical. None connects the full career journey — and that's the white space Progrize was designed to own.
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
          <h2 className="cs-h2">What professionals are really struggling with</h2>
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
          <h2 className="cs-h2">Designing for two very different mindsets</h2>
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
          <h2 className="cs-h2">The emotional arc from frustrated to hired</h2>
          <p className="cs-body cs-body--max">Mapped against Ayesha's journey — our primary persona — tracking actions, thoughts, emotional state, and design opportunities at each stage.</p>
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

      <section className="cs-section cs-ai-section">
        <div className="cs-section-inner">
          <p className="work-kicker cs-kicker--light"># AI in the Design Process</p>
          <h2 className="cs-h2 cs-h2--light">How AI accelerated every phase</h2>
          <p className="cs-body cs-body--light cs-body--max">
            AI wasn't a finishing touch — it was woven into research, ideation, and prototyping from day one. These are the specific tools and prompts that changed the work.
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
          <h2 className="cs-h2">Six features. One coherent system.</h2>
          <p className="cs-body cs-body--max">
            Each feature was validated through lo-fi prototype testing with 12 participants before moving to high-fidelity. North star metric: reduce time-to-meaningful-action from 47 minutes to under 10.
          </p>
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
          <h2 className="cs-h2">Results from beta launch</h2>
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
            <h2 className="cs-h2">What comes next</h2>
          </div>
          <ul className="cs-next-list">
            {nextSteps.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </section>

      <div className="cs-footer-nav">
        <a className="ghost-button button-lift" href="/">← Back to Portfolio</a>
        <a className="primary-button button-lift" href="/case-studies/dino">Next: DINO →</a>
      </div>
    </main>
  );
}
