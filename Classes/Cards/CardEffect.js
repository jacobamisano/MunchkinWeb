export class CardEffect {
    //Effects are ordered in a queue format (FIFO) for multi-layered effects
    #effectValue;
    #effectType;
    #requireLast;

    constructor(effectValue, effectType, requireLast = false) {
        this.effectValue = effectValue;
        this.effectType = effectType;
        this.requireLast = requireLast;
    }

    triggerEffect(player) {
        switch (this.effectType) {
            case EffectType.AddLevel: {
                player.addLevel(this.effectValue);
                break;
            }

            case EffectType.LoseGear: {
                if(this.effectValue != GearSlots.OneHand){
                    player.gear[this.effectValue].pop();
                } else if ((player.gear[4] !=  undefined) && (player.gear[5] == undefined)) {
                    player.gear.splice(4, 1);
                } else if ((player.gear[5] !=  undefined) && (player.gear[4] == undefined)){
                    player.gear.splice(5, 1);
                } else {
                    //TODO: Prompt user with a selection between player.gear at index 4 and index 5
                    console.log("Player has two one-handed items equipped");
                }
                break;
            }

            case EffectType.Die: {
                player.setLevel(0);
                player.isAlive(false);
                break;
            }

            case EffectType.Escape: {
                //TODO: End the current battle
            }
        }
    }

}

export const EffectType = {
    AddLevel : "addLevel",
    DrawTreasure : "drawTreasure",
    LoseGear : "loseGear",
    Die : "die",
    Escape : "escape"
}
