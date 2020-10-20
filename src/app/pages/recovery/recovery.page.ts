import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage extends BasePage implements OnInit {

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

  save() {
    this.onDismiss();
    this.navigateTo('/home');
  }

}
