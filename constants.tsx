import { Division, Partner, ProductItem, ContactInfo } from './types.ts';

export const COMPANY_NAME = "Ali Bin Qashash Al Omari General Contracting Co.";
export const BRAND_NAME = "BGATE";

export interface ControlDetails {
  products: string[];
  applications: string[];
  services: string[];
}

export const DIVISIONS: (Division & { controlDetails?: ControlDetails })[] = [
  {
    id: 'control',
    title: 'Control Division',
    tagline: 'Precision Automation & BMS',
    description: 'We design and assemble DDC panels, Motor and Process Control Panels, and Power Distribution Panels. BGATE specializes in sophisticated Building Automation and Energy Management Systems (BMS & DDC) for mission-critical infrastructure.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop',
    controlDetails: {
      products: [
        "BMS Control System", "DDC Panels", "PLC Panels", "Lighting controls", 
        "Motor starters", "Soft start controllers", "Variable speed drives and controls",
        "3-Way & 2-Way motorized valves", "Thermostats", "Humidistats", 
        "Custom products", "Pre-Engineered products"
      ],
      applications: [
        "HVAC", "Sewage water control", "Food Processing", 
        "Power Generation", "Pumping Stations", "Agriculture"
      ],
      services: [
        "Designing", "Programming", "Procurement", "Assembly", 
        "Testing", "Commissioning", "Documentation", "Training & Seminars"
      ]
    }
  },
  {
    id: 'insulation',
    title: 'Industrial Insulation',
    tagline: 'Thermal & Acoustic Solutions',
    description: 'Premier provider of industrial-grade insulation. High-performance Saudi Rockwool and polyurethane systems for complex thermal barriers across the Kingdom.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'trading',
    title: 'Trading Division',
    tagline: 'Global Industrial Supply',
    description: 'Strategic supply chain management for specialized alloys, industrial valves, and heavy vibration control systems from world-class manufacturers.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'safety',
    title: 'Safety Equipment',
    tagline: 'HSE & Workforce Protection',
    description: 'Leading provider of certified Personal Protection Equipment (PPE). Securing industrial workforces with premium, high-quality safety gear.',
    image: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=1470&auto=format&fit=crop'
  }
];

export const PARTNERS: Partner[] = [
  {
    name: 'SAUTER',
    origin: 'Switzerland',
    description: 'A European leader in Building Automation, HVAC DDC, BMS, and Control Valves. With over 100 years of experience, SAUTER is a premier provider of energy-efficient building management solutions.'
  },
  {
    name: 'SIEMENS',
    origin: 'Germany',
    description: 'Offers a comprehensive range of building automation systems and HVAC products. These systems ensure minimized operating costs and a high level of security against failure.'
  },
  {
    name: 'TITUS',
    origin: 'USA',
    description: 'World leader in air distribution and VAV terminal units, optimizing indoor environmental quality.'
  },
  {
    name: 'UNITED ENERTECH',
    origin: 'USA',
    description: 'Specialists in blast dampers and smoke protection systems for industrial facilities.'
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