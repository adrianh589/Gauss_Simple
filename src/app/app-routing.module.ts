import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaComponent } from './pages/carga/carga.component';
import { IteracionesComponent } from './pages/iteraciones/iteraciones.component';

const routes: Routes = [
  { path: '', component: CargaComponent },
  { path: 'iteraciones', component: IteracionesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
