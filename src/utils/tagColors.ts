export const tagColorMap: Record<string, string> = {
  'React': '#c8a876',
  'Next.js': '#b8860b',
  'Python': '#8a6a34',
  'AI': '#c0392b',
  'Machine Learning': '#b23a2e',
  'Deep Learning': '#a83858',
  'Generative AI': '#c0392b',
  'Node.js': '#2f7a4f',
  'Tailwind CSS': '#0f766e',
  'Supabase': '#2f7a4f',
  'MongoDB': '#2f7a4f',
  'PostgreSQL': '#41698f',
  'LangChain': '#8a2f2a',
  'Streamlit': '#b23a2e',
  'Docker': '#41698f',
  'C++': '#57534e',
  'OOP': '#6f5a3a',
  'File Handling': '#7a6a55',
  'Flask': '#b4552a',
  'UI Design': '#b8860b',
  'UX': '#c8a876',
  'Image Processing': '#8a2f2a',
  'Data Science': '#a16207',
  'Matplotlib': '#a85b1f',
  'API': '#0e7490',
};

export function getTagColor(tag: string): string {
  return tagColorMap[tag] || '#7a6a55';
}

export function getProjectAccentColor(tags: string[]): string {
  return tags.length > 0 ? getTagColor(tags[0]) : '#7a6a55';
}
