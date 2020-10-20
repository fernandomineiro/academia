import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestfreePage } from './testfree.page';

const routes: Routes = [
  {
    path: '',
    component: TestfreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestfreePageRoutingModule {}
