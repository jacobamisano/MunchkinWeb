import { GearType } from '../Cards/Treasure/gear/Gear'

class Player {
    constructor(name = 'Default Name') {
        this.name = name;
        this.level = 1;
        this.goldCount = 0;
        this.name = '';
        this.headgear = null;
        this.armor = null;
        this.footwear = null;
        this.handOne = null;
        this.handTwo = null;
        this.alive = true;
    }

    addLevel(value){
        this.level += value;
    }

    equipGear(gear) {
        switch (gear.gearType) {
            case GearType.armor:
                this.armor = gear;
                break;
            case GearType.footwear:
                this.footwear = gear;
                break;
            case GearType.headgear:
                this.headgear = gear;
                break;
            case GearType.onehand:
                if (this.handOne != null) {
                    this.handOne = gear;
                } else {
                    this.handTwo = gear;
                }
                break;
            case GearType.twohand:
                this.handOne = gear;
                this.handTwo = undefined;
        }
    }

    addGold(amount = 0) {
        this.goldCount += amount;
        if (this.goldCount >= 1000 && (this.level > 0 && this.level < 9)) {
            this.level += 1;
            this.goldCount = 0;
        }
        //TODO: At the end of the turn reset the gold to zero. You are unable to stash gold towards a level
    }
}