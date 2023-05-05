import Race from './Race';

export default class Dwarf extends Race {
  constructor() {
    super();
    
  }

  get maxLifePoints(): number {
    return 80;
  }
}
