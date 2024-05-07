let info = document.querySelector("div.info");
let person = document.querySelector("#person");
let icons = document.querySelectorAll("section")[1];
let share = document.querySelector("button");

share.onclick = () => {
  if (share.classList.contains("active")) {
    person.className = "";
    icons.className = "hidden";
    share.classList.remove("active");
    info.classList.remove("active");
  } else {
    person.className = "hidden";
    icons.className = "";
    share.classList.add("active");
    info.classList.add("active");
  }
};
