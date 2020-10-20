import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-personal-online',
  templateUrl: './personal-online.page.html',
  styleUrls: ['./personal-online.page.scss'],
})
export class PersonalOnlinePage extends BasePage implements OnInit {
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;

  navigate : any;
  sliderTwo: any;

  slideOptsTwo = {
    initialSlide: 0,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 5
  };

  constructor(
    injector: Injector
  )  {
    super(injector);
    this.sliderTwo =
    {
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
  }

  enableMenuSwipe() {
    return false;
  }

  ngOnInit() {
  }

  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }

  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
 

}
