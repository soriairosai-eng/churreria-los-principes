import { MenuItem, Review, BusinessInfo } from './types';



export const BUSINESS_INFO: BusinessInfo = {
  company_name: "Churrería Los Príncipes",
  description: "La mejor churrería de Córdoba en el barrio de Fátima. Disfruta de nuestros churros y jeringos artesanos, chocolate caliente y un café excelente. Un ambiente familiar y acogedor para tus desayunos y meriendas.",
  services: ["Churros Artesanos", "Chocolate a la Taza", "Café Especial", "Tostadas Variadas", "Jeringos Cordobeses", "Gofres Caseros", "Tortitas"],
  phone: "+34 628 90 00 62",
  email: "hola@churrerialosprincipes.com",
  address: "Avenida Virgen de Fátima, 47",
  city: "Córdoba, España",
  instagram: "https://www.instagram.com/churrerialosprincipes/",
  facebook: "https://www.facebook.com/Churrería-Los-Príncipes-100054366606555/",
  hours: "Lu-Vi: 7:00-13:00, 17:00-20:00 | Sá: 7:00-13:00 | Do: 6:00-13:00"
};

export const MENU_ITEMS: MenuItem[] = [
  // --- CHURROS Y JERINGOS ---
  {
    id: 'c1',
    name: 'Churros',
    description: 'Tradicionales, crujientes y dorados.',
    price: '0,80€ (Media) | 1,20€ (Entera)',
    category: 'churros',
    image: '/images/churros-lazo.jpg'
  },
  {
    id: 'c2',
    name: 'Jeringos Cordobeses',
    description: 'Masa madre frita en espiral, típicos de Córdoba.',
    price: '0,80€ (Media) | 1,20€ (Entera)',
    category: 'churros',
    image: '/images/jeringos.jpg'
  },

  // --- CHOCOLATE PONE ---
  {
    id: 'ch1',
    name: 'Chocolate a la Taza',
    description: 'Espeso, artesano y perfecto para mojar.',
    price: '1,30€',
    category: 'chocolate',
    image: '/images/chocolate.jpg'
  },

  // --- TOSTADAS ---
  {
    id: 't1',
    name: 'Tostada Aceite / Mantequilla',
    description: 'Pan artesano con aceite de oliva virgen extra o mantequilla.',
    price: '0,60€ (Media) | 1,20€ (Entera)',
    category: 'tostadas',
    image: '/images/tostada.jpg'
  },
  {
    id: 't2',
    name: 'Tostada Paté / Sobrasada',
    description: 'Variedad de patés o sobrasada ibérica.',
    price: '0,70€ (Media) | 1,40€ (Entera)',
    category: 'tostadas',
    image: '/images/tostada.jpg'
  },
  {
    id: 't3',
    name: 'Tostada Jamón York',
    description: 'Jamón cocido de primera calidad.',
    price: '1,10€ (Media) | 1,90€ (Entera)',
    category: 'tostadas',
    image: '/images/tostada.jpg'
  },
  {
    id: 't4',
    name: 'Tostada York y Queso',
    description: 'La clásica mixta, fundida y deliciosa.',
    price: '1,40€ (Media) | 2,40€ (Entera)',
    category: 'tostadas',
    image: '/images/tostada.jpg'
  },
  {
    id: 't5',
    name: 'Tostada Jamón Serrano',
    description: 'Jamón serrano curado en bodega.',
    price: '1,40€ (Media) | 2,40€ (Entera)',
    category: 'tostadas',
    image: '/images/tostada.jpg'
  },

  // --- GOFRES Y TORTITAS ---
  {
    id: 'g1',
    name: 'Gofres Caseros',
    description: 'Incluye 2 ingredientes: Chocolate, Caramelo, Fresa, Nata...',
    price: '2,20€',
    category: 'gofres',
    image: '/images/gofre.jpg'
  },
  {
    id: 'g2',
    name: 'Tortitas (Pancakes)',
    description: 'Incluye 2 ingredientes: Chocolate, Dulce de leche, Vainilla...',
    price: '1,00€',
    category: 'gofres',
    image: '/images/pancakes.jpg'
  },

  // --- BEBIDAS ---
  {
    id: 'b1',
    name: 'Café',
    description: 'Espresso, cortado, con leche o manchado.',
    price: '1,10€',
    category: 'bebidas',
    image: '/images/cappuccino.jpg'
  },
  {
    id: 'b2',
    name: 'Café Bombón',
    description: 'Café con leche condensada.',
    price: '1,50€',
    category: 'bebidas',
    image: '/images/cappuccino.jpg'
  },
  {
    id: 'b3',
    name: 'Cola Cao',
    description: 'El de toda la vida, calentito.',
    price: '1,10€',
    category: 'bebidas',
    image: '/images/chocolate.jpg'
  },
  {
    id: 'b4',
    name: 'Zumo Natural',
    description: 'Naranja recién exprimida.',
    price: '1,80€',
    category: 'bebidas',
    image: '/images/combo.jpg' // Using combo image as placeholder for juice/breakfast vibe
  },
  {
    id: 'b5',
    name: 'Infusiones',
    description: 'Té, manzanilla, poleo...',
    price: '1,10€',
    category: 'bebidas',
    image: '/images/cappuccino.jpg'
  },
  {
    id: 'b6',
    name: 'Refrescos / Batidos',
    description: 'Coca-Cola, Fanta, Batidos de sabores.',
    price: '1,50€',
    category: 'bebidas',
    image: '/images/combo.jpg'
  }
];

export const REVIEWS: Review[] = [
  {
    author: "Maria Garcia",
    text: "Los mejores churros de Córdoba sin duda. El chocolate es espeso y delicioso, y el trato del personal es inmejorable.",
    rating: 5,
    date: "2024-01-15"
  },
  {
    author: "Juan Pérez",
    text: "Sitio muy recomendable para desayunar. Los jeringos son espectaculares y muy buen precio.",
    rating: 5,
    date: "2024-02-01"
  },
  {
    author: "Elena Rodriguez",
    text: "Ambiente familiar y acogedor. Siempre que voy me siento como en casa. ¡Volveré!",
    rating: 4,
    date: "2023-12-20"
  }
];
