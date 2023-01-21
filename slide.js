const data = [
    {
        "image": "https://m.media-amazon.com/images/M/MV5BZjU2ZDZkYmMtYTA3Yi00NTZkLTgzYjgtOTRhMTFiOWFkODZmXkEyXkFqcGdeQXVyNjkyODc3NjQ@._V1_.jpg",
        "title": "Akame ga Kill",
        "rating": 4.5,
        "views": "234 views",
        "description": "Esse ipsum cupidatat enim culpa cillum Lorem aliquip ad laboris.",
    },
    {
        "image": "https://sokuja.com/wp-content/uploads/2022/10/sokuja-kage-no-jitsuryokusha-naritakute.jpg",
        "title": "Kage no Jitsuryokusha ni Naritakute",
        "rating": 3.5,
        "views": "123 views",
        "description": "Et elit est nisi id culpa mollit et enim ad ad est.",
    },
    {
        "image": "https://sokuja.com/wp-content/uploads/2022/12/Bungou-Stray-Dogs-Season-4-Sub-Indo.jpg.webp",
        "title": "Dolor in commodo non dolore ex culpa consequat sit aute Lorem Lorem.",
        "rating": 5.0,
        "views": "345 views",
        "description": "Sunt dolor non adipisicing fugiat.",
    },
    // add more images as needed
];

let currentIndex = 0;

// Select the elements where the data will be displayed
const imageElement = document.getElementById("image");
const titleElement = document.getElementById("title");
const ratingElement = document.getElementById("rating");
const viewsElement = document.getElementById("views");
const descriptionElement = document.getElementById("description");

// Set the initial data
imageElement.src = data[currentIndex].image;
titleElement.innerText = data[currentIndex].title;
ratingElement.innerText = `Rating: ${data[currentIndex].rating}`;
viewsElement.innerText = data[currentIndex].views;
descriptionElement.innerText = data[currentIndex].description;

// Function to move to the next image in the carousel
function nextImage() {
    currentIndex++;
    if (currentIndex === data.length) {
        currentIndex = 0;
    }
    imageElement.src = data[currentIndex].image;
    titleElement.innerText = data[currentIndex].title;
    ratingElement.innerText = `Rating: ${data[currentIndex].rating}`;
    viewsElement.innerText = data[currentIndex].views;
    descriptionElement.innerText = data[currentIndex].description;
}

// Call the nextImage function every 3 seconds (3000 milliseconds)
setInterval(nextImage, 3000);
