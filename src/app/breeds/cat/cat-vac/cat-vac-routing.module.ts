import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatVacPage } from './cat-vac.page';

const routes: Routes = [
  {
    path: '',
    component: CatVacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatVacPageRoutingModule {}
