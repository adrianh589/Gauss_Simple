import {Component, OnInit} from '@angular/core';
import {GaussService} from 'src/app/services/gauss.service';
import {GaussSimple} from '../../helpers/GaussSimple';
import gaussResult from 'gaussian-elimination';

@Component({
  selector: 'app-iteraciones',
  templateUrl: './iteraciones.component.html',
  styleUrls: ['./iteraciones.component.css']
})
export class IteracionesComponent {

  public numeros;
  public iteracionesHTML;
  public resultadosFinales;

  constructor(private gaussService: GaussService) {
    // this.numeros = this.convertirAarray();//Descomentar esta linea para leer los numeros por txt
    
    this.numeros = [
      [3, -0.1,	-0.2, 5,	7.85],
      [0.1,	7,	-0.3, 3,	-19.3],
      [0.3,	-0.2,	10, 2,	71.4],
      [0.5,	-0.5,	7, 0.5,	21.2]
    ];

    //Instancia de la clase
    const gaussSimple = new GaussSimple(this.numeros);
    //Ejecutar el proceso
    this.iteracionesHTML = gaussSimple.ejecutar();
    //Imprimir por consola las iteraciones
    console.log(this.iteracionesHTML);
    //Resultados finales de la matriz
    this.resultadosFinales = gaussResult(this.numeros);
    console.table(this.resultadosFinales);
  }

  /**
   * Función para convertir el texto a array
   * @returns Regresa el Array de arrays con los numeros para la funcion de Gauss Simple
   */
  convertirAarray() {
    const archivo = this.gaussService.archivo;
    const array: number[][] = archivo
      .split('\n')// Separar por saltos de linea
      .map((value, index, array) => {// mapear cada indice dado que son strings
        return array[index]// Tomar cada linea
          .split(' ')// Convertir a array el string
          .map(Number) // Convertir cada posicion de string a tipo Number
      });
    array.pop();// Dado que guarda la ultima posicion como vacio, se elimina
    return array;
  }

}
