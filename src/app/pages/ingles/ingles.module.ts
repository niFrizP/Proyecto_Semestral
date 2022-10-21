import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InglesPageRoutingModule } from './ingles-routing.module';

import { InglesPage } from './ingles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InglesPageRoutingModule
  ],
  declarations: [InglesPage]
})
export class InglesPageModule {}
