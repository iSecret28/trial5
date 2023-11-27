import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogActivityPageRoutingModule } from './dog-activity-routing.module';

import { DogActivityPage } from './dog-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogActivityPageRoutingModule
  ],
  declarations: [DogActivityPage]
})
export class DogActivityPageModule {}
