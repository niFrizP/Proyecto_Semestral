import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntropologiaPage } from './antropologia.page';

const routes: Routes = [
  {
    path: '',
    component: AntropologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntropologiaPageRoutingModule {}
