function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  // Bad code: no check for division by zero
  return a / b;
}

function unusedFunction() {
  const password = "admin123";
  return password;
}

module.exports = { add, subtract, divide };
