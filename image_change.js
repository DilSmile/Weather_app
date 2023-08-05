// Background-image changing
const images = [
  "https://i.pinimg.com/originals/43/e0/dd/43e0dd352330122fdd3d331a31e11d0b.jpg",
  "https://wallpapers.com/images/hd/beautiful-landscape-pictures-lscyz3sms2acxii0.jpg",
  "https://s1.1zoom.ru/big7/76/Scenery_Sky_Mountains_356720.jpg",
  "https://w.forfun.com/fetch/bd/bd4bb306b9dca36d5f8f0376e95d170c.jpeg",
  "https://w.forfun.com/fetch/0e/0e5bab563143004a4b43d4966b224074.jpeg",
  "https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-11.jpg",
  "https://w.forfun.com/fetch/74/74b6f4f521b6dd91e31f342b2a006254.jpeg",
  "https://i.pinimg.com/originals/cb/df/8b/cbdf8b7d792da0b78a7ef49309d83ceb.jpg",
  "https://wallpapers.com/images/hd/beautiful-landscape-pictures-lscyz3sms2acxii0.jpg",
  "https://s1.1zoom.ru/big7/76/Scenery_Sky_Mountains_356720.jpg",
  "https://w.forfun.com/fetch/bd/bd4bb306b9dca36d5f8f0376e95d170c.jpeg",
  "https://w.forfun.com/fetch/0e/0e5bab563143004a4b43d4966b224074.jpeg",
  "https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-11.jpg",
  "https://w.forfun.com/fetch/74/74b6f4f521b6dd91e31f342b2a006254.jpeg",
  "https://i.pinimg.com/originals/cb/df/8b/cbdf8b7d792da0b78a7ef49309d83ceb.jpg",
];
const backgroundElement = document.querySelector(".background-image");
let currentImageIndex = 0;
function changeBackgroundImage() {
  const imageUrl = `url(${images[currentImageIndex]})`;
  backgroundElement.style.backgroundImage = imageUrl;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}
// Change the background image every 5 seconds
setInterval(changeBackgroundImage, 5000);
