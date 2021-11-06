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
  entries() {
    return this._set;
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
  forEach(...args) {
    const cb = args[0];
    const data = args.slice(1);

    this._set.forEach((s) => {
      cb.call(data, s);
    });
  }
  keys() {
    return this.entries();
  }
  values() {
    return this.entries();
  }
};
