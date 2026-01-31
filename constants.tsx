
import { Division, Partner, ProductItem, ContactInfo } from './types';

export const COMPANY_NAME = "Ali Bin Qashash Al Omari General Contracting Co.";
export const BRAND_NAME = "BGATE";

export const DIVISIONS: Division[] = [
  {
    id: 'control',
    title: 'Control Division',
    tagline: 'Engineering & Automation Excellence',
    description: 'We specialize in the design, assembly, and commissioning of sophisticated Building Automation and Energy Management Systems (BMS & DDC).',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'safety',
    title: 'Safety Equipment Division',
    tagline: 'Premier HSE Solutions',
    description: 'A leading supplier of authentic, environmentally friendly, and high-quality Personal Safety Products (PPE) across the Kingdom.',
    image: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'trading',
    title: 'Trading & Industrial Division',
    tagline: 'Comprehensive Industrial Supply',
    description: 'Our extensive catalog provides a one-stop solution for industrial equipment, high-grade alloys, and HVAC consumables.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  }
];

export const PARTNERS: Partner[] = [
  {
    name: 'SAUTER',
    origin: 'Switzerland',
    description: 'European leader in Building Automation, HVAC DDC, and BMS with over a century of heritage.'
  },
  {
    name: 'SIEMENS',
    origin: 'Germany',
    description: 'Global standard-bearer for building technology, energy efficiency, and total building comfort.'
  },
  {
    name: 'UNITED ENERTECH',
    origin: 'USA',
    description: 'Specialists in heavy-duty blast dampers and fire/smoke protection systems.'
  },
  {
    name: 'TITUS',
    origin: 'USA',
    description: 'Leading manufacturer of VAV terminal units and advanced air distribution products.'
  }
];

export const TRADING_CATALOG: ProductItem[] = [
  {
    category: 'HVAC & Refrigeration',
    items: ['Industrial Cooling Equipment', 'Consumables', 'Electric Humidifiers', 'Steam Heat Exchangers', 'Gas Fired Humidifiers']
  },
  {
    category: 'Pipes & Flow Control',
    items: ['Gate, Globe, & Plug Valves', 'Double Regulator Valves', 'Pressure Relief Valves', 'SS Pipes', 'Expansion Joints']
  },
  {
    category: 'Advanced Insulation',
    items: ['Saudi Rockwool (Board, Blanket, Wired)', 'Pipe Sections', 'Duct Wrap', 'Polyurethane/Polyisocyanurate Board', 'Reusable Insulation Blankets']
  },
  {
    category: 'Industrial Alloys',
    items: ['Copper & Steel Alloys', 'Brass & Aluminum', 'Nickel, Monel, & Inconel', 'Carbon Steel']
  },
  {
    category: 'Vibration & Blast Control',
    items: ['Floor Mounted Isolators', 'Rubber Modular Pads', 'Flexible Connectors', 'Heavy Duty Blast Dampers', 'Fire/Smoke Dampers']
  }
];

export const MAIN_OFFICE: ContactInfo = {
  address: 'King Khalid Street, Dammam',
  pobox: 'P.O. Box No. 35449, Dammam - 31488, KSA',
  city: 'Dammam',
  phone: ['+966 3 833 4699', '+966 3 832 0193'],
  fax: '+966 3 834 9729',
  emails: ['mail@bgate-sa.com', 'sales@bgate-sa.com'],
  website: ['www.bgate-sa.com', 'www.bgatefire.com']
};

export const JUBAIL_BRANCH: ContactInfo = {
  address: 'Madina Munawarah St. Jubail 35526-6751',
  pobox: '',
  city: 'Jubail',
  phone: ['+966 013 363 5156'],
  fax: '+966 013 363 5157',
  emails: ['sales@bgatefire.com'],
  website: ['www.bgatefire.com']
};
