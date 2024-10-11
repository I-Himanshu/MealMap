import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  recipe: Recipe = {} as Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ){

  }

  ngOnInit(): void{
    const recipeId = this.route.snapshot.paramMap.get("id");
    if(recipeId){
      this.recipe = this.recipeService.getRecipe(Number(recipeId));
    }
  }

  goBack(){
    this.location.back()
  }
}
