function TravelLog(){
    this.destinations = {};
    this.currentId = 0;
};

TravelLog.prototype.assignId = function () {
    this.currentId++;
    return this.currentId;
};

TravelLog.prototype.addDestination = function(location, subLocation, landmark, year, season, month, notes){
    const newDestination = new this.destinations(location, subLocation, landmark, year, season, month, notes);
    newDestination.id = this.assignId();
    this.destinations[newDestination.id] = newDestination;

    alert(`Destination Added Successfully`);
    this.displayTravelLog();
};