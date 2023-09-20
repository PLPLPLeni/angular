import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    RootComponent,
    FooterComponent,
    HeaderComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Permets de faire du ngModel
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
