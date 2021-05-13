const Person = require("./Person.js");

module.exports = class Tribe {

    constructor(world) {

        this.world = world;

        this.popList = [];
        this.food = 0;

        this.popList.push(new Person("Benji", this))
        this.popList.push(new Person("Allison", this))
        this.popList.push(new Person("Wilfred", this))
        this.popList.push(new Person("Evelynn", this))

    }

    dailyActivity() {

        this.popList.sort((a, b) => (b.health - a.health));

        for(let i = 0; i < this.popList.length; ++i) {
            if(this.popList[i].health > 0){
                this.popList[i].dailyActivity(this.world);
            }
        }

        this.popList.sort((a, b) => (a.health - b.health));

        for(let i = 0; i < this.popList.length; ++i) {
            if(this.popList[i].health > 0){
                this.popList[i].eat();
                console.log(this.popList[i].name + " : " + this.popList[i].output + " : " + this.popList[i].health + " : " + this.popList[i].food)
            }
        }
        console.log("Tribe Food : " + this.food)
    }

  }