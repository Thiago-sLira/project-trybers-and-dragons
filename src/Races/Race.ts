abstract class Race {
  constructor(
    private readonly _name: string,
    private readonly _dexterity: number,
  ) { }

  getName() {
    return this._name;
  }

  getDexterity() {
    return this._dexterity;
  }

  protected abstract maxLifePoints(): number;

  protected static createdRacesInstances() {
    throw new Error('Not implemented');
  }
}

export default Race;
