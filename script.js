const display = document.getElementById("display");

function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function appendOperator(operator) {
  const current = display.innerText;
  const lastChar = current.slice(-1);

  if ("+-*/%".includes(lastChar)) {
    display.innerText = current.slice(0, -1) + operator;
  } else {
    display.innerText += operator;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function backspace() {
  const current = display.innerText;
  if (current.length > 1) {
    display.innerText = current.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    const result = eval(
      display.innerText.replace(/÷/g, "/").replace(/×/g, "*")
    );
    display.innerText = result;
  } catch (e) {
    display.innerText = "Error";
  }
}
