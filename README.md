# Priyanshu Srivastava Portfolio

A single-page scrollable React + Vite portfolio showcasing projects,
AI/ML work, experience, education, and contact links.

## Scripts

```bash
npm run dev       # start dev server
npm run build     # typecheck (tsc -b) + production build
npm run lint      # eslint
npm run preview   # preview production build
```

## Structure

- `index.html` - HTML shell with theme pre-hydration script and fonts
- `src/index.tsx` - React entry point
- `src/App.tsx` - single-page layout with Home / Skills / Projects / Contact sections and IntersectionObserver scroll-spy navigation
- `src/components/` - Header, Footer, PageIntro, ProjectCard, Timeline
- `src/data/portfolio.ts` - portfolio data: developer info, projects, skills, timelines, links
- `src/hooks/useTheme.ts` - dark/light theme toggle persisted in localStorage
- `src/utils/tagColors.ts` - project tag color mapping for cards
- `src/utils/skillIcons.ts` - tech logo icons and brand colors for the skills grid
- `src/types.ts` - shared TypeScript types
- `src/assets/` - portrait images
- `src/index.css` - global visual system and responsive styles
