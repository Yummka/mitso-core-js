function getFizzBuzz(num) {
  if (num % 15 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

function getFactorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * getFactorial(n - 1);
}

function getSumBetweenNumbers(n1, n2) {
  return Array.from({ length: n2 - n1 + 1 }, (_, idx) => n1 + idx)
    .reduce((sum, x) => sum + x, 0);
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function doRectanglesOverlap(rect1, rect2) {
  return !(
    rect1.left + rect1.width <= rect2.left
    || rect2.left + rect2.width <= rect1.left
    || rect1.top + rect1.height <= rect2.top
    || rect2.top + rect2.height <= rect1.top
  );
}

function isInsideCircle(circle, point) {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;
  return dx * dx + dy * dy < circle.radius * circle.radius;
}

function findFirstSingleChar(str) {
  return str.split('').find((ch) => str.indexOf(ch) === str.lastIndexOf(ch)) || null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = isStartIncluded ? '[' : '(';
  const end = isEndIncluded ? ']' : ')';
  const first = Math.min(a, b);
  const second = Math.max(a, b);
  return `${start}${first}, ${second}${end}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  return Number(String(num).split('').reverse().join(''));
}

function getDigitalRoot(num) {
  let n = num;
  while (n > 9) {
    n = String(n).split('').reduce((acc, d) => acc + Number(d), 0);
  }
  return n;
}

function isCreditCardNumber(ccn) {
  const digits = String(ccn).split('').reverse().map(Number);
  const sum = digits.reduce((acc, d, idx) => {
    if (idx % 2 === 1) {
      const doubled = d * 2;
      return acc + (doubled > 9 ? doubled - 9 : doubled);
    }
    return acc + d;
  }, 0);
  return sum % 10 === 0;
}

/* eslint-disable max-len */
function getMatrixProduct(m1, m2) {
  return m1.map((row) => m2[0].map((_, colIdx) => row.reduce((sum, val, k) => sum + val * m2[k][colIdx], 0)));
}
/* eslint-enable max-len */

function isBracketsBalanced(str) {
  const stack = [];
  const pairs = {
    ')': '(', ']': '[', '}': '{', '>': '<',
  };

  for (let i = 0; i < str.length; i += 1) {
    const ch = str[i];
    if ('([{<'.includes(ch)) {
      stack.push(ch);
    } else if (')]}>'.includes(ch)) {
      const last = stack.pop();
      if (last !== pairs[ch]) {
        return false; // теперь возвращаем напрямую, consistent-return
      }
    }
  }

  return stack.length === 0;
}

function toNaryString(num, n) {
  return num.toString(n);
}

function getCommonDirectoryPath(pathes) {
  const splitPaths = pathes.map((p) => p.split('/'));
  const first = splitPaths[0];
  const common = first.filter((segment, idx) => splitPaths.every((p) => p[idx] === segment));
  return common.length > 0 ? `${common.join('/')}/` : '';
}

function evaluateTicTacToePosition(position) {
  const lines = [
    [position[0][0], position[0][1], position[0][2]],
    [position[1][0], position[1][1], position[1][2]],
    [position[2][0], position[2][1], position[2][2]],
    [position[0][0], position[1][0], position[2][0]],
    [position[0][1], position[1][1], position[2][1]],
    [position[0][2], position[1][2], position[2][2]],
    [position[0][0], position[1][1], position[2][2]],
    [position[0][2], position[1][1], position[2][0]],
  ];
  const winner = lines.find(([a, b, c]) => a && a === b && b === c);
  return winner ? winner[0] : undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
