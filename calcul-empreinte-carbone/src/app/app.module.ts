import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarbonFootprintComponent } from './components/carbon-footprint/carbon-footprint.component';
import { CarbonFootprintFormComponent } from './components/carbon-footprint-form/carbon-footprint-form.component';
import { CarbonFootprintResultComponent } from './components/carbon-footprint-result/carbon-footprint-result.component';

import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { HelloworldService } from './services/helloworld.service';

// Inscrit la locale FR comme une locale disponible dans l'appli
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarbonFootprintComponent,
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  },
    HelloworldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
