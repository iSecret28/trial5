import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogFoodPage } from './dog-food.page';

const routes: Routes = [
  {
    path: '',
    component: DogFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogFoodPageRoutingModule {}
