export type PageId = 'home' | 'projects' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean;
}

export interface TimelineItem {
  title: string;
  organization: string;
  duration: string;
  details?: string[];
}
