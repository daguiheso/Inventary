import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html'
})

export class CreateUserComponent {

  user: any = {};

  constructor(private authService: AuthService) { }

  saveUser() {
    this.authService.save(this.user)
  }

}
