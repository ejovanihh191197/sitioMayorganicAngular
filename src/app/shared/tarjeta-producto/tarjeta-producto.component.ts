import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.css']
})
export class TarjetaProductoComponent implements OnInit {

  @Input()
  produc: any = {};
  @Input()
  index: any;
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  public verProducto( i: number): any {
    this.router.navigate(['detalle', i]);
  }

}
