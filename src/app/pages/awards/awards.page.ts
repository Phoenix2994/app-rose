import { Component, OnInit } from '@angular/core';
import { Award } from 'src/app/shared/model/award';
import { DataLoaderService } from 'src/app/shared/services/data-loader.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.page.html',
  styleUrls: ['./awards.page.scss'],
})
export class AwardsPage implements OnInit {
  awards: Award[];
  seasonAward: Award;
  totalAwards: number = 0;

  constructor(private dataLoader: DataLoaderService) {}

  ngOnInit() {
    this.awards = this.dataLoader.getAwards();
    this.seasonAward = this.awards[this.awards.length - 1];
    this.seasonAward.awards.forEach((award) => {
      this.totalAwards += award.value;
    });
  }

  changeSeason(event) {
    this.seasonAward = this.awards.filter(
      (award) => award.season === event.detail.value
    )[0];
    this.totalAwards = 0;
    this.seasonAward.awards.forEach((award) => {
      this.totalAwards += award.value;
    });
  }
}
