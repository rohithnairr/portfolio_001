import Image from "next/image";
import { HeroStat } from "./components/hero-stat";
import { RotatingHeroTitle } from "./components/rotating-hero-title";

const navigation = [
  { label: "Works", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Writings", href: "#writing" },
];

const hero = {
  greetingPrefix: "Hello,",
  introLines: [
    "AI Digital Product Designer with 6+ years of experience and an engineering foundation.",
    "I design intentional, accessible digital experiences blending technical depth, human-centered thinking, and AI to build smarter products that solve real problems.",
  ],
  phrases: [
    "I am Rohith Reghu",
    "I am a Product Designer",
    "I am a UX Engineer",
  ],
  primaryCta: {
    label: "Explore Works",
    href: "#work",
  },
  profileImageAlt: "Rohith Reghu profile",
  profileImageSrc: "/profile-image.svg",
  secondaryCta: {
    label: "Contact Me",
    href: "mailto:hello@rn.design",
  },
  stats: [
    { value: 6, suffix: "+", label: "Experience" },
    { value: 30, suffix: "+", label: "Projects" },
    { value: 28, suffix: "+", label: "Designers Guided" },
  ],
};

const work = {
  kicker: "# Case Studies",
  heading: "Let's Explore My Work",
  copyLines: [
    "Nothing in my design is accidental.",
    "Every pixel has purpose supporting clarity, usability, accessibility, and seamless interaction.",
  ],
  items: [
    {
      name: "Progrize",
      description:
        "A unified AI-powered career platform combining intelligent job matching, mentorship, CV analysis, and application tracking — replacing five fragmented tools with one coherent experience for professionals and the organisations hiring them.",
      href: "/case-studies/progrize",
      previewAlt: "Progrize platform preview",
      previewImage: "/case-studies/progrize.svg",
      variant: "case-card--progrize",
    },
    {
      name: "DINO",
      description:
        "A fine dining companion app that transforms how people discover curated restaurants, pre-browse full menus before booking, reserve tables in three taps, and earn tiered loyalty rewards — making every meal a considered experience, not a transaction.",
      href: "/case-studies/dino",
      previewAlt: "DINO platform preview",
      previewImage: "/case-studies/dino.png",
      variant: "case-card--dino",
    },
    {
      name: "Hound Mobility",
      description:
        "A Kochi-based urban mobility platform unifying hourly rentals, premium chauffeur rides, airport transfers, and outstation trips — with upfront transparent pricing, real-time CO₂ tracking, and a booking flow built entirely on trust.",
      href: "/case-studies/hound-mobility",
      previewAlt: "Hound Mobility platform preview",
      previewImage: "/case-studies/hound.png",
      variant: "case-card--hound",
    },
  ],
};

const expertise = {
  heading: "Bridging AI Technology & Human-Centered Design",
  descriptionLines: [
    "I'm an AI Digital Product Designer with 6+ years of experience and an engineering foundation. I design intentional, accessible digital experiences blending technical depth, human-centered thinking, and AI.",
    "My approach combines prompt engineering mastery, AI-powered design workflows, and deep understanding of LLMs to create products that feel intuitive and magical. I believe AI should amplify creativity, not replace it.",
  ],
  skillsLabel: "EXPERTISE",
  skills: [
    "AI Product Design",
    "UX Engineering",
    "Prompt Engineering",
    "Design Systems",
    "Figma AI",
    "Claude / ChatGPT",
    "Midjourney / DALL-E",
    "v0 by Vercel",
    "Generative UI",
  ],
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "30+", label: "Projects" },
    { value: "28+", label: "Designers Guided" },
  ],
};

const organizations = {
  kicker: "# Worked For",
  heading: "Organisations I've Worked With",
  copy: "Places where I learned, built, and created impact.",
  items: [
    {
      company: "Senior Product Designer",
      detail: "Liberty Information Technology",
      location: "Ireland, Limited Insights",
      duration: "2023 - Present",
      logo: "/organizations/yellow-square.svg",
      logoAlt: "Lively Information Technology logo",
    },
    {
      company: "Senior Product Designer",
      detail: "Sonin Agency",
      location: "London, United Kingdom",
      duration: "2024 - 2025",
      logo: "/organizations/brown.svg",
      logoAlt: "Shout logo",
    },
    {
      company: "Senior Product Designer",
      detail: "Crowdafrik Private Limited",
      location: "London, United Kingdom",
      duration: "2022 - 2023",
      logo: "/organizations/progrize.svg",
      logoAlt: "Conduits Private Limited logo",
    },
    {
      company: "Product Designer (Freelancer)",
      detail: "Vazgro",
      location: "London, United Kingdom",
      duration: "2021 - 2022",
      logo: "/organizations/vazgro.svg",
      logoAlt: "Vazgro logo",
    },
    {
      company: "UX/UI Engineer",
      detail: "Indegene Private Limited",
      location: "Bangalore, India",
      duration: "2021 - 2022",
      logo: "/organizations/indegene.svg",
      logoAlt: "Indegene logo",
    },
    {
      company: "Junior UI/UX Designer",
      detail: "Float Business Accelerators",
      location: "Kochi, India",
      duration: "2019 - 2021",
      logo: "/organizations/studio.svg",
      logoAlt: "Kreat Pixels logo",
    },
  ],
};

const testimonials = {
  kicker: "# Testimonials",
  heading: "What they say.",
  copy:
    "Design is not just how it looks — it's how it works. Here's what leaders I've collaborated with say about working together.",
  items: [
    {
      avatarSrc: "/testimonials/james.svg",
      avatarAlt: "James Donovan portrait",
      name: "James Donovan",
      role: "Head of Product",
      quote:
        "Rohith came in, ran discovery sessions with our clients in Week 1, and by Week 3 had wireframes that our engineers called the clearest handoffs we've ever received. His ability to translate messy user research into clean, shippable flows is genuinely rare. The Figma-to-dev handoff was flawless.",
    },
    {
      avatarSrc: "/testimonials/anjali.svg",
      avatarAlt: "Anjali Krishnan portrait",
      name: "Anjali Krishnan",
      role: "VP Product & Design",
      quote:
        "Rohith thinks in systems, not screens. When he joined we had six disconnected product areas — within eight months we had one coherent design system that the entire engineering org adopted. He's one of the few designers I've worked with who can sit in a sprint and keep full pace with the dev team.",
    },
    {
      avatarSrc: "/testimonials/tariq.svg",
      avatarAlt: "Tariq Hassan portrait",
      name: "Tariq Hassan",
      role: "Co-Founder & CEO",
      quote:
        "I gave Rohith a napkin sketch and a hard deadline. He came back with a fully researched, user-tested product blueprint that our investors called the most thought-through deck we'd seen at pre-seed stage. He's not just a designer — he's a product thinker who happens to be brilliant at design.",
    },
  ],
};

const blogs = {
  kicker: "# Blogs",
  heading: "Let Me Speak",
  copy:
    "I write about design, AI, systems thinking, and the evolving role of designers in a rapidly changing world.",
  moreArticlesLink: {
    label: "More articles",
    href: "#writing",
  },
  items: [
    {
      title: "Exploring Claude Code as a Design Tool",
      date: "12/03/2026",
      tags: ["AI Tools", "Workflow"],
      excerpt:
        "I've been using Claude Code not just as a developer assistant but as an active part of my design workflow — generating component variants and prototyping faster than I ever could in Figma alone.",
      href: "/blogs/claude-code-designs",
    },
    {
      title: "No One is Going to Replace a Designer",
      date: "28/02/2026",
      tags: ["Opinion", "AI & Design"],
      excerpt:
        "Every few months a new AI tool drops and the design community panics. I've used most of these tools deeply for 6+ years. Here's what I actually think about the future of our craft.",
      href: "/blogs/no-one-replaces-designer",
    },
    {
      title: "Vibe Coding: An Honest Take From a Designer",
      date: "15/01/2026",
      tags: ["Vibe Coding", "Workflow"],
      excerpt:
        "Building products by describing what you want in plain English and letting AI write the code. I've spent the last year doing exactly this — here's my honest breakdown of benefits and pitfalls.",
      href: "/blogs/vibe-coding",
    },
  ],
};

const footer = {
  contactCta: {
    label: "hello@rn.design",
    href: "mailto:hello@rn.design",
  },
  heading: "Let's build something clear, useful, and memorable.",
  metaCopy: "Based in the United Kingdom. Building thoughtful digital experiences.",
  navigation,
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com", newTab: true },
    { label: "Behance", href: "https://www.behance.net", newTab: true },
    { label: "Dribbble", href: "https://dribbble.com", newTab: true },
  ],
  supportingCopy:
    "Available for product design, visual systems, and collaborative work across startups, agencies, and in-house teams.",
};

function getLinkProps(link: { href: string; label: string; newTab?: boolean }) {
  return link.newTab ? { rel: "noreferrer", target: "_blank" as const } : {};
}

export default function Home() {
  return (
    <main className="page-shell" id="main-content" tabIndex={-1}>
      <a className="skip-link" href="#main-sections">
        Skip to content
      </a>

      <header className="topbar motion-slide-down">
        <a className="brand" href="#home" aria-label="RN home">
          RN
        </a>
        <nav className="nav" aria-label="Primary">
          {navigation.map((link) => (
            <a className="nav-link" href={link.href} key={link.label} {...getLinkProps(link)}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section pt-16" id="home">
        <Image
          className="hero-avatar motion-pop"
          src={hero.profileImageSrc}
          alt={hero.profileImageAlt}
          width={117}
          height={117}
          priority
        />
        <h1 className="motion-rise motion-delay-1">
          {hero.greetingPrefix} <RotatingHeroTitle phrases={hero.phrases} />
        </h1>
        <p className="hero-copy motion-rise motion-delay-2">
          {hero.introLines.map((line, index) => (
            <span key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </p>
        <div className="hero-actions motion-rise motion-delay-3">
          <a
            className="primary-button button-lift"
            href={hero.primaryCta.href}
            {...getLinkProps(hero.primaryCta)}
          >
            {hero.primaryCta.label}
          </a>
          <a
            className="ghost-button button-lift"
            href={hero.secondaryCta.href}
            {...getLinkProps(hero.secondaryCta)}
          >
            {hero.secondaryCta.label}
          </a>
        </div>
        <div className="hero-stats motion-rise motion-delay-3" aria-label="Career stats">
          {hero.stats.map((stat) => (
            <HeroStat
              key={stat.label}
              label={stat.label}
              suffix={stat.suffix}
              value={stat.value}
            />
          ))}
        </div>
      </section>

      <div id="main-sections">
        <section className="work-section" id="work">
          <div className="work-intro motion-rise">
            <p className="work-kicker">{work.kicker}</p>
            <h2>{work.heading}</h2>
            <p className="work-copy">
              {work.copyLines.map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="case-study-grid">
            {work.items.map((study, index) => (
              <article
                className={`case-card motion-rise ${study.variant}`}
                key={study.name}
                style={{ animationDelay: `${index * 120 + 180}ms` }}
              >
                <div className="case-card-head">
                  <div>
                    <h3>{study.name}</h3>
                    <p>{study.description}</p>
                  </div>
                  <a
                    className="case-link button-lift"
                    href={study.href}
                    aria-label={`Open ${study.name}`}
                    {...getLinkProps({ href: study.href, label: study.name })}
                  >
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <div className="case-preview" aria-hidden="true">
                  <div
                    className={`case-preview-shell${study.previewImage ? " case-preview-shell--asset" : ""
                      }`}
                  >
                    {study.previewImage ? (
                      <Image
                        src={study.previewImage}
                        alt={study.previewAlt ?? `${study.name} preview`}
                        width={738}
                        height={334}
                        className="case-preview-image"
                      />
                    ) : (
                      <>
                        <div className="case-preview-topbar">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="case-preview-body">
                          <div className="case-sidebar" />
                          <div className="case-main">
                            <div className="case-header-row" />
                            <div className="case-content-grid">
                              <div className="case-feed">
                                <div className="case-line case-line--long" />
                                <div className="case-line" />
                                <div className="case-line case-line--mid" />
                                <div className="case-card-block" />
                              </div>
                              <div className="case-side-panels">
                                <div className="case-panel" />
                                <div className="case-panel case-panel--small" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="expertise-section" id="about">
          <div className="expertise-grid">
            <div className="expertise-left motion-rise">
              <h2>{expertise.heading}</h2>
              {expertise.descriptionLines.map((line) => (
                <p className="work-copy" key={line}>{line}</p>
              ))}
            </div>
            <div className="expertise-right">
              <div className="expertise-tags-block motion-rise">
                <p className="work-kicker">{expertise.skillsLabel}</p>
                <div className="expertise-tags">
                  {expertise.skills.map((skill) => (
                    <span className="expertise-tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="expertise-stats motion-rise">
                {expertise.stats.map((stat) => (
                  <div className="expertise-stat" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="org-list-section">
          <div className="org-list-intro motion-rise">
            <p className="work-kicker">{organizations.kicker}</p>
            <h2>{organizations.heading}</h2>
            <p className="work-copy">{organizations.copy}</p>
          </div>

          <div className="org-list-grid">
            {organizations.items.map((organization, index) => (
              <article
                className="org-list-item motion-rise"
                key={`${organization.company}-${organization.detail}`}
                style={{ animationDelay: `${index * 80 + 120}ms` }}
              >
                <Image
                  src={organization.logo}
                  alt={organization.logoAlt ?? organization.detail}
                  width={58}
                  height={58}
                  className="org-list-logo"
                />
                <div className="org-list-copy">
                  <h3>{organization.company}</h3>
                  <p>{organization.detail}</p>
                  <p>{organization.location}</p>
                  <span>{organization.duration}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials-section">
          <div className="testimonials-intro motion-rise">
            <p className="work-kicker">{testimonials.kicker}</p>
            <h2>{testimonials.heading}</h2>
            <p className="work-copy">{testimonials.copy}</p>
          </div>

          <div className="testimonials-showcase">
            {testimonials.items.map((testimonial, index) => (
              <article
                className="testimonial-panel motion-rise"
                key={`${testimonial.name}-${index}`}
                style={{ animationDelay: `${index * 100 + 120}ms` }}
              >
                <div className="testimonial-panel-head">
                  <Image
                    src={testimonial.avatarSrc}
                    alt={testimonial.avatarAlt ?? testimonial.name}
                    width={32}
                    height={32}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-panel-meta">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
                <p className="testimonial-panel-quote">{testimonial.quote}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="blogs-section" id="writing">
          <div className="blogs-head motion-rise">
            <div className="blogs-intro">
              <p className="work-kicker">{blogs.kicker}</p>
              <h2>{blogs.heading}</h2>
              <p className="work-copy">{blogs.copy}</p>
            </div>
            <a
              className="primary-button button-lift blogs-more"
              href={blogs.moreArticlesLink.href}
              {...getLinkProps(blogs.moreArticlesLink)}
            >
              {blogs.moreArticlesLink.label}
            </a>
          </div>

          <div className="blogs-grid">
            {blogs.items.map((blog, index) => (
              <article
                className="blog-card motion-rise"
                key={`${blog.title}-${index}`}
                style={{ animationDelay: `${index * 100 + 120}ms` }}
              >
                <div className="blog-card-tags">
                  {blog.tags.map((tag) => (
                    <span className="blog-card-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{blog.title}</h3>
                <span className="blog-date">{blog.date}</span>
                <p>{blog.excerpt}</p>
                <a
                  aria-label={`Read full article: ${blog.title}`}
                  className="primary-button button-lift blog-read"
                  href={blog.href}
                >
                  Read Full Article
                </a>
              </article>
            ))}
          </div>
        </section>

        <footer className="site-footer">
          <div className="site-footer-inner">
            <div className="footer-top motion-rise">
              <div className="footer-intro">
                <h2>{footer.heading}</h2>
                <p className="work-copy">{footer.supportingCopy}</p>
              </div>
              <a
                className="primary-button button-lift footer-cta"
                href={footer.contactCta.href}
                {...getLinkProps(footer.contactCta)}
              >
                {footer.contactCta.label}
              </a>
            </div>

            <div className="footer-bottom motion-rise">
              <div className="footer-meta">
                <a className="brand footer-brand" href="#home" aria-label="RN home">
                  RN
                </a>
                <p>{footer.metaCopy}</p>
              </div>

              <div className="footer-links">
                <div className="footer-link-group">
                  <span>Navigation</span>
                  {footer.navigation.map((link) => (
                    <a key={link.label} href={link.href} {...getLinkProps(link)}>
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="footer-link-group">
                  <span>Socials</span>
                  {footer.socialLinks.map((link) => (
                    <a key={link.label} href={link.href} {...getLinkProps(link)}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
