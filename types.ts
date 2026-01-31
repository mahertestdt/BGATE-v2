
export interface NavItem {
  label: string;
  href: string;
}

export interface Division {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
}

export interface ProductItem {
  category: string;
  items: string[];
}

export interface Partner {
  name: string;
  origin: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  pobox: string;
  city: string;
  phone: string[];
  fax: string;
  emails: string[];
  website: string[];
}
