import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogHairPageRoutingModule } from './dog-hair-routing.module';

import { DogHairPage } from './dog-hair.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogHairPageRoutingModule
  ],
  declarations: [DogHairPage]
})
export class DogHairPageModule {}
