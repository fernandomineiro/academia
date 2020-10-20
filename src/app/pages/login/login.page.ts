import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { RecoveryPage } from '../recovery/recovery.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePage implements OnInit {

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

  async openRecovery() {
    this.onDismiss();
    const modal = await this.modalCtrl.create({
      component: RecoveryPage
    });

    modal.present();
  }

}
