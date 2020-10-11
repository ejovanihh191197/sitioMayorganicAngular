import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.css']
})
export class TarjetaProductoComponent implements OnInit {

  @Input()
  produc: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
