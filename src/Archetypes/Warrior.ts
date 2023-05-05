import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _warriorInstancesCreated = 0;

  constructor(
    name: string,
    special: number,
    cost: number,
  ) {
    super(name, special, cost);
    this._energyType = 'stamina';
    Warrior._warriorInstancesCreated += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._warriorInstancesCreated;
  }
}
