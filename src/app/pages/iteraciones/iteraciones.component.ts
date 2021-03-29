import { Component, OnInit } from '@angular/core';
import { GaussService } from 'src/app/services/gauss.service';
import {GaussSimple} from '../../helpers/GaussSimple';

@Component({
  selector: 'app-iteraciones',
  templateUrl: './iteraciones.component.html',
  styleUrls: ['./iteraciones.component.css']
})
export class IteracionesComponent{

  public numeros: number[][];

  constructor( private gaussService: GaussService ) {
    this.numeros = this.convertirAarray();
    console.log(this.numeros);
    const gaussSimple = new GaussSimple(this.numeros);
  }

  /**
   * Función para convertir el texto a array
   * @returns Regresa el Array de arrays con los numeros para la funcion de Gauss Simple
   */
  convertirAarray(){
    const archivo = this.gaussService.archivo;
    const array: number[][] = archivo
      .split('\n')// Separar por saltos de linea
      .map((value, index, array)=> {// mapear cada indice dado que son strings
        return array[index]// Tomar cada linea
        .split(' ')// Convertir a array el string
        .map(Number) // Convertir cada posicion de string a tipo Number
      });
    array.pop();// Dadp que guarda la ultima posicion como vacio, se elimina
    return array;
  }

}
