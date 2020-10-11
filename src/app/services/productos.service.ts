import { Injectable } from '@angular/core';

export interface Producto{
  nombre: string;
  tamanio: string;
  img: string;
  propiedades: string[];
  id?: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private productos: Producto[] = [
    {
      nombre: 'Biotiquín Regular',
      tamanio: '125 mililitros',
      img: 'assets/img/productos/bt-regular.jpg',
      propiedades: ['Excelente preventivo', 'Estrés', 'Dificultad para consiliar el sueño', 'Resfriado común frecuente', 'Diabetes', 'Hipertensión', 'Hipotensión', 'Problemas hormonales', 'Alergias']
    },
    {
      nombre: 'Biotiquín Especial',
      tamanio: '125 mililitros',
      img: 'assets/img/productos/bt-especial.jpg',
      propiedades: ['Diabetes sin control', 'Pie diabético', 'Insuficiencia renal', 'Tumores benignos', 'Tumores malignos', 'Hipertensión sin control', 'Artritis reumatoide', 'virus de papiloma humano', 'problemas cardiacos', 'Fibrosis pulmonar y mamaria', 'Patologías autoinmune', 'Cáncer', 'Infertilidad', 'Covid 19']
    },
    {
      nombre: 'Biotiquín Gotero',
      tamanio: '25 mililitros',
      img: 'assets/img/productos/bt-gotero-reg.jpg',
      propiedades: ['Alergias', 'Sinusitis', 'Cataratas', 'Glaucoma', 'Obstrucción Nasal', 'Otitis', 'Conjuntivitis', 'Rinitis', 'Heridas']
    },
    {
      nombre: 'Bioteno',
      tamanio: '90 gramos',
      img: 'assets/img/productos/bt-bioteno.jpg',
      propiedades: ['Heridas', 'Pie Diabético', 'Hernia Hiatal', 'Esteatosis Hepática', 'Colitis', 'Gastritis', 'Acidéz', 'Estreñimiento', 'Verrugas', 'Quemaduras', 'Úlcera varicosa']
    },
    {
      nombre: 'Agua BIOlong',
      tamanio: '500 mililitros',
      img: 'assets/img/productos/bt-biolong-agua.jpg',
      propiedades: ['Buen funcionamiento general', 'Mejora de la memoria', 'Reduce movimientos involuntarios', 'Relajante muscular', 'Mejoras en la visión', 'Ayuda a la cicatrización', 'Ayuda a combatir el cansancio', 'Previene la cefalea']
    }
];

  constructor() { }
}
