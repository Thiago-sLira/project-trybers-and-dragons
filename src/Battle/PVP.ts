import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _characterRed: Fighter;
  private _characterBlue: Fighter;

  constructor(
    characterRed: Fighter,
    characterBlue: Fighter = new Character('Default'),
  ) {
    super(characterRed);
    this._characterRed = characterRed;
    this._characterBlue = characterBlue;
  }

  redAttacks(): void {
    if (this._characterRed.lifePoints > 0) {
      this._characterRed.attack(this._characterBlue);
    }
  }

  blueAttacks(): void {
    if (this._characterBlue.lifePoints > 0) {
      this._characterBlue.attack(this._characterRed);
    }
  }

  verifyBattle(): boolean {
    return this._characterBlue.lifePoints > 0
      && this._characterRed.lifePoints > 0;
  }

  fight(): number {
    while (this.verifyBattle()) {
      // if (this._characterBlue.dexterity > this._characterRed.dexterity) {
      this.blueAttacks();
      this.redAttacks();
      // } else {
      //   this.redAttacks();
      //   this.blueAttacks();
      // }
    }
    return super.fight();
  }
}

// const characterBlue = new Character('blue');
// const characterRed = new Character('red');
// console.log('LIFEPOINTS', characterRed.lifePoints);

// const pvp = new PVP(characterRed, characterBlue);

// for (let index = 0; index < 20; index += 1) {
//   characterRed.levelUp();
// }

// console.log(pvp.fight());
