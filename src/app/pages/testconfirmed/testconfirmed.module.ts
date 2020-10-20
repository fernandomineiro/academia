import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestconfirmedPageRoutingModule } from './testconfirmed-routing.module';

import { TestconfirmedPage } from './testconfirmed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestconfirmedPageRoutingModule
  ],
  declarations: [TestconfirmedPage]
})
export class TestconfirmedPageModule {}
