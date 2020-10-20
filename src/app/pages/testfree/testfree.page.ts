import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { TestconfirmedPage } from '../testconfirmed/testconfirmed.page';

@Component({
  selector: 'app-testfree',
  templateUrl: './testfree.page.html',
  styleUrls: ['./testfree.page.scss'],
})
export class TestfreePage extends BasePage implements OnInit {

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
    const modal = await this.modalCtrl.create({
      component: TestconfirmedPage,
      animated: true
    });

    modal.present();
  }

}
