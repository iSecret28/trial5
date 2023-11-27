import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogHomePageRoutingModule } from './dog-home-routing.module';

import { DogHomePage } from './dog-home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogHomePageRoutingModule
  ],
  declarations: [DogHomePage]
})
export class DogHomePageModule {}
