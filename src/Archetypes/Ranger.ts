import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _rangerInstancesCreated = 0;

  constructor(
    name: string,
    special: number,
    cost: number,
  ) {
    super(name, special, cost);
    this._energyType = 'stamina';
    Ranger._rangerInstancesCreated += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._rangerInstancesCreated;
  }
}
