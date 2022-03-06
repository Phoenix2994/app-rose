export enum BonusList {
  GOL_TOTAL = 'Gol totali',
  GOL = 'Per ogni gol',
  ASSIST_TOTAL = 'Assist totali',
  ASSIST = 'Per ogni assist',
  PRESENZE_TOTAL = 'Presenze totali',
  PRESENZE = 'Per ogni presenza',
  COPPA = 'Vittoria Coppa',
  LEGA = 'Vittoria Campionato',
  VOTO = 'Media voto superiore a',
  FANTAVOTO = 'FantaMedia superiore a',
}

export const BONUS_LIST = [
  {
    bonusType: BonusList.GOL_TOTAL,
    targetFlag: true,
    reward: '0',
    target: '0',
    targetResult: false,
  },
  {
    bonusType: BonusList.GOL,
    reward: '0',
    targetResult: false,
  },
  {
    bonusType: BonusList.ASSIST_TOTAL,
    targetFlag: true,
    reward: '0',
    target: '0',
    targetResult: false,
  },
  {
    bonusType: BonusList.ASSIST,
    reward: '0',
    targetResult: false,
  },
  {
    bonusType: BonusList.PRESENZE_TOTAL,
    targetFlag: true,
    reward: '0',
    target: '0',
    targetResult: false,
  },
  {
    bonusType: BonusList.PRESENZE,
    reward: '0',
    targetResult: false,
  },
  {
    bonusType: BonusList.VOTO,
    targetFlag: true,
    reward: '0',
    target: '0',
    targetResult: false,
  },
  {
    bonusType: BonusList.FANTAVOTO,
    targetFlag: true,
    reward: '0',
    target: '0',
    targetResult: false,
  },
  {
    bonusType: BonusList.LEGA,
    reward: '0',
    targetResult: false,
  },
  {
    bonusType: BonusList.COPPA,
    reward: '0',
    targetResult: false,
  },
];
