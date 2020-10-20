import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoundPageRoutingModule } from './round-routing.module';

import { RoundPage } from './round.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoundPageRoutingModule,
    SharedModule
  ],
  declarations: [RoundPage]
})
export class RoundPageModule {}
