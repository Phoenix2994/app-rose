import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Player } from 'src/app/shared/model/player';
import { Stats } from 'src/app/shared/model/stats';
import { DataLoaderService } from 'src/app/shared/services/data-loader.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  player: Player;
  season: string;
  stats: Stats;

  constructor(
    private route: ActivatedRoute,
    private dataLoader: DataLoaderService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (+params.teamId === 0 || params.teamId) {
        this.dataLoader
          .getTeam(params.teamId)
          .players.concat(
            this.dataLoader.getTeam(params.teamId).youth,
            this.dataLoader.getTeam(params.teamId).borrowed
          )
          .forEach((player: Player) => {
            if (player.playerId === +params.id) {
              player.stats = [
                ...player.stats.filter(
                  (stats) => Object.keys(stats).length !== 0
                ),
              ];
              /*
            player.stats.forEach((stats: Stats) => {
              if (stats.season === '2020-21') {
                // this.stats = stats;
                // this.season = '2020-21';
              }
            });*/
              this.player = player;
            }
          });
      } else {
        this.dataLoader.getFreePlayers().forEach((player: Player) => {
          if (player.playerId === +params.id) {
            player.stats = [
              ...player.stats.filter(
                (stats) => Object.keys(stats).length !== 0
              ),
            ];
            this.player = player;
          }
        });
      }
    });
  }

  ionViewDidEnter() {
    this.content.scrollToTop();
    this.stats = null;
    this.season = '';
  }

  order(playerStats: any) {
    playerStats.sort((a, b) => a.season.localeCompare(b.season));
    return playerStats;
  }

  onChange($event) {
    this.season = $event.detail.value;
    this.player.stats.forEach((stats: Stats) => {
      if (stats.season === this.season) {
        this.stats = stats;
      }
    });
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  }

  scrollToBottom() {
    this.content.scrollToBottom(200);
  }

  checkSeason(season: string) {
    return season === this.season;
  }
}
