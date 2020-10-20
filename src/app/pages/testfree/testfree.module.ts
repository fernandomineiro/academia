import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestfreePageRoutingModule } from './testfree-routing.module';

import { TestfreePage } from './testfree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestfreePageRoutingModule
  ],
  declarations: [TestfreePage]
})
export class TestfreePageModule {}
