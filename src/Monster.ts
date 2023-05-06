import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 85;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }
  
  get strength(): number {
    return this._strength;
  }
}
