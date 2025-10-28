function parseDataFromRfc2822(value) {
  return new Date(value);
}

function parseDataFromIso8601(value) {
  return new Date(value);
}

function isLeapYear(date) {
  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function timeSpanToString(startDate, endDate) {
  const diff = endDate - startDate;
  const HH = String(Math.floor(diff / 3600000)).padStart(2, '0');
  const mm = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const ss = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
  const sss = String(diff % 1000).padStart(3, '0');
  return `${HH}:${mm}:${ss}.${sss}`;
}

function angleBetweenClockHands(date) {
  const hours = date.getUTCHours() % 12;
  const minutes = date.getUTCMinutes();
  let angle = Math.abs(30 * hours + 0.5 * minutes - 6 * minutes);
  if (angle > 180) angle = 360 - angle;
  return (angle * Math.PI) / 180;
}

function getDay(day, isLeap) {
  const months = [
    ['January', 31],
    ['February', isLeap ? 29 : 28],
    ['March', 31],
    ['April', 30],
    ['May', 31],
    ['June', 30],
    ['July', 31],
    ['August', 31],
    ['September', 30],
    ['October', 31],
    ['November', 30],
    ['December', 31],
  ];

  return months
    .reduce(
      ({ remainingDays, result }, [name, daysInMonth]) => {
        if (result) return { remainingDays, result };
        if (remainingDays <= daysInMonth) {
          return { remainingDays, result: `${name}, ${remainingDays}` };
        }
        return { remainingDays: remainingDays - daysInMonth, result: null };
      },
      { remainingDays: day, result: null },
    )
    .result;
}

module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
  getDay,
};
