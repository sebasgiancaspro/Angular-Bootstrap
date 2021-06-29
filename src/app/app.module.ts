import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcordionComponent } from './acordion/acordion.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    AcordionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
