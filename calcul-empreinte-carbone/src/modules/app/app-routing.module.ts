import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { LoginFormComponent } from '../auth/components/login-form/login-form.component';
import { VoyagesComponent } from './components/voyages/voyages.component';
import { CreateUpdateVoyageComponent } from './components/create-update-voyage/create-update-voyage.component';
import { AuthService } from '../auth/services/auth.service';

const isAuthentified: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  return inject(AuthService).getCurrentUser() != null;
}

const routes: Routes = [
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'voyages', component: VoyagesComponent
  },
  {
    path: 'voyage/:id',
    component: CreateUpdateVoyageComponent,
    canActivate: [isAuthentified]
  },
  {
    path: 'nouveau-voyage',
    component: CreateUpdateVoyageComponent,
    canActivate: [isAuthentified]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
