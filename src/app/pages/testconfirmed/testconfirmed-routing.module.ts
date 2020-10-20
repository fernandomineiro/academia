import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestconfirmedPage } from './testconfirmed.page';

const routes: Routes = [
  {
    path: '',
    component: TestconfirmedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestconfirmedPageRoutingModule {}
