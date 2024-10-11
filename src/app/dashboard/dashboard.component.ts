import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { CommonModule } from '@angular/common';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { CUISINES } from '../utils/constants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
  imports: [CommonModule, RecipeFormComponent, RouterModule],
})
export class DashboardComponent {
  cuisines: string[] = CUISINES;
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  selectedCuisines: Set<string> = new Set();
  isVegetarian: boolean = false;
  isFormVisible: boolean = false;
  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getRecipes();
    this.filteredRecipes = this.recipes;
  }

  toggleCuisine(cuisine: string) {
    if (this.selectedCuisines.has(cuisine)) {
      this.selectedCuisines.delete(cuisine);
    } else {
      this.selectedCuisines.add(cuisine);
    }
    this.filterRecipes();
  }

  toggleVegetarian() {
    this.isVegetarian = !this.isVegetarian;
    this.filterRecipes();
  }

  filterRecipes() {
    this.filteredRecipes = this.recipes.filter((recipe) => {
      if (this.isVegetarian && !recipe.isVegetarian) {
        return false;
      }
      if (
        this.selectedCuisines.size > 0 &&
        !this.selectedCuisines.has(recipe.cuisine)
      ) {
        return false;
      }
      return true;
    });
  }

  clearFilters() {
    this.selectedCuisines.clear();
    this.isVegetarian = false;
    this.filterRecipes();
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  addRecipe(recipe: Recipe) {
    this.recipeService.addRecipe(recipe);
    this.recipes = this.recipeService.getRecipes();
    this.filterRecipes();
    this.toggleForm();
  }

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
    this.recipes = this.recipeService.getRecipes();
    this.filterRecipes();
  }
  
}
