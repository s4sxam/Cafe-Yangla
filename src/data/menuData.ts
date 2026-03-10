export type MenuItemType = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  isVeg: boolean;
};

export const menuData: MenuItemType[] =[
  { id: 'm1', name: 'Signature Ramen', price: 350, description: 'Authentic ramen bowl with rich broth and fresh toppings.', category: 'Mains', isVeg: false },
  { id: 'm2', name: 'Garlic Butter Prawns', price: 450, description: 'Fresh prawns tossed in garlic butter and herbs.', category: 'Mains', isVeg: false },
  { id: 'm3', name: 'Yangla Special Pizza', price: 400, description: 'Voted best in town! Wood-fired with premium toppings.', category: 'Mains', isVeg: true },
  { id: 'm4', name: 'Creamy Alfredo Pasta', price: 320, description: 'Rich and creamy pasta served with garlic bread.', category: 'Mains', isVeg: true },
  
  { id: 'b1', name: 'Green Iced Tea', price: 180, description: 'Refreshing iced green tea with a hint of mint.', category: 'Beverages', isVeg: true },
  { id: 'b2', name: 'Classic Cold Coffee', price: 220, description: 'Rich espresso blended with milk and ice cream.', category: 'Beverages', isVeg: true },
  
  { id: 'e1', name: 'Shisha / Hookah', price: 600, description: 'Premium flavors available. Ask our staff for the menu.', category: 'Extras', isVeg: true },
];

export const categories = ['Mains', 'Beverages', 'Extras'];