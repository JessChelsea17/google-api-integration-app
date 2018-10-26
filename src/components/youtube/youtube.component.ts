import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent {
  player: YT.Player;
  id: string = 'PRQCAL_RMVo';
  height: number = 500;
  width: number = 700; 

  constructor(private router: Router) {}

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  back() {
    this.router.navigate(["/home"]);
}
}
