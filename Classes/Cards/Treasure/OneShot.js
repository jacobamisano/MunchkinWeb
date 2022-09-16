class OneShot extends Treasure {
  #effect = new CardEffect();
  constructor(name, isPlayable, description, goldValue = 0, descriptors = [treasureDescriptors.None], effect) {
      super(name, isPlayable, description, goldValue, descriptors);
      this.effect = effect;
  }
}