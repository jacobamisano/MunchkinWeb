import { Card } from '../Card.js'
export class Treasure extends Card{
  #goldValue = 0;
  #descriptors = null;
  #carried = false;
  constructor (name, isPlayable, description, goldValue = 0) {
      super(name, isPlayable, description);
      this.goldValue = goldValue;
  }
  getGoldValue() {
      return this.goldValue;
  }
  getDescriptors() {
      return this.descriptors;
  }
  isCarried() {
      return this.carried;
  }
}