class CardEffect {
    //Effects are ordered in a queue format (FIFO) for multi-layered effects
    private effectValue:number;
    private effectType;
    private requireLast;
    private player;

    constructor(effectValue:number, effectType:EffectType, requireLast = false, player:Player) {
        this.effectValue = effectValue;
        this.effectType = effectType;
        this.requireLast = requireLast;
        this.player = player;
    }

    triggerEffect() : Boolean{
        switch (this.effectType) {
            case EffectType.AddLevel: {
                this.player.addLevel(this.effectValue);
                break;
            }

            case EffectType.LoseGear: {
                if(this.effectValue != GearSlots.OneHand){
                    this.player.gear[this.effectValue].pop();
                } else if ((this.player.gear[4] !=  null) && (this.player.gear[5] == null)) {
                    this.player.gear.splice(4, 1);
                } else if ((this.player.gear[5] !=  null) && (this.player.gear[4] == null)){
                    this.player.gear.splice(5, 1);
                } else {
                    //TODO: Prompt user with a selection between player.gear at index 4 and index 5
                    console.log("Player has two one-handed items equipped");
                }
                break;
            }

            case EffectType.Die: {
                this.player.setLevel(0);
                this.player.isAlive(false);
                break;
            }

            case EffectType.Escape: {
                //TODO: End the current battle
            }
        }
    }

}

const EffectType = {
    AddLevel : "addLevel",
    DrawTreasure : "drawTreasure",
    LoseGear : "loseGear",
    Die : "die",
    Escape : "escape"
}
