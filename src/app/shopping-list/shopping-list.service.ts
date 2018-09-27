import { Ingredient } from "../shared/ingredient.model";
import { IngredientsService } from "../ingredients.service";
import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs/Subject";

 //@Injectable()

export class ShoppingListService implements OnInit {
    
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    
    private ingredients: Ingredient[] = [
        new Ingredient('banana', 6),
        new Ingredient('apples', 5),
        new Ingredient('tomatos', 10)
    ];

    addIngredient(ingredinet: Ingredient){
        this.ingredients.push({name: ingredinet.name, amount: ingredinet.amount});
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }

    //ingredients: Ingredient[];

    ngOnInit(){
       // this.ingredients = this.ingredientService.getIngredients();;
    }

    addIngredients(ingredinet: Ingredient) {
       // this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
 
    updateIngredient(index:number, newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}