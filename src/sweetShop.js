// temp change to force Git to track
class SweetShop {
  constructor() {
    this.sweets = {};
  }

  addSweet(id, name, category, price, quantity) {
    this.sweets[id] = { name, category, price, quantity };
  }

  getSweet(id) {
    return this.sweets[id];
  }
  deleteSweet(id) {
    delete this.sweets[id];
  }

  getAllSweets() {
    return this.sweets;
  }
}

module.exports = SweetShop;
