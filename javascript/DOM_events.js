let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function () {
  console.log("button was not clicked");
  alert("Hello");
};

let btns = document.querySelectorAll("button");

for (btn of btns) {
  btn.onmouseenter = function () {
    console.log("you hovered the button");
  };
  btn.onmouseleave = mouseLeave;
  btn.addEventListener("click", function () {
    console.log(this.innerText);
  });

  btn.addEventListener("click", SayHello);
  btn.addEventListener("click", SayName);
  btn.addEventListener("dblclick", function () {
    console.log("You double clicked me!!");
  });
}

function SayHello() {
  console.log("Hello");
}
function SayName() {
  console.log("Taufiq");
}
function mouseLeave() {
  console.log("Mouse left");
}

let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
  console.log(event.key);
  console.log(event.code);
  console.log("Key was pressed");
});
inp.addEventListener("keyup", function () {
  console.log("Key was released");
});
