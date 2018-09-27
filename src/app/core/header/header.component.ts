import { Component, EventEmitter, Output } from "@angular/core";
import { RecipeService } from "../../recipes/recipe.service";
import { Response } from "@angular/http";
import { AuthService } from "../../auth/auth.service";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{
 /*  @Output()  featureSelected = new EventEmitter<string>();

    onSelect(feature: string){
        this.featureSelected.emit(feature);
    } */
    constructor(private recipeService: RecipeService, private authService: AuthService){}

    onSave() {
        this.recipeService.saveRecipes().subscribe(
            (response: Response) => console.log(response),
            (error) => console.log(error)
        )
    }

    onLogout() {
        this.authService.loguot();
    }

    onFetch() {
        this.recipeService.fetchRecipes();
        
    }
}