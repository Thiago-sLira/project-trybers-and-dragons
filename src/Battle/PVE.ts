import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monsters: SimpleFighter[];

  constructor(
    character: Fighter,
    monsters: SimpleFighter[] = [new Monster()],
  ) {
    super(character);
    this._character = character;
    this._monsters = monsters;
  }

  characterAttacks(monster: SimpleFighter): void {
    if (this._character.lifePoints > 0) {
      this._character.attack(monster);
    }
  }

  monsterAttacks(monster: SimpleFighter): void {
    if (monster.lifePoints > 0) {
      monster.attack(this._character);
    }
  }

  verifyCharacter(): boolean {
    return this._character.lifePoints > 0;
  }

  verifyMonster(): boolean {
    return this._monsters.some((monster) => monster.lifePoints > 0);
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      while (this.verifyCharacter() && this.verifyMonster()) {
        this._character.attack(monster);
        monster.attack(this._character);
      }
    });
    return super.fight();
  }
}
