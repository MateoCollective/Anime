import {
    data
} from "./data.js";
for (let keys of data) {
    showData(keys);
}

function showData(keys) {
    let showDiv = document.createElement('div');
    showDiv.className = 'items';
    let showDataMain = document.querySelector('.showDataMain');
    let img = document.createElement('img');
    img.className = 'img';
    let episode = document.createElement('p');
    episode.className = 'episode';
    let jumlahTayang = document.createElement('p');
    jumlahTayang.className = 'jumlahTayang';
    let rating = document.createElement('p');
    rating.className = 'rating';
    let title = document.createElement('p');
    title.className = "titleText";
    img.src = `${keys.image}`;
    episode.innerText = `Eps: ${keys.episode}`;
    jumlahTayang.innerText = `View ${keys.jumlahTayang}`;
    rating.innerText = `${keys.rating}`;
    title.innerText = `${keys.title}`;
    showDiv.append(img, episode, jumlahTayang, rating, title);
    showDataMain.appendChild(showDiv);

    // Add event listener to showDiv
    showDiv.addEventListener("click", function () {
        // Create the popup content
    // Remove existing popup element
    var existingPopup = document.querySelector(".popup");
    if (existingPopup) {
        existingPopup.remove();
    }

    
        var popup = `
        <img src="${keys.image}" alt="">
        <h2>${keys.title}</h2>
        <p>Episode: ${keys.episode}</p>
        <p>View: ${keys.jumlahTayang}</p>
        <p>Rating: ${keys.rating}</p>
        <p class="popup-bts">Description: ${keys.description}</p>
        <p>Category: ${keys.category}</p>
    `;
        var closeBtn = document.createElement("button");
        closeBtn.classList.add("close-btn");
        closeBtn.innerHTML = "close";
        popup += closeBtn.outerHTML;

        // Create overlay element
var overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// ...

// Show the overlay
overlay.style.display = "block";

// Hide the overlay when close button is clicked
closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
    popupEl.remove();
});


        // Create the popup element
        var popupEl = document.createElement("div");
        popupEl.classList.add("popup");
        popupEl.innerHTML = popup;

        // Append the popup to the body
        document.body.appendChild(popupEl);

        // Add event listener to close button
        var closeBtn = document.querySelector(".close-btn");
        closeBtn.addEventListener("click", function () {
            popupEl.remove();
        });
    });
}




let inputValue = document.getElementById('inputValue').addEventListener('keyup', (val) => {
    let inputText = val.target.value.toLowerCase();
    let allItems = document.querySelectorAll('.items');
    let error = true;
    for (let key of allItems) {
        let title = key.children[4].innerText.toLowerCase();
        if (title.includes(inputText)) {
            key.style.display = "block";
            error = false;
        } else {
            key.style.display = "none"
        }
    }
    if (error) {
        errorDiv.style.display = "block"
    } else {
        errorDiv.style.display = "none"
    }
});

let errorDiv = document.createElement('div');

function errorData() {
    errorDiv.className = 'errorDiv';
    let h1 = document.createElement('h1');
    h1.className = "errorHeading"
    h1.innerHTML = "Sorry, no results found!<br> Please check the spelling or try searching for something else";
    errorDiv.append(h1);
    document.getElementById('error').append(errorDiv);
    errorDiv.style.display = "none"
}

errorData();

var moreText = document.querySelector(".read-more");
var textContainer = document.querySelector(".text-container");
moreText.onclick = function(){
    textContainer.style.maxHeight = "none";
    moreText.style.display = "none";
}
