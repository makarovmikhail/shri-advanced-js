module.exports = class {
  // реализация
  _set = [];
  lenght = 0;
  size = 0;

  constructor(array) {
    array.forEach((a) => this.add(a));
  }
  [Symbol.iterator]() {
    var index = -1;
    var data = this._set;

    return {
      next: () => ({value: data[++index], done: !(index in data)})
    };
  }
  *entries() {
    for (let item of this._set) {
      yield [item, item];
    }
  }
  clear() {
    this._set = [];
    this.size = 0;
  }
  add(item) {
    if (!this.has(item)) {
      this._set.push(item);
      this.size++;
    }
    return this;
  }
  delete(item) {
    this._set = this._set.filter((s) => s !== item);
    this.size = this._set.length;
    return this;
  }
  has(item) {
    return this._set.includes(item);
  }
  forEach(callbackfn, thisArg) {
    for (let item of this) {
      callbackfn.call(thisArg ?? this, item, item);
    }
  }
  keys() {
    return this._set.values();
  }
  values() {
    return this._set.values();
  }
  get [Symbol.toStringTag]() {
    return "^_^";
  }
};
