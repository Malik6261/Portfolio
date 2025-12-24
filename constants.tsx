
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'SA-001',
    title: 'SmartAbituriyent',
    category: 'AI Growth Funnel',
    description: 'Lead generation and guidance platform for Uzbek students. Optimized via strategic funnels to analyze academic potential and maximize conversion.',
    specs: ['Funnel Strategy', 'Lead Gen', 'AI Logic', 'Growth Ops']
  },
  {
    id: 'UG-002',
    title: 'UGC Forge AI',
    category: 'Ad Creative System',
    description: 'High-performance ad creative engine. Automating the production of high-conversion video assets for media buying campaigns.',
    specs: ['Media Buying', 'UGC Ads', 'Gen-AI Visuals', 'Creative Strategy']
  },
  {
    id: 'TN-003',
    title: 'True Nation Inc',
    category: 'Logistic Growth Ops',
    description: 'Scaled a premier logistic company through precision Meta Ads and AI-synthesized video creatives. Focused on B2B customer acquisition and market dominance.',
    specs: ['Meta Ads', 'AI Creatives', 'Logistic Scaling', 'B2B Growth'],
    url: 'https://truenation.net/'
  },
  {
    id: 'AS-004',
    title: 'AI Automation Stack',
    category: 'Marketing Efficiency',
    description: 'Bespoke reporting and ad automation stack using n8n and Meta APIs to synchronize multi-channel growth data.',
    specs: ['n8n', 'Meta Graph API', 'Reporting Automation', 'ETL']
  },
  {
    id: 'SE-005',
    title: 'Shopify Growth Labs',
    category: 'CRO & Media Buying',
    description: 'Advanced media buying and conversion optimization for scaling Shopify stores. Focused on LTV and acquisition cost reduction.',
    specs: ['Media Buying', 'A/B Testing', 'CRO', 'Funnel Architecture']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Media Buying', level: 98, category: 'Performance' },
  { name: 'Funnel Strategy', level: 95, category: 'Growth' },
  { name: 'AI Ad Creatives', level: 96, category: 'Production' },
  { name: 'Meta Ads Expert', level: 97, category: 'Platforms' },
  { name: 'Growth Experiments', level: 94, category: 'Strategy' },
  { name: 'n8n Automation', level: 90, category: 'Infrastructure' }
];
