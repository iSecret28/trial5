import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogFoodPageRoutingModule } from './dog-food-routing.module';

import { DogFoodPage } from './dog-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogFoodPageRoutingModule
  ],
  declarations: [DogFoodPage]
})
export class DogFoodPageModule {}
