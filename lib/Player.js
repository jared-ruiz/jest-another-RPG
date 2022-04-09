const Potion = require('../lib/Potion');
const Character = require('./Character');

//takes name as a parameter but if nothing is passed, defaults name to empty string
class Player extends Character {
    constructor(name = '') {
        //call parent here
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }

        return false;
    };

    addPotion(potion) {
        this.inventory.push(potion);
    }

    usePotion(index) {
        //splice is removing the potion at that index then assigning it to index 0 of the removed potion array it has created
        const potion = this.getInventory().splice(index, 1)[0];

        switch(potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
}

module.exports = Player;