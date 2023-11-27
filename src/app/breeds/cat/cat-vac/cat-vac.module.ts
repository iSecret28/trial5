import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatVacPageRoutingModule } from './cat-vac-routing.module';

import { CatVacPage } from './cat-vac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatVacPageRoutingModule
  ],
  declarations: [CatVacPage]
})
export class CatVacPageModule {}
