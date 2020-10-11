import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { TarjetaProductoComponent } from './shared/tarjeta-producto/tarjeta-producto.component';
import { DetalleProductosComponent } from './components/detalle-productos/detalle-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InformacionComponent,
    ContactoComponent,
    ProductosComponent,
    MenuComponent,
    FooterComponent,
    TarjetaProductoComponent,
    DetalleProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
