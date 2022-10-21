import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatematicasPage } from './matematicas.page';

const routes: Routes = [
  {
    path: '',
    component: MatematicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatematicasPageRoutingModule {}
