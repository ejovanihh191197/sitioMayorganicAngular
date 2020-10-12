import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService, Producto } from '../../services/productos.service';

interface Beneficios {
  columna1: string[];
  columna2: string[];
  columna3: string[];
}
@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})

export class DetalleProductosComponent implements OnInit {

  producto: Producto;
  listo = false;


  listaBeneficios: Beneficios;

  miPromesa = new Promise((resolve, reject) => {
    setTimeout((x) => {
      resolve();
    }, 50);
  });

  constructor(private activedRoute: ActivatedRoute,
              private productoService: ProductosService,
              private ruteador: Router) {
      this.activedRoute.params.subscribe( params => {
        this.producto = this.productoService.getProductoById(params['id']);
        console.log(this.productoService.getProductoById(params[ 'id' ]));
      });
      this.miPromesa.then( (resolve) => {
        this.listaBeneficios = this.listaBenef();
        this.listo = true;

      }, (reject) => {
        console.error("Lo siento, salio mal");
      }
      );
    }

  ngOnInit(): void {
  }

  regresar(): any {
    this.ruteador.navigate(['productos']);
  }

  listaBenef() {
    let array: string[];
    array = this.producto.propiedades;
    console.log(array);
    const opera = array.length / 3;
    let cont = parseInt(opera.toString(), 10);
    if (!(Number.isInteger(opera))) {
      cont = cont + 1;
    }
    let aux: Beneficios = {columna1: [], columna2: [], columna3: []};
    let j = 0;
    let k = 0;
    for (let i = 0; i < array.length; i++) {
      if (i < cont) {
        aux.columna1[i] = array[i];
      }
      if (i < cont * 2 && i >= cont){
        aux.columna2[j] = array[i];
        j ++;
      }
      if (i < cont * 3 && i >= cont * 2) {
        aux.columna3[k] = array[i];
        k ++;
      }
    }
    return aux;
  }

}
