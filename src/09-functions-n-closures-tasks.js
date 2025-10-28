function getComposition(f, g) {
  return (x) => f(g(x));
}

function getPowerFunction(exponent) {
  return (x) => x ** exponent;
}

function getPolynom(...coefficients) {
  if (coefficients.length === 0) return null;
  return (x) => coefficients
    .slice()
    .reverse()
    .reduce((sum, coeff, idx) => sum + coeff * x ** idx, 0);
}

function memoize(func) {
  let cache;
  let called = false;
  return () => {
    if (!called) {
      cache = func();
      called = true;
    }
    return cache;
  };
}

function retry(func, attempts) {
  return () => {
    let lastError;
    for (let i = 0; i < attempts; i += 1) {
      try {
        return func();
      } catch (err) {
        lastError = err;
      }
    }
    throw lastError;
  };
}

function logger(func, logFunc) {
  return (...args) => {
    const argStr = args.map((a) => JSON.stringify(a)).join(',');
    logFunc(`${func.name}(${argStr}) starts`);
    const result = func(...args);
    logFunc(`${func.name}(${argStr}) ends`);
    return result;
  };
}

function partialUsingArguments(fn, ...args1) {
  return (...args2) => fn(...args1, ...args2);
}

function getIdGeneratorFunction(startFrom) {
  let current = startFrom;
  return () => {
    const id = current;
    current += 1;
    return id;
  };
}

module.exports = {
  getComposition,
  getPowerFunction,
  getPolynom,
  memoize,
  retry,
  logger,
  partialUsingArguments,
  getIdGeneratorFunction,
};
