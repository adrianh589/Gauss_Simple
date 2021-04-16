/**
 * Clase que ejecutara las acciones del gauss simple
 */
import {GaussService} from "../services/gauss.service";

export class GaussSimple{

  private tablaResultados = [];
  private iteracionesHTML = [];

  constructor(private numeros: number[][]) { }

  /**
   * Funcion para hacer la operacion de gauss simple
   */
  ejecutar(): number[][]{
    const matrix = [...this.numeros];
    this.iteracionesHTML.push([...matrix]);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if(j < i && matrix[i][j] !== 0){// Condicion para iterar unicamente la diagonal de la matriz
          const aux: number[] = this.escogerFilaAuxiliar(matrix, i, j);
          const valAct = matrix[i][j];
          const valActFilaAux = aux[j];
          matrix[i] = this.operarFila(aux, valAct, valActFilaAux, matrix[i], j);
          this.iteracionesHTML.push([...matrix]);//Meter las iteraciones
        }
      }
    }
    console.table(matrix);
    return this.iteracionesHTML;
  }

  /**
   * Funcion para operar la fila a modificar
   * @param filaAuxiliar Fila que se escogerá de pivote
   * @param valorActual Valor en el que se encuentra actualmente debajo de la diagonal
   * @param valActFilAux Valor de la fila actual auxiliar para mantener la iteracion
   * @param filaAModificar Fila de la matriz original para reemplazarla
   * @param act Valor en j para mantener la posicion
   */
  operarFila(filaAuxiliar: number[], valorActual: number, valActFilAux: number, filaAModificar: number[], act: number): number[]{
    let aux: number[] = [...filaAuxiliar];
    for (let i = act; i < filaAModificar.length; i++) {
      aux[i] = Math.round(filaAModificar[i] - (aux[i] * (valorActual/valActFilAux)));
    }
    return aux;
  }

  /**
   * Funcion para escoger la fila auxiliar
   * @param matrix Matriz modificada a mostrar
   * @param i posicion en i guardada
   * @param j posicion en j guardado
   * NOTA: Preguntar que pasa si el primer renglon tiene un 0
   */
  escogerFilaAuxiliar(matrix: number[][], i: number, j: number): number[]{
    const iModificado = i - 1;
    for (let i = iModificado; i >= 0; i--) {
      if( matrix[i][j] !== 0 ){
        return matrix[i];
      }
    }
  }

}
