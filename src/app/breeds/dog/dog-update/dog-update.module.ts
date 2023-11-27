import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogUpdatePageRoutingModule } from './dog-update-routing.module';

import { DogUpdatePage } from './dog-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DogUpdatePage]
})
export class DogUpdatePageModule {}
