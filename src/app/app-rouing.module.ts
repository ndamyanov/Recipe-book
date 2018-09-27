import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./core/home/home.component";


const appRoutes: Routes =[
   // { path:'',redirectTo: '/recipe', pathMatch: 'full' },
    { path: '', component: HomeComponent},
    { path: 'recipe', loadChildren: './recipes/recipes.module#RecipesModule'},
    { path: 'shopping-list', component: ShoppingListComponent},
    { path: '**', redirectTo: ''}
];

@NgModule({
imports:[RouterModule.forRoot(appRoutes)], exports:[RouterModule]
})


export class AppRoutingModule{

}