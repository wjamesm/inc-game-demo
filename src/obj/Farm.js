const Building = require("./Building.js");

module.exports = class Farm extends Building{

    constructor() {
        super();
        this.numJobs = 4;
        this.jobs = [];
    }

    getNumJobs(){
        return this.numJobs;
    }

    getJobs(){
        return this.jobs;
    }

  }