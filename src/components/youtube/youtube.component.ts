import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent {
  player: YT.Player;
  private id: string = 'PRQCAL_RMVo';
  private height: number = 500;
  private width: number = 700; 

  constructor(private router: Router) {}

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

  back() {
    this.router.navigate(["/home"]);
}
}
