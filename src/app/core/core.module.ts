import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-rouing.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from "../auth/auth-guard.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    declarations:[
        HeaderComponent,
        HomeComponent
    ],
    imports:[
        SharedModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        BrowserAnimationsModule
    ],
    providers:[
        ShoppingListService, RecipeService, AuthService, AuthGuard
    ]
})
export class CoreModule {}