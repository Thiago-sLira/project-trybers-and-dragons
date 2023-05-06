import Archetype from './Archetypes';
import Energy from './Energy';
import Race from './Races';

export default interface ICharacter {
  race?: Race,
  archetype?: Archetype,
  maxLifePoints?: number,
  lifePoints?: number,
  strenght?: number,
  defense?: number,
  dexterity?: number,
  energy?: Energy,
  name: string,
}
