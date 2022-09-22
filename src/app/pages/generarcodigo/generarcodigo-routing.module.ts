import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarcodigoPage } from './generarcodigo.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarcodigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarcodigoPageRoutingModule {}
