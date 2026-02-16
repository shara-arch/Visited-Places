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

//
function Destination(location, subLocation, landmark, year, season, month, notes) {
     this.location = location; 
     this.subLocation = subLocation; 
     this.landmark = landmark; 
     this.year = year; 
     this.season = season; 
     this.month = month; 
     this.notes = notes; 
     this.id = null;
}
// Initialize Travel Log
const myTravelLog = new TravelLog();

 
    function handleAddDestination() { 
        const locationIn = document.getElementById('location'); 
        const subLocIn = document.getElementById('sub-location'); 
        const landmrkIn = document.getElementById('landmark'); 
        const yearIn = document.getElementById('year'); 
        const seasonIn = document.getElementById('season'); 
        const monthIn = document.getElementById('month'); 
        const notesIn = document.getElementById('notes'); 
        if (locationIn.value.trim() === "" || subLocIn.value.trim() === "" || landmrkIn.value.trim() === "" 
                || monthIn.value.trim() === "" || yearIn.value.trim() === "" || seasonIn.value.trim() === "" ) {
             alert("Please fill in required fields!"); 
             return; 
            }
        const newPlace = new Destination(
            locationIn.value, subLocIn.value, 
            landmrkIn.value, yearIn.value, 
            seasonIn.value, monthIn.value, notesIn.value ); 

            myTravelLog.addDestination(newPlace); 
            alert("Destination Added!");
            
            locationIn.value = subLocIn.value = landmrkIn.value = yearIn.value = seasonIn.value = monthIn.value = notesIn.value = ""; 
            renderDestinations();
        
        }

// Render destinations list and details 
    function renderDestinations() { 
        const listEl = document.getElementById('places'); 
        const countEl = document.getElementById('destinationCount'); 
        if (!listEl) return; 
        
        listEl.innerHTML = ""; 
        const destArr = Object.values(myTravelLog.destinations); 

        if (countEl) countEl.innerText = destArr.length; 

        if (destArr.length === 0) {
             listEl.innerHTML = "<div>No destinations found</div>"; 
             return; 
            } 
        destArr.forEach(dest => { 
            const item = document.createElement('div'); 
            item.className = 'placeCard';
            item.textContent = `${dest.subLocation} - ${dest.location}`; 
            item.style.cursor = "pointer"; 
            item.onclick = () => showDetails(dest.id); 
            listEl.appendChild(item); 
        }); 
    }
    function showDetails(id) {
        const dest = myTravelLog.destinations[id];
        if (!dest) return;

        document.getElementById("details").innerHTML=` 
        <strong>Location:</strong> ${dest.location}<br> 
        <strong>Sub-Location:</strong> ${dest.subLocation}<br> 
        <strong>Landmark:</strong> ${dest.landmark}<br> 
        <strong>Year:</strong> ${dest.year}<br> 
        <strong>Season:</strong> ${dest.season}<br> 
        <strong>Month:</strong> ${dest.month}<br> 
        <strong>Notes:</strong> ${dest.notes}<br><br> 
        <button onclick="handleDelete(${dest.id})">Delete</button> `;

    }
    

