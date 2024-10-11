// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent }, // Default route for the dashboard
  { path: 'recipe/:id', component: RecipeDetailComponent }, // Route for recipe detail
  { path: '**', redirectTo: '' } // Redirect to the dashboard for any unknown paths
];
