import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GaussService } from 'src/app/services/gauss.service';
import { FileListInterface } from 'src/app/interfaces/fileList.interface';
declare var $: any;

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})

export class CargaComponent {

  public formularioPosteado = false;

  public cargaFormulario = this.fb.group({
    archivo: ['', [Validators.required]]
  }, {validators: this.NoEsTXT()});

  constructor(private fb: FormBuilder,
              private router: Router,
              private _gs: GaussService) { }

  /**
   * Funcion que permite leer un archivo .txt
   * @param fileList
   */
  leerArchivo(fileList: FileListInterface) {
    this.formularioPosteado = true;
    // Obtener el archivo 0 dado que solo es 1
    let file = fileList[0];

    //Si el formulario es invalido, no se procedera a hacer las iteraciones
    if(this.cargaFormulario.invalid){
      $('#exampleModalCenter').modal('toggle');
      return;
    }
    // Clase que ayuda a leer el archivo
    const fileReader: FileReader = new FileReader();
    fileReader.readAsText(file);// Leer como texto
    fileReader.onloadend = (x: any) => {// Una vez leido, asignarlo a la variable
      this._gs.archivo = fileReader.result as string;
      this.router.navigate(['/iteraciones']);
    }
  }

  /**
   * Validador personalizado para saber si el archivo es una extension txt
   * @returns Regresa verdadero si el archivo NO es txt, en caso contrario false
   */
  NoEsTXT(){
    return (formGroup: FormGroup) => {
      const archivo = formGroup.get('archivo');
      if(archivo.value.includes('.txt')){
        archivo.setErrors(null);
      }else{
        archivo.setErrors({ NoEsTxt: true });
      }
    }
  }
}
