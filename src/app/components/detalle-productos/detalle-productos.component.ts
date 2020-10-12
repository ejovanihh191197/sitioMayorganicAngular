import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService, Producto } from '../../services/productos.service';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {

  producto: Producto;

  constructor(private activedRoute: ActivatedRoute,
              private productoService: ProductosService,
              private ruteador: Router) {

      this.activedRoute.params.subscribe( params => {
        this.producto = this.productoService.getProductoById(params['id']);
        console.log(this.productoService.getProductoById(params[ 'id' ]));
      });
    }

  ngOnInit(): void {
  }

  regresar(): any {
    this.ruteador.navigate(['productos']);
  }

}
