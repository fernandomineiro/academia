import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-testconfirmed',
  templateUrl: './testconfirmed.page.html',
  styleUrls: ['./testconfirmed.page.scss'],
})
export class TestconfirmedPage extends BasePage implements OnInit {

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

  onDismiss() {
    return this.modalCtrl.dismiss();
  }

  async confirmTest() {
    await this.onDismiss();
    this.navigateTo('/home');
  }

}
