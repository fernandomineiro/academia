import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage extends BasePage implements OnInit {

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

}
