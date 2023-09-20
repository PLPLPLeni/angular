import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarbonFootprintFormComponent } from './components/carbon-footprint-form/carbon-footprint-form.component';
import { CarbonFootprintResultComponent } from './components/carbon-footprint-result/carbon-footprint-result.component';
import { CarbonFootprintComponent } from './components/carbon-footprint/carbon-footprint.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AuthModule } from '../auth/auth.module';
import { CarbonFootprintComputeService } from './services/carbon-footprint-compute.service';
import { HelloworldService } from './services/helloworld.service';

// Alt + Shift + O => permet de nettoyer les imports automatiquement

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
    AppRoutingModule,
    AuthModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  },
    HelloworldService,
    CarbonFootprintComputeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
