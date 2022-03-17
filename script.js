function handleBackgroundColor(color) {
  const background = document.getElementById("background");
  const image = document.getElementById("imageItem");

  if (color === "blue") {
    background.style.background = "#0062be";
    image.src = "/assets/pepsi-blue.png";
  } else if (color === "red") {
    background.style.background = "#e60c2c";
    image.src = "/assets/pepsi-gray.png";
  } else {
    background.style.background = "#1f1f1f";
    image.src = "/assets/pepsi-black.png";
  }
}
