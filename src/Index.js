function generateDestination(event) {
  event.preventDefault();

  new Typewriter("#destination", {
    strings: "La France, pays de l'Europe occidentale",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let destinationFormElement = document.querySelector("#travel-generator-form");
destinationFormElement.addEventListener("submit", generateDestination);
