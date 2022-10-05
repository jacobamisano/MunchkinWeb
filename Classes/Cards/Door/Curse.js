class Curse extends Door {
  #effect = undefined; //CardEffect
  constructor(name, isPlayable, description, effect) {
      super(name, isPlayable, description);
      this.effect = effect;
  }
}