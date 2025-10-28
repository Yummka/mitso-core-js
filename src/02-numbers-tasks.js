// 1. Площадь прямоугольника
function getRectangleArea(width, height) {
  return width * height;
}

// 2. Длина окружности
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

// 3. Среднее двух чисел
function getAverage(value1, value2) {
  // используем безопасный способ, чтобы не было переполнения
  return value1 / 2 + value2 / 2;
}

// 4. Расстояние между двумя точками
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1); // hypot вычисляет sqrt(dx^2 + dy^2)
}

// 5. Корень линейного уравнения a*x + b = 0
function getLinearEquationRoot(a, b) {
  return -b / a;
}

// 6. Угол между векторами
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dot = x1 * x2 + y1 * y2;
  const mag1 = Math.hypot(x1, y1);
  const mag2 = Math.hypot(x2, y2);
  return Math.acos(dot / (mag1 * mag2));
}

// 7. Последняя цифра числа
function getLastDigit(value) {
  return value % 10;
}

// 8. Преобразование строки в число
function parseNumberFromString(value) {
  return Number(value);
}

// 9. Диагональ прямоугольного параллелепипеда
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}

// 10. Округление к степени 10
function roundToPowerOfTen(num, pow) {
  const factor = 10 ** pow;
  return Math.round(num / factor) * factor;
}

// 11. Проверка на простое число
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// 12. Безопасное преобразование в число
function toNumber(value, def) {
  const num = Number(value);
  return Number.isNaN(num) ? def : num;
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
