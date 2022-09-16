class Curse extends Door {
  #effect = null; //CardEffect
  constructor(name, isPlayable, description, effect) {
      super(name, isPlayable, description);
      this.effect = effect;
  }
}