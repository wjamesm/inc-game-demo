module.exports = class Person {

    constructor(name, tribe) {
        this.name = name;
        this.tribe = tribe;

        this.age = 0;
        this.health = 10;
        this.food = 1;

        this.foraging = 1;

        console.log(this.name + " : " + this.age)
    }

    dailyActivity(world) {

        this.age++;
        
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
            world.food -= 2 * Math.floor(this.foraging);
            this.tribe.food += 2 * Math.floor(this.foraging);
        }else if(rand > 0.1 && rand < 0.66){
            world.food -= 1 * Math.floor(this.foraging);
            this.tribe.food += 1 * Math.floor(this.foraging);
        }
        else if(rand >= 0.66) {

        }

        this.foraging += 0.01;

    }

    rest() {
        if(this.health < 10){this.health++};
    }

  }