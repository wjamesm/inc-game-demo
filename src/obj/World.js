const Tribe = require("./Tribe.js");

module.exports = class World {

    constructor() {
        this.tribe = new Tribe(this);
        this.food = 1000;
    }

    dailyTick() {
        this.tribe.dailyActivity();
        console.log("World Food : " + this.food)
    }

  }