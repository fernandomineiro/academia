import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import Player from '@vimeo/player';

@Component({
  selector: 'app-round',
  templateUrl: './round.page.html',
  styleUrls: ['./round.page.scss'],
})

export class RoundPage implements OnInit {

  @ViewChild('slider') slider: IonSlides;

  @ViewChild('player_container', { read: ElementRef }) private playerContainer: ElementRef;
  private player: Player;

  page: string = '0';
  item: any = [{},{},{},{},{},{},{},{},{}];

  constructor() {

  }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.load();
  }

  async load() {
    try {

      this.initPlayer(76979871);

    } catch (err) {

    }
  }

  initPlayer(videoId) {
    this.player = new Player(this.playerContainer.nativeElement, {
      id: videoId,
      title: false,
      responsive: true,
      byline: false,
      playsinline: false,
      dnt: true
    });
    this.player.setColor('#F07D07');
  }

  async openVideo(videoId = null) {
    try {
      await this.player.ready();
      if(videoId) { 
        await this.player.loadVideo(videoId);
      }
      this.player.setColor('#F07D07');

      // const fullscreen = await this.player.getFullscreen();
      // if(!fullscreen) {
      //   await this.player.requestFullscreen();
      // }
      // await this.player.play();
    }catch(err) {
      console.log('openVideo', err);
    }
  }

  selectedTab(index: number) {
    this.slider.slideTo(index);
  }

  async moveButton() {
    const index = await this.slider.getActiveIndex();
    this.page = index.toString();
  }

}
