import { developer } from '../data/portfolio';

export function ContactPage() {
  return (
    <div className="page page-contact">
      <section className="contact-page page-grid">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h1>Have an idea, role, or collaboration in mind?</h1>
        <p>
          The fastest way to reach me is through LinkedIn or GitHub. I am especially interested in web apps, AI-assisted
          tools, and products where design quality matters.
        </p>
        <div className="action-row">
          <a className="button button-primary" href={developer.links.linkedin} target="_blank" rel="noopener noreferrer">
            Message on LinkedIn
          </a>
          <a className="button button-ghost" href={developer.links.github} target="_blank" rel="noopener noreferrer">
            View GitHub
          </a>
        </div>
      </div>

      <aside className="contact-card">
        <span>Available for</span>
        <h2>Internships, collaborations, and project conversations.</h2>
        <div className="contact-links">
          <a href={developer.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={developer.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={developer.links.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
      </aside>
      </section>
    </div>
  );
}
