function one() {
  return 1;
}
function two() {
  return one() + one();
}
function three() {
  let ans = two() + one();
  console.log(ans);
}
three();

//callback hell example
h1 = document.querySelector("h1");
function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}
changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("yellow", 1000, () => {
        changeColor("grey", 1000);
      });
    });
  });
});

//setting up promise

function savetoDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 3) {
    success();
  } else {
    failure();
  }
}

savetoDb(
  "Taufiq",
  () => {
    console.log("Success: Data was saved");
  },
  () => {
    console.log("failure :Weak internet connection");
  },
);
