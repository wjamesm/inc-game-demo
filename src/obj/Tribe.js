const Person = require("./Person.js");

module.exports = class Tribe {

    constructor(world) {

        this.world = world;

        this.popList = [];
        this.food = 0;

        this.popList.push(new Person("Jeff", this))
        this.popList.push(new Person("Linda", this))

    }

    dailyActivity() {
        for(let i = 0; i < this.popList.length; ++i) {
            this.popList[i].dailyActivity(this.world);
        }
        console.log("Tribe Food : " + this.food)
    }

  }