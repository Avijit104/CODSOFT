const category = document.getElementById("categoryBtn");
const menu = document.getElementById("menu");
let catFlag = false;
category.addEventListener("click", function () {
  if (catFlag === false) {
    menu.style.display = "block";
    catFlag = true;
  } else {
    menu.style.display = "none";
    catFlag = false;
  }
});
category.addEventListener("blur", function () {
  menu.style.display = "none";
  catFlag = false;
});

const search = document.getElementById("search");
const searchContainer = document.getElementById("serachContainer");
search.addEventListener("focus", function () {
  searchContainer.style.border = "2px solid var(--accent)";
});
search.addEventListener("blur", function () {
  searchContainer.style.border = "";
});
