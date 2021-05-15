const Farm = require("./Farm.js");

module.exports = class BuildingManager {

    constructor() {
        this.farms = [];

        this.addBuilding("Farm");

        this.totalJobs = 0;
        this.setTotalJobs();

    }

    setTotalJobs() {

        this.totalJobs = 0;
        
        for(let i = 0; i < this.farms.length; ++i) {
            this.totalJobs += this.farms[i].getNumJobs();
        }
    }

    addBuilding(buildingName) {
        if(buildingName == "Farm") {
            this.farms.push(new Farm());
        }
    }

    //To Do
    assignJobToBuilding() {

    }

  }