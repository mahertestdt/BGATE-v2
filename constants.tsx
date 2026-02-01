import { Division, Partner, ProductItem, ContactInfo } from './types.ts';

export const COMPANY_NAME = "Ali Bin Qashash Al Omari General Contracting Co.";
export const BRAND_NAME = "BGATE";

export const DIVISIONS: Division[] = [
  {
    id: 'control',
    title: 'Control Division',
    tagline: 'Precision Automation & BMS',
    description: 'Engineering sophisticated Building Automation and Energy Management Systems (BMS & DDC). We design and assemble high-performance control panels for mission-critical infrastructure.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'insulation',
    title: 'Industrial Insulation',
    tagline: 'Thermal & Acoustic Solutions',
    description: 'Premier supplier of high-performance Saudi Rockwool and polyurethane systems. We provide critical thermal barriers for extreme industrial environments across the Kingdom.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'trading',
    title: 'Trading Division',
    tagline: 'Global Industrial Supply',
    description: 'Strategic supply chain management for specialized alloys, HVAC consumables, and vibration control systems from world-class manufacturers.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'safety',
    title: 'Safety Equipment',
    tagline: 'HSE & Workforce Protection',
    description: 'Leading provider of certified Personal Protection Equipment (PPE). We secure industrial workforces with environmentally friendly, high-quality safety ecosystems.',
    image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=1200'
  }
];

export const PARTNERS: Partner[] = [
  {
    name: 'SAUTER',
    origin: 'Switzerland',
    description: 'European leader in Building Automation and HVAC DDC systems.'
  },
  {
    name: 'SIEMENS',
    origin: 'Germany',
    description: 'Global standard for building technology and energy efficiency.'
  },
  {
    name: 'TITUS',
    origin: 'USA',
    description: 'World leader in air distribution and VAV terminal units.'
  },
  {
    name: 'UNITED ENERTECH',
    origin: 'USA',
    description: 'Specialists in blast dampers and smoke protection systems.'
  }
];

export const TRADING_CATALOG: ProductItem[] = [
  {
    category: 'HVAC Systems',
    items: ['Cooling Equipment', 'Consumables', 'Humidifiers', 'Heat Exchangers']
  },
  {
    category: 'Flow Control',
    items: ['Gate & Globe Valves', 'Pressure Relief Valves', 'SS Pipes', 'Expansion Joints']
  },
  {
    category: 'Insulation',
    items: ['Saudi Rockwool Board', 'Duct Wrap', 'Polyurethane Board', 'Insulation Blankets']
  }
];

export const MAIN_OFFICE: ContactInfo = {
  address: 'King Khalid Street, Dammam',
  pobox: 'P.O. Box No. 35449, Dammam - 31488, KSA',
  city: 'Dammam',
  phone: ['+966 3 833 4699', '+966 3 832 0193'],
  fax: '+966 3 834 9729',
  emails: ['mail@bgate-sa.com', 'sales@bgate-sa.com'],
  website: ['www.bgate-sa.com']
};

export const JUBAIL_BRANCH: ContactInfo = {
  address: 'Madina Munawarah St. Jubail 35526',
  pobox: '',
  city: 'Jubail',
  phone: ['+966 013 363 5156'],
  fax: '+966 013 363 5157',
  emails: ['sales@bgatefire.com'],
  website: ['www.bgatefire.com']
};