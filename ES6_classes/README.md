# ES6 Classes

This project covers ES6 class syntax, inheritance, getters/setters, static methods, and other advanced JavaScript OOP features.

## Learning Objectives
- Define and use ES6 classes
- Add getters and setters
- Implement static methods
- Work with inheritance and abstract classes
- Override methods in subclasses
- Customize default object string descriptions
- Use ES6 Symbols to control object cloning behavior

---

## Tasks

### 0. You used to attend a place like this at some point
- Implement a class `ClassRoom`.
- Accepts one attribute `maxStudentsSize` stored as `_maxStudentsSize`.

### 1. Let's make some classrooms
- Import `ClassRoom` from `0-classroom.js`.
- Implement `initializeRooms()` returning 3 classrooms with sizes **19, 20, 34**.

### 2. A Course, Getters, and Setters
- Implement a `HolbertonCourse` class with attributes: `name`, `length`, `students[]`.
- Add type validation and getters/setters.

### 3. Methods, static methods, computed methods names... MONEY
- Implement a `Currency` class with attributes `code`, `name`.
- Add `displayFullCurrency()` → `"name (code)"`.

### 4. Pricing
- Implement `Pricing` class with attributes `amount`, `currency (Currency)`.
- Add `displayFullPrice()` → `"amount currency_name (currency_code)"`.
- Add static `convertPrice(amount, conversionRate)`.

### 5. A Building
- Implement abstract class `Building` with attribute `sqft`.
- Subclasses must override `evacuationWarningMessage()`.

### 6. Inheritance
- Implement `SkyHighBuilding` extending `Building`.
- Attributes: `sqft`, `floors`.
- Override `evacuationWarningMessage()` → `"Evacuate slowly the X floors"`.

### 7. Airport
- Implement `Airport` with attributes `name`, `code`.
- Default `toString()` returns `[object CODE]`.

### 8. Primitive - Holberton Class
- Implement `HolbertonClass` with attributes `size`, `location`.
- Cast to **Number** → size.
- Cast to **String** → location.

### 9. Hoisting
- Fix given code by correctly ordering class declarations and fixing getters.
- Exports `listOfStudents`.

### 10. Vroom
- Implement `Car` with attributes `brand`, `motor`, `color`.
- Add method `cloneCar()` that returns a new instance of the same class using **ES6 Symbols**.

---

## Usage

```bash
# Run examples
npm run dev 0-main.js
npm run dev 1-main.js
...
npm run dev 10-main.js
