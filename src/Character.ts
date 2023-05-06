import Archetype from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import ICharacter from './ICharacter';
import Race from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strenght: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(character: ICharacter) {
    this._name = character.name;
  }
}
