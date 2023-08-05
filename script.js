// Write your JavaScript code here!

//const { myFetch, pickPlanet } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {   

   let formSubmit = document.querySelector("form");//when its class, element, id, we use "querySelector". but it only grabs the first one.
   
   // let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse = myFetch();

//    listedPlanetsResponse.then(function (result) {


//        console.log(result);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    //pickPlanet();
   

   formSubmit.addEventListener("submit", function(event) {
    //let list = document.getElementById("faultyItems");
    let pilotName = document.getElementById("pilotName");
    let copilotName = document.getElementById("copilotName");
    let fuelLevel = document.getElementById("fuelLevel");
    let cargoMass = document.getElementById("cargoMass");

    formSubmission(document,pilotName,copilotName,fuelLevel,cargoMass);


    event.preventDefault();
   });

   addDestinationInfo(document);



   
   
});