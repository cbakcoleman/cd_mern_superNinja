class Ninja {
    // DO I NEED 'SPEED' 'STRENGTH' on the line below??
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log("Name: " + this.name, ", Strength: " + this.strength, ", Speed: " + this.speed, ", Health: " + this.health);
    }

    drinkSoju() {
        this.health += 10;
        console.log("Drinking some Soju...")
    }
}

// CHECK TO SEE IF THIS IS CORRECT...
class Sensei extends Ninja {
    constructor(name, health, wisdom = 10) {
        super(name, health);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        this.drinkSoju();
        console.log("A snake cannot wear a vest, for it has no arms.")
        return this;
    }

    showStats() {
        console.log("Name: " + this.name, ", Strength: " + this.strength, ", Speed: " + this.speed, ", Health: " + this.health, ", Wisdom: " + this.wisdom);
        return this;
    }

}

const superSensei = new Sensei("Zatch", 100);

superSensei.showStats();
superSensei.speakWisdom().speakWisdom().speakWisdom();
superSensei.showStats();