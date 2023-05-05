export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(
    name: string,
    special = 0,
    cost = 0,
  ) {
    this._name = name;
    this._special = special;
    this._cost = cost;
  }
}
