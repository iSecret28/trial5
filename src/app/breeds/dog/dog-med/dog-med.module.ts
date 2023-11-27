import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogMedPageRoutingModule } from './dog-med-routing.module';

import { DogMedPage } from './dog-med.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogMedPageRoutingModule
  ],
  declarations: [DogMedPage]
})
export class DogMedPageModule {}
