// counter
let btnPlus = document.getElementById("plus");
let btnMinus = document.getElementById("minus");
let counterNumber = document.querySelector(".counter span");
let i = 0;

counterNumber.innerHTML = i;

function checkcolor() {
  if (i == 0) {
    counterNumber.style.color = "black";
  } else if (i > 0) {
    counterNumber.style.color = "green";
  } else {
    counterNumber.style.color = "red";
  }
}

checkcolor();

btnPlus.onclick = () => {
  counterNumber.innerHTML = ++i;
  checkcolor();
};
btnMinus.onclick = () => {
  counterNumber.innerHTML = --i;
  checkcolor();
};

// services
let serviceButtons = document.querySelectorAll(".services-buttons button");
let servicesContents = document.querySelectorAll(
  ".services .services-contents .content"
);
for (let i = 0; i < serviceButtons.length; i++) {
  serviceButtons[i].onclick = function () {
    removeAllactive();
    this.classList.add("active");
    changeContent();
    // if (
    //   servicesContents[i].getAttribute("data-src") ==
    //   this.getAttribute("data-src")
    // ) {
    //   servicesContents[i].classList.add("active");
    // }
    servicesContents[i].classList.add("active");
  };
}

function removeAllactive() {
  serviceButtons.forEach((button) => {
    button.classList.remove("active");
  });
}

function changeContent() {
  servicesContents.forEach((content) => {
    content.classList.remove("active");
  });
}
