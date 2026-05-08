const keys = document.querySelectorAll(".key");
const clearBtn = document.querySelector(".clear");
const enterBtn = document.querySelector(".enter");

const display = document.getElementById("display");
const message = document.getElementById("message");

let code = "";

const correctCode = "7319";

keys.forEach((key) => {
  key.addEventListener("click", () => {

    if (code.length < 4) {
      code += key.textContent;

      updateDisplay();
    }

  });
});

clearBtn.addEventListener("click", () => {
  code = "";
  updateDisplay();

  message.textContent = "CODE CLEARED";
});

enterBtn.addEventListener("click", () => {

  if (code === correctCode) {

    message.textContent = "ACCESS GRANTED";
    message.classList.remove("error");
    message.classList.add("success");

    document.body.style.background = "#001b0f";

  } else {

    message.textContent = "ACCESS DENIED";
    message.classList.add("error");

    shakeScreen();

  }

  code = "";

  updateDisplay();

});

function updateDisplay() {

  display.textContent =
    code.padEnd(4, "-");

}

function shakeScreen() {

  const terminal = document.querySelector(".terminal");

  terminal.animate([
    { transform: "translateX(0px)" },
    { transform: "translateX(-10px)" },
    { transform: "translateX(10px)" },
    { transform: "translateX(0px)" }
  ], {
    duration: 300
  });

}