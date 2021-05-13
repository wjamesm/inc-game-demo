module.exports = class Person {

    constructor(name, tribe) {
        this.name = name;
        this.tribe = tribe;
        this.health = 10;
        this.food = 1;
        console.log(this.name + " : " + this.age)
    }

    dailyActivity(world) {
        
        this.eat();

        if(this.tribe.food <= 0){
            this.forage(world);
        }

        if(this.food <= 0){
            this.health--;
        }

        if(this.health <= 0){
            console.log(this.name + " is dead")
            return;
        }

        console.log(this.name + " : " + this.health + " : " + this.food)

        if(this.food > 0){this.food--}
        
    }

    eat() {
        if(this.tribe.food > 0) {
            this.tribe.food--;
            this.food++;
        }
    }

    forage(world) {
        let rand = Math.floor(Math.random()*12)
        if(rand <= 3){
            world.food -= 2;
            this.tribe.food += 2;
        }else if(rand > 3 && rand < 8){
            world.food -= 1;
            this.tribe.food += 1;
        }
        else if(rand >= 8) {
            world.food -= 2;
        }

    }

  }