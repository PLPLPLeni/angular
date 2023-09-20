import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    AuthService
  ],
  exports: [
    LoginFormComponent
  ]
})
export class AuthModule { }
