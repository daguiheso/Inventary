import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html'
})

export class LoginFormComponent {

  user: any = {};

  constructor(private authService: AuthService) { }

  loginUser() {
    this.authService.login(this.user)
  }

}