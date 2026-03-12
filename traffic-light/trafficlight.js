function switchLights() {
  // udvælg elementer i html-siden til senere brug
  const redLight = document.querySelector("#red");
  const yellowLight = document.querySelector("#yellow");
  const greenLight = document.querySelector("#green");
  // også selecte de andre to

  // Write if else if statements, to go from red being active, to yellow being active, to green
  // and back to red.
  if (redLight.classList.contains("active")) {
    redLight.classList.remove("active");
    yellowLight.classList.add("active");
    greenLight.classList.remove("active");
  } else if (yellowLight.classList.contains("active")) {
    yellowLight.classList.remove("active");
    redLight.classList.remove("active");
    greenLight.classList.add("active");
  } else if (greenLight.classList.contains("active")) {
    greenLight.classList.remove("active");
    yellowLight.classList.remove("active");
    redLight.classList.add("active");
  } else {
    redLight.classList.add("active");
  }
  // er der en css-klasse 'active' på id="red"
  //....classList.contains('active');
  const isRedActive = redLight.classList.contains("active");

  // redLight.classList.remove("active");
}

// Tilknyt event-listener på at brugeren trykker på knappen
document.getElementById("change-light").addEventListener("click", switchLights);
