import card from Card.js
class Treasure extends Card{
  #goldValue = 0;
  #descriptors = null;
  #carried = false;
  constructor (name, isPlayable, description, goldValue = 0, descriptors = [treasureDescriptors.None]) {
      super(name, isPlayable, description);
      this.goldValue = goldValue;
      this.descriptors = descriptors;
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