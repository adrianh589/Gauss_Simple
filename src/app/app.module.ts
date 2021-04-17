import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CargaComponent } from './pages/carga/carga.component';
import { IteracionesComponent } from './pages/iteraciones/iteraciones.component';
import { ModalsComponent } from './components/modals/modals.component';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
 import {ScrollingModule} from "@angular/cdk/scrolling";
import {ScrollingModule as ExperimentalScrollingModule} from '@angular/cdk-experimental/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CargaComponent,
    IteracionesComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    NoopAnimationsModule,
    ScrollingModule,
    ExperimentalScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
