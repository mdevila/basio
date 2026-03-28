export const menuItems = {
  appetizers: [
    {
      name: "Crispy Tempura Platter",
      description: "Golden-fried shrimp and vegetable tempura served with tangy dipping sauce",
      price: "₱320",
      image: "/images/dish-tempura.jpg",
    },
    {
      name: "Stuffed Chicken Roulade",
      description: "Herb-seasoned chicken breast stuffed and sliced, served with chimichurri",
      price: "₱350",
      image: "/images/dish-chicken-stuffed.jpg",
    },
  ],
  mains: [
    {
      name: "Basio Beef Ribs Tadyang",
      description: "Our signature slow-cooked beef ribs in rich savory broth with native vegetables",
      price: "₱480",
      image: "/images/hero-signature.jpg",
      featured: true,
    },
    {
      name: "Roasted Chicken Leg",
      description: "Juicy roasted chicken leg glazed with house sauce, served with steamed rice and vegetables",
      price: "₱380",
      image: "/images/dish-chicken-leg.jpg",
    },
    {
      name: "Crispy Fried Fish",
      description: "Whole fried fish cooked to golden perfection, served with garlic rice and dipping sauce",
      price: "₱420",
      image: "/images/dish-fried-fish.jpg",
    },
  ],
  desserts: [
    {
      name: "Leche Flan",
      description: "Classic creamy caramel custard made with a traditional family recipe",
      price: "₱180",
      image: "/images/dish-chicken-stuffed.jpg",
    },
    {
      name: "Ube Cheesecake",
      description: "Rich purple yam cheesecake with a graham cracker crust",
      price: "₱220",
      image: "/images/ambiance-spread.jpg",
    },
  ],
  drinks: [
    {
      name: "Basio Iced Coffee",
      description: "Signature cold brew blended with creamy milk, served in our branded cup",
      price: "₱160",
      image: "/images/drinks-iced-coffee.jpg",
    },
    {
      name: "Fresh Fruit Shake",
      description: "Seasonal fresh fruits blended with ice — mango, watermelon, or banana",
      price: "₱140",
      image: "/images/drinks-iced-coffee.jpg",
    },
  ],
};

export const testimonials = [
  {
    name: "Maria Santos",
    role: "Wedding Client",
    text: "Basio made our wedding reception absolutely unforgettable. The food was exquisite, the venue was stunning, and every detail was handled with care.",
    rating: 5,
  },
  {
    name: "Carlos Reyes",
    role: "Regular Diner",
    text: "The Beef Ribs Tadyang is hands down the best dish I've ever had. I keep coming back every week. Basio is truly a gem!",
    rating: 5,
  },
  {
    name: "Angela Cruz",
    role: "Corporate Event",
    text: "We hosted our company year-end party here and the catering was phenomenal. Professional service and incredible flavors.",
    rating: 5,
  },
  {
    name: "James Villanueva",
    role: "Birthday Celebration",
    text: "My daughter's 18th birthday was perfect thanks to Basio. The team went above and beyond to make it special.",
    rating: 5,
  },
];

export const cateringPackages = [
  {
    name: "Essential Package",
    description: "Perfect for intimate gatherings",
    guests: "20-50 guests",
    price: "₱15,000",
    includes: [
      "3 Main Courses",
      "2 Side Dishes",
      "1 Dessert",
      "Drinks Station",
      "Basic Table Setup",
    ],
  },
  {
    name: "Premium Package",
    description: "Ideal for special celebrations",
    guests: "50-100 guests",
    price: "₱35,000",
    includes: [
      "5 Main Courses",
      "3 Side Dishes",
      "2 Desserts",
      "Drinks & Coffee Station",
      "Elegant Table Setup",
      "Dedicated Service Staff",
    ],
    popular: true,
  },
  {
    name: "Grand Package",
    description: "The ultimate event experience",
    guests: "100-200 guests",
    price: "₱70,000",
    includes: [
      "7 Main Courses",
      "4 Side Dishes",
      "3 Desserts",
      "Full Beverage Service",
      "Premium Table & Stage Setup",
      "Dedicated Event Coordinator",
      "Custom Menu Options",
    ],
  },
];

export const eventTypes = [
  {
    title: "Weddings",
    description: "Create your dream wedding reception in our elegant venue with customized menus and dedicated event coordination.",
    capacity: "Up to 200 guests",
    image: "/images/catering-buffet-chicken.jpg",
  },
  {
    title: "Birthday Celebrations",
    description: "From intimate dinners to grand parties, we make every birthday milestone truly memorable.",
    capacity: "Up to 150 guests",
    image: "/images/catering-pasta.jpg",
  },
  {
    title: "Corporate Events",
    description: "Professional setting for meetings, team buildings, and company celebrations with premium catering.",
    capacity: "Up to 180 guests",
    image: "/images/catering-buffet-veggies.jpg",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Events", href: "/events" },
  { label: "Catering", href: "/catering" },
  { label: "Contact", href: "/contact" },
];
