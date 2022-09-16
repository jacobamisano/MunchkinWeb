class Gear extends Treasure {
  #gearStat = 0;
  #gearSlot = null;
  constructor(name, isPlayable, description, goldValue = 0, descriptors = [treasureDescriptors.None],
              gearStat = 0, gearSlot = [GearSlots.None]) {
      super(name, isPlayable, description, goldValue, descriptors);
      this.gearStat = gearStat;
      this.gearSlot = gearSlot;
  }
}
