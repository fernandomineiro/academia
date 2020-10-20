import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { TestfreePage } from '../testfree/testfree.page';

@Component({ 
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BasePage implements OnInit {

  public sliderTwo: any = {
    isBeginningSlide: true,
    isEndSlide: false,
    slidesItems: [
      {
        id: 324
      },
      {
        id: 321
      },
      {
        id: 435
      },
      {
        id: 524
      },
      {
        id: 235
      }
    ]
  };

  public slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 15
  };

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  enableMenuSwipe() {
    return true;
  }

  ngOnInit() {
  }

  async blockPage() {
    await this.showLoadingView({ showOverlay: true });

    const modal = await this.modalCtrl.create({
      component: TestfreePage
    });

    await modal.present();

    await this.dismissLoadingView();
  }

}
