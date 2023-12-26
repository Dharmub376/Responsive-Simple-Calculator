let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
  calculateResultRealTime();
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
  calculateResultRealTime();
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateResultRealTime() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    // Ignore errors for real-time calculations
  }
}

function calculateTrig(trigFunction) {
  let input = parseFloat(display.value);
  let result;
  switch (trigFunction) {
    case 'sin':
      result = Math.sin((Math.PI / 180) * input);
      break;
    case 'cos':
      result = Math.cos((Math.PI / 180) * input);
      break;
    case 'tan':
      result = Math.tan((Math.PI / 180) * input);
      break;
    default:
      break;
  }

  if (!isNaN(result)) {
    display.value = result;
  } else {
    display.value = 'Error';
  }
}

function calculateSqrt() {
  display.value = Math.sqrt(parseFloat(display.value));
}

function calculateCbrt() {
  display.value = Math.cbrt(parseFloat(display.value));
}
