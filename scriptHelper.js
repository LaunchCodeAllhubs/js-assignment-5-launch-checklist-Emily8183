// Write your helper functions here!
//require('isomorphic-fetch');




function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */

        let missionTarget = document.getElementById("missionTarget")

         pickPlanet().then(function(response){
            
            missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${response.name}</li>
                     <li>Diameter: ${response.diameter}</li>
                     <li>Star: ${response.star}</li>
                     <li>Distance from Earth: ${response.distance}</li>
                     <li>Number of Moons: ${response.moons}</li>
                 </ol>
                 <img src="${response.image}">
            `}); 
}

function validateInput(testInput) {
    if (testInput.value === "") {
        return "Empty";
    } else if (isNaN(testInput.value)) {
        return "Not a Number";
    } else if (!isNaN(testInput.value)) {
        return "Is a Number";
    } 
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {

    const launchStatus = document.getElementById("launchStatus");   
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");

    let validInput = true;   
    
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        window.alert("Empty");   
        return;
    }    

    faultyItems.style.visibility = "visible";
    // launchStatus.style.color = "black";


    if (validateInput(pilot) === "Not a Number") {
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
    } else {
        window.alert("please input a proper pilot name");
        pilotStatus.innerHTML = `Pilot not ready`;   
        validInput = false;
    }

    if (validateInput(copilot) === "Not a Number") {
        copilotStatus.innerHTML = `Copilot ${copilot.value} is ready for launch`;
    } else {
        window.alert("please input a proper copilot name");
        copilotStatus.innerHTML = `Copilot not ready`;   
        validInput = false;
    }

    if (validateInput(fuelLevel) === "Is a Number" && fuelLevel.value > 10000) {
        fuelStatus.innerHTML = "Fuel level high enough for launch."        
    } else if (fuelLevel.value < 10000) {
        fuelStatus.innerHTML = "There is not enough fuel for the journey."
        launchStatus.style.color = "red";
        validInput = false;
    } else if (validateInput(fuelLevel) === "Not a Number") {
        fuelStatus.innerHTML = "Please insert a valid number."
        launchStatus.style.color = "red";
        validInput = false;
    }

    if (validateInput(cargoLevel) === "Is a Number" && cargoLevel.value < 10000) {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";       
    } else if (cargoLevel.value > 10000) {
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
        launchStatus.style.color = "rgb(199, 37, 78)";
        validInput = false;
    } else if (validateInput(cargoLevel) === "Not a Number") {
        cargoStatus.innerHTML = "Please insert a valid number."
        launchStatus.style.color = "red";
        validInput = false;
    }

    if (validInput) {
                launchStatus.innerHTML = "Shuttle is ready for launch";
                launchStatus.style.color = "rgb(65, 159, 106)";
    } else {
                launchStatus.innerHTML = "Shuttle is not ready for launch";
    }    
}; 
        
// get the list of planets
async function myFetch() {
    let response = await fetch(`https://handlers.education.launchcode.org/static/planets.json`);
    let planetsReturned = await response.json();
    return planetsReturned;
};

//pick a random one from the list
async function pickPlanet() {
    let listOfPlanets = await myFetch();
    let numOfRandomPlanet = Math.floor(listOfPlanets.length * Math.random());
    return listOfPlanets[numOfRandomPlanet];
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
