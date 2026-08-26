import type { IconType } from 'react-icons';
import { FaBrain } from 'react-icons/fa';
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiHuggingface,
  SiJavascript,
  SiJsonwebtokens,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRender,
  SiScikitlearn,
  SiStreamlit,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

interface SkillVisual {
  Icon: IconType;
  color: string;
}

const fallbackVisual: SkillVisual = { Icon: FaBrain, color: 'var(--accent)' };

const skillVisuals: Record<string, SkillVisual> = {
  React: { Icon: SiReact, color: '#61dafb' },
  'Next.js': { Icon: SiNextdotjs, color: 'var(--logo-ink)' },
  'Node.js': { Icon: SiNodedotjs, color: '#5fa04e' },
  Python: { Icon: SiPython, color: '#3776ab' },
  TypeScript: { Icon: SiTypescript, color: '#3178c6' },
  JavaScript: { Icon: SiJavascript, color: '#f7df1e' },
  Supabase: { Icon: SiSupabase, color: '#3fcf8e' },
  MongoDB: { Icon: SiMongodb, color: '#47a248' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4169e1' },
  Docker: { Icon: SiDocker, color: '#2496ed' },
  Streamlit: { Icon: SiStreamlit, color: '#ff4b4b' },
  'Machine Learning': fallbackVisual,
  'C++': { Icon: SiCplusplus, color: '#00599c' },
  HTML: { Icon: SiHtml5, color: '#e34f26' },
  CSS: { Icon: SiCss, color: 'var(--logo-css)' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06b6d4' },
  'Express.js': { Icon: SiExpress, color: 'var(--logo-ink)' },
  JWT: { Icon: SiJsonwebtokens, color: '#d63aff' },
  LangChain: { Icon: SiLangchain, color: 'var(--logo-langchain)' },
  'Hugging Face': { Icon: SiHuggingface, color: '#ffd21e' },
  Pandas: { Icon: SiPandas, color: 'var(--logo-pandas)' },
  NumPy: { Icon: SiNumpy, color: '#4dabcf' },
  'Scikit-Learn': { Icon: SiScikitlearn, color: '#f7931e' },
  Git: { Icon: SiGit, color: '#f05032' },
  GitHub: { Icon: SiGithub, color: 'var(--logo-ink)' },
  'GitHub Actions': { Icon: SiGithubactions, color: '#2088ff' },
  Vercel: { Icon: SiVercel, color: 'var(--logo-ink)' },
  Render: { Icon: SiRender, color: '#46e3b7' },
  Postman: { Icon: SiPostman, color: '#ff6c37' },
};

export function getSkillIcon(skill: string): SkillVisual {
  return skillVisuals[skill] ?? fallbackVisual;
}
