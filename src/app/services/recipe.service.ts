import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
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
      isVegetarian: true,
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
  ];

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(id: number): Recipe {
    const recipe = this.recipes.find((recipe) => recipe.id === id);
    if (!recipe) {
      throw new Error(`Recipe with id ${id} not found`);
    }
    return recipe;
  }

  addRecipe(recipe: Recipe) {
    const lastId = this.recipes[this.recipes.length - 1].id;
    recipe.id = lastId + 1;
    recipe.createdAt = new Date();
    this.recipes.push(recipe);
  }
}
