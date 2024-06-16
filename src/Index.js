function displayItinerary(response) {
  new Typewriter("#destination", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateDestination(event) {
  event.preventDefault();

  let apiKey = "961b8970tof1b84c9614f32a0babd4e4";
  let instructionsInput = document.querySelector("#user-instructions");
  let context =
    "Always display a HTML title of the city and country that is big, bold and on its own line. You are a travel expert who loves providing quick days out with food suggestions. Generate a short brief that is only 3 lines about what the country has to offer and is not bold. After the description provide the user with what they can do for 3 days in the city/country in bullet points with a short description that is easy to read. Put the description as its own paragraph. Make the days bold and present them on their own line as titles with the activities following in bullet points. Please do not state the words title, description or anything with plan/itinerary. Only have one h1. Please finish sentences. Days have to be h2. You must be consistent and present the same layout every time.";
  let prompt = `Generate a travel itinerary for ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let destinationElement = document.querySelector("#destination");
  destinationElement.classList.remove("hidden");
  destinationElement.innerHTML = `<div class="generating">⏳ Generating a 3 days itinerary about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayItinerary);
}

let destinationFormElement = document.querySelector("#travel-generator-form");
destinationFormElement.addEventListener("submit", generateDestination);
