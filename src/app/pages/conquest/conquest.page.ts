import { Component, OnInit, Injector } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-conquest',
  templateUrl: './conquest.page.html',
  styleUrls: ['./conquest.page.scss'],
})
export class ConquestPage extends BasePage implements OnInit {
  @ViewChild('slider') slider: IonSlides;

  page: string = '0';
  btn1: boolean;
  btn2: boolean;

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  enableMenuSwipe() {
    return false;
  }

  ngOnInit() {
  } 

  selectedTab(index: number) {
    this.slider.slideTo(index);
 }

 async moveButton() {
    const index = await this.slider.getActiveIndex();
    this.page = index.toString();
 }

}
