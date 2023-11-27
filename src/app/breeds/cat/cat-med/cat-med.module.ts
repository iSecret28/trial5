import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatMedPageRoutingModule } from './cat-med-routing.module';

import { CatMedPage } from './cat-med.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatMedPageRoutingModule
  ],
  declarations: [CatMedPage]
})
export class CatMedPageModule {}
