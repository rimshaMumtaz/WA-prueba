import {ApplicationRef, NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {InmueblesService} from "../services/inmuebles.service";
import {BrowserModule} from "@angular/platform-browser";
import {ListaInmueblesComponent} from "./lista-inmuebles/lista-inmuebles.component";
import {CommonModule} from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./app.component";
import {DetalleInmuebleComponent} from "./detalle-inmueble/detalle-inmueble.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ListaInmueblesComponent,
    AppComponent,
    DetalleInmuebleComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [InmueblesService],
  bootstrap: [AppComponent],
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef): void {
    appRef.bootstrap(ListaInmueblesComponent); // Manually bootstrap the root component
  }
}
