import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public login?: string;
  public password?: string;

  constructor(private authService: AuthService) { }

  public onSubmit(): void {
    if (this.login == null ||
      !this.authService.isValid(this.login, this.password)) {
      alert('Identifiants incorrects');
      return;
    }

    this.authService.saveCurrentUser(this.login);
  }
}
