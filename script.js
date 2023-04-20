// TODO: add code here

window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (jsonResponse) {
      //   console.log(jsonResponse);
      //   console.log("window has loaded.");

      let container= document.getElementById("container");
      let newMarkup='';
      


      for (let i = 0; i < jsonResponse.length; i++) {
        console.log(jsonResponse[i].firstName);
        newMarkup += `<div class="astronaut">
        <div class="bio">
           <h3>${jsonResponse[i].firstName} ${jsonResponse[i].lastName}</h3>
           <ul>
              <li>Hours in space:${jsonResponse[i].hoursInSpace}</li>
              <li>Active: ${jsonResponse[i].active}</li>
              <li>Skills: ${jsonResponse[i].skills}</li>
           </ul>
        </div>
        <img class="avatar" src="${jsonResponse[i].picture}">
     </div>
     </div>`;
    };
      container.innerHTML=newMarkup
    });
  });
});


