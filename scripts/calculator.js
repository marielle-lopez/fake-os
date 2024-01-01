let screen;

hideCalculator = () => {
  document.querySelector(".app-area").innerHTML = "";
};

showCalculator = () => {
  document.querySelector(".app-area").innerHTML = `
    <div class="calculator">
    <div class="calculator__title-bar">
      <p class="calculator__title-bar__title">Calculator</p>
      <span class="calculator__title-bar__close" onclick="hideCalculator()">✖</span>
    </div>
    <div class="calculator__client-area">
      <input class="calculator__screen" id="calculator__screen" readonly />
      <div class="calculator__buttons">
        <div class="calculator__buttons__top">
          <div class="calculator__buttons__row1">
            <button id="clear-display" class="calculator__button">C</button>
            <button id="modulus" class="calculator__button">%</button>
            <button id="divide" class="calculator__button">÷</button>
            <button id="multiply" class="calculator__button">x</button>
          </div>
          <div class="calculator__buttons__row2">
            <button class="calculator__button">7</button>
            <button class="calculator__button">8</button>
            <button class="calculator__button">9</button>
            <button class="calculator__button">-</button>
          </div>
          <div class="calculator__buttons__row3">
            <button class="calculator__button">4</button>
            <button class="calculator__button">5</button>
            <button class="calculator__button">6</button>
            <button class="calculator__button">+</button>
          </div>
        </div>
        <div class="calculator__buttons__bottom">
          <div class="calculator__buttons__col1">
            <div class="calculator__buttons__row4">
              <button class="calculator__button">1</button>
              <button class="calculator__button">2</button>
              <button class="calculator__button">3</button>
            </div>
            <div class="calculator__buttons__row5">
              <button class="calculator__buttons__row5--zero calculator__button">0</button>
              <button class="calculator__button">.</button>
            </div>
          </div>
          <div class="calculator__buttons__col2">
            <button class="calculator__buttons__col2--equals calculator__button">=</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  let calculatorButtons = document.querySelectorAll(".calculator__button");

  for (let i = 0; i < calculatorButtons.length; i++) {
    calculatorButtons[i].addEventListener("click", appendToDisplay);
  }

  document
    .querySelector("#clear-display")
    .addEventListener("click", clearDisplay);

  document
    .querySelector(".calculator__buttons__col2--equals")
    .addEventListener("click", calculate);

  screen = document.querySelector("#calculator__screen");
};

appendToDisplay = (input) => {
  screen.value += input.target.innerText;
};

clearDisplay = () => {
  screen.value = "";
};

calculate = () => {
  screen.value = screen.value.slice(0, screen.value.length - 1);

  try {
    let replacedOperators = screen.value.replace(/÷/g, "/");
    replacedOperators = screen.value.replace(/x/g, "*");
    screen.value = eval(replacedOperators);
  } catch (error) {
    screen.value = "Error";
  }
};
