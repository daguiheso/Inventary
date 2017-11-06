import { Component } from '@angular/core';
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html'
})

export class LoginFormComponent {

  user: any = {};

  constructor(private loginService: LoginService) { }

  loginUser() {
    this.loginService.login(this.user)
  }

}