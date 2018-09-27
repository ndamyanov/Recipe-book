import { NgForm } from "@angular/forms";
import { Component } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
  })

export class SignUpComponent {
   
    constructor(private authService: AuthService){}

    onSignup(form: NgForm) {
       const email = form.value.email;
       const password = form.value.password;
       this.authService.signupUser(email, password);
    }
}