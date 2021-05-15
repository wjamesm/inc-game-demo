const BuildingManager = require("./BuildingManager.js");
const PeonManager = require("./PeonManager.js");

module.exports = class TaskManager {

    constructor(buildingManager, peonManager) {

      this.buildingManager = buildingManager;
      this.peonManager = peonManager;
    }

    //To Do
    assignJob(jobName, peonName) {
      this.peonManager.getPeon(peonName);
      this.buildingManager.assignJobToBuilding();

    }

    //To Do
    performJobs() {

    }

  }