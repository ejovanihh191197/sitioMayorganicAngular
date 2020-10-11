import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[];
  constructor( private producService: ProductosService ) {
    this.cargarProductos();
  }

  ngOnInit(): void {
  }

  cargarProductos(): any {
    this.productos = this.producService.getProductos();
    console.log(this.productos);
  }

}
