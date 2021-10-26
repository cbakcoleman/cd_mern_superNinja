class Ninja {
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