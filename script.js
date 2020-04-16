// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
  
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let pilotStatus = document.getElementById("pilotStatus");
      let coPilotStatus = document.getElementById("copilotStatus");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let fuelStatus = document.getElementById("fuelStatus");

         event.preventDefault();
      if (pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "" ) {
         alert("All fields are required!");
      
      }else if(isNaN(pilotName.value)===false || isNaN(coPilotName.value)===false || isNaN(fuelLevel.value)===true || isNaN(cargoMass.value)===true){
         alert("Enter Valid Info!")
      
      }else{
         faultyItems.style.visibility = "visible"
         pilotStatus.innerHTML = `${pilotName.value} ready for launch!`
         coPilotStatus.innerHTML = `${coPilotName.value} ready for launch!`
         
         if(fuelLevel.value<10000){
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "LOW FUEL DON'T GO!";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";

         }else if(cargoMass.value>10000){
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "TOO HEAVY DON'T GO!";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
         }else{
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is ready for launch."
         }
      }
   })
   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
      response.json().then(function(json){
         const div = document.getElementById('missionTarget');
         {  let i = Math.floor(Math.random() * 6);
            let data = json[i];
            div.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${data.name}</li>
                  <li>Diameter: ${data.diameter}</li>
                  <li>Star: ${data.star}</li>
                  <li>Distance from Earth: ${data.distance}</li>
                  <li>Number of Moons: ${data.moons}</li>
               </ol>
               <img src="${data.image}">
            `
         }
      })
   });
});


