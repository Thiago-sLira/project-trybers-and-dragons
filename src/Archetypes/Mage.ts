import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _magesInstancesCreated = 0;

  constructor(
    name: string,
    special: number,
    cost: number,
  ) {
    super(name, special, cost);
    this._energyType = 'mana';
    Mage._magesInstancesCreated += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._magesInstancesCreated;
  }
}
