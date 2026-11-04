export const tagColorMap: Record<string, string> = {
  'React': '#0e7490',
  'Next.js': '#0e7490',
  'Python': '#2f5aa8',
  'AI': '#6d4aa0',
  'Machine Learning': '#6d4aa0',
  'Deep Learning': '#6d4aa0',
  'Generative AI': '#6d4aa0',
  'Node.js': '#2f7a4f',
  'Tailwind CSS': '#0f766e',
  'Supabase': '#2f7a4f',
  'MongoDB': '#2f7a4f',
  'PostgreSQL': '#2f7a4f',
  'LangChain': '#6d4aa0',
  'Streamlit': '#b23a2e',
  'Docker': '#2f5aa8',
  'C++': '#57534e',
  'OOP': '#57534e',
  'File Handling': '#57534e',
  'Flask': '#b4552a',
  'UI Design': '#a83858',
  'UX': '#a83858',
  'Image Processing': '#4a4f9e',
  'Data Science': '#a16207',
  'Matplotlib': '#a85b1f',
  'API': '#0e7490',
};

export function getTagColor(tag: string): string {
  return tagColorMap[tag] || '#57534e';
}

export function getProjectAccentColor(tags: string[]): string {
  return tags.length > 0 ? getTagColor(tags[0]) : '#57534e';
}
