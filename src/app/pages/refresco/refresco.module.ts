import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefrescoPageRoutingModule } from './refresco-routing.module';

import { RefrescoPage } from './refresco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefrescoPageRoutingModule
  ],
  declarations: [RefrescoPage]
})
export class RefrescoPageModule {}
