function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function getArea() {
    return this.width * this.height;
  };
}

function getJSON(obj) {
  return JSON.stringify(obj);
}

function fromJSON(proto, json) {
  const obj = JSON.parse(json);
  Object.setPrototypeOf(obj, proto);
  return obj;
}

class Selector {
  constructor() {
    this.parts = {
      element: '',
      id: '',
      classes: [],
      attrs: [],
      pseudoClasses: [],
      pseudoElement: '',
    };
    this.order = [];
  }

  checkUnique(part) {
    if (['element', 'id', 'pseudoElement'].includes(part) && this.parts[part]) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector',
      );
    }
  }

  checkOrder(part) {
    const orderMap = {
      element: 1,
      id: 2,
      class: 3,
      attr: 4,
      pseudoClass: 5,
      pseudoElement: 6,
    };
    if (
      this.order.length > 0
      && orderMap[part] < orderMap[this.order[this.order.length - 1]]
    ) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }
    this.order.push(part);
  }

  element(value) {
    this.checkUnique('element');
    this.checkOrder('element');
    this.parts.element = value;
    return this;
  }

  id(value) {
    this.checkUnique('id');
    this.checkOrder('id');
    this.parts.id = `#${value}`;
    return this;
  }

  class(value) {
    this.checkOrder('class');
    this.parts.classes.push(`.${value}`);
    return this;
  }

  attr(value) {
    this.checkOrder('attr');
    this.parts.attrs.push(`[${value}]`);
    return this;
  }

  pseudoClass(value) {
    this.checkOrder('pseudoClass');
    this.parts.pseudoClasses.push(`:${value}`);
    return this;
  }

  pseudoElement(value) {
    this.checkUnique('pseudoElement');
    this.checkOrder('pseudoElement');
    this.parts.pseudoElement = `::${value}`;
    return this;
  }

  stringify() {
    return (
      this.parts.element
      + this.parts.id
      + this.parts.classes.join('')
      + this.parts.attrs.join('')
      + this.parts.pseudoClasses.join('')
      + this.parts.pseudoElement
    );
  }
}

// вместо второго класса используем обычную функцию
function combineSelectors(selector1, combinator, selector2) {
  return {
    stringify() {
      return `${selector1.stringify()} ${combinator} ${selector2.stringify()}`;
    },
  };
}

const cssSelectorBuilder = {
  element(value) {
    return new Selector().element(value);
  },

  id(value) {
    return new Selector().id(value);
  },

  class(value) {
    return new Selector().class(value);
  },

  attr(value) {
    return new Selector().attr(value);
  },

  pseudoClass(value) {
    return new Selector().pseudoClass(value);
  },

  pseudoElement(value) {
    return new Selector().pseudoElement(value);
  },

  combine(selector1, combinator, selector2) {
    return combineSelectors(selector1, combinator, selector2);
  },
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
