import { Injectable } from '@angular/core';

export interface Producto{
  nombre: string;
  tamanio: string;
  img: string;
  porciones: string;
  propiedades: string[];
  id?: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private productos: Producto[] = [
    {
      nombre: 'BIOtiquín Regular',
      tamanio: '125 ml',
      img: 'assets/img/productos/bt-regular.jpg',
      porciones: 'Medida de porción: 1 Tsp. (1/6 oz o 5 ml) Porciones por contenedor: 25',
      propiedades: ['Excelente preventivo', 'Estrés', 'Dificultad para consiliar el sueño', 'Resfriado común frecuente', 'Diabetes', 'Hipertensión', 'Hipotensión', 'Problemas hormonales', 'Alergias']
    },
    {
      nombre: 'BIOtiquín Especial',
      tamanio: '125 ml',
      img: 'assets/img/productos/bt-especial.jpg',
      porciones: 'Medida de porción: 2 Tsp. (1/3 oz o 10 ml)\nPorciones por contenedor: 12.5',
      propiedades: ['Diabetes sin control', 'Pie diabético', 'Insuficiencia renal', 'Tumores benignos', 'Tumores malignos', 'Hipertensión sin control', 'Artritis reumatoide', 'virus de papiloma humano', 'problemas cardiacos', 'Fibrosis pulmonar y mamaria', 'Patologías autoinmune', 'Cáncer', 'Infertilidad', 'Covid 19']
    },
    {
      nombre: 'BIOtiquín Gotero',
      tamanio: '25 ml',
      img: 'assets/img/productos/bt-gotero-reg.jpg',
      porciones: 'Medida de porción: 1 Tsp. (1/6 oz o 5 ml)\nPorciones por contenedor: 5',
      propiedades: ['Alergias', 'Sinusitis', 'Cataratas', 'Glaucoma', 'Obstrucción Nasal', 'Otitis', 'Conjuntivitis', 'Rinitis', 'Heridas']
    },
    {
      nombre: 'BIOteno',
      tamanio: '90 gr',
      img: 'assets/img/productos/bt-bioteno.jpg',
      porciones: 'Medida de porción: 2gr\nPorciones por contenedor: 45',
      propiedades: ['Heridas', 'Pie Diabético', 'Hernia Hiatal', 'Esteatosis Hepática', 'Colitis', 'Gastritis', 'Acidéz', 'Estreñimiento', 'Verrugas', 'Quemaduras', 'Úlcera varicosa']
    },
    {
      nombre: 'BIOlonge Agua',
      tamanio: '500 ml',
      img: 'assets/img/productos/bt-biolong-agua.jpg',
      porciones: 'NO APLICA',
      propiedades: ['Buen funcionamiento general', 'Mejora de la memoria', 'Reduce movimientos involuntarios', 'Relajante muscular', 'Mejoras en la visión', 'Ayuda a la cicatrización', 'Ayuda a combatir el cansancio', 'Previene la cefalea']
    }
];

  public getProductos(): Producto[] {
    return this.productos;
  }

  public getProductoById( i: number ): Producto{
    return this.productos[i];
  }

  constructor() { }
}
