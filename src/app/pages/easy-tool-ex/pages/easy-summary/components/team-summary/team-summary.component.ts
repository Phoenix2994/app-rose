import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Player } from 'src/app/pages/tool-ex/model/player';

@Component({
  selector: 'app-team-summary',
  templateUrl: './team-summary.component.html',
  styleUrls: ['./team-summary.component.scss'],
})
export class TeamSummaryComponent implements OnInit {
  @ViewChild('teamTable') teamTable: MatTable<Player>;
  @ViewChild('finalTeamTable') finalTeamTable: MatTable<Player>;
  @Input() teamId: number;
  @Input() teamPos: number;
  @Input() team: Array<Player>;
  @Input() teamValues: Array<Player>;
  @Input() teamCols: string[];
  @Input() finalTeamCols: string[];
  @Output() extraEvent = new EventEmitter<number>();
  @Output() removeEvent = new EventEmitter<number>();

  extra: number;

  constructor() {}

  ngOnInit() {}

  setExtra() {
    this.extraEvent.emit(this.extra);
  }

  onRemove(id: number) {
    this.removeEvent.emit(id);
  }
  computeRoleColor(role: string) {
    switch (role) {
      case 'P':
        return '#F8AB29';
      case 'D':
        return '#63C623';
      case 'C':
        return '#2E6BE6';
      case 'A':
        return '#F21A3C';
    }
  }
}
