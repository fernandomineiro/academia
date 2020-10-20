import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalOnlinePageRoutingModule } from './personal-online-routing.module';

import { PersonalOnlinePage } from './personal-online.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalOnlinePageRoutingModule
  ],
  declarations: [PersonalOnlinePage]
})
export class PersonalOnlinePageModule {}
