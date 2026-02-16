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


TravelLog.prototype.displayTravelLog = function(){
     const placesList = document.getElementById("places"); 
     placesList.innerHTML = ""; 
     for (let id in this.destinations) { 
        const dest = this.destinations[id]; 
        const li = document.createElement("li"); 
        li.textContent = `${dest.location} - ${dest.subLocation}`; 
        li.onclick = () => showDetails(dest); placesList.appendChild(li); 
    } 
     };