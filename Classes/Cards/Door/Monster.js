class Monster extends Door {
  #level = 0;
  #badStuff = undefined; //CardEffect
  #rewardCount = 0;
  constructor(name, isPlayable, description, level = 1, badStuff, rewardCount = 1) {
      super(name, isPlayable, description);
      this.level = level;
      this.badStuff = badStuff;
      this.rewardCount = rewardCount;
  }
}