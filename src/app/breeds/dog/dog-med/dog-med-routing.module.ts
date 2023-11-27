import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogMedPage } from './dog-med.page';

const routes: Routes = [
  {
    path: '',
    component: DogMedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogMedPageRoutingModule {}
