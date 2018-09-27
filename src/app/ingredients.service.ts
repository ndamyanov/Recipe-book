import { Ingredient } from './shared/ingredient.model';


export class IngredientsService{

    ingredients: Ingredient[] = [
        new Ingredient('banana', 6),
        new Ingredient('apples', 5),
        new Ingredient('tomatos', 10)
    ];

    addIngredient(name:string, amount: number){
        this.ingredients.push({name: name, amount: amount});
    }

    getIngredients() {
        return this.ingredients.slice();
    }

  
}