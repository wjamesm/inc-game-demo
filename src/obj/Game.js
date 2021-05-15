const World = require("./World.js");
const Tribe = require("./Village.js");

module.exports = class Game {

    constructor() {
        this.world = new World();
        this.day = 0;
        console.log(this.world)

    }

    run() {

        setInterval(() => {
            this.dailyTick()
          }, 1000);

    }

    dailyTick(){ 
        console.log("Day : " + ++this.day)
        this.world.dailyTick()
    }

  }