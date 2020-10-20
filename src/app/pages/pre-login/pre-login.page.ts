import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-pre-login',
  templateUrl: './pre-login.page.html',
  styleUrls: ['./pre-login.page.scss'],
})
export class PreLoginPage extends BasePage implements OnInit {

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

  async openLogin() {
    const modal = await this.modalCtrl.create({
      component: LoginPage
    });

    modal.present();
  }

}
