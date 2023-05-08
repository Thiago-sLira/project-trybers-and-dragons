import Character from '../Character';
import Battle from './Battle';

export default class PVP extends Battle {
  private _characterRed: Character;
  private _characterBlue: Character;

  constructor(
    characterRed: Character,
    characterBlue: Character,
  ) {
    super(characterRed);
    this._characterRed = characterRed;
    this._characterBlue = characterBlue;
  }
}