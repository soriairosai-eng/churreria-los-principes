
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
  {
    id: '1',
    name: 'Churros de Lazo',
    description: 'Nuestra receta tradicional, crujientes por fuera y tiernos por dentro. El clásico madrileño elevado.',
    price: '1.80€ / ración',
    category: 'churros',
    image: '/images/churros-lazo.jpg'
  },
  {
    id: '2',
    name: 'Jeringos Cordobeses',
    description: 'La joya de la corona. Masa aireada y frita en espiral siguiendo la técnica centenaria de Córdoba.',
    price: '2.50€ / ración',
    category: 'churros',
    image: '/images/jeringos.jpg'
  },
  {
    id: '3',
    name: 'Chocolate de Origen',
    description: 'Selección de cacao al 70% con notas de vainilla y un espesor legendario.',
    price: '3.00€',
    category: 'chocolate',
    image: '/images/chocolate.jpg'
  },
  {
    id: '4',
    name: 'Tostada con Tomate y AOVE',
    description: 'Pan de pueblo tostado, tomate natural triturado y Aceite de Oliva Virgen Extra de la provincia.',
    price: '2.20€',
    category: 'especiales',
    image: '/images/tostada.jpg'
  },
  {
    id: '5',
    name: 'Café de Especialidad',
    description: 'Blend exclusivo tostado artesanalmente en Andalucía con notas de caramelo y frutos secos.',
    price: '1.60€',
    category: 'bebidas',
    image: '/images/cappuccino.jpg'
  },
  {
    id: '6',
    name: 'Tortitas Los Príncipes',
    description: 'Tres tortitas esponjosas bañadas en sirope de arce o chocolate belga fundido.',
    price: '5.20€',
    category: 'especiales',
    image: '/images/pancakes.jpg'
  },
  {
    id: '7',
    name: 'Gofre de Lieja Artesano',
    description: 'Con azúcar perlado caramelizado en el interior, crujiente y dulce.',
    price: '4.80€',
    category: 'especiales',
    image: '/images/gofre.jpg'
  },
  {
    id: '8',
    name: 'Combo El Príncipe',
    description: 'Ración de jeringos, chocolate espeso y café de especialidad. El desayuno definitivo.',
    price: '7.50€',
    category: 'especiales',
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
