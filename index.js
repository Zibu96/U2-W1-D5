window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const btn = document.querySelector(".firstBtn");
  if (window.scrollY > 300) {
    header.style.backgroundColor = "white";
    btn.style.backgroundColor = "green";
  } else {
    header.style.backgroundColor = "#FFC017";
    btn.style.backgroundColor = "black";
  }
});
