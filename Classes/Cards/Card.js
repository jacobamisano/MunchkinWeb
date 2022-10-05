export class Card {
  constructor(name = '', isPlayable = false, description = '', effect = undefined) {
      this.name = name;
      this.isPlayable = isPlayable;
      this.description = description;
      this.effect = effect;
  }
  getName() {
      return this.name;
  }
  //TODO: Move this method to gameState class (will be determined by current phase of the turn?)
  determineIsPlayable() {
      return this.isPlayable;
  }
  getDescription() {
      return this.description;
  }
}
