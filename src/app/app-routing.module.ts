import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleProductosComponent } from './components/detalle-productos/detalle-productos.component';

const routes: Routes = [
  { path: 'inicio',      component: InicioComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'contacto',    component: ContactoComponent },
  { path: 'productos',   component: ProductosComponent },
  { path: 'detalle/:id', component: DetalleProductosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
