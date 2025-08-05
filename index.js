const buttonElement = document.getElementById("buttonId");
const heading = document.getElementById("dogHeading");
const dogPicturesContainer = document.getElementById("dogpicturesImages");
const imageBox = document.getElementById("imageBox");
buttonElement.addEventListener("click", async () => {
  const dogPicturesUrl = "https://dog.ceo/api/breeds/image/random";
  try {
    const response = await axios.get(dogPicturesUrl);
    const imageURL = response.data.message;
    heading.classList.remove("hidden");
    dogPicturesContainer.classList.remove("hidden");
    imageBox.innerHTML = "";
    const imageElement = document.createElement("img");
    imageElement.src = imageURL;
    imageElement.alt = "Random Dog";
    imageBox.appendChild(imageElement);

  } catch (error) {
    console.error("Error fetching dog image:", error);
    alert("Failed to load image. Please try again.");
  }
});
