class Player {
    constructor(name = 'Default Name') {
        this.name = name;
        this.#level = 1;
        this.#goldCount = 0;
        this.#name = '';
        this.#headgear
        this.#alive = true;
    }

    addLevel(value){
        this.level += value;
    }

    addGear() {

    }

    addGold(amount = 0) {
        this.goldCount += amount;
        if (this.goldCount >= 1000 && (this.level > 0 && this.level < 9)) {
            this.level += 1;
            this.goldCount = 0;
        }
        //TODO: At the end of the turn reset the gold to zero. You are unable to stash gold towards a level
    }

    setLevel(level = 1) {
        this.level = level;
    }

    isAlive(status = null){
        if (status == null){
            return this.alive;
        } else {
            this.alive = status;
        }
    }
}