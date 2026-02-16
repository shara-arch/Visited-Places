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

TravelLog.prototype.deleteDestination = function(id){
    if (this.destinations[id]){
        delete this.destinations[id];
        this.displayTravelLog();
        return true;
    }
    return false;
}

function Destination(location, subLocation, landmark, year, season, month, notes) { 
    this.location = location; 
    this.subLocation = subLocation; 
    this.landmark = landmark; 
    this.year = year; 
    this.season = season; 
    this.month = month; 
    this.notes = notes; 
}