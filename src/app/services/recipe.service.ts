import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { DEFAULT_RECIPES } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [];
  constructor(){
    const recipes = localStorage.getItem('recipes');
    if (recipes) {
      this.recipes = JSON.parse(recipes);
    }else{
      this.recipes = DEFAULT_RECIPES;
    }
    this.saveRecipes();
  }
  private saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(this.recipes));
  }  
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
    this.saveRecipes();
  }

  deleteRecipe(id: number): void {
    const recipeIndex = this.recipes.findIndex((recipe) => recipe.id === id);
    if (recipeIndex === -1) {
      throw new Error(`Recipe with id ${id} not found`);
    }
    this.recipes.splice(recipeIndex, 1);
    this.saveRecipes();
  }
}
