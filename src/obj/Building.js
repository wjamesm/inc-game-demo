module.exports = class Building {

    constructor() {
        if (this.constructor == Building) {
            throw new Error("Abstract classes can't be instantiated.");
          }
    }

    getNumJobs() {
        throw new Error("Method 'getNumJobs()' must be implemented.");
    }

    getJobs(){
        throw new Error("Method 'getJobs()' must be implemented.");
    }

  }