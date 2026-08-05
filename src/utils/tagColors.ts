export const tagColorMap: Record<string, string> = {
  'React': '#06b6d4',
  'Next.js': '#06b6d4',
  'Python': '#3b82f6',
  'AI': '#a855f7',
  'Machine Learning': '#a855f7',
  'Deep Learning': '#a855f7',
  'Generative AI': '#a855f7',
  'Node.js': '#22c55e',
  'Tailwind CSS': '#14b8a6',
  'Supabase': '#16a34a',
  'MongoDB': '#16a34a',
  'PostgreSQL': '#16a34a',
  'LangChain': '#a855f7',
  'Streamlit': '#ef4444',
  'Docker': '#3b82f6',
  'C++': '#6b7280',
  'OOP': '#6b7280',
  'File Handling': '#6b7280',
  'Flask': '#f97316',
  'UI Design': '#f43f5e',
  'UX': '#f43f5e',
  'Image Processing': '#6366f1',
  'Data Science': '#f59e0b',
  'Matplotlib': '#f97316',
  'API': '#06b6d4',
};

export function getTagColor(tag: string): string {
  return tagColorMap[tag] || '#6b7280';
}

export function getProjectAccentColor(tags: string[]): string {
  return tags.length > 0 ? getTagColor(tags[0]) : '#6b7280';
}