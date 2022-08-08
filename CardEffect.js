class CardEffect {
    //Effects are ordered in a queue format (FIFO) for multi-layered effects
    private effectValue;
    private effectType;
    private requireLast;
    private player;

    constructor(effectValue, effectType, requireLast = false, player) {
        this.effectValue = effectValue;
        this.effectType = effectType;
        this.requireLast = requireLast;
        this.player = player;
    }

    triggerEffect() {
        
    }

}

const EffectType = {
    AddLevel : "addLevel",
    DrawTreasure : "drawTreasure",
    AddBonus : "addBonus",
    LoseGear : "loseGear",
    Die : "die",
    AddGold : "addGold"
}
