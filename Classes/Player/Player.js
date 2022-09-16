class Player {
    private level = 1;
    private goldCount = 0;
    private name:string;
    private gear = [];
    private alive = true;

    constructor(name:string) {
        this.name = name;
    }

    addLevel(value:number){
        this.level += value;
    }

    addGear() {

    }

    addGold(amount:number) {
        this.goldCount += amount;
        if (this.goldCount >= 1000 && (this.level > 0 && this.level < 9)) {
            this.level += 1;
            this.goldCount = 0;
        }
        //TODO: At the end of the turn reset the gold to zero. You are unable to stash gold towards a level
    }

    setLevel(level:number) {
        this.level = level;
    }

    isAlive(status:boolean = null){
        if (status == null){
            return this.alive;
        } else {
            this.alive = status;
        }
    }
}