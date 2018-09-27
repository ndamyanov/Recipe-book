import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin/signin.component";
import { SignUpComponent } from "./signup/signup.component";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
 declarations:[
     SignInComponent,
     SignUpComponent
 ],
 imports:[
     FormsModule,
     AuthRoutingModule
 ]
})

export class AuthModule {}