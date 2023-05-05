import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _necromancerInstancesCreated = 0;

  constructor(
    name: string,
    special: number,
    cost: number,
  ) {
    super(name, special, cost);
    this._energyType = 'mana';
    Necromancer._necromancerInstancesCreated += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._necromancerInstancesCreated;
  }
}
