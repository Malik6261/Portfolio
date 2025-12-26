
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'SA-001',
    title: 'SmartAbituriyent',
    category: 'AI Growth Funnel',
    description: 'A dedicated lead generation system for the Uzbek education market.',
    problem: 'Manual student counseling was too slow to scale and lead quality was inconsistent.',
    solution: 'Built an AI-logic funnel that pre-qualifies students based on academic potential and financial capability before routing to sales.',
    outcome: 'Increased lead-to-enrollment efficiency by identifying high-intent applicants automatically.',
    specs: ['Funnel Architecture', 'AI Lead Scoring', 'Local Market Strategy']
  },
  {
    id: 'UG-002',
    title: 'UGC Forge AI',
    category: 'Creative Production',
    description: 'An automated pipeline for high-performance ad visuals.',
    problem: 'Traditional video production was too slow for high-frequency Meta Ads testing.',
    solution: 'Implemented a Gen-AI workflow to synthesize and iterate on UGC-style creatives based on performance data.',
    outcome: 'Reduced creative production time by 70% while maintaining high CTR benchmarks.',
    specs: ['Generative AI', 'Meta Ads', 'Rapid Iteration']
  },
  {
    id: 'TN-003',
    title: 'True Nation Inc',
    category: 'B2B Growth Ops',
    description: 'Scaling a premier logistics company via digital acquisition.',
    problem: 'High cost-per-acquisition in a competitive US logistics market.',
    solution: 'Architected a Meta Ads system focused on precision targeting and AI-assisted video creatives for driver and client acquisition.',
    outcome: 'Established a scalable acquisition engine with a stable ROAS in a high-stakes B2B environment.',
    specs: ['B2B Media Buying', 'Creative Strategy', 'Performance Data'],
    url: 'https://truenation.net/'
  },
  {
    id: 'AS-004',
    title: 'AI Automation Stack',
    category: 'Marketing Infrastructure',
    description: 'Proprietary data and reporting layer for multi-channel growth.',
    problem: 'Fragmented data across platforms made real-time optimization impossible.',
    solution: 'Built a synchronization stack using AI agents and Meta APIs to funnel growth data into a single source of truth.',
    outcome: 'Automated reporting and data-driven budget allocation across campaigns.',
    specs: ['AI Agents', 'Meta Graph API', 'ETL Pipelines']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Media Buying', label: 'Meta Ads Expert', category: 'Performance' },
  { name: 'Funnel Strategy', label: 'Architectural Logic', category: 'Growth' },
  { name: 'AI Ad Creatives', label: 'Gen-AI Production', category: 'Creative' },
  { name: 'AI Automation', label: 'Agentic Workflows', category: 'Infrastructure' },
  { name: 'Data Reporting', label: 'Meta Graph API', category: 'Analysis' },
  { name: 'CRO', label: 'Conversion Science', category: 'Optimization' }
];
