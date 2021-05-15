const Peon = require("./Peon.js");
const TaskManager = require("./TaskManager.js");
const BuildingManager = require("./BuildingManager.js");
const PeonManager = require("./PeonManager.js");

module.exports = class Village {

    constructor() {

        this.peonList = [];
        this.food = 12;

        this.buildingManager = new BuildingManager();
        this.peonManager = new PeonManager(this.peonList);
        this.taskManager = new TaskManager(this.buildingManager, this.peonManager);

        this.peonList.push(new Peon("Benji"))
        this.peonList.push(new Peon("Allison"))
        this.peonList.push(new Peon("Wilfred"))
        this.peonList.push(new Peon("Evelynn"))

    }

    dailyActivity() {
        dailyResources = this.taskManager.performJobs();

        this.food += dailyResources;
        
    }

  }