import Image from "next/image";

export default function VibeCodingBlog() {
  return (
    <main className="blog-shell">
      <nav className="cs-topbar">
        <a className="cs-back" href="/">← Back</a>
        <span className="cs-nav-title">Blog</span>
      </nav>

      <article>
        <header className="blog-hero">
          <div className="blog-meta-row">
            <span className="blog-tag">Vibe Coding</span>
            <span className="blog-tag">AI Tools</span>
            <span className="blog-tag">Workflow</span>
          </div>
          <h1 className="blog-title">Vibe Coding: An Honest Take From a Designer</h1>
          <p className="blog-subtitle">
            Vibe coding is building products by describing what you want in plain English and letting AI write the code. I've spent the last year doing exactly this — shipping real products, hitting real walls, and learning what it actually means for design.
          </p>
          <div className="blog-byline">
            <Image src="/profile-image.svg" alt="Rohith Reghu" width={36} height={36} className="blog-avatar" />
            <div>
              <span className="blog-author">Rohith Reghu</span>
              <span className="blog-date-read">January 15, 2026 · 8 min read</span>
            </div>
          </div>
        </header>

        <div className="blog-banner">
          <Image src="/blogs/vibe-coding.svg" alt="Vibe coding workflow illustration" width={1080} height={480} className="blog-banner-img" priority />
        </div>

        <div className="blog-body">

          <p className="blog-p">
            The term "vibe coding" was coined by Andrej Karpathy earlier this year and immediately became the most controversial phrase in tech. Half the internet celebrated it as liberation. The other half called it a recipe for unmaintainable garbage. As usual, both sides are partially right.
          </p>
          <p className="blog-p">
            I'm a designer, not a developer. I understand code reasonably well but I don't write it professionally. Vibe coding has fundamentally changed what I can build, how fast I can build it, and what I can offer clients. Here's my honest breakdown — benefits, problems, and everything in between.
          </p>

          <h2 className="blog-h2">What is vibe coding, really?</h2>
          <p className="blog-p">
            Vibe coding is the practice of using AI — Claude, GPT-4, Cursor, v0 — to generate code from natural language descriptions, then iterating on that code by continuing to describe what you want rather than manually editing it. The "vibe" part is that you're working at the level of intent rather than implementation.
          </p>
          <p className="blog-p">
            In practice it looks like this: you open Claude Code (or Cursor, or v0), describe what you want to build, review what comes out, describe what needs to change, and repeat. You're directing rather than implementing. The AI is doing the typing. You're doing the thinking.
          </p>

          <div className="blog-image-block">
            <div className="blog-two-col-visual">
              <div className="blog-visual-card blog-visual-card--before">
                <span className="blog-visual-label">Before Vibe Coding</span>
                <ul>
                  <li>Design in Figma</li>
                  <li>Write spec document</li>
                  <li>Hand off to developer</li>
                  <li>Wait 1–2 weeks</li>
                  <li>Review implementation</li>
                  <li>Request changes</li>
                  <li>Wait again</li>
                </ul>
                <span className="blog-visual-time">Timeline: 3–4 weeks</span>
              </div>
              <div className="blog-visual-card blog-visual-card--after">
                <span className="blog-visual-label">With Vibe Coding</span>
                <ul>
                  <li>Design intent in Figma</li>
                  <li>Describe to Claude Code</li>
                  <li>Review in browser (20 min)</li>
                  <li>Describe changes</li>
                  <li>Ship</li>
                </ul>
                <span className="blog-visual-time">Timeline: 1–3 days</span>
              </div>
            </div>
          </div>

          <h2 className="blog-h2">The benefits (they're real)</h2>

          <h3 className="blog-h3">1. Speed that changes what's possible</h3>
          <p className="blog-p">
            I prototyped three complete product concepts in the same week I used to spend on one. Not low-fidelity mockups — working web applications with real routing, real data, real interactions. The speed isn't just convenient. It changes what you can afford to test before committing.
          </p>

          <h3 className="blog-h3">2. No context switching</h3>
          <p className="blog-p">
            The biggest hidden cost of the traditional design-to-dev handoff is cognitive context switching — you finish designing something, hand it off, and by the time feedback comes back you've mentally moved on. Vibe coding keeps you in the same flow state through design and implementation. You maintain the full picture in your head.
          </p>

          <h3 className="blog-h3">3. Design decisions land exactly</h3>
          <p className="blog-p">
            When I describe my design to Claude Code, there's no interpretation layer. No developer making a judgment call about what I meant by "a bit more breathing room." The output is exactly what I asked for — and if it isn't, I can say so immediately and it corrects in seconds. The fidelity between intention and output is higher than any human handoff I've experienced.
          </p>

          <h3 className="blog-h3">4. Accessible to non-developers</h3>
          <p className="blog-p">
            This is the democratic dimension of vibe coding that I find most exciting. A designer with strong product instincts can now ship production-quality work without a development partner. Entire product concepts that previously required a team of three can now be explored by one person with a laptop and a clear head.
          </p>

          <div className="blog-pullquote">
            <blockquote>
              "The speed isn't just convenient — it changes what you can afford to test before committing."
            </blockquote>
          </div>

          <h2 className="blog-h2">The disadvantages (also real)</h2>

          <h3 className="blog-h3">1. You still need to understand what you're building</h3>
          <p className="blog-p">
            This is the one that catches people out. Vibe coding works beautifully when you understand the domain you're working in — when you can evaluate whether the output is correct, when you can spot the subtle error in the generated logic. When you don't understand what's being built, you can end up with code that passes the vibe check but has fundamental architectural problems you won't discover until much later.
          </p>

          <h3 className="blog-h3">2. Technical debt accumulates invisibly</h3>
          <p className="blog-p">
            AI-generated code tends to be locally sensible and globally inconsistent. Each new section of code makes sense in isolation but patterns diverge over time. A project built entirely through vibe coding over months can become difficult to navigate even for AI tools — the context becomes too fragmented. You need periodic refactoring passes, and those require understanding the code well enough to direct them.
          </p>

          <h3 className="blog-h3">3. Edge cases and accessibility get missed</h3>
          <p className="blog-p">
            AI generates the happy path with impressive reliability. The 40th percentile use case — the user on a slow connection, the screen reader user, the person who tabs through forms rather than clicking — those get missed unless you explicitly ask for them. Every time. Accessibility in vibe-coded products requires active, deliberate prompting, not passive expectation.
          </p>

          <h3 className="blog-h3">4. The prompt quality ceiling</h3>
          <p className="blog-p">
            The output of vibe coding is constrained by your ability to describe what you want. If you're vague, you get generic. If your mental model of the problem is wrong, the AI will efficiently implement the wrong solution. The quality of the result is a direct function of the quality of your thinking — which is, honestly, probably how it should be.
          </p>

          <div className="blog-pullquote">
            <blockquote>
              "The quality of vibe coding output is a direct function of the quality of your thinking."
            </blockquote>
          </div>

          <h2 className="blog-h2">Who should vibe code?</h2>
          <p className="blog-p">
            <strong>Designers who want to own their products end-to-end.</strong> If you have strong product instincts and want to reduce dependency on engineering resources, vibe coding is the highest-leverage skill you can develop right now.
          </p>
          <p className="blog-p">
            <strong>Founders in the idea validation stage.</strong> Before committing engineering resources to a product direction, build a vibe-coded prototype. Real users interacting with something real is better than any user interview.
          </p>
          <p className="blog-p">
            <strong>Not: teams building complex systems at scale.</strong> Vibe coding is for exploration, validation, and smaller products. Enterprise systems with complex state management, security requirements, and multi-team codebases still need software engineers who understand the full stack deeply.
          </p>

          <h2 className="blog-h2">My setup</h2>
          <p className="blog-p">
            For context: I use Claude Code for component-level work and architecture decisions, v0 for rapid layout exploration, and Cursor for file navigation in larger codebases. Figma stays as the visual thinking tool for composition and systems design — it's not going anywhere.
          </p>
          <p className="blog-p">
            The stack: Next.js for everything, Tailwind for styling (because it makes AI-generated CSS much more predictable), and Vercel for instant deployment. A vibe-coded prototype can be live in front of a client within an hour of conception. That's the part that still surprises me every time.
          </p>
          <p className="blog-p">
            Vibe coding isn't a shortcut. It's a different kind of work — one that rewards clear thinking, strong design instincts, and the willingness to be in dialogue with your tools. If that sounds like you, I'd start this afternoon.
          </p>

        </div>
      </article>

      <div className="blog-footer-nav">
        <a className="ghost-button button-lift" href="/blogs/no-one-replaces-designer">← No One Replaces a Designer</a>
        <a className="primary-button button-lift" href="/">Back to Portfolio →</a>
      </div>
    </main>
  );
}
