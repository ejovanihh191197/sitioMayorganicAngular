import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder,
              private httpSer: HttpService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get nombreInvalido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get emailInvalido(){
    return this.forma.get('email').invalid && this.forma.get('email').touched;
  }

  get telefonoInvalido(){
    return this.forma.get('telefono').invalid && this.forma.get('telefono').touched;
  }

  get textoInvalido(){
    return this.forma.get('texto').invalid && this.forma.get('texto').touched;
  }

  crearFormulario(){
    this.forma = this.fb.group({
      nombre:   ['', [Validators.required]],
      email:    ['', [Validators.required, Validators.pattern('[a-z0-9]+([a-z0-9.-_]+)*@[a-z]+(\.[a-z]{2,3})+$')]],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      texto:    ['', [Validators.required]]
    });
  }
  enviar(){
    var formD: any = new FormData();
    formD.append('nombre', this.forma.get('nombre').value);
    formD.append('email', this.forma.get('email').value);
    formD.append('telefono', this.forma.get('telefono').value);
    formD.append('texto', this.forma.get('texto').value);
    this.httpSer.sendPostRequest( formD ).subscribe( (resp) => {
      console.log(resp);
    });
  }

}
