import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatMedPage } from './cat-med.page';

const routes: Routes = [
  {
    path: '',
    component: CatMedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatMedPageRoutingModule {}
