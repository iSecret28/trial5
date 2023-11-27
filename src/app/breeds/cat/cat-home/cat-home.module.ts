import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatHomePageRoutingModule } from './cat-home-routing.module';

import { CatHomePage } from './cat-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatHomePageRoutingModule
  ],
  declarations: [CatHomePage]
})
export class CatHomePageModule {}
