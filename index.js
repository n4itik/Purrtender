import cats from "./data.js";
import Cat from "./Cat.js";

let isWaiting = false;
const pfpContainer = document.querySelector(".pfp-container");
const rejectBtn = document.getElementById("btn-reject");
const acceptBtn = document.getElementById("btn-accept");

function getNewCat() {
  const nextCat = cats.shift();
  return nextCat ? new Cat(nextCat) : {};
}

function swipe() {
  if (!isWaiting) {
    cat.hasBeenSwiped = true;
    isWaiting = true;

    rejectBtn.classList.toggle("disabled");
    acceptBtn.classList.toggle("disabled");

    cat.hasBeenLiked
      ? document.getElementById("badge-like").classList.toggle("visible")
      : document.getElementById("badge-nope").classList.toggle("visible");

    if (cats.length > 0) {
      setTimeout(() => {
        cat = getNewCat();
        render();
        isWaiting = false;

        rejectBtn.classList.toggle("disabled");
        acceptBtn.classList.toggle("disabled");
      }, 500);
    } else {
      finish();
    }
  }
}

function finish() {
  isWaiting = true;

  setTimeout(() => {
    pfpContainer.innerHTML = `<h1>There are no more cats in your area.</h1>`;
    pfpContainer.classList.toggle("finished");
  }, 500);
}

function accept() {
  cat.hasBeenLiked = true;
  swipe();
}

rejectBtn.addEventListener("click", swipe);
acceptBtn.addEventListener("click", accept);

function render() {
  pfpContainer.innerHTML = cat.getCatHtml();
}

let cat = getNewCat();
render();
