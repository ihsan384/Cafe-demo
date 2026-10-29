export const cafeData = {
  brand: {
    name: "KŌVA",
    subname: "Specialty Coffee Roasters & Kitchen",
    tagline: "Slow mornings. Direct-trade beans. Mindfully crafted.",
    established: "2022",
    city: "Kochi, Kerala",
  },

  location: {
    addressLine1: "Plot 42, 8th Cross Road",
    neighborhood: "Panampilly Nagar",
    city: "Kochi, Kerala 682036",
    landmark: "Behind Central Park Avenue, 3 mins from Girinagar Jn",
    mapsUrl: "https://maps.google.com/?q=Panampilly+Nagar+Kochi+Kerala",
  },

  hours: [
    { day: "Monday – Thursday", time: "07:30 – 21:00" },
    { day: "Friday", time: "07:30 – 22:00" },
    { day: "Saturday", time: "08:00 – 22:00" },
    { day: "Sunday", time: "08:00 – 21:30" },
  ],

  contact: {
    phone: "+91 484 230 0000",
    phoneNote: "Demo Hotline Only",
    email: "sanctuary@kovacoffee.demo",
    instagram: "@kova.specialtycoffee",
  },

  hero: {
    eyebrow: "Panampilly Nagar, Kochi • Mon–Sun from 07:30",
    headline: "Intentionally sourced. Patiently brewed. Warmly shared.",
    description:
      "A quiet sanctuary dedicated to single-origin Indian coffees, natural fermentation lots, and 36-hour sourdough bakes. An honest pursuit of slow mornings in the heart of Kochi.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Sunlit Scandinavian-inspired café interior at Kōva with natural teak wood tables and linen textures",
    secondaryImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
    secondaryAlt: "Hand holding a warm artisanal ceramic cup of coffee",
    quickStats: [
      { label: "Origin Elevation", value: "1,450m" },
      { label: "Small Batches", value: "5kg Roaster" },
      { label: "Sourdough Ferment", value: "36 Hours" },
    ],
  },

  philosophy: {
    tag: "OUR PHILOSOPHY",
    heading: "Honouring the soil, the planter, and the cup.",
    lead: "Specialty coffee in India is experiencing an extraordinary renaissance, and we consider ourselves humble custodians of that story.",
    paragraphs: [
      "We source exclusively through direct relationships with shade-grown estate farms across the misty slopes of Wayanad, Chikmagalur, and the Biligirirangana Hills. These high-altitude micro-lots are hand-picked at peak crimson ripeness, naturally fermented, and gently dried on raised bamboo beds under canopy shade.",
      "In our Kochi roasting studio, we roast in small 5-kilogram batches on a cast-iron drum roaster. Every profile is dialed to preserve delicate notes of stone fruit, jasmine blossom, wild honey, and toasted spices — never over-roasted to bitterness.",
      "Paired with our slow-fermented bakery and in-house pressed plant milks, every offering reflects a deep respect for natural materials and gentle hospitality.",
    ],
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Artisanal V60 pour over brewing with warm ambient light at Kōva",
    quote: "“Great coffee needs no apology and very little fanfare. It simply demands patience, honest water, and genuine warmth.”",
    founderNote: "— Head Roaster & Baker, Kōva Atelier",
  },

  signatureMenu: [
    {
      id: "espresso",
      name: "Double Shot Espresso",
      origin: "Wayanad Estate • Anaerobic Natural",
      notes: "Dark plum, cacao nibs, citrus zest",
      price: 190,
      badge: "Single Origin",
      dietary: "Vegan • Zero Sugar",
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "flat-white",
      name: "Estate Flat White",
      origin: "Chikmagalur Red Honey Process",
      notes: "Velvety microfoam, roasted hazelnut, brown butter finish",
      price: 230,
      badge: "House Favourite",
      dietary: "Oat milk +₹40",
      image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "cappuccino",
      name: "Classic 6oz Cappuccino",
      origin: "Shevaroy Hills Washed Arabica",
      notes: "Dense silken foam, balanced chocolate sweetness, light nutmeg dust",
      price: 220,
      badge: "Classic",
      dietary: "Lactose-free available",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "iced-latte",
      name: "Iced Sea Salt Foam Latte",
      origin: "Kōva Espresso Blend + Malabar Saline Cream",
      notes: "Chilled double shot over fresh milk, topped with lightly whipped sea-salt cream",
      price: 270,
      badge: "Specialty Cold",
      dietary: "Vegetarian",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "signature-cold",
      name: "Cardamom & Jaggery Cold Brew",
      origin: "18-Hour Slow Steeped Arabica",
      notes: "Infused with crushed green Idukki cardamom and organic Marayoor palm jaggery",
      price: 290,
      badge: "Kerala Signature",
      dietary: "Vegan • Gluten Free",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "cruffin",
      name: "Spiced Cardamom Cruffin",
      origin: "In-House Laminated Sourdough",
      notes: "Crisp caramelized crust rolled in vanilla bean sugar, filled with cardamom mascarpone",
      price: 260,
      badge: "Fresh Daily Bake",
      dietary: "Eggless Available",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    },
  ],

  fullMenuCategories: [
    {
      title: "Espresso & Milk",
      description: "Pulled on our customized Synesso MVP with precision basket weights and soft pre-infusion.",
      items: [
        { name: "Double Espresso", notes: "Single origin Wayanad Anaerobic", price: "₹190" },
        { name: "Cortado / Piccolo", notes: "Equal parts espresso and textured milk, 4oz", price: "₹210" },
        { name: "Flat White", notes: "Velvety microfoam, 6oz ceramic cup", price: "₹230" },
        { name: "Classic Cappuccino", notes: "Fluffy textured foam, subtle cocoa dust", price: "₹220" },
        { name: "Café Latte", notes: "Smooth, balanced milk forward 8oz cup", price: "₹240" },
        { name: "Valrhona Mocha", notes: "70% Guanaja dark chocolate melted in double espresso", price: "₹280" },
      ],
    },
    {
      title: "Manual Brews & Filter",
      description: "Single-origin filter roasts celebrating regional terroir. Served with tasting notes.",
      items: [
        { name: "Hario V60 Pour Over", notes: "Clean, floral and tea-like notes. Choice of current single origin", price: "₹250" },
        { name: "Aeropress Inverted", notes: "Full-bodied, sweet and intense clarity", price: "₹240" },
        { name: "Japanese Iced Drip", notes: "Brewed hot directly over ice for preserved aromatics", price: "₹270" },
        { name: "Kōva Traditional Decoction", notes: "Heritage South Indian brass filter decoction with steamed frothy milk", price: "₹180" },
      ],
    },
    {
      title: "Chilled & Botanical",
      description: "Refreshing, low-intervention beverages brewed cold or infused in-house.",
      items: [
        { name: "18h Single-Origin Cold Brew", notes: "Smooth, zero bitterness, notes of black tea and dates", price: "₹250" },
        { name: "Cardamom & Jaggery Cold Brew", notes: "With Idukki green cardamom & Marayoor jaggery syrup", price: "₹290" },
        { name: "Yuzu Espresso Tonic", notes: "Double espresso poured over sparkling tonic and yuzu peel", price: "₹290" },
        { name: "Wild Cascara Fizz", notes: "Sparkling botanical tea brewed from dried coffee cherry husks", price: "₹240" },
      ],
    },
    {
      title: "Bakes & Sourdough Kitchen",
      description: "Baked fresh every morning at 06:00 using organic flour and natural wild yeast.",
      items: [
        { name: "Spiced Cardamom Cruffin", notes: "Caramelized flaky pastry with spiced mascarpone cream", price: "₹260" },
        { name: "Pain au Chocolat", notes: "French butter laminated dough with two dark Valrhona batons", price: "₹250" },
        { name: "Wild Honey & Sea Salt Tartine", notes: "Toasted country sourdough, whipped ricotta, estate honey", price: "₹340" },
        { name: "Avocado & Crushed Dukkah Tartine", notes: "Hass avocado, pickled shallots, house spice crunch", price: "₹380" },
        { name: "Pistachio Basque Cheesecake", notes: "Creamy center with a blistered caramel top", price: "₹310" },
      ],
    },
  ],

  experience: {
    tag: "THE SPACE & ATMOSPHERE",
    heading: "A slower rhythm, carved in lime plaster and aged teak.",
    lead: "We designed Kōva as an antidote to urban rush — a sanctuary where conversations linger and time quietly untangles.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Sun-drenched minimalist wooden corner with tranquil seating and lush greenery at Kōva",
    pillars: [
      {
        title: "Tactile Materials",
        description: "Reclaimed Kerala teak wood, hand-troweled lime plaster, unglazed ceramic ware, and organic woven linen.",
      },
      {
        title: "Analog Soundscape",
        description: "Gentle warm vinyl playback spinning Japanese ambient, bossa nova, and low-tempo acoustic jazz.",
      },
      {
        title: "Natural Light & Breeze",
        description: "Floor-to-ceiling glass louvres that welcome the morning sea breeze while softening afternoon heat.",
      },
      {
        title: "No Rush Etiquette",
        description: "Comfortable seating designed for unhurried reading, solitary sketches, or quiet morning catch-ups.",
      },
    ],
  },

  gallery: [
    {
      id: "g1",
      title: "Morning Routine",
      category: "Sanctuary",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
      caption: "Filtered morning sun on hand-thrown stoneware cups and warm linen napkins.",
      aspect: "aspect-square",
    },
    {
      id: "g2",
      title: "Wild Sourdough",
      category: "Bakery",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
      caption: "Country loaves cooling fresh from the stone hearth oven at dawn.",
      aspect: "aspect-[4/5]",
    },
    {
      id: "g3",
      title: "The Extraction",
      category: "Barista Craft",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1000&q=80",
      caption: "Double spout espresso stream dialed to 27 seconds for pure fruit balance.",
      aspect: "aspect-[4/5]",
    },
    {
      id: "g4",
      title: "The Roast",
      category: "Roastery",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=80",
      caption: "Single-origin beans freshly dropped from the cooling tray into burlap sacks.",
      aspect: "aspect-square",
    },
    {
      id: "g5",
      title: "Greenery Veranda",
      category: "Atmosphere",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80",
      caption: "Shaded outdoor courtyard surrounded by native palms and bird-of-paradise.",
      aspect: "aspect-[4/5]",
    },
    {
      id: "g6",
      title: "V60 Ritual",
      category: "Slow Bar",
      image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1000&q=80",
      caption: "Continuous concentric pours extracting delicate stone fruit and jasmine aromatics.",
      aspect: "aspect-square",
    },
  ],

  story: {
    tag: "OUR STORY",
    heading: "From mist-cloaked Western Ghats to an urban haven in Kochi.",
    lead: "Founded in 2022 by two coffee enthusiasts and architects returning home to Kerala.",
    body: [
      "We grew up surrounded by coffee estates in Wayanad and Coorg, yet found that the very best harvest beans were almost invariably exported overseas, leaving our hometowns with commercial over-roasted robusta.",
      "Kōva began as an uncompromising pledge: to celebrate India's indigenous specialty coffees right where they are nurtured. We work directly with third-generation family estates practicing regenerative agroforestry under diverse native canopy trees.",
      "When designing the café space in Panampilly Nagar, we drew inspiration from traditional Kerala 'naalukettu' courtyards combined with Scandinavian spatial economy — uncluttered, breathable, and honest to the touch.",
    ],
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Evaluating green specialty coffee beans on tasting tables",
    milestone: "Certified Specialty Coffee Association (SCA) Roasting Standards",
  },
};
