import { Recipe } from './recipes-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[];

    constructor (private http: Http, private authService: AuthService){}

      getRecipes() {
        if(this.recipes){
            return this.recipes.slice();    
        }
        
          
      }
      getRecipe(id: number){
          
           //this.recipes.find(r => r.name === name);
           return this.recipes[id];
      }

      addRecipe(recipe: Recipe){
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice())
      }

      updateRecipe(index: number, newRecipe: Recipe) {
          this.recipes[index] = newRecipe;
      }

      deleteRecipe(id: number){
        this.recipes.splice(id, 1);
        this.recipesChanged.next(this.recipes.slice())
    }

    saveRecipes() {
        const token = this.authService.getToken();
         return this.http.put('https://angular-test-6e1dc.firebaseio.com/data.json?auth=' + token, this.recipes);
    }

    fetchRecipes() {
        //return this.http.get('https://angular-test-6e1dc.firebaseio.com/data.json');

        const token = this.authService.getToken();
        this.http.get('https://angular-test-6e1dc.firebaseio.com/data.json?auth='+ token)
        .pipe(map(
            (response: Response) =>{
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes){
                    if(recipe['ingredients']){
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        ))
        .subscribe(
          (recipes: Recipe[]) => {
             
             this.recipes = recipes;
             this.recipesChanged.next(this.recipes.slice());
          },
          (error) => {
              console.log(error);
          }
          
        )
    }
}