import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "./signup/signup.component";
import { SignInComponent } from "./signin/signin.component";

const authRoutes: Routes = [
    {path: 'signup', component: SignUpComponent},
    {path: 'signin', component: SignInComponent},
]
@NgModule({
    imports:[
        RouterModule.forChild(authRoutes)
    ], 
    exports: [RouterModule]
})

export class AuthRoutingModule {}