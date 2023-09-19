import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'sayHello/:name/:id', component: FooterComponent },
  { path: 'sayHello/:id', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
