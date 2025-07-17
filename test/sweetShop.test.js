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
    expect(Object.keys(sweets).length).toBe(2);
  });
});
