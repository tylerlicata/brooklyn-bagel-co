// src/data/menu.js
// Single source of truth for all menu content.
// To connect to Firestore later, replace with real-time queries.

export const menuCategories = [
  {
    id: 'bagels',
    label: 'Bagels',
    description: 'Hand-rolled daily, baked in our brick oven using imported Italian flour.',
    items: [
      { id: 'b1', name: 'Classic Plain',    price: 2.50, description: 'Our foundation. Simple, perfect.' },
      { id: 'b2', name: 'Everything Bagel', price: 2.75, description: 'Sesame, poppy, onion, garlic, sea salt.' },
      { id: 'b3', name: 'Cinnamon Raisin',  price: 2.75, description: 'Warm spice, plump California raisins.' },
      { id: 'b4', name: 'Asiago Cheese',    price: 3.25, description: 'Baked with aged Asiago, golden-crusted.' },
    ],
  },
  {
    id: 'sandwiches',
    label: 'Sandwiches',
    description: 'Served on bagel, hero roll, or brick oven bread. All meats are Boar\'s Head.',
    items: [
      { id: 's1', name: 'The Brooklyn Classic',  price: 11.95, description: 'Ham, salami, provolone, lettuce, tomato, oil & vinegar.' },
      { id: 's2', name: 'Romanian Gold',         price: 13.95, description: 'Romanian prosciutto, fresh burrata, EVOO, cracked pepper.', tag: 'Fan Favorite' },
      { id: 's3', name: '18th Ave Roast Beef',   price: 13.50, description: 'Boar\'s Head roast beef, sharp provolone, garlic oil, optional gravy dip.' },
      { id: 's4', name: 'Chicken Parm Supreme',  price: 12.95, description: 'Breaded chicken cutlet, house marinara, melted mozzarella.' },
      { id: 's5', name: 'BBQ Brooklyn',          price: 12.50, description: 'Grilled chicken, BBQ sauce, provolone, garlic oil.' },
      { id: 's6', name: 'Pork Butt Special',     price: 13.95, description: 'Slow-roasted pork butt, sharp provolone, garlic & oil.' },
      { id: 's7', name: 'Italian Stallion',      price: 11.95, description: 'Ham, salami, provolone, pickled vegetables, oil & vinegar.' },
      { id: 's8', name: 'Burrata & Oil',         price: 10.95, description: 'Fresh burrata, extra virgin olive oil, sea salt, basil.' },
      { id: 's9', name: 'Bagel Melt',            price:  9.95, description: 'Mozzarella base, marinara on top, fresh basil — Sicilian style.' },
    ],
  },
  {
    id: 'buildyourown',
    label: 'Build Your Own',
    description: 'Start with a base and customize to your taste.',
    items: [
      { id: 'y1', name: 'Base Cold Cut',           price:  9.95, description: 'Choose: ham, turkey, salami, or roast beef. With provolone or mozzarella.' },
      { id: 'y2', name: 'Chicken Option',          price: 10.95, description: 'Classic cutlet, BBQ, grilled, or chicken parm.' },
      { id: 'y3', name: 'Romanian Prosciutto +',   price:  2.00, description: 'Premium upgrade to any sandwich.', tag: 'Add-on' },
      { id: 'y4', name: 'Add Egg',                 price:  1.50, description: 'Fried, scrambled, or over easy.', tag: 'Add-on' },
      { id: 'y5', name: 'Extra Meat',              price:  2.50, description: 'Double up on any cold cut.', tag: 'Add-on' },
      { id: 'y6', name: 'Burrata Upgrade',         price:  2.00, description: 'Swap standard cheese for fresh burrata.', tag: 'Add-on' },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    description: 'Brooklyn-inspired pies. By the slice or whole — made to order.',
    items: [
      { id: 'p1', name: 'NY Classic Cheese',    price: 3.50,  priceWhole: 18.00, description: 'Mozzarella, house tomato sauce. The standard.' },
      { id: 'p2', name: 'Sicilian Square',      price: 4.00,  priceWhole: 24.00, description: 'Thick crust, mozzarella base, sauce on top. L&B style.' },
      { id: 'p3', name: 'Grandma Pie',          price: null,  priceWhole: 22.00, description: 'Thin square crust, garlic, tomato sauce, mozzarella, basil.' },
      { id: 'p4', name: 'Chicken Parm Pizza',   price: null,  priceWhole: 24.00, description: 'Breaded chicken, marinara, mozzarella.' },
      { id: 'p5', name: 'BBQ Chicken Pizza',    price: null,  priceWhole: 24.00, description: 'Grilled chicken, BBQ sauce, mozzarella.' },
      { id: 'p6', name: 'Italian Stallion Pie', price: null,  priceWhole: 25.00, description: 'Ham, salami, provolone, mozzarella, oregano.', tag: 'Most Popular' },
      { id: 'p7', name: 'White Pizza',          price: null,  priceWhole: 22.00, description: 'Ricotta, mozzarella, olive oil, garlic.' },
    ],
  },
  {
    id: 'coffee',
    label: 'Espresso & Coffee',
    description: 'Imported Italian beans, artisanal brewing. Powered by Brooklyn energy.',
    items: [
      { id: 'c1', name: 'Americano',              price: 3.50, description: 'Espresso, hot water. Clean and direct.' },
      { id: 'c2', name: 'Espresso (Double)',       price: 3.95, description: 'Two shots, no chaser.' },
      { id: 'c3', name: 'Macchiato',              price: 3.75, description: 'Espresso marked with a touch of foam.' },
      { id: 'c4', name: 'Cappuccino',             price: 4.75, description: 'Equal parts espresso, steamed milk, and foam.' },
      { id: 'c5', name: 'Caffè Latte',            price: 4.95, description: 'Double shot, steamed whole milk.' },
      { id: 'c6', name: 'Iced Italian Shakerato', price: 5.50, description: 'Espresso shaken over ice — the Italian way.', tag: 'Signature' },
    ],
  },
];

export const businessInfo = {
  name:    'The Brooklyn Bagel Company',
  tagline: 'Brooklyn Flavor. Italian Tradition.',
  address: '26 Main Street, Millville, New Jersey 08332',
  phone:   '(856) 555-BAGL',
  email:   'hello@brooklynbagel.com',
  catering:'catering@brooklynbagel.com',
  hours: {
    label: 'Daily',
    open:  '6:00 AM',
    close: '7:00 PM',
  },
  social: {
    instagram: 'https://instagram.com',
    facebook:  'https://facebook.com',
    tiktok:    'https://tiktok.com',
  },
};
