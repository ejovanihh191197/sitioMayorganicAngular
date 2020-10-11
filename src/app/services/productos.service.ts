import { Injectable } from '@angular/core';

interface Contenido {
  contenido: string;
  caloreias: string;
  vrn: string;
}
export interface Producto{
  nombre: string;
  tamanio: string;
  img: string;
  porciones: string;
  propiedades: string[];
  id?: number;
  info?: Contenido[];
  vitaminas?: string[];
  descripcion?: string;
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
      propiedades: ['Excelente preventivo', 'Estrés', 'Dificultad para consiliar el sueño', 'Resfriado común frecuente', 'Diabetes', 'Hipertensión', 'Hipotensión', 'Problemas hormonales', 'Alergias'],
      info: [
        {
          contenido: 'Calorias',
          caloreias: '5.5',
          vrn: ''
        },
        {
          contenido: 'Proteinas',
          caloreias: '0.02 gr',
          vrn: ''
        },
        {
          contenido: 'Lípidos',
          caloreias: '0.004 gr',
          vrn: '0 %'
        },
        {
          contenido: 'Carbohidratos',
          caloreias: '1.16 gr',
          vrn: '0.4 %'
        }
      ]
    },
    {
      nombre: 'BIOtiquín Especial',
      tamanio: '125 ml',
      img: 'assets/img/productos/bt-especial.jpg',
      porciones: 'Medida de porción: 2 Tsp. (1/3 oz o 10 ml)\nPorciones por contenedor: 12.5',
      propiedades: ['Diabetes sin control', 'Pie diabético', 'Insuficiencia renal', 'Tumores benignos', 'Tumores malignos', 'Hipertensión sin control', 'Artritis reumatoide', 'virus de papiloma humano', 'problemas cardiacos', 'Fibrosis pulmonar y mamaria', 'Patologías autoinmune', 'Cáncer', 'Infertilidad', 'Covid 19'],
      info: [
        {
          contenido: 'Calorias',
          caloreias: '25',
          vrn: ''
        },
        {
          contenido: 'Proteinas',
          caloreias: '0.58 gr',
          vrn: ''
        },
        {
          contenido: 'Lípidos',
          caloreias: '0.02 gr',
          vrn: '0 %'
        },
        {
          contenido: 'Carbohidratos',
          caloreias: '5.52 gr',
          vrn: '0.2 %'
        }
      ]
    },
    {
      nombre: 'BIOtiquín Gotero',
      tamanio: '25 ml',
      img: 'assets/img/productos/bt-gotero-reg.jpg',
      porciones: 'Medida de porción: 1 Tsp. (1/6 oz o 5 ml)\nPorciones por contenedor: 5',
      propiedades: ['Alergias', 'Sinusitis', 'Cataratas', 'Glaucoma', 'Obstrucción Nasal', 'Otitis', 'Conjuntivitis', 'Rinitis', 'Heridas'],
      info: [
        {
          contenido: 'Calorias',
          caloreias: '5.5',
          vrn: ''
        },
        {
          contenido: 'Proteinas',
          caloreias: '0.02 gr',
          vrn: ''
        },
        {
          contenido: 'Lípidos',
          caloreias: '0.004 gr',
          vrn: '0 %'
        },
        {
          contenido: 'Carbohidratos',
          caloreias: '1.16 gr',
          vrn: '0.4 %'
        }
      ]
    },
    {
      nombre: 'BIOteno',
      tamanio: '90 gr',
      img: 'assets/img/productos/bt-bioteno.jpg',
      porciones: 'Medida de porción: 2gr\nPorciones por contenedor: 45',
      propiedades: ['Heridas', 'Pie Diabético', 'Hernia Hiatal', 'Esteatosis Hepática', 'Colitis', 'Gastritis', 'Acidéz', 'Estreñimiento', 'Verrugas', 'Quemaduras', 'Úlcera varicosa'],
      info: [
        {
          contenido: 'Contenido energetico',
          caloreias: '8.37 KJ',
          vrn: '0.0009 %'
        },
        {
          contenido: 'Proteinas',
          caloreias: '0.06 gr',
          vrn: '0.0012 %'
        },
        {
          contenido: 'Lípidos',
          caloreias: '0.06 gr',
          vrn: '0.0008 %'
        },
        {
          contenido: 'Sodio',
          caloreias: '1 mg',
          vrn: '*'
        }
      ]
    },
    {
      nombre: 'BIOlonge Agua',
      tamanio: '500 ml',
      img: 'assets/img/productos/bt-biolong-agua.jpg',
      porciones: 'NO APLICA',
      propiedades: ['Buen funcionamiento general', 'Mejora de la memoria', 'Reduce movimientos involuntarios', 'Relajante muscular', 'Mejoras en la visión', 'Ayuda a la cicatrización', 'Ayuda a combatir el cansancio', 'Previene la cefalea'],
      vitaminas: ['Vitamina D2', 'Vitamina D3', 'Betacaroteno', 'Lycopeno'],
      descripcion: '“BIOlonge agua” o agua BIOlonge, una nueva administración de alimento esencial para el buen funcionamiento celular en general, la reconexión neuronal, remisión de “ticks” musculares involuntarios, memoria notablemente mejorada, relax muscular y sistema nervioso, mejoras en la visión con nitidez y colores, sin lastimar ojos expuestos al Sol o luces nocturnas de carros en carretera, remisión de dolor, sanación pronta de heridas, aumentar resistencia al cansancio, sin dolor de cabeza o muscular al siguiente día de esfuerzo, y solo por tomar “Agua Viva para la Vida”!'
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
