// temp change to force Git to track
const SweetShop = require("../src/sweetShop");

describe("SweetShop", () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
  });

  test("should add a sweet", () => {
    shop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    const sweet = shop.getSweet(1001);
    expect(sweet.name).toBe("Kaju Katli");
  });

  test("should delete a sweet", () => {
    shop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    shop.deleteSweet(1001);
    expect(shop.getSweet(1001)).toBeUndefined();
  });

  test("should return all sweets", () => {
    shop.addSweet(1001, "Kaju Katli", "Nut-Based", 50, 20);
    shop.addSweet(1002, "Gulab Jamun", "Milk-Based", 30, 10);
    const sweets = shop.getAllSweets();
    expect(sweets.length).toBe(2);
  });

  test("should search sweets by name", () => {
    shop.addSweet(1001, "Chocolate Bar", "chocolate", 10, 5);
    shop.addSweet(1002, "Candy Stick", "candy", 5, 15);
    const result = shop.searchSweets({ name: "chocolate" });
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Chocolate Bar");
  });

  test("should search sweets by category", () => {
    shop.addSweet(1001, "Chocolate Bar", "chocolate", 10, 5);
    shop.addSweet(1002, "Candy Stick", "candy", 5, 15);
    const result = shop.searchSweets({ category: "candy" });
    expect(result.length).toBe(1);
    expect(result[0].category).toBe("candy");
  });

  test("should search sweets by price range", () => {
    shop.addSweet(1001, "Pastry", "pastry", 15, 10);
    shop.addSweet(1002, "Ladoo", "sweet", 5, 8);
    const result = shop.searchSweets({ minPrice: 10, maxPrice: 20 });
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Pastry");
  });

  test("should purchase sweets and reduce quantity", () => {
    shop.addSweet(1001, "Barfi", "milk", 25, 10);
    shop.purchaseSweet(1001, 4);
    const sweet = shop.getSweet(1001);
    expect(sweet.quantity).toBe(6);
  });

  test("should throw error if purchasing more than stock", () => {
    shop.addSweet(1001, "Barfi", "milk", 25, 2);
    expect(() => shop.purchaseSweet(1001, 5)).toThrow("Insufficient stock");
  });

  test("should restock sweets and increase quantity", () => {
    shop.addSweet(1001, "Barfi", "milk", 25, 5);
    shop.restockSweet(1001, 10);
    const sweet = shop.getSweet(1001);
    expect(sweet.quantity).toBe(15);
  });
});
