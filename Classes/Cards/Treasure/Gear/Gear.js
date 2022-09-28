class Gear extends Treasure {
  constructor(name, isPlayable, description, goldValue = 0, descriptors = [treasureDescriptors.None],
              gearStat = 0, gearSlot = [GearSlots.None]) {
      super(name, isPlayable, description, goldValue, descriptors);
      this.gearStat = gearStat;
      this.gearType = null;
  }
}

const GearType = {
  footwear: 'footwear',
  onehand: 'onehand',
  twohand: 'twohand',
  headgear: 'headgear',
  armor: 'armor',
}
