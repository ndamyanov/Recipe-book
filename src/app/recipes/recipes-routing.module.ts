import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEdiComponent } from "./recipe-edi/recipe-edi.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { RecipesComponent } from "./recipes.component";


const recipesRoutes: Routes =[

    { path:'', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEdiComponent, canActivate:[AuthGuard]},
        {path: ':id', component: RecipesDetailComponent},
        {path: ':id/edit', component: RecipeEdiComponent, canActivate:[AuthGuard]}
    ]},
 
 ];

 @NgModule({
     imports:[
         RouterModule.forChild(recipesRoutes)
     ],
     exports:[RouterModule]
 })

 
export class  RecipesRoutingModule {}