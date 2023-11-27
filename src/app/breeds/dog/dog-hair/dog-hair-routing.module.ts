import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogHairPage } from './dog-hair.page';

const routes: Routes = [
  {
    path: '',
    component: DogHairPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogHairPageRoutingModule {}
