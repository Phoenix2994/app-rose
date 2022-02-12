import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { Subject } from 'rxjs';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root',
})
export class EasyToolService {
  team1 = new Team();
  team2 = new Team();

  $extra1: Subject<number>;
  $extra2: Subject<number>;

  globalId = 0;

  firstTeamId: number;
  secondTeamId: number;

  constructor() {
    this.$extra1 = new Subject<number>();
    this.$extra2 = new Subject<number>();

    this.$extra1.subscribe((value) => (this.team1.extra = +value));
    this.$extra2.subscribe((value) => (this.team2.extra = +value));
  }

  save(id: number, player: Player) {
    this.globalId += 1;
    player.id = this.globalId;

    if (id == 1) {
      this.team1.players.push(player);
    } else {
      this.team2.players.push(player);
    }
  }

  initValues() {
    this.team1.finalPlayers = [];
    this.team2.finalPlayers = [];
    this.team1.bonusList = [];
    this.team2.bonusList = [];
    this.team1.value = +this.team1.extra;
    this.team2.value = +this.team2.extra;
    this.team1.finalValue = +this.team1.extra;
    this.team2.finalValue = +this.team2.extra;
    this.team1.finalValueEval = 0;
    this.team2.finalValueEval = 0;
    this.team1.repaid = 0;
    this.team2.repaid = 0;
    this.team1.quot = 0;
    this.team2.quot = 0;
    this.team1.finalQuot = 0;
    this.team2.finalQuot = 0;
  }

  computeInitialTeamValues() {
    this.team1.players.forEach((player) => {
      if (
        player.contractType === 'lend' ||
        (player.contractType === 'lendR' && player.repaid === 'no')
      ) {
        this.team1.value += +player.value * (+player.contractLength / 12) * 0.8;
      } else if (
        player.contractType === 'lendR' ||
        player.contractType === 'lendO'
      ) {
        this.team1.value += +player.value;
      } else {
        this.team1.value += +player.value;
      }
      this.team1.finalQuot += +player.finalQuot;
      this.team1.quot += +player.quot;

      if (player.bonusList) {
        let playerBonus = 0;
        player.bonusList.forEach((bonus) => {
          playerBonus += bonus.events * bonus.reward;
        });
        this.team1.bonusList.push(playerBonus);
      }
      if (player.repaid == 'yes') {
        this.team1.repaid += player.repaidValue;
      }
    });

    this.team2.players.forEach((player) => {
      if (
        player.contractType === 'lend' ||
        (player.contractType === 'lendR' && player.repaid === 'no')
      ) {
        this.team2.value += +player.value * (+player.contractLength / 12) * 0.8;
      } else if (
        player.contractType === 'lendR' ||
        player.contractType === 'lendO'
      ) {
        this.team2.value += +player.value;
      } else {
        this.team2.value += +player.value;
      }
      this.team2.finalQuot += +player.finalQuot;
      this.team2.quot += +player.quot;

      if (player.bonusList) {
        let playerBonus = 0;
        player.bonusList.forEach((bonus) => {
          playerBonus += bonus.events * bonus.reward;
        });
        this.team2.bonusList.push(playerBonus);
      }
      if (player.repaid == 'yes') {
        this.team2.repaid += player.repaidValue;
      }
    });
  }

  computeFinalValues() {
    this.initValues();
    this.computeInitialTeamValues();

    this.team1.finalPlayers = [...this.team1.players];
    this.team2.finalPlayers = [...this.team2.players];

    console.log(this.team1.value - this.team2.value);

    this.team1.bonus = this.team1.bonusList.reduce((a, b) => a + b, 0);
    this.team2.bonus = this.team2.bonusList.reduce((a, b) => a + b, 0);

    if (this.team1.value >= this.team2.value) {
      let finalFirstTeam = [
        ...this.getFirstTeam(
          this.team1.value,
          this.team2.value,
          this.team1.bonus,
          this.team2.bonus,
          this.team1.finalPlayers,
          this.team1.bonusList
        ),
      ];

      let finalSecondTeam = [
        ...this.getSecondTeam(
          this.team1.value,
          this.team2.value,
          this.team1.bonus,
          this.team2.bonus,
          this.team1.extra,
          this.team2.extra,
          this.team2.finalPlayers,
          this.team2.bonusList,
          this.team1.quot,
          this.team2.quot
        ),
      ];
      this.team2.finalPlayers = [];
      this.team1.finalPlayers = [];
      this.team1.finalPlayers = [...finalFirstTeam];
      this.team2.finalPlayers = [...finalSecondTeam];
    } else if (this.team1.value < this.team2.value) {
      let finalSecondTeam = [
        ...this.getFirstTeam(
          this.team2.value,
          this.team1.value,
          this.team2.bonus,
          this.team1.bonus,
          this.team2.finalPlayers,
          this.team2.bonusList
        ),
      ];
      let finalFirstTeam = [
        ...this.getSecondTeam(
          this.team2.value,
          this.team1.value,
          this.team2.bonus,
          this.team1.bonus,
          this.team2.extra,
          this.team1.extra,
          this.team1.finalPlayers,
          this.team1.bonusList,
          this.team2.quot,
          this.team1.quot
        ),
      ];

      this.team2.finalPlayers = [];
      this.team1.finalPlayers = [];
      this.team1.finalPlayers = [...finalFirstTeam];
      this.team2.finalPlayers = [...finalSecondTeam];
    }
    this.team1.finalPlayers.forEach((player) => {
      if (player.value > player.finalValue) {
        player.finalValue = player.value;
      }
    });
    this.team2.finalPlayers.forEach((player) => {
      if (player.value > player.finalValue) {
        player.finalValue = player.value;
      }
    });
    if (this.team1.repaid != 0 || this.team2.repaid != 0) {
      this.team1.finalPlayers.forEach((player, index) => {
        if (
          player.contractType === 'lend' ||
          (player.contractType === 'lendR' && player.repaid === 'no')
        ) {
          this.team1.finalValue +=
            this.getPlayerMaxValue(player) *
            (+player.contractLength / 12) *
            0.8;
          this.team1.finalValueEval +=
            ((this.getPlayerMaxValue(player) *
              (+player.contractLength / 12) *
              0.8) /
              player.quot) *
            player.finalQuot;
        } else if (
          player.contractType === 'lendR' ||
          player.contractType === 'lendO'
        ) {
          this.team1.finalValue += this.getPlayerMaxValue(player);
          this.team1.finalValueEval +=
            (this.getPlayerMaxValue(player) / player.quot) * player.finalQuot;
        } else {
          this.team1.finalValue += this.getPlayerMaxValue(player);
          this.team1.finalValueEval +=
            (this.getPlayerMaxValue(player) / player.quot) * player.finalQuot;
        }
      });
      this.team2.finalPlayers.forEach((player, index) => {
        if (
          player.contractType === 'lend' ||
          (player.contractType === 'lendR' && player.repaid === 'no')
        ) {
          this.team2.finalValueEval +=
            ((this.getPlayerMaxValue(player) *
              (+player.contractLength / 12) *
              0.8) /
              player.quot) *
            player.finalQuot;
          this.team2.finalValue +=
            this.getPlayerMaxValue(player) *
            (+player.contractLength / 12) *
            0.8;
        } else if (
          player.contractType === 'lendR' ||
          player.contractType === 'lendO'
        ) {
          this.team2.finalValue += this.getPlayerMaxValue(player);
          this.team2.finalValueEval +=
            (this.getPlayerMaxValue(player) / player.quot) * player.finalQuot;
        } else {
          this.team2.finalValueEval +=
            (this.getPlayerMaxValue(player) / player.quot) * player.finalQuot;
          this.team2.finalValue += this.getPlayerMaxValue(player);
        }
      });

      //2.3.1
      if (this.team1.value == this.team1.finalValue) {
        //2.3.1.1
        if (
          this.team1.value + this.team2.bonus + this.team2.repaid >
          this.team2.value + this.team1.bonus + this.team1.repaid
        ) {
          this.team1.finalPlayers.forEach((player) => {
            player.finalValue = (player.value / player.quot) * player.finalQuot;
          });
        } else {
          this.team1.finalPlayers.forEach((player) => {
            player.finalValue =
              (this.getPlayerMaxValue(player) / player.quot) *
                player.finalQuot +
              ((this.team2.value +
                this.team1.bonus +
                this.team1.repaid -
                this.team1.value -
                this.team2.bonus -
                this.team2.repaid) *
                player.finalQuot) /
                this.team1.finalQuot;
          });
        }
      } else {
        //2.3.1.2
        if (
          this.team1.finalValue + this.team2.bonus + this.team2.repaid >
          this.team2.finalValue + this.team1.bonus + this.team1.repaid
        ) {
          if (
            this.team1.value + this.team2.bonus + this.team2.repaid >
            this.team2.value + this.team1.bonus + this.team1.repaid
          ) {
            this.team1.finalPlayers.forEach((player) => {
              if (
                (this.getPlayerMaxValue(player) / player.quot) *
                  player.finalQuot -
                  (this.getPlayerMaxValue(player) - player.value) <
                (player.value / player.quot) * player.finalQuot
              ) {
                player.finalValue =
                  (player.value / player.quot) * player.finalQuot;
              } else {
                player.finalValue =
                  (this.getPlayerMaxValue(player) / player.quot) *
                    player.finalQuot -
                  (this.getPlayerMaxValue(player) - player.value);
              }
            });
          } else {
            this.team1.finalPlayers.forEach((player) => {
              if (
                ((-this.team2.finalValue -
                  this.team1.bonus -
                  this.team1.repaid +
                  this.team1.finalValue +
                  this.team2.bonus +
                  this.team2.repaid) *
                  player.finalQuot) /
                  this.team1.finalQuot >
                this.getPlayerMaxValue(player) - player.value
              ) {
                if (
                  (this.getPlayerMaxValue(player) / player.quot) *
                    player.finalQuot -
                    (this.getPlayerMaxValue(player) - player.value) <
                  (player.value / player.quot) * player.finalQuot
                ) {
                  player.finalValue =
                    (player.value / player.quot) * player.finalQuot;
                } else {
                  player.finalValue =
                    (this.getPlayerMaxValue(player) / player.quot) *
                      player.finalQuot -
                    (this.getPlayerMaxValue(player) - player.value);
                }
              } else {
                if (
                  (this.getPlayerMaxValue(player) / player.quot) *
                    player.finalQuot -
                    ((this.team1.finalValue +
                      this.team2.bonus +
                      this.team2.repaid -
                      this.team2.finalValue -
                      this.team1.bonus -
                      this.team1.repaid) *
                      player.finalQuot) /
                      this.team1.finalQuot <
                  (player.value / player.quot) * player.finalQuot
                ) {
                  player.finalValue =
                    (player.value / player.quot) * player.finalQuot;
                } else {
                  player.finalValue =
                    (this.getPlayerMaxValue(player) / player.quot) *
                      player.finalQuot +
                    ((-this.team1.finalValue -
                      this.team2.bonus -
                      this.team2.repaid +
                      this.team2.finalValue +
                      this.team1.bonus +
                      this.team1.repaid) *
                      player.finalQuot) /
                      this.team1.finalQuot;
                }
              }
            });
          }
        } else {
          this.team1.finalPlayers.forEach((player) => {
            player.finalValue =
              (this.getPlayerMaxValue(player) / player.quot) *
                player.finalQuot -
              ((-this.team2.finalValue -
                this.team1.bonus -
                this.team1.repaid +
                this.team1.finalValue +
                this.team2.bonus +
                this.team2.repaid) *
                player.finalQuot) /
                this.team1.finalQuot;
          });
        }
      }
      // SECOND TEAM
      if (this.team2.value == this.team2.finalValue) {
        //2.3.1.1
        if (
          this.team2.value + this.team1.bonus + this.team1.repaid >
          this.team1.value + this.team2.bonus + this.team2.repaid
        ) {
          this.team2.finalPlayers.forEach((player) => {
            player.finalValue = (player.value / player.quot) * player.finalQuot;
          });
        } else {
          this.team2.finalPlayers.forEach((player) => {
            player.finalValue =
              (this.getPlayerMaxValue(player) / player.quot) *
                player.finalQuot +
              ((this.team1.value +
                this.team2.bonus +
                this.team2.repaid -
                this.team2.value -
                this.team1.bonus -
                this.team1.repaid) *
                player.finalQuot) /
                this.team2.finalQuot;
          });
        }
      } else {
        //2.3.1.2
        if (
          this.team2.finalValue + this.team1.bonus + this.team1.repaid >
          this.team1.finalValue + this.team2.bonus + this.team2.repaid
        ) {
          if (
            this.team2.value + this.team1.bonus + this.team1.repaid >
            this.team1.value + this.team2.bonus + this.team2.repaid
          ) {
            this.team2.finalPlayers.forEach((player) => {
              if (
                (this.getPlayerMaxValue(player) / player.quot) *
                  player.finalQuot -
                  (this.getPlayerMaxValue(player) - player.value) <
                (player.value / player.quot) * player.finalQuot
              ) {
                player.finalValue =
                  (player.value / player.quot) * player.finalQuot;
              } else {
                player.finalValue =
                  (this.getPlayerMaxValue(player) / player.quot) *
                    player.finalQuot -
                  (this.getPlayerMaxValue(player) - player.value);
              }
            });
          } else {
            this.team2.finalPlayers.forEach((player) => {
              if (
                ((-this.team1.finalValue -
                  this.team2.bonus -
                  this.team2.repaid +
                  this.team2.finalValue +
                  this.team1.bonus +
                  this.team1.repaid) *
                  player.finalQuot) /
                  this.team2.finalQuot >
                this.getPlayerMaxValue(player) - player.value
              ) {
                if (
                  (this.getPlayerMaxValue(player) / player.quot) *
                    player.finalQuot -
                    (this.getPlayerMaxValue(player) - player.value) <
                  (player.value / player.quot) * player.finalQuot
                ) {
                  player.finalValue =
                    (player.value / player.quot) * player.finalQuot;
                } else {
                  player.finalValue =
                    (this.getPlayerMaxValue(player) / player.quot) *
                      player.finalQuot -
                    (this.getPlayerMaxValue(player) - player.value);
                }
              } else {
                if (
                  (this.getPlayerMaxValue(player) / player.quot) *
                    player.finalQuot -
                    ((this.team2.finalValue +
                      this.team1.bonus +
                      this.team1.repaid -
                      this.team1.finalValue -
                      this.team2.bonus -
                      this.team2.repaid) *
                      player.finalQuot) /
                      this.team2.finalQuot <
                  (player.value / player.quot) * player.finalQuot
                ) {
                  player.finalValue =
                    (player.value / player.quot) * player.finalQuot;
                } else {
                  player.finalValue =
                    (this.getPlayerMaxValue(player) / player.quot) *
                      player.finalQuot +
                    ((-this.team2.finalValue -
                      this.team1.bonus -
                      this.team1.repaid +
                      this.team1.finalValue +
                      this.team2.bonus +
                      this.team2.repaid) *
                      player.finalQuot) /
                      this.team2.finalQuot;
                }
              }
            });
          }
        } else {
          this.team2.finalPlayers.forEach((player) => {
            player.finalValue =
              (this.getPlayerMaxValue(player) / player.quot) *
                player.finalQuot -
              ((-this.team1.finalValue -
                this.team2.bonus -
                this.team2.repaid +
                this.team2.finalValue +
                this.team1.bonus +
                this.team1.repaid) *
                player.finalQuot) /
                this.team2.finalQuot;
          });
        }
      }
    }
  }

  getFirstTeam(
    teamBiggerValue: number,
    teamSmallerValue: number,
    teamBiggerBonus: number,
    teamSmallerBonus: number,
    players: Player[],
    bonusSequence: number[]
  ) {
    //FIRST BIG TEAM

    if (
      teamBiggerValue + teamSmallerBonus >
      teamSmallerValue + teamBiggerBonus
    ) {
      return players;
    } else {
      players.forEach((player, index) => {
        player.finalValue =
          player.value +
          ((teamSmallerValue +
            teamBiggerBonus -
            teamBiggerValue -
            teamSmallerBonus) *
            bonusSequence[index]) /
            teamBiggerBonus;
      });
      return players;
    }
  }

  getSecondTeam(
    teamBiggerValue: number,
    teamSmallerValue: number,
    teamBiggerBonus: number,
    teamSmallerBonus: number,
    teamBiggerExtra: number,
    teamSmallerExtra: number,
    players: Player[],
    bonusSequence: number[],
    teamBiggerQuot: number,
    teamSmallerQuot: number
  ) {
    //SECOND BIG TEAM
    if (teamSmallerBonus > teamBiggerBonus) {
      players.forEach((player, index) => {
        if (
          player.contractType == 'lend' ||
          (player.contractType === 'lendR' && player.repaid === 'no')
        ) {
          player.finalValue =
            player.value +
            (12 / +player.contractLength / 0.8) *
              (((teamBiggerValue - teamSmallerValue) * player.quot) /
                teamSmallerQuot +
                ((teamSmallerBonus - teamBiggerBonus) * bonusSequence[index]) /
                  teamSmallerBonus);
        } else if (
          player.contractType === 'lendR' ||
          player.contractType === 'lendO'
        ) {
          player.finalValue =
            player.value +
            (12 / +player.contractLength) *
              (((teamBiggerValue - teamSmallerValue) * player.quot) /
                teamSmallerQuot +
                ((teamSmallerBonus - teamBiggerBonus) * bonusSequence[index]) /
                  teamSmallerBonus);
        } else {
          player.finalValue =
            player.value +
            (((teamBiggerValue - teamSmallerValue) * player.quot) /
              teamSmallerQuot +
              ((teamSmallerBonus - teamBiggerBonus) * bonusSequence[index]) /
                teamSmallerBonus);
        }
      });
      return players;
    } else {
      players.forEach((player, index) => {
        if (
          player.contractType == 'lend' ||
          (player.contractType === 'lendR' && player.repaid === 'no')
        ) {
          player.finalValue =
            player.value +
            (12 / +player.contractLength / 0.8) *
              (((teamBiggerValue - teamSmallerValue) * player.quot) /
                teamSmallerQuot +
                ((teamSmallerBonus - teamBiggerBonus) * player.quot) /
                  teamSmallerQuot);
        } else if (
          player.contractType === 'lendR' ||
          player.contractType === 'lendO'
        ) {
          player.finalValue =
            player.value +
            (12 / +player.contractLength) *
              (((teamBiggerValue - teamSmallerValue) * player.quot) /
                teamSmallerQuot +
                ((teamSmallerBonus - teamBiggerBonus) * player.quot) /
                  teamSmallerQuot);
        } else {
          player.finalValue =
            player.value +
            (((teamBiggerValue - teamSmallerValue) * player.quot) /
              teamSmallerQuot +
              ((teamSmallerBonus - teamBiggerBonus) * player.quot) /
                teamSmallerQuot);
        }
      });
      return players;
    }
  }

  getPlayerMaxValue(player: Player) {
    return player.value < player.finalValue ? player.finalValue : player.value;
  }

  getRepaidContractMultiplier(player: Player) {
    return player.repaid === 'yes' ? +player.contractLength / 12 : 1;
  }

  checkIfRightLend(): boolean {
    let right = false;
    this.team1.players.forEach((player) => {
      if (player.contractType == 'lendR' && player.repaid == 'yes') {
        right = true;
      }
    });
    this.team2.players.forEach((player) => {
      if (player.contractType == 'lendR' && player.repaid == 'yes') {
        right = true;
      }
    });
    return right;
  }

  remove(id: number) {
    this.team1.players = this.team1.players.filter((val) => val.id != id);
    this.team2.players = this.team2.players.filter((val) => val.id != id);
  }
}
