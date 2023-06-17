const inputFirst: HTMLInputElement = document.createElement("input");
inputFirst.type = "number";

const inputSecond: HTMLInputElement = document.createElement("input");
inputSecond.type = "number";

const button: HTMLButtonElement = document.createElement("button");
button.textContent = "+";
const buttonm: HTMLButtonElement = document.createElement("button");
buttonm.textContent = "-";
const buttonn: HTMLButtonElement = document.createElement("button");
buttonn.textContent = "*";
const buttonmn: HTMLButtonElement = document.createElement("button");
buttonmn.textContent = "/";

const h1: HTMLHeadingElement = document.createElement("h1");
h1.className = "h1";

const calculate = (symbol: string) => {
  const firstNumber: number = +inputFirst.value;
  const secondNumber: number = +inputSecond.value;
  let sum: number;

  if (symbol === "+") {
    sum = firstNumber + secondNumber;
    h1.innerText = `Result: ${sum}`;
  } else if (symbol === "-") {
    sum = firstNumber - secondNumber;
    h1.innerText = `Result: ${sum}`;
  } else if (symbol === "*") {
    sum = firstNumber * secondNumber;
    h1.innerText = `Result: ${sum}`;
  } else if (symbol === "/") {
    sum = firstNumber / secondNumber;
    h1.innerText = `Result: ${sum}`;
  }
  inputFirst.value = "";
  inputSecond.value = "";
  document.body.append(h1);
};

button.addEventListener("click", () => calculate("+"));
buttonm.addEventListener("click", () => calculate("-"));
buttonn.addEventListener("click", () => calculate("*"));
buttonmn.addEventListener("click", () => calculate("/"));

document.body.append(
  inputFirst,
  inputSecond,
  button,
  buttonm,
  buttonn,
  buttonmn
);
