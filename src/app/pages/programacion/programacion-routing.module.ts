import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramacionPage } from './programacion.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramacionPageRoutingModule {}
