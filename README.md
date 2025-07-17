# Sweet Shop Management System

Built using JavaScript and Test-Driven Development (TDD) with Jest.

## Features
- Add, delete, and view sweets
- Search sweets by:
  - Name (partial match)
  - Category (exact match)
  - Price range (min-max)
- Inventory management:
  - **Purchase sweets** (reduces stock if available)
  - **Restock sweets** (increases stock)
- Fully unit tested using **Jest**

## Run Tests

```bash
npm test
```

## Sample Sweet Format

```js
{
  1001: {
    name: 'Kaju Katli',
    category: 'Nut-Based',
    price: 50,
    quantity: 20
  }
}
```