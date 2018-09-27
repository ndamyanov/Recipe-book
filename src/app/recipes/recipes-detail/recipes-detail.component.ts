import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes-list/recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  
 currentRecipe: Recipe;
 id: number;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute,private router: Router) {

   }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log('id ' + this.id)
        this.currentRecipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddingToShoppingList(recipe: Recipe){

    recipe.ingredients.forEach(element => {
    this.shoppingListService.addIngredient(element);  
    });
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
