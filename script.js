function TravelLog(){
    this.destinations = {};
    this.currentId = 0;
};

TravelLog.prototype.assignId = function () {
    this.currentId++;
    return this.currentId;
};
