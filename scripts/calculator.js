let screen;

function hideCalculator() {
  document.querySelector(".app-area").innerHTML = "";
}

function showCalculator() {
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
            <button class="calculator__button" onclick="clearDisplay()">C</button>
            <button class="calculator__button" onclick="appendToDisplay('%')">%</button>
            <button class="calculator__button" onclick="appendToDisplay('÷')">÷</button>
            <button class="calculator__button" onclick="appendToDisplay('x')">x</button>
          </div>
          <div class="calculator__buttons__row2">
            <button class="calculator__button" onclick="appendToDisplay('7')">7</button>
            <button class="calculator__button" onclick="appendToDisplay('8')">8</button>
            <button class="calculator__button" onclick="appendToDisplay('9')">9</button>
            <button class="calculator__button" onclick="appendToDisplay('-')">-</button>
          </div>
          <div class="calculator__buttons__row3">
            <button class="calculator__button" onclick="appendToDisplay('4')">4</button>
            <button class="calculator__button" onclick="appendToDisplay('5')">5</button>
            <button class="calculator__button" onclick="appendToDisplay('6')">6</button>
            <button class="calculator__button" onclick="appendToDisplay('+')">+</button>
          </div>
        </div>
        <div class="calculator__buttons__bottom">
          <div class="calculator__buttons__col1">
            <div class="calculator__buttons__row4">
              <button class="calculator__button" onclick="appendToDisplay('1')">1</button>
              <button class="calculator__button" onclick="appendToDisplay('2')">2</button>
              <button class="calculator__button" onclick="appendToDisplay('3')">3</button>
            </div>
            <div class="calculator__buttons__row5">
              <button
                class="calculator__buttons__row5--zero calculator__button" onclick="appendToDisplay('0')"
              >
                0
              </button>
              <button class="calculator__button"  onclick="appendToDisplay('.')">.</button>
            </div>
          </div>
          <div class="calculator__buttons__col2">
            <button
              class="calculator__buttons__col2--equals calculator__button" onclick="calculate()"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  screen = document.querySelector("#calculator__screen");
}

function appendToDisplay(input) {
  console.log(input);
  console.log(screen.value);
  screen.value += input;
}

function clearDisplay() {
  screen.value = "";
}

function calculate() {
  try {
    let replacedOperators = screen.value.replace(/÷/g, "/");
    replacedOperators = screen.value.replace(/x/g, "*");
    replacedOperators = screen.value.replace(/÷/g, "/");
    screen.value = eval(replacedOperators);
  } catch (error) {
    screen.value = "Error";
  }
}
