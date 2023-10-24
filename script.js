var imageContainer = document.querySelector('.image-container');
var isImageVisible = false;

function toggleImage() {
  if (isImageVisible) {
    imageContainer.style.display = 'none';
  } else {
    imageContainer.style.display = 'block';
  }
  isImageVisible = !isImageVisible;
}