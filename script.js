//Local Storage
function TravelLog(){
    this.destinations = this.loadFromStorage();
};

TravelLog.prototype.saveToStorage = function(){
    localStorage.setItem('travelLogData', JSON.stringify(this.destinations));
}

TravelLog.prototype.loadFromStorage = function() { 
    const savedData = localStorage.getItem('travelLogData'); 
    return savedData ? JSON.parse(savedData) : {}; 
};

TravelLog.prototype.assignId = function () {
    this.currentId++;
    return this.currentId;
};

TravelLog.prototype.addDestination = function(destination){
    destination.id = Date.now(); 
    this.destinations[destination.id] = destination; 
    this.saveToStorage();
    
};

TravelLog.prototype.deleteDestination = function(id){
    if (this.destinations[id]){
        delete this.destinations[id];
        this.saveToStorage();
        return true;
    }
    return false;
}


