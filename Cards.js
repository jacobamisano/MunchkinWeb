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
    constructor (name, effect, description, goldValue = 0, descriptors = [treasureDescriptors.None]) {
        super(name, effect, description);
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
    constructor(name, effect, description, goldValue = 0, gearStat = 0, gearSlot = [gearSlots.None]) {
        super(name, effect, description, goldValue = 0);
        this.gearStat = gearStat;
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
    private effectValue = 0;
    private effect = OneShotEffect.None;
    constructor() {
        super();
    }
}

const OneShotEffect = {
    None : null,
    AddLevel : "addLevel", //Effect Value of the OneShot class will be x < 0 for losing values
    DrawTreasure : "drawTreasure",
    DrawDoor : "drawDoor",
    LoseGear : "loseGear"
}

//START Door Classes
class Door extends Card {
    constructor(name, effect, description) {
        super(name, effect, description);
    }
}

class Monster extends Door {
    private level = 0;
    constructor() {
        super();
    }
}



