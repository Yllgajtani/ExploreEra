let currentImageIndex = 0; // Index of the current image
const totalImages = 3; // Total number of images
const intervalTime = 3000; // Interval time in milliseconds (3 seconds)
let intervalId; // Variable to hold the interval ID

// Function to show the current image and hide the rest
function showCurrentImage() {
    // Hide all images
    const images = document.querySelectorAll('.foto');
    images.forEach(image => {
        image.classList.remove('active');
    });

    // Show the current image
    images[currentImageIndex].classList.add('active');
}

// Function to move to the previous image
function prevImage() {
    clearInterval(intervalId); // Clear interval
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showCurrentImage();
}

// Function to move to the next image
function nextImage() {
    clearInterval(intervalId); // Clear interval
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showCurrentImage();
}

// Initial call to show the first image
showCurrentImage();

// Set interval to change image every intervalTime milliseconds
intervalId = setInterval(nextImage, intervalTime);

const texts = [
    "Welcome to our Agency",
    "Discover your dream destinations",
    "Book your next adventure with us",
    "Explore new horizons with ExploreEra Travel",
    "Embark on unforgettable journeys with ExploreEra Travel.",
    "Your gateway to extraordinary destinations awaits at ExploreEra Travel.",
    "Discover the world’s wonders with ExploreEra Travel.",
    "Plan your dream vacation with ExploreEra Travel.",
    "Experience luxury travel at its finest with ExploreEra Travel.",
    "Let us make your travel dreams a reality at ExploreEra Travel.",
    "Explore new horizons with ExploreEra Travel."
];

let currentTextIndex = 0;
const textElement = document.getElementById('text');

function changeText() {
    textElement.textContent = texts[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % texts.length;
}

// Change text every 3 seconds
setInterval(changeText, 3000);