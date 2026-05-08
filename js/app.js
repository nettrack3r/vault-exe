const keys = document.querySelectorAll(".key");

const clearBtn = document.querySelector(".clear");

const enterBtn = document.querySelector(".enter");

const display = document.getElementById("display");

const message = document.getElementById("message");

const terminal = document.querySelector(".terminal");

let code = "";

/* SECRET CODE */

const correctCode = "7319";

/* NUMBER BUTTONS */

keys.forEach((key) => {

  key.addEventListener("click", () => {

    if (code.length < 4) {

      code += key.textContent;

      updateDisplay();

    }

  });

});

/* CLEAR BUTTON */

clearBtn.addEventListener("click", () => {

  code = "";

  updateDisplay();

  message.textContent = "CODE CLEARED";

  terminal.classList.remove("denied");
  terminal.classList.remove("granted");

});

/* ENTER BUTTON */

enterBtn.addEventListener("click", () => {

  terminal.classList.remove("denied");
  terminal.classList.remove("granted");

  /* CORRECT CODE */

  if (code === correctCode) {

    message.textContent = "ACCESS GRANTED";

    message.classList.remove("error");

    message.classList.add("success");

    terminal.classList.add("granted");

  }

  /* WRONG CODE */

  else {

    message.textContent = "ACCESS DENIED";

    message.classList.remove("success");

    message.classList.add("error");

    terminal.classList.add("denied");

    shakeScreen();

  }

  code = "";

  updateDisplay();

});

/* UPDATE DISPLAY */

function updateDisplay() {

  display.textContent = code.padEnd(4, "-");

}

/* SHAKE ANIMATION */

function shakeScreen() {

  terminal.animate([
    { transform: "translateX(0px)" },
    { transform: "translateX(-10px)" },
    { transform: "translateX(10px)" },
    { transform: "translateX(-10px)" },
    { transform: "translateX(10px)" },
    { transform: "translateX(0px)" }
  ], {
    duration: 300
  });

}