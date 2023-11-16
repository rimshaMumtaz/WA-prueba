import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaInmueblesComponent } from './lista-inmuebles/lista-inmuebles.component';
import { DetalleInmuebleComponent } from './detalle-inmueble/detalle-inmueble.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inmuebles', pathMatch: 'full' }, // Redirect to /inmuebles
  { path: 'inmuebles', component: ListaInmueblesComponent },
  { path: 'detalle/:id', component: DetalleInmuebleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
