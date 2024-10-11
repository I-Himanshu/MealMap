import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class RecipeFormComponent {
  newRecipe: Recipe = {
    id: 0,
    title: '',
    isVegetarian: false,
    cuisine: 'North Indian',
    kcal: '',
    ingredients: {},
    steps: [],
    imageURL: '',
    createdAt: new Date(),
  };

  newIngredientName: string = '';
  newIngredientQuantity: string = '';
  newStep: string = '';

  @Output() recipeAdded = new EventEmitter<Recipe>();

  addIngredient() {
    console.log(
      'Adding Ingredient:',
      this.newIngredientName,
      this.newIngredientQuantity
    ); // Debugging log
    if (this.newIngredientName && this.newIngredientQuantity) {
      this.newRecipe.ingredients[this.newIngredientName] =
        this.newIngredientQuantity;
      this.newIngredientName = '';
      this.newIngredientQuantity = '';
      console.log('Ingredient Added:', this.newRecipe.ingredients); // Debugging log
    } else {
      console.log('Ingredient Name or Quantity is missing.'); // Debugging log
    }
  }

  removeIngredient(ingredient: string) {
    delete this.newRecipe.ingredients[ingredient];
  }

  addStep() {
    console.log('Adding Step:', this.newStep); // Debugging log
    if (this.newStep) {
      this.newRecipe.steps.push(this.newStep);
      this.newStep = '';
      console.log('Step Added:', this.newRecipe.steps); // Debugging log
    }
  }

  removeStep(index: number) {
    this.newRecipe.steps.splice(index, 1);
  }

  submitRecipeForm() {
    this.recipeAdded.emit(this.newRecipe);
    this.resetForm();
  }

  private resetForm() {
    this.newRecipe = {
      id: 0,
      title: '',
      isVegetarian: false,
      cuisine: 'North Indian',
      kcal: '',
      ingredients: {},
      steps: [],
      imageURL: '',
      createdAt: new Date(),
    };
    this.newIngredientName = '';
    this.newIngredientQuantity = '';
  }
  toggleVegetarian() {
    this.newRecipe.isVegetarian = !this.newRecipe.isVegetarian;
  }
}
