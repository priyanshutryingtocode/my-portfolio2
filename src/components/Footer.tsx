import { developer } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="site-footer">
      <p>Built by {developer.name}</p>
      <div className="footer-links">
        <a href={developer.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={developer.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={developer.links.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
      </div>
    </footer>
  );
}
