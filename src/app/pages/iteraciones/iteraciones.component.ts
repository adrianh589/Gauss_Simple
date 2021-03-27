import { Component, OnInit } from '@angular/core';
import { GaussService } from 'src/app/gauss.service';

@Component({
  selector: 'app-iteraciones',
  templateUrl: './iteraciones.component.html',
  styleUrls: ['./iteraciones.component.css']
})
export class IteracionesComponent{

  public numeros: string[];

  constructor( private _gs: GaussService ) { 
    this.numeros = this.convertirAarray();
    console.log(this.numeros);
    
  }

  /**
   * Función para convertir el texto a array
   * @returns 
   */
  convertirAarray(){
    const archivo = this._gs.archivo;
    const array: string[] = archivo.split('\n');

    const prueba = [...array[0]].filter(space => space !== ' ');
    
    // const coeficientes: [];
    // array.forEach((linea: any, indice: any)=>{
    //   coeficientes.push({
    //      numero: linea[indice],
    //     xindice: linea[indice],
    //   }) 
    // });
    

    return array;
  }

}
