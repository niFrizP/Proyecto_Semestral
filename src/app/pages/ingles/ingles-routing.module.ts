import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InglesPage } from './ingles.page';

const routes: Routes = [
  {
    path: '',
    component: InglesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InglesPageRoutingModule {}
