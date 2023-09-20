import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HelloworldService } from './services/helloworld.service';

const isAdminCanActivateFn: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const helloworldService: HelloworldService = inject(HelloworldService);
    helloworldService.helloWorld();
    
    return localStorage.getItem('IS_ADMIN') == 'YES';
  };

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'sayHello/:name/:id', component: FooterComponent },
  { path: 'sayHello/:id', component: FooterComponent },
  { path: 'admin', component: AdminComponent, canActivate: [isAdminCanActivateFn] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
