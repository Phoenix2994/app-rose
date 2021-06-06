import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOGO_MAP } from 'src/app/shared/maps/teams-logo';
import { Team } from 'src/app/shared/model/team';
import { DataLoaderService } from 'src/app/shared/services/data-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
