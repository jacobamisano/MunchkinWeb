class Card {
    //Note: # = private declaration of class variables
    private name = "";
    private isPlayable = false;
    private description = "";
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

//START Treasure Classes (Item) TODO: Update constructors with correct parameters/arguments
class Treasure extends Card{
    private goldValue = 0;
    private descriptors = null;
    private carried = false;
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
class Gear extends Treasure {
    private gearStat = 0;
    private gearSlot = null;
    constructor(name, isPlayable, description, goldValue = 0, descriptors = [treasureDescriptors.None],
                gearStat = 0, gearSlot = [gearSlots.None]) {
        super(name, isPlayable, description, goldValue, descriptors);
        this.gearStat = gearStat;
        this.gearSlot = gearSlot;
    }
}

const gearSlots = {
    None : null, //Note: Each value is associated with
    Headgear : 1,
    Armor : 2,
    Footgear : 3,
    OneHand : [4, 5],
    TwoHand : 6
}

const treasureDescriptors = {
    None : null,
    BigItem : "bigItem"
}

class OneShot extends Treasure {
    private effect = null; //CardEffect
    constructor(name, isPlayable, description, goldValue = 0, descriptors = [treasureDescriptors.None], effect) {
        super(name, isPlayable, description, goldValue, descriptors);
        this.effect = effect;
    }
}

//START Door Classes
class Door extends Card {
    constructor(name, isPlayable, description) {
        super(name, isPlayable, description);
    }
}

class Monster extends Door {
    private level = 0;
    private badStuff = null; //CardEffect
    private rewardCount = 0;
    constructor(name, isPlayable, description, level = 1, badStuff, rewardCount = 1) {
        super(name, isPlayable, description);
        this.level = level;
        this.badStuff = badStuff;
        this.rewardCount = rewardCount;
    }
}

class Curse extends Door {
    private effect = null; //CardEffect
    constructor(name, isPlayable, description, effect) {
        super(name, isPlayable, description);
        this.effect = effect;
    }
}



