const cardContainer = document.querySelector(".cardContainer");
const card = document.querySelector(".card");
const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector("h1");
const description = document.querySelector("p");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");

cardContainer.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg`;
});

cardContainer.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  sneaker.style.transform = "translateZ(100px) rotateZ(-10deg)";
  title.style.transform = "translateZ(85px)";
  description.style.transform = "translateZ(70px)";
  sizes.style.transform = "translateZ(55px)";
  purchase.style.transform = "translateZ(40px)";
});

cardContainer.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  title.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
