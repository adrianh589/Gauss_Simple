/**
 * Clase que ejecutara las acciones del gauss simple
 */
import {GaussService} from "../services/gauss.service";

export class GaussSimple {

  private iteracionesHTML = [];

  constructor(private numeros: number[][]) {}

  /**
   * Funcion para hacer la operacion de gauss simple
   */
  ejecutar():number[][] {
    let matrix = [...this.numeros];
    let iteracion = 0;
    this.iteracionesHTML.push({data: [...matrix], iteracion});
    for (let i = 0; i < matrix[0].length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if( i < j && matrix[j][i] !== 0){
          let aux = this.escogerFilaAuxiliar(matrix, i, j);
          matrix[j] = this.operarFila(aux, matrix[j][i], aux[i], matrix[j]);
          matrix[j][i]=0;
          this.iteracionesHTML.push({data: [...matrix], iteracion: iteracion+=1});
        }
      }
    }
    return this.iteracionesHTML;
  }

  /**
   * Funcion para escoger la fila auxiliar
   * @param matrix Matriz modificada a mostrar
   * @param i posicion en i guardada
   * @param j posicion en j guardado
   */
  escogerFilaAuxiliar(matrix: number[][], i: number, j: number): number[] {
    const jModificado = j - 1;
    for (let j = jModificado; j >= 0; j--) {
      if (matrix[j][i] !== 0) {
        return matrix[j];
      }
    }
  }

  /**
   * Funcion para operar la fila a modificar
   * @param filaAuxiliar Fila que se escogerá de pivote
   * @param valorActual Valor en el que se encuentra actualmente debajo de la diagonal
   * @param valActFilAux Valor de la fila actual auxiliar para mantener la iteracion
   * @param filaAModificar Fila de la matriz original para reemplazarla
   */
  operarFila(filaAuxiliar: number[], valorActual: number, valActFilAux: number, filaAModificar: number[]): number[] {
    let aux: number[] = [...filaAuxiliar];
    for (let j = 0; j < aux.length; j++) {
      aux[j] = filaAModificar[j] - (aux[j] * (valorActual / valActFilAux));
    }
    return aux;
  }

}
