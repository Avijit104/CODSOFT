const pad = document.querySelectorAll(".pad-button");
const display = document.getElementById("display");
const equal = document.getElementById("equals");
const clear = document.getElementById("clear");
let flag = true;
console.log(pad);
pad.forEach((item) => {
  item.addEventListener("click", function () {
    if (display.value === "Infinity" || display.value === "-Infinity") {
      display.value = item.value;
    } else if (
      flag === false &&
      (item.value == "1" ||
        item.value == "2" ||
        item.value == "3" ||
        item.value == "4" ||
        item.value == "5" ||
        item.value == "6" ||
        item.value == "7" ||
        item.value == "8" ||
        item.value == "0" ||
        item.value == "9" ||
        item.value == ".")
    ) {
      display.value = item.value;
    } else {
      flag = true;
      display.value = display.value + item.value;
    }
  });
});
equal.addEventListener("click", function () {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
  flag = false;
});

console.log(clear);
clear.addEventListener("click", function () {
  display.value = "";
});
