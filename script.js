// script.js

const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener("click", () => {
  output.innerHTML = ""; // Clear the output div before downloading images
  Promise.all(images.map(downloadImage))
    .then((downloadedImages) => {
      downloadedImages.forEach((img) => output.appendChild(img));
    })
    .catch((error) => {
      console.error(error);
    });
});

function downloadImage(image) {
  return new Promise((resolve, reject) => {
    const imgElement = new Image();
    imgElement.onload = () => resolve(imgElement);
    imgElement.onerror = () =>
      reject(new Error(`Failed to load image's URL: ${image.url}`));
    imgElement.src = image.url;
  });
}
