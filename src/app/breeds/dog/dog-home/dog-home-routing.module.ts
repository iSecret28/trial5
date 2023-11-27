import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogHomePage } from './dog-home.page';

const routes: Routes = [
  {
    path: '',
    component: DogHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogHomePageRoutingModule {}
