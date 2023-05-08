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
}
