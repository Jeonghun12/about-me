export interface Profile {
  wordmark: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  strengths: readonly string[];
  email?: string;
  github?: string;
}

export interface Project {
  slug: string;
  title: string;
  startDate: string;
  period: string;
  summary: string;
  status: 'draft' | 'published';
  href?: string;
}
