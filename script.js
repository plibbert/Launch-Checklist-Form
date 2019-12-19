let launchForm = document.getElementById('launchForm');

let launchStatusCheck = document.getElementById('launchStatusCheck');

window.addEventListener("load", function() {
      console.log("loaded");
   let formSubmit = document.getElementById('formSubmit');

   formSubmit.addEventListener("click", function(event) {
      let pilotName = document.getElementById('pilotName');
      let copilotName = document.getElementById('copilotName');
      let fuelLevel = document.getElementById('fuelLevel');
      let cargoMass = document.getElementById('cargoMass');
      let pilotStatus = document.getElementById('pilotStatus');
      let copilotStatus = document.getElementById('copilotStatus');
      let fuelStatus = document.getElementById('fuelStatus');
      let cargoStatus = document.getElementById('cargoStatus');
      let launchStatus = document.getElementById('launchStatus');
      let faultyItems = document.getElementById('faultyItems');

      if (isInvalidString(pilotName) || isInvalidString(copilotName) || isInvalidNumber(fuelLevel) || isInvalidNumber(cargoMass)){
         alert("Please enter valid values");
         launchStatus.innerHTML = "Shuttle not ready to launch"
         launchStatus.style.color = "red"
         event.preventDefault();
      } else {
         pilotStatus.innerHTML = `${pilotName.value}: Pilot Ready.`
         copilotStatus.innerHTML = `${copilotName.value}: Co-pilot Ready.`
         if (Number(fuelLevel.value) < 10000){
            fuelStatus.innerText = "Not enough fuel for the journey."
            faultyItems.style.visibility = "visible"
            launchStatus.innerText = "Shuttle not ready for launch"
            document.getElementById("launchStatus").style.color = "red"
            event.preventDefault();
         } else {
            fuelStatus.innterHTML = "Fuel level high enough for launch"
         }
         if (Number(cargoMass.value) > 10000){
            cargoStatus.innerText = "Too heavy for takeoff."
            faultyItems.style.visibility = "visible"
            launchStatus.innerText = "Shuttle not ready for launch"
            document.getElementById("launchStatus").style.color = "red"
            event.preventDefault();
         } else {
            cargoStatus.innerHTML = "Cargo mass low enought for launch"
         }
         if (fuelLevel.value >= 10000 && cargoMass.value <=10000) {
            launchStatus.innerHTML = "Shuttle is ready for launch!"
            fuelStatus.innetText = "enough fuel to launch"
            cargoStatus.innerText = "cargo mass low enough for launch"
            launchStatus.style.color = "green"
            faultyItems.style.visibility = "visible"
            event.preventDefault();
         }
   }   
});
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         let missionTarget = document.getElementById('missionTarget');
         let index = Math.floor(Math.random()*json.length)
         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[index].name}</li>
                  <li>Diameter: ${json[index].diameter}</li>
                  <li>Star: ${json[index].star}</li>
                  <li>Distance from Earth: ${json[index].distance}</li>
                  <li>Number of Moons: ${json[index].moons}</li>
               </ol>
            <img src="${json[index].image}">
         `
      })
   })
});

function isInvalidString(toCheck) {
   if(!toCheck.value || toCheck.value === ""){
      return true;
   }
   return false;
}

function isInvalidNumber(toCheck) {
   if(!toCheck.value || isNaN(Number(toCheck.value))){
      return true;
   }
   return false;
}
      // if (isInvalidString(pilotName)){
      //    alert("A pilot name must be entered.");
      //    event.preventDefault();
      // } else {
      //    pilotStatus.innerHTML = `${pilotName.value}: Pilot Ready.`
      // }
      // if (isInvalidString(copilotName)){
      //    alert("A co-pilot name must be entered.");
      //    event.preventDefault();
      // } else {
      //    copilotStatus.innerHTML = `${copilotName.value}: Co-pilot Ready.`
      // }
      // if (isInvalidNumber(fuelLevel)){
      //    alert("Please enter a valid fuel level amount");
      //    event.preventDefault();
      // } else {
      //    if (Number(fuelLevel.value) < 10000){
      //       fuelStatus.innerText = "Not enough fuel for the journey."
      //       faultyItems.style.visibility = "visible"
      //       launchStatus.innerText = "Shuttle not ready for launch"
      //       document.getElementById("launchStatus").style.color = "red"
      //       event.preventDefault();
      //    } else if (fuelLevel.value <= 10000 && isInvalidNumber(fuelLevel) === true){
      //       launchStatus.style.color = "black"
      //       event.preventDefault();
      //    } else {
      //       launchStatus.innerText = "Shuttle is ready for launch!"
      //       launchStatus.style.color = "green"
      //       event.preventDefault();
      //    }
      // }
      // if (isInvalidNumber(cargoMass)){
      //    alert("Please enter a valid cargo mass amount");
      //    event.preventDefault();
      // } else {
      //    if(Number(cargoMass.value) > 10000){
      //       cargoStatus.innerText = "Too heavy for takeoff."
      //       faultyItems.style.visibility = "visible"
      //       launchStatus.innerText = "Shuttle not ready for launch"
      //       document.getElementById("launchStatus").style.color = "red"
      //       event.preventDefault();
      //    } else if (cargoMass.value <= 10000 && isInvalidNumber(cargoMass) === true){
      //       launchStatus.style.color = "black"
      //       event.preventDefault();
      //    }else {
      //       launchStatus.innerText = "Shuttle is ready for launch!"
      //       launchStatus.style.color = "green"
      //       event.preventDefault();
      //    }
      // }
      // if (launchStatus.style.color !== "red"){
      //    launchStatus.innerText = "Shuttle is ready for launch!"
      //    launchStatus.style.color = "green"
      //    event.preventDefault();
      // }


// This block of code shows how to format the HTML once you fetch some planetary JSON!
// <h2>Mission Destination</h2>
// <ol>
//    <li>Name: ${}</li>
//    <li>Diameter: ${}</li>
//    <li>Star: ${}</li>
//    <li>Distance from Earth: ${}</li>
//    <li>Number of Moons: ${}</li>
// </ol>
// <img src="${}">



//       if (pilotName.value === ""){
//          alert("All fields must be completed.");
//          event.preventDefault();
//       } else {
//          pilotStatus.innerText = `${input[name=pilotName]}: Pilot Ready`
//       }

//       if (copilotName.value === ""){
//          alert("All fields must be completed.");
//          event.preventDefault();
//       } else {
//          copilotStatus.innerText = `${input[name=copilotName]}: Co-Pilot Ready`
//       }

//       if (fuelLevel.value === "" || cargoMass.value === "") {
//          alert("All fields must be completed.");
//          event.preventDefault();
//       }   

//       else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)){
//          alert("Please enter a valid name.")
//          event.preventDefault();
//       }

//       else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
//          alert("Please enter a valid number")
//          event.preventDefault();   
//       }

   // form.addEventListener("submit", function(event){
   // let pilotStatus = document.getElementById("pilotStatus");
   // let copilotStatus = document.getElementById("copilotStatus");
   // let fuelLevel = document.querySelector("input[name=fuelLevel]");
   // let cargoMass = document.querySelector("input[name=cargoMass]");


   //    if (fuelLevel.value < 10000){
   //       document.getElementById("faultyItems").style.visibility = "visible";
   //       document.getElementById("fuelStatus").innerText = "Not enough fuel for the journey."
   //       document.getElementById("launchStatus").innerText = "Shuttle not ready for launch".style. color = "red"
   //    }
   //    else if (cargoMass.value > 10000){
   //       document.getElementById("faultyItems").style.visibility = "visible";
   //       document.getElementById("cargoStatus").innerText = "Too much mass for the shuttle to take off."
   //       document.getElementById("launchStatus").innerText = "Shuttle not ready for launch".style. color = "red"
   //    }