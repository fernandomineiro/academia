import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConquestPageRoutingModule } from './conquest-routing.module';

import { ConquestPage } from './conquest.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConquestPageRoutingModule,
    SharedModule
  ],
  declarations: [ConquestPage]
})
export class ConquestPageModule {}
