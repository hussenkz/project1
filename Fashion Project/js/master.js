
// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Get Array Of Imgs
let imgsArray = ["C5.jpg", "C6.jpg", "C4.jpg", "B1.jpg", "A1.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {

  if (backgroundOption === true) {

    backgroundInterval = setInterval(() => {

      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);

      const randomBackEl = document.querySelector(".landing-page");

      // Change Background Image Url 
      randomBackEl.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
    
    }, 5000);

  }

}

randomizeImgs();


// Start Going Up

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// End Going Up
