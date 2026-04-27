import Image from "next/image";

export default function ClaudeCodeBlog() {
  return (
    <main className="blog-shell">
      <nav className="cs-topbar">
        <a className="cs-back" href="/">← Back</a>
        <span className="cs-nav-title">Blog</span>
      </nav>

      <article>
        <header className="blog-hero">
          <div className="blog-meta-row">
            <span className="blog-tag">AI Tools</span>
            <span className="blog-tag">Design Workflow</span>
          </div>
          <h1 className="blog-title">Exploring Claude Code as a Design Tool</h1>
          <p className="blog-subtitle">
            I've been using Claude Code not just as a developer assistant but as an active part of my design workflow — generating component variants, exploring design systems, and prototyping faster than I ever could in Figma alone. Here's exactly how.
          </p>
          <div className="blog-byline">
            <Image src="/profile-image.svg" alt="Rohith Reghu" width={36} height={36} className="blog-avatar" />
            <div>
              <span className="blog-author">Rohith Reghu</span>
              <span className="blog-date-read">March 12, 2026 · 6 min read</span>
            </div>
          </div>
        </header>

        <div className="blog-banner">
          <Image src="/blogs/claude-code.svg" alt="Claude Code terminal with design system code" width={1080} height={480} className="blog-banner-img" priority />
        </div>

        <div className="blog-body">

          <p className="blog-p">
            When Claude Code launched, I watched the developer community lose their minds over it. Rightfully so — it's a genuinely impressive engineering tool. But I noticed something almost immediately: no one was talking about what it could do for <em>designers</em>.
          </p>
          <p className="blog-p">
            I've been using it for three months now as a core part of my design-to-code workflow. Not to replace Figma, not to become a developer, but to collapse the distance between design intent and production reality. Here's what I've found.
          </p>

          <h2 className="blog-h2">What Claude Code actually is (for non-devs)</h2>
          <p className="blog-p">
            Claude Code is an agentic AI that runs in your terminal and can read, write, and edit files across your entire codebase. Unlike a chatbot, it understands context — it reads your existing CSS, your component structure, your design tokens — and generates code that fits your actual project, not a generic template.
          </p>
          <p className="blog-p">
            For designers, that distinction matters enormously. When I ask it to "create a button component," it doesn't generate Bootstrap. It reads my <code className="blog-code">globals.css</code>, finds my existing tokens, and produces something that looks like it belongs in my codebase.
          </p>

          <div className="blog-pullquote">
            <blockquote>
              "The moment I realised Claude Code understood my design tokens the same way I do, my relationship with code changed permanently."
            </blockquote>
          </div>

          <h2 className="blog-h2">Using it to explore design system components</h2>
          <p className="blog-p">
            My most-used workflow: I describe a component in plain English — its purpose, states, and constraints — and Claude Code generates a working React + Tailwind implementation that respects my existing design system. I can then open it in a browser, test it, tweak it, and push variants back through Claude to explore different approaches.
          </p>
          <p className="blog-p">
            What used to take a full day of back-and-forth with a developer to get a component into a state I could properly review now takes 20 minutes. I generate the first version, immediately see what works and what doesn't, and iterate. The feedback loop is compressed to minutes.
          </p>

          <div className="blog-image-block">
            <div className="blog-inline-visual blog-inline-visual--terminal">
              <div className="bit-topbar"><span /><span /><span /></div>
              <div className="bit-body">
                <p><span className="bit-prompt">$</span> <span className="bit-cmd">claude</span> <span className="bit-str">"generate 3 variants of the case card component — default, featured, and compact"</span></p>
                <p className="bit-output">◆  Reading case-card CSS...</p>
                <p className="bit-output">◆  Analysing existing variants...</p>
                <p className="bit-output bit-success">◆  Writing CaseCard.tsx — 3 variants ✓</p>
                <p className="bit-output bit-success">◆  Writing CaseCard.stories.tsx ✓</p>
              </div>
            </div>
            <p className="blog-caption">A typical Claude Code session for design system component generation.</p>
          </div>

          <h2 className="blog-h2">Generating variant explorations at speed</h2>
          <p className="blog-p">
            One of the most underrated design activities is variant exploration — trying five different layouts for the same component before committing to one. Traditionally this lives entirely in Figma. With Claude Code, I can generate working HTML and CSS variants and compare them in a real browser, at real sizes, with real content. No Lorem Ipsum. No approximated spacing. Actual behaviour.
          </p>
          <p className="blog-p">
            For this portfolio, I used Claude Code to generate twelve different hero section layouts in an afternoon. Twelve. I picked the strongest two, refined them, and had a final direction by end of day. That process used to take a week minimum.
          </p>

          <h2 className="blog-h2">The surprising design workflow</h2>
          <p className="blog-p">
            The workflow I've settled into looks like this: Figma for composition and visual thinking, Claude Code for translating decisions into production-ready code, and browser DevTools for fine-tuning. Figma and Claude Code aren't competing — they handle completely different parts of the problem.
          </p>
          <p className="blog-p">
            I design the structure and visual language in Figma. I describe it to Claude Code. Claude Code translates it. I review in the browser. The gap between "what I designed" and "what gets built" has essentially closed.
          </p>

          <div className="blog-pullquote">
            <blockquote>
              "Figma and Claude Code aren't competing — they handle completely different parts of the problem."
            </blockquote>
          </div>

          <h2 className="blog-h2">Where it falls short</h2>
          <p className="blog-p">
            It's not perfect. Claude Code struggles when design intent is ambiguous — if you don't articulate your constraints clearly, it makes assumptions that can take you further from your vision. It also doesn't have taste. It can generate technically correct code that misses the emotional quality of a design. That gap is yours to fill.
          </p>
          <p className="blog-p">
            Animations and micro-interactions remain fiddly. Accessibility edge cases need explicit prompting or they get skipped. And complex responsive layouts sometimes require multiple back-and-forth sessions to get right.
          </p>

          <h2 className="blog-h2">The verdict</h2>
          <p className="blog-p">
            Claude Code is the first AI tool that has genuinely changed how I work as a designer — not by replacing design thinking, but by removing the translation layer between design and code. If you're a designer who has ever felt frustrated watching developers interpret your Figma files in ways that miss the intention, Claude Code is worth your full attention.
          </p>
          <p className="blog-p">
            The designers who learn to use it well won't just ship faster — they'll have a fundamentally different relationship with the products they design. They'll know, with certainty, that what they imagined is what got built.
          </p>

        </div>
      </article>

      <div className="blog-footer-nav">
        <a className="ghost-button button-lift" href="/">← Back to Portfolio</a>
        <a className="primary-button button-lift" href="/blogs/no-one-replaces-designer">Next: No One is Replacing Designers →</a>
      </div>
    </main>
  );
}
