import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarcodigoPageRoutingModule } from './generarcodigo-routing.module';

import { GenerarcodigoPage } from './generarcodigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarcodigoPageRoutingModule
  
  ],
  declarations: [GenerarcodigoPage]
})
export class GenerarcodigoPageModule {}
