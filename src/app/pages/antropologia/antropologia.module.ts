import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntropologiaPageRoutingModule } from './antropologia-routing.module';

import { AntropologiaPage } from './antropologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntropologiaPageRoutingModule
  ],
  declarations: [AntropologiaPage]
})
export class AntropologiaPageModule {}
