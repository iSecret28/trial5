import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogActivityPage } from './dog-activity.page';

const routes: Routes = [
  {
    path: '',
    component: DogActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogActivityPageRoutingModule {}
