// 03-arrays-tasks.js

function findElement(arr, value) {
  return arr.indexOf(value);
}

function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => 2 * i + 1);
}

function doubleArray(arr) {
  return [...arr, ...arr];
}

function getArrayOfPositives(arr) {
  return arr.filter((x) => x > 0);
}

function getArrayOfStrings(arr) {
  return arr.filter((x) => typeof x === 'string');
}

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

function findAllOccurrences(arr, item) {
  return arr.filter((x) => x === item).length;
}

function getUpperCaseStrings(arr) {
  return arr.map((x) => x.toUpperCase());
}

function getStringsLength(arr) {
  return arr.map((x) => x.length);
}

function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  return arr.slice(-n);
}

function toCsvText(arr) {
  return arr.map((row) => row.join(',')).join('\n');
}

function toArrayOfSquares(arr) {
  return arr.map((x) => x * x);
}

function getMovingSum(arr) {
  let sum = 0;
  return arr.map((x) => {
    sum += x;
    return sum;
  });
}

function getSecondItems(arr) {
  return arr.filter((_, i) => i % 2 === 1);
}

function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((x, i) => Array(i + 1).fill(x));
}

function get3TopItems(arr) {
  return arr.sort((a, b) => b - a).slice(0, 3);
}

function getPositivesCount(arr) {
  return arr.filter((x) => typeof x === 'number' && x > 0).length;
}

function sortDigitNamesByNumericOrder(arr) {
  const order = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return arr.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}

function getItemsSum(arr) {
  return arr.reduce((acc, x) => acc + x, 0);
}

function getFalsyValuesCount(arr) {
  return arr.filter((x) => !x).length;
}

function toStringList(arr) {
  return arr.join(',');
}

function sortCitiesArray(arr) {
  return arr.sort((a, b) => a.country.localeCompare(b.country) || a.city.localeCompare(b.city));
}

/* eslint-disable max-len */
function getIdentityMatrix(n) {
  return Array.from({ length: n }, (el, rowIdx) => Array.from({ length: n }, (e, colIdx) => (rowIdx === colIdx ? 1 : 0)));
}
/* eslint-enable max-len */

function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (el, idx) => start + idx);
}

function distinct(arr) {
  return [...new Set(arr)];
}

function group(array, keySelector, valueSelector) {
  return array.reduce((map, item) => {
    const key = keySelector(item);
    const value = valueSelector(item);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(value);
    return map;
  }, new Map());
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function getElementByIndexes(arr, indexes) {
  return indexes.reduce((res, i) => res[i], arr);
}

function swapHeadAndTail(arr) {
  const len = arr.length;
  const mid = Math.floor(len / 2);
  const head = arr.slice(0, mid);
  const tail = arr.slice(len - mid);
  if (len % 2 === 0) return [...tail, ...head];
  const middle = arr[mid];
  return [...tail, middle, ...head];
}

module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  findAllOccurrences,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  toStringList,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
