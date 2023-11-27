import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatHomePage } from './cat-home.page';

const routes: Routes = [
  {
    path: '',
    component: CatHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatHomePageRoutingModule {}
