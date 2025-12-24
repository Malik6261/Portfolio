
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
  url?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}
