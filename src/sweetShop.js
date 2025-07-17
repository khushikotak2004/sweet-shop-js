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
    return Object.entries(this.sweets).map(([id, sweet]) => ({
      id: Number(id),
      ...sweet,
    }));
  }

  // Search sweets by name, category, and price range
  searchSweets({ name, category, minPrice, maxPrice }) {
    return this.getAllSweets().filter((sweet) => {
      const matchName = name
        ? sweet.name.toLowerCase().includes(name.toLowerCase())
        : true;
      const matchCategory = category
        ? sweet.category.toLowerCase() === category.toLowerCase()
        : true;
      const matchPrice =
        minPrice !== undefined && maxPrice !== undefined
          ? sweet.price >= minPrice && sweet.price <= maxPrice
          : true;
      return matchName && matchCategory && matchPrice;
    });
  }

  // Purchase sweets (decrease quantity)
  purchaseSweet(id, quantity) {
    const sweet = this.sweets[id];
    if (!sweet) throw new Error("Sweet not found");
    if (sweet.quantity < quantity) throw new Error("Insufficient stock");
    sweet.quantity -= quantity;
  }

  // Restock sweets (increase quantity)
  restockSweet(id, quantity) {
    const sweet = this.sweets[id];
    if (!sweet) throw new Error("Sweet not found");
    sweet.quantity += quantity;
  }
}

module.exports = SweetShop;
