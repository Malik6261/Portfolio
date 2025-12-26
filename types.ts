
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem?: string;
  solution?: string;
  outcome?: string;
  specs: string[];
  url?: string;
}

export interface Skill {
  name: string;
  label: string;
  category: string;
}
