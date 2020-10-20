import { Component, OnInit } from '@angular/core';

import { Platform, Config, ModalController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { OneSignal, OSNotificationPayload, OSNotificationOpenedResult } from '@ionic-native/onesignal/ngx';
import { TranslateService } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';
import { WindowRef } from './services/window-ref';
import { LocalStorage } from './services/local-storage';
import { environment } from 'src/environments/environment';
import { WalkthroughPage } from './pages/walkthrough/walkthrough';
import { EventBusService } from './services/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'PÁGINA INICIAL',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'MINHA CONTA',
      url: '/home',
      icon: 'settings'
    },
    {
      title: 'MEU CORPO',
      url: '/body',
      icon: 'body'
    },
    {
      title: 'OBJETIVOS E CONQUISTAS',
      url: '/conquest',
      icon: 'trophy'
    },
    {
      title: 'PERSONAL ONLINE',
      url: '/personal-online',
      icon: 'flash'
    }
  ];

  public labels = [
    {
      title: 'AULAS',
      url: '/home',
      icon: 'play-outline'
    },
    {
      title: 'CONTEÚDOS',
      url: '/home',
      icon: 'book-outline'
    }
  ];

  public labels2 = [
    {
      title: 'SOBRE USINA PLAY',
      url: '/about',
      icon: 'business-outline'
    },
    {
      title: 'AJUDA',
      url: '/help',
      icon: 'help-outline'
    }
  ];

  private currentUrl: string;
  private loader: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private router: Router,
    private windowRef: WindowRef,
    private storage: LocalStorage,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private eventBusService: EventBusService,
    private headerColor: HeaderColor,
    private oneSignal: OneSignal
  ) {
    this.initializeApp();
  }

  async initializeApp() {

    if (this.platform.is('desktop')) {
      const config = new Config;
      config.set('rippleEffect', false);
      config.set('animated', false);
    }

    this.subscribeToRouterChanges();

    this.setupDefaults();
    this.setupEvents();

    if (this.platform.is('cordova')) {
      await this.platform.ready();
      this.setupAndroidHeaderColor();
      this.setupStatusBar();
      this.setupOneSignal();
      this.splashScreen.hide();
    }
  }

  ngOnInit() {
  }

  setupOneSignal() {

    const appId = environment.oneSignal.appId;
    const googleProjectNumber = environment.oneSignal.googleProjectNumber;

    if (appId && googleProjectNumber) {
      this.oneSignal.startInit(appId, googleProjectNumber);
      this.oneSignal.inFocusDisplaying(
        this.oneSignal.OSInFocusDisplayOption.InAppAlert
      );

      this.oneSignal.handleNotificationReceived()
        .subscribe((payload: OSNotificationPayload) => {
          console.log('push received', payload);
        });

      this.oneSignal.handleNotificationOpened()
        .subscribe((res: OSNotificationOpenedResult) => {
          console.log('push opened', res);
        });

      this.oneSignal.endInit();
    }
  }

  setupStatusBar() {
    if (this.platform.is('ios')) {
      this.statusBar.overlaysWebView(true);
      this.statusBar.styleDefault();
    } else {
      this.statusBar.backgroundColorByHexString(environment.androidHeaderColor);
    }
  }

  setupAndroidHeaderColor() {
    if (environment.androidHeaderColor && this.platform.is('android')) {
      this.headerColor.tint(environment.androidHeaderColor);
    }
  }

  async setupDefaults() {

    this.translate.setDefaultLang(environment.defaultLang);

    try {

      const supportedLangs = ['pt-br'];
      const browserLang = navigator.language.substr(0, 2);

      let lang = await this.storage.getLang();

      if (lang === null && supportedLangs.indexOf(browserLang) !== -1) {
        lang = browserLang;
      }

      lang = lang || environment.defaultLang;

      this.storage.setLang(lang);
      this.translate.use(lang);
    } catch (error) {
      console.log(error);
    }

  }

  setupEvents() {

    this.eventBusService.on('user:login', (user: any) => {
      // TODO: Lógica de login
    });

    this.eventBusService.on('user:logout', () => {
      // TODO: Lõgica de logout
    });
  }

  subscribeToRouterChanges() {

    this.router.events.subscribe(async (event) => {

      if (event instanceof NavigationEnd) {

        if (!this.currentUrl) {

          try {

            const skipIntro = await this.storage.getSkipIntroPage();

            if (!skipIntro) {
              this.presentWalkthroughModal();
            }

          } catch (error) {
            console.log(error);
          }
        }

        this.currentUrl = this.router.url;
      }
    })

  }

  async presentWalkthroughModal() {

    await this.showLoadingView();

    const modal = await this.modalCtrl.create({
      component: WalkthroughPage
    });

    await modal.present();

    this.dismissLoadingView();
  }

  async showAlert(title: string = '', message: string = '', okText: string = 'OK') {
    let alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: [okText],
    });
    return await alert.present();
  }

  async showToast(message: string = '') {

    let alert = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    return await alert.present();
  }

  async showLoadingView() {

    const loadingText = await this.translate.get('LOADING').toPromise();

    this.loader = await this.loadingCtrl.create({
      message: loadingText
    });

    return await this.loader.present();
  }

  async dismissLoadingView() {

    if (!this.loader) return;

    try {
      await this.loader.dismiss()
    } catch (error) {
      console.log('ERROR: LoadingController dismiss', error);
    }
  }

  goTo(page: string) {
    this.router.navigate([page]);
  }

}
