class Card {
  #name = "";
  #isPlayable = false;
  #description = "";
  constructor(name, isPlayable, description) {
      this.name = name;
      this.isPlayable = isPlayable;
      this.description = description;
  }
  getName() {
      return this.name;
  }
  //TODO: Move this method to player class (will be determined by current phase of the turn?)
  determineIsPlayable() {
      return this.isPlayable;
  }
  getDescription() {
      return this.description;
  }
}
