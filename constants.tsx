import { Division, Partner, ProductItem, ContactInfo } from './types.ts';

export const COMPANY_NAME = "Ali Bin Qashash Al Omari General Contracting Co.";
export const BRAND_NAME = "BGATE";

export interface DivisionDetail {
  label: string;
  items: string[];
}

export interface DivisionExtended extends Division {
  details?: DivisionDetail[];
}

export const DIVISIONS: DivisionExtended[] = [
  {
    id: 'control',
    title: 'Control Division',
    tagline: 'Precision Automation & BMS',
    description: 'We design and assemble DDC panels, Motor and Process Control Panels, and Power Distribution Panels. BGATE specializes in sophisticated Building Automation and Energy Management Systems (BMS & DDC) for mission-critical infrastructure.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop',
    details: [
      {
        label: "Products",
        items: [
          "BMS Control System", "DDC Panels", "PLC Panels", "Lighting controls", 
          "Motor starters", "Soft start controllers", "Variable speed drives and controls",
          "3-Way & 2-Way motorized valves", "Thermostats", "Humidistats", 
          "Custom products", "Pre-Engineered products"
        ]
      },
      {
        label: "Applications",
        items: [
          "HVAC", "Sewage water control", "Food Processing", 
          "Power Generation", "Pumping Stations", "Agriculture"
        ]
      },
      {
        label: "Services",
        items: [
          "Designing", "Programming", "Procurement", "Assembly", 
          "Testing", "Commissioning", "Documentation", "Training & Seminars"
        ]
      }
    ]
  },
  {
    id: 'insulation',
    title: 'Industrial Insulation',
    tagline: 'Thermal & Acoustic Solutions',
    description: 'The Industrial Insulation Division provides comprehensive thermal and cold insulation systems, scaffolding services, and specialized cladding for petrochemical and commercial infrastructure.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1470&auto=format&fit=crop',
    details: [
      {
        label: "Division Provides",
        items: [
          "Pipe work insulation", 
          "Cladding Services", 
          "Complete range of Thermal/Cold insulation", 
          "Protection for Pipe work and Fittings", 
          "Vessels and Boilers", 
          "Duct work and Tanks in High/Low Temperatures", 
          "Heating and Ventilation Insulation",
          "Removable, Reusable Insulation Blankets", 
          "Scaffolding services"
        ]
      },
      {
        label: "Our Customers",
        items: [
          "Petrochemical plants", 
          "Oil Refineries", 
          "Natural Gas Compressor stations", 
          "Electrical Power Plants", 
          "Equipment manufacturers", 
          "Work Boats", 
          "Hospitals", 
          "Universities", 
          "High rise Buildings"
        ]
      }
    ]
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
    description: 'A European leader in Building Automation, HVAC DDC, BMS, and Control Valves.'
  },
  {
    name: 'SIEMENS',
    origin: 'Germany',
    description: 'Global standard for building technology and energy-efficient automation.'
  },
  {
    name: 'TITUS',
    origin: 'USA',
    description: 'World leader in air distribution and environmental terminal units.'
  }
];

export const TRADING_CATALOG: ProductItem[] = [
  {
    category: 'HVAC Systems',
    items: ['Cooling Equipment', 'Consumables', 'Humidifiers', 'Heat Exchangers']
  }
];

export const MAIN_OFFICE: ContactInfo = {
  address: 'King Khalid Street, Dammam',
  pobox: 'P.O. Box No. 35449, Dammam - 31488, KSA',
  city: 'Dammam',
  phone: ['+966 3 833 4699'],
  fax: '+966 3 834 9729',
  emails: ['mail@bgate-sa.com'],
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