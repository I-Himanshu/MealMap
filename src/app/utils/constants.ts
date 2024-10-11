import { Recipe } from "../models/recipe.model";

export const CUISINES = [
  'North Indian',
  'South Indian',
  'East Indian',
  'West Indian',
  'Mughlai',
  'Italian',
  'Chinese',
  'Mexican',
  'Thai',
  'American',
  'Instant',
  'Snacks',
  'Fusion',
  'Dessert',
  'Salad'
];


export const DEFAULT_RECIPES: Recipe[] = [
  {
    id: 1,
    title: 'Maggi with Lays',
    isVegetarian: true,
    cuisine: 'Instant',
    kcal: '400 kcal',
    ingredients: {
      maggiNoodles: '1 pack',
      water: '2 cups',
      laysChips: '1 small pack',
      spices: 'Masala tastemaker from the pack',
    },
    steps: [
      'Boil water in a pan.',
      'Add noodles and cook for 2 minutes.',
      'Add masala tastemaker and mix well.',
      'Crush Lays chips and sprinkle on top for crunch.',
    ],
    imageURL: 'assets/maggi.png',
    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'Chips Sandwich',
    isVegetarian: true,
    cuisine: 'Snacks',
    kcal: '300 kcal',
    ingredients: {
      bread: '2 slices',
      butter: '1 tbsp',
      chips: 'A handful of your favorite chips',
      cheese: '1 slice',
    },
    steps: [
      'Spread butter on both slices of bread.',
      'Place cheese slice on one slice.',
      'Add a generous layer of chips on top.',
      'Cover with the other slice and press down gently.',
    ],
    imageURL: '/assets/ChipsSandwich.png',
    createdAt: new Date(),
  },
  {
    id: 3,
    title: 'Paneer Butter Masala',
    isVegetarian: true,
    cuisine: 'North Indian',
    kcal: '350 kcal',
    ingredients: {
      paneer: '250g',
      butter: '50g',
      cream: '100ml',
      tomatoes: '3',
      spices: 'Garam masala, turmeric, chili powder',
    },
    steps: [
      'Blend tomatoes to make a smooth puree.',
      'Heat butter and add spices, then add the tomato puree.',
      'Add cream and paneer, cook for 10 minutes.',
    ],
    imageURL: 'https://vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg',
    createdAt: new Date(),
  },
  {
    id: 4,
    title: 'Sambar',
    isVegetarian: true,
    cuisine: 'South Indian',
    kcal: '200 kcal',
    ingredients: {
      toorDal: '100g',
      mixedVegetables: '200g',
      sambarPowder: '2 tbsp',
      tamarind: '1 tbsp',
      mustardSeeds: '1 tsp',
    },
    steps: [
      'Cook toor dal until soft.',
      'Add mixed vegetables and sambar powder.',
      'Simmer and add tamarind water, temper with mustard seeds.',
    ],
    imageURL: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/sambar.jpg',
    createdAt: new Date(),
  },
  {
    id: 5,
    title: 'Pav Bhaji Omelette',
    isVegetarian: false,
    cuisine: 'Fusion',
    kcal: '450 kcal',
    ingredients: {
      pav: '2 pieces',
      bhaji: '1 cup',
      eggs: '2',
      butter: '1 tbsp',
      coriander: 'For garnish',
    },
    steps: [
      'Mash the bhaji in a bowl.',
      'Beat the eggs and mix with bhaji.',
      'Heat butter in a pan, pour in the mixture.',
      'Cook until the edges are golden, serve with pav.',
    ],
    imageURL: '/assets/PavBhajiOmelette.png',
    createdAt: new Date(),
  },
  {
    id: 6,
    title: 'Nutella Dosa',
    isVegetarian: true,
    cuisine: 'Fusion',
    kcal: '300 kcal',
    ingredients: {
      dosaBatter: '1 cup',
      nutella: '2 tbsp',
      banana: '1, sliced',
    },
    steps: [
      'Spread dosa batter on a hot pan to make a thin dosa.',
      'Once cooked, spread Nutella on top.',
      'Add banana slices, fold and serve.',
    ],
    imageURL: '/assets/NutellaDosa.png',
    createdAt: new Date(),
  },
  // New Recipes
  {
    id: 7,
    title: 'Vegetable Biryani',
    isVegetarian: true,
    cuisine: 'Indian',
    kcal: '500 kcal',
    ingredients: {
      basmatiRice: '1 cup',
      mixedVegetables: '200g',
      biryaniMasala: '2 tbsp',
      onions: '2, sliced',
      corianderLeaves: 'For garnish',
    },
    steps: [
      'Soak rice for 30 minutes and drain.',
      'Fry onions until golden, add mixed vegetables and biryani masala.',
      'Add soaked rice and water, cook until rice is fluffy.',
      'Garnish with coriander leaves and serve hot.',
    ],
    imageURL: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/vegetable-biryani-recipe.jpg',
    createdAt: new Date(),
  },
  {
    id: 8,
    title: 'Chocolate Mug Cake',
    isVegetarian: true,
    cuisine: 'Dessert',
    kcal: '350 kcal',
    ingredients: {
      flour: '4 tbsp',
      cocoaPowder: '2 tbsp',
      sugar: '4 tbsp',
      milk: '3 tbsp',
      oil: '2 tbsp',
      vanillaExtract: 'A few drops',
    },
    steps: [
      'Mix all ingredients in a microwave-safe mug.',
      'Microwave for 1 minute until the cake rises.',
      'Let it cool slightly before serving.',
    ],
    imageURL: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mug-cake-3f8477d.jpg',
    createdAt: new Date(),
  },
  {
    id: 9,
    title: 'Pasta Primavera',
    isVegetarian: true,
    cuisine: 'Italian',
    kcal: '400 kcal',
    ingredients: {
      pasta: '200g',
      bellPeppers: '100g',
      zucchini: '1, sliced',
      oliveOil: '2 tbsp',
      garlic: '2 cloves, minced',
      parmesan: 'For serving',
    },
    steps: [
      'Cook pasta according to package instructions.',
      'In a pan, heat olive oil and sauté garlic and vegetables.',
      'Add cooked pasta, mix well, and serve with parmesan.',
    ],
    imageURL: 'https://images.themodernproper.com/billowy-turkey/production/posts/PastaPrimavera_10.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1719193287&s=0104e0b241aea73e5709db128503d749',
    createdAt: new Date(),
  },
  {
    id: 10,
    title: 'Fruit Salad',
    isVegetarian: true,
    cuisine: 'Salad',
    kcal: '150 kcal',
    ingredients: {
      mixedFruits: '2 cups (e.g., apples, bananas, oranges)',
      honey: '1 tbsp',
      lemonJuice: '1 tbsp',
      mint: 'For garnish',
    },
    steps: [
      'Chop fruits into bite-sized pieces.',
      'Mix honey and lemon juice in a bowl.',
      'Combine fruits with the honey mixture, garnish with mint, and serve chilled.',
    ],
    imageURL: 'https://www.modernhoney.com/wp-content/uploads/2023/05/Fruit-Salad-10.jpg',
    createdAt: new Date(),
  },
  {
    id: 11,
    title: 'Garlic Bread',
    isVegetarian: true,
    cuisine: 'Italian',
    kcal: '250 kcal',
    ingredients: {
      bread: '1 loaf',
      butter: '100g, softened',
      garlic: '4 cloves, minced',
      parsley: '2 tbsp, chopped',
    },
    steps: [
      'Preheat oven to 200°C (400°F).',
      'Mix butter, garlic, and parsley in a bowl.',
      'Spread mixture on bread and bake for 10-12 minutes until golden.',
    ],
    imageURL: 'https://spicecravings.com/wp-content/uploads/2021/09/Air-Fryer-Garlic-Bread-Featured.jpg',
    createdAt: new Date(),
  },
];
