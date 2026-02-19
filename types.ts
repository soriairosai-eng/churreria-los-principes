
export interface Review {
  author: string;
  text: string;
  rating: number;
  date: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'churros' | 'chocolate' | 'especiales' | 'bebidas' | 'tostadas' | 'gofres';
  image: string;
}

export interface BusinessInfo {
  company_name: string;
  description: string;
  services: string[];
  phone: string;
  email: string;
  address: string;
  city: string;
  instagram: string;
  facebook: string;
  hours?: string;
}
