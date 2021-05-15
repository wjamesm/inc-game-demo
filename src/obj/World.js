const Village = require("./Village.js");

module.exports = class World {

    constructor() {
        this.village = new Village();
    }

    dailyTick() {
        this.village.dailyActivity();
    }

  }