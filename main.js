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
// let serviceButtons = document.querySelectorAll(".services-buttons button");
// let servicesContents = document.querySelectorAll(
//   ".services .services-contents .content"
// );

// for (let i = 0; i < serviceButtons.length; i++) {
//   serviceButtons[i].onclick = function () {
//     removeActivefromAllbuttons();
//     this.classList.add("active");
//     changeContent();
//     servicesContents[i].classList.add("active");
//   };
// }

// function removeActivefromAllbuttons() {
//   serviceButtons.forEach((button) => {
//     button.classList.remove("active");
//   });
// }

// function changeContent() {
//   servicesContents.forEach((content) => {
//     content.classList.remove("active");
//   });
// }

// new method forEach
let serviceButtons = document.querySelectorAll(".services-buttons button");
let servicesContents = document.querySelectorAll(
  ".services .services-contents .content"
);
let buttonsDiv = document.querySelector(".services .services-buttons");
buttonsDiv.addEventListener("click", (e) => {
  let currentBtn = e.target;
  // link current btn with current div using id && data-src
  let currentDiv = document.getElementById(currentBtn.dataset.src);

  // remove active class from all buttons and add active class to current button
  serviceButtons.forEach((btn) => {
    btn.classList.remove("active");
    currentBtn.classList.add("active");
  });

  // remove active class from all contents and add active class to current div
  servicesContents.forEach((content) => {
    content.classList.remove("active");
    currentDiv.classList.add("active");
  });
});
