module.exports = class Person {

    constructor(name, tribe) {
        this.name = name;
        this.tribe = tribe;
        this.age = 0;
        this.health = 10;
        this.food = 1;
        this.output = 1;
        console.log(this.name + " : " + this.age)
    }

    dailyActivity(world) {

        this.age++;

        if(this.age % 50 == 0){if(Math.random() > 0.9){this.output++}}
        
        if(this.tribe.food <= 1){
            this.forage(world);
        }else{
            this.rest();
        }

        if(this.food <= 0){
            this.health--;
        }

        if(this.health <= 0){
            console.log(this.name + " is dead")
            return;
        }

        if(this.food > 0){this.food--}
        
    }

    eat() {
        if(this.tribe.food > 0) {
            this.tribe.food--;
            this.food++;
        }
    }

    forage(world) {
        let rand = Math.floor(Math.random())
        if(rand <= 0.10){
            world.food -= 2 * this.output;
            this.tribe.food += 2 * this.output;
        }else if(rand > 0.1 && rand < 0.66){
            world.food -= 1 * this.output;
            this.tribe.food += 1 * this.output;
        }
        else if(rand >= 0.66) {

        }

    }

    rest() {
        if(this.health < 10){this.health++};
    }

  }