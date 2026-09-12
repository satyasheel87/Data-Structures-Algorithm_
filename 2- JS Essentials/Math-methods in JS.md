# 🔢 JavaScript Math Object — Complete Guide (Hindi)

> **Math** JavaScript ka ek built-in object hai jisme mathematics ke liye
> ready-made **properties** (constants) aur **methods** (functions) hote hain.
> `new Math()` nahi karna padta — seedha `Math.something()` likhte hain!

---

## 📌 Table of Contents

1.  [Math Object Kya Hai?](#1-math-object-kya-hai)
2.  [Math Constants — Properties](#2-math-constants--properties)
3.  [Math.round() — Nearest Integer](#3-mathround--nearest-integer)
4.  [Math.floor() — Neeche Round](#4-mathfloor--neeche-round)
5.  [Math.ceil() — Upar Round](#5-mathceil--upar-round)
6.  [Math.trunc() — Decimal Kato](#6-mathtrunc--decimal-kato)
7.  [Math.abs() — Absolute Value](#7-mathabs--absolute-value)
8.  [Math.max() — Sabse Bada](#8-mathmax--sabse-bada)
9.  [Math.min() — Sabse Chhota](#9-mathmin--sabse-chhota)
10. [Math.pow() — Power / Exponent](#10-mathpow--power--exponent)
11. [Math.sqrt() — Square Root](#11-mathsqrt--square-root)
12. [Math.cbrt() — Cube Root](#12-mathcbrt--cube-root)
13. [Math.random() — Random Number](#13-mathrandom--random-number)
14. [Math.sign() — Positive/Negative Check](#14-mathsign--positivenegative-check)
15. [Math.log() — Logarithm](#15-mathlog--logarithm)
16. [Math.exp() — Exponential (e^x)](#16-mathexp--exponential-ex)
17. [Math.hypot() — Hypotenuse](#17-mathhypot--hypotenuse)
18. [Trigonometry Methods](#18-trigonometry-methods)
19. [Math.clz32() aur Bitwise Methods](#19-mathclz32-aur-bitwise-methods)
20. [Practical Examples — Real Use Cases](#20-practical-examples--real-use-cases)
21. [Quick Reference Card](#21-quick-reference-card)

---

## 1. Math Object Kya Hai?

```javascript
// Math ek static object hai — new nahi karte
const m = new Math(); // ❌ TypeError!

// Seedha use karo
Math.PI;        // ✅ 3.14159...
Math.random();  // ✅ 0 se 1 ke beech random number
Math.max(5, 9); // ✅ 9
```

**Math object mein 2 tarah ki cheezein hain:**

```
Math
├── Constants (Properties)  → Math.PI, Math.E, Math.SQRT2 ...
└── Methods (Functions)     → Math.round(), Math.random(), Math.max() ...
```

---

## 2. Math Constants — Properties

Yeh **fixed mathematical values** hain — kabhi nahi badlti.

```javascript
console.log(Math.PI);      // 3.141592653589793  → Circle ka pi (π)
console.log(Math.E);       // 2.718281828459045  → Euler's number (e)
console.log(Math.SQRT2);   // 1.4142135623730951 → √2
console.log(Math.SQRT1_2); // 0.7071067811865476 → 1/√2  (√0.5)
console.log(Math.LN2);     // 0.6931471805599453 → log(2) — natural log
console.log(Math.LN10);    // 2.302585092994046  → log(10) — natural log
console.log(Math.LOG2E);   // 1.4426950408889634 → log base 2 of e
console.log(Math.LOG10E);  // 0.4342944819032518 → log base 10 of e
```

### Use Cases:

```javascript
// Circle ki area
function circleArea(radius) {
    return Math.PI * radius * radius;
}
console.log(circleArea(7).toFixed(2)); // "153.94"

// Circumference
function circumference(radius) {
    return 2 * Math.PI * radius;
}
console.log(circumference(5).toFixed(2)); // "31.42"

// Compound interest formula: A = P * e^(rt)
function continuousCompound(principal, rate, time) {
    return principal * Math.pow(Math.E, rate * time);
}
console.log(continuousCompound(1000, 0.05, 10).toFixed(2)); // "1648.72"
```

---

## 3. `Math.round()` — Nearest Integer

Number ko **sabse paas ke integer** tak round karo.
`.5` ya usse zyada → upar, `.4` ya kam → neeche.

```javascript
Math.round(4.3);  // 4   ← .3 < .5, isliye neeche
Math.round(4.5);  // 5   ← .5 = .5, isliye upar
Math.round(4.7);  // 5   ← .7 > .5, isliye upar
Math.round(-4.3); // -4  ← -4.3 ka nearest = -4
Math.round(-4.5); // -4  ← -4.5 ka nearest = -4 (JS rule)
Math.round(-4.6); // -5  ← -4.6 ka nearest = -5
Math.round(0);    // 0
Math.round(4);    // 4   ← pehle se integer
```

### Decimal Places Tak Round Karna:

```javascript
// 2 decimal places tak round karna
function roundTo(num, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
}

console.log(roundTo(3.14159, 2)); // 3.14
console.log(roundTo(3.14159, 3)); // 3.142
console.log(roundTo(1.005, 2));   // 1.01

// Ya toFixed() use karo (string return karta hai)
console.log((3.14159).toFixed(2)); // "3.14" ← string!
console.log(+(3.14159).toFixed(2)); // 3.14  ← number
```

---

## 4. `Math.floor()` — Neeche Round

**Hamesha neeche** — decimal part kato, integer lo.
(Negative numbers mein aur neeche jaata hai)

```javascript
Math.floor(4.9);   // 4   ← 4.9 → 4
Math.floor(4.1);   // 4   ← 4.1 → 4
Math.floor(4.0);   // 4   ← already integer
Math.floor(-4.1);  // -5  ← -4.1 → -5 (aur neeche!)
Math.floor(-4.9);  // -5  ← -4.9 → -5
Math.floor(0.9);   // 0
Math.floor(-0.1);  // -1
```

### Common Use Cases:

```javascript
// Random integer banana (0 se n-1 tak)
function randomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(randomInt(10)); // 0 se 9 ke beech

// Array se random element
const fruits = ["Apple", "Mango", "Banana", "Orange"];
const random = fruits[Math.floor(Math.random() * fruits.length)];
console.log(random); // Random fruit

// Seconds mein minutes nikalna
function secondsToMinutes(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
}
console.log(secondsToMinutes(125)); // "2:05"
console.log(secondsToMinutes(90));  // "1:30"

// Pages banana (pagination)
function totalPages(items, perPage) {
    return Math.floor(items / perPage) + (items % perPage > 0 ? 1 : 0);
    // Ya: Math.ceil(items / perPage) — aur asaan tarika
}
```

---

## 5. `Math.ceil()` — Upar Round

**Hamesha upar** — thoda bhi decimal ho toh upar jaao.

```javascript
Math.ceil(4.1);   // 5   ← 4.1 → 5
Math.ceil(4.9);   // 5   ← 4.9 → 5
Math.ceil(4.0);   // 4   ← already integer
Math.ceil(-4.1);  // -4  ← -4.1 → -4 (less negative = upar)
Math.ceil(-4.9);  // -4  ← -4.9 → -4
Math.ceil(0.1);   // 1
Math.ceil(-0.1);  // -0  (negative zero)
```

### Use Cases:

```javascript
// Pagination — total pages
function pages(totalItems, itemsPerPage) {
    return Math.ceil(totalItems / itemsPerPage);
}
console.log(pages(101, 10)); // 11 ← 10 full + 1 extra page
console.log(pages(100, 10)); // 10 ← exactly 10 pages
console.log(pages(1, 10));   // 1  ← sirf 1 item = 1 page

// Delivery charges — minimum unit
function deliveryDays(distance) {
    return Math.ceil(distance / 100); // Har 100km = 1 din
}
console.log(deliveryDays(250)); // 3 days
console.log(deliveryDays(300)); // 3 days
console.log(deliveryDays(301)); // 4 days
```

---

## 6. `Math.trunc()` — Decimal Kato

Sirf **integer part rakho** — decimal bilkul kato.
(floor se fark — negative mein upar jaata hai, neeche nahi)

```javascript
Math.trunc(4.9);   // 4   ← .9 kato
Math.trunc(4.1);   // 4   ← .1 kato
Math.trunc(-4.9);  // -4  ← -.9 kato (floor hota -5, trunc -4)
Math.trunc(-4.1);  // -4  ← -.1 kato
Math.trunc(0.9);   // 0
Math.trunc(-0.9);  // -0
```

### floor vs ceil vs trunc vs round — Comparison:

```javascript
const nums = [4.1, 4.5, 4.9, -4.1, -4.5, -4.9];

nums.forEach(n => {
    console.log(
        `${n}  →  ` +
        `floor:${Math.floor(n)}  ` +
        `ceil:${Math.ceil(n)}   ` +
        `trunc:${Math.trunc(n)}  ` +
        `round:${Math.round(n)}`
    );
});

//  4.1  → floor:4   ceil:5   trunc:4   round:4
//  4.5  → floor:4   ceil:5   trunc:4   round:5
//  4.9  → floor:4   ceil:5   trunc:4   round:5
// -4.1  → floor:-5  ceil:-4  trunc:-4  round:-4
// -4.5  → floor:-5  ceil:-4  trunc:-4  round:-4
// -4.9  → floor:-5  ceil:-4  trunc:-4  round:-5
```

---

## 7. `Math.abs()` — Absolute Value

Number ka **positive version** do — minus sign hatao.

```javascript
Math.abs(5);     // 5
Math.abs(-5);    // 5
Math.abs(0);     // 0
Math.abs(-3.7);  // 3.7
Math.abs(3.7);   // 3.7

// Negative nahi ho sakta
Math.abs(-Infinity); // Infinity
Math.abs(NaN);       // NaN
```

### Use Cases:

```javascript
// Do numbers ka fark (order matter nahi)
function difference(a, b) {
    return Math.abs(a - b);
}
console.log(difference(10, 3));  // 7
console.log(difference(3, 10));  // 7 ← same result

// Temperature change
const tempMorning = 15;
const tempAfternoon = 28;
console.log("Fark:", Math.abs(tempMorning - tempAfternoon), "°C"); // 13°C

// Distance calculate karna (1D)
function distance(x1, x2) {
    return Math.abs(x2 - x1);
}

// Stock price change percentage
function priceChange(oldPrice, newPrice) {
    const change = ((newPrice - oldPrice) / oldPrice) * 100;
    return {
        change: change.toFixed(2) + "%",
        magnitude: Math.abs(change).toFixed(2) + "%",
        direction: change >= 0 ? "↑ Upar" : "↓ Neeche"
    };
}
console.log(priceChange(100, 85));  // { change: "-15.00%", magnitude: "15.00%", direction: "↓ Neeche" }
console.log(priceChange(100, 120)); // { change: "20.00%", magnitude: "20.00%", direction: "↑ Upar" }
```

---

## 8. `Math.max()` — Sabse Bada

Diye gaye numbers mein se **sabse bada** dhundho.

```javascript
Math.max(1, 2, 3);          // 3
Math.max(10, 5, 8, 20, 3);  // 20
Math.max(-1, -5, -3);       // -1  ← -1 sabse bada hai
Math.max(0);                 // 0
Math.max();                  // -Infinity ← koi argument nahi
Math.max(1, NaN, 3);         // NaN ← koi ek NaN → result NaN
```

### Array Ke Saath:

```javascript
const scores = [85, 92, 78, 95, 88];

// ❌ Direct array nahi dे sakte
Math.max(scores); // NaN

// ✅ Spread operator use karo
Math.max(...scores); // 95

// ✅ apply() use karo (purana tarika)
Math.max.apply(null, scores); // 95

// Object array se max dhundho
const students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Amit",  marks: 78 },
];

const topMarks = Math.max(...students.map(s => s.marks));
console.log(topMarks); // 92

const topper = students.find(s => s.marks === topMarks);
console.log(topper.name); // "Priya"
```

---

## 9. `Math.min()` — Sabse Chhota

Diye gaye numbers mein se **sabse chhota** dhundho.

```javascript
Math.min(1, 2, 3);          // 1
Math.min(10, 5, 8, 20, 3);  // 3
Math.min(-1, -5, -3);       // -5  ← -5 sabse chhota
Math.min();                  // Infinity ← koi argument nahi
Math.min(1, NaN);            // NaN
```

### Use Cases:

```javascript
const prices = [299, 499, 199, 399, 149];
console.log("Sabse sasta:", Math.min(...prices)); // 149

// Value ko range mein clamp karna
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
console.log(clamp(150, 0, 100)); // 100 ← max se zyada tha
console.log(clamp(-10, 0, 100)); // 0   ← min se kam tha
console.log(clamp(50, 0, 100));  // 50  ← range mein hai

// Volume 0-100 ke beech rakho
let volume = 120;
volume = clamp(volume, 0, 100);
console.log(volume); // 100

// Slider value
let slider = -5;
slider = clamp(slider, 0, 255);
console.log(slider); // 0
```

---

## 10. `Math.pow()` — Power / Exponent

**`base` ki power `exponent`** calculate karo. (base ^ exponent)

```javascript
Math.pow(2, 3);    // 8      ← 2³ = 2×2×2
Math.pow(5, 2);    // 25     ← 5² = 5×5
Math.pow(10, 3);   // 1000   ← 10³
Math.pow(2, 10);   // 1024   ← 2¹⁰
Math.pow(4, 0.5);  // 2      ← 4^0.5 = √4 = 2
Math.pow(8, 1/3);  // 2      ← 8^(1/3) = ∛8 = 2
Math.pow(2, -1);   // 0.5    ← 2^(-1) = 1/2
Math.pow(2, -2);   // 0.25   ← 2^(-2) = 1/4
Math.pow(0, 0);    // 1      ← special case
```

### Modern Way — `**` Operator:

```javascript
// Math.pow() ki jagah ** operator (ES2016+)
2 ** 3;   // 8
5 ** 2;   // 25
2 ** 10;  // 1024

// Dono same result dete hain
Math.pow(2, 8) === 2 ** 8; // true
```

### Use Cases:

```javascript
// Area of square
const side = 7;
console.log("Area:", Math.pow(side, 2)); // 49

// Simple interest
function simpleInterest(p, r, t) {
    return p * (1 + r/100 * t);
}

// Compound interest: A = P(1 + r/n)^(nt)
function compoundInterest(principal, rate, time, n = 1) {
    return principal * Math.pow(1 + rate / (100 * n), n * time);
}
console.log(compoundInterest(10000, 10, 2).toFixed(2)); // "12100.00"
console.log(compoundInterest(10000, 10, 2, 12).toFixed(2)); // "12194.43" (monthly)

// Binary to Decimal
function binaryToDecimal(binary) {
    return binary.toString().split("").reverse()
        .reduce((acc, bit, i) => acc + bit * Math.pow(2, i), 0);
}
console.log(binaryToDecimal(1010)); // 10
console.log(binaryToDecimal(1111)); // 15
```

---

## 11. `Math.sqrt()` — Square Root

Number ka **square root** (√) nikalo.

```javascript
Math.sqrt(4);    // 2     ← √4 = 2
Math.sqrt(9);    // 3     ← √9 = 3
Math.sqrt(25);   // 5     ← √25 = 5
Math.sqrt(2);    // 1.4142135623730951
Math.sqrt(0);    // 0
Math.sqrt(1);    // 1
Math.sqrt(-1);   // NaN   ← negative ka real sqrt nahi
Math.sqrt(0.25); // 0.5   ← √(1/4) = 1/2
```

### Use Cases:

```javascript
// Distance between two points (Euclidean)
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log(distance(0, 0, 3, 4).toFixed(2)); // "5.00" (3-4-5 triangle)
console.log(distance(1, 1, 4, 5).toFixed(2)); // "5.00"

// Is it a perfect square?
function isPerfectSquare(n) {
    const root = Math.sqrt(n);
    return Number.isInteger(root);
}
console.log(isPerfectSquare(16));  // true
console.log(isPerfectSquare(15));  // false
console.log(isPerfectSquare(144)); // true

// Hypotenuse of right triangle
function hypotenuse(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
}
console.log(hypotenuse(3, 4));  // 5
console.log(hypotenuse(5, 12)); // 13
```

---

## 12. `Math.cbrt()` — Cube Root

Number ka **cube root** (∛) nikalo.

```javascript
Math.cbrt(8);     // 2      ← ∛8 = 2
Math.cbrt(27);    // 3      ← ∛27 = 3
Math.cbrt(125);   // 5      ← ∛125 = 5
Math.cbrt(-8);    // -2     ← Negative bhi kaam karta hai!
Math.cbrt(0);     // 0
Math.cbrt(1);     // 1
Math.cbrt(2);     // 1.2599210498948732
```

### Use Cases:

```javascript
// Cube ka side nikalna (volume se)
function cubeSide(volume) {
    return Math.cbrt(volume);
}
console.log(cubeSide(27).toFixed(2));   // "3.00"
console.log(cubeSide(1000).toFixed(2)); // "10.00"

// N-th root generic function
function nthRoot(number, n) {
    return Math.pow(Math.abs(number), 1/n) * Math.sign(number);
}
console.log(nthRoot(16, 4));  // 2   ← 4th root of 16
console.log(nthRoot(32, 5));  // 2   ← 5th root of 32
```

---

## 13. `Math.random()` — Random Number

`0` se `1` ke beech (**0 include, 1 exclude**) ek random decimal number.

```javascript
Math.random(); // 0.7234561234...  (har baar alag)
Math.random(); // 0.1823456789...
Math.random(); // 0.9999123456...  (1 kabhi nahi)
// 0 ≤ result < 1
```

### Random Integer (min se max tak):

```javascript
// 0 se max-1 tak
function randomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(randomInt(10));  // 0, 1, 2 ... 9

// min se max tak (dono include)
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomRange(1, 6));   // Dice: 1,2,3,4,5,6
console.log(randomRange(1, 100)); // 1 se 100

// min se max tak (max exclude)
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
```

### Practical Random Uses:

```javascript
// Array se random element
const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(randomColor);

// Array shuffle (Fisher-Yates Algorithm)
function shuffle(array) {
    const arr = [...array]; // Original mat badlo
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
    }
    return arr;
}
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffle(cards)); // Random order

// Random boolean (50% chance)
const coinFlip = Math.random() < 0.5;
console.log(coinFlip ? "Heads" : "Tails");

// Weighted random (70% chance true)
const biasedResult = Math.random() < 0.7;

// Random color (hex)
function randomHexColor() {
    return "#" + Math.floor(Math.random() * 0xFFFFFF)
        .toString(16).padStart(6, "0");
}
console.log(randomHexColor()); // "#a3f2c1"

// Random password
function randomPassword(length = 12) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
    return Array.from(
        { length },
        () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
}
console.log(randomPassword(10)); // "aB3!xZ9qR2"

// Random ID
function randomId(prefix = "ID") {
    return prefix + "_" + Math.random().toString(36).substring(2, 9).toUpperCase();
}
console.log(randomId("USER")); // "USER_A3F2X1B"

// Random integer with seed (reproducible)
// Note: JS mein built-in seed nahi — library use karni padegi
```

---

## 14. `Math.sign()` — Positive/Negative Check

Number **positive, negative ya zero** hai — `1`, `-1`, ya `0` return karta hai.

```javascript
Math.sign(5);    //  1  ← positive
Math.sign(-5);   // -1  ← negative
Math.sign(0);    //  0  ← zero
Math.sign(-0);   // -0  ← negative zero
Math.sign(0.1);  //  1
Math.sign(-0.1); // -1
Math.sign(NaN);  // NaN
```

### Use Cases:

```javascript
// Direction check
function direction(velocity) {
    const sign = Math.sign(velocity);
    if (sign === 1)  return "Aage ja raha hai ➡️";
    if (sign === -1) return "Peeche ja raha hai ⬅️";
    return "Ruka hua hai ⏹️";
}
console.log(direction(50));   // "Aage ja raha hai ➡️"
console.log(direction(-30));  // "Peeche ja raha hai ⬅️"
console.log(direction(0));    // "Ruka hua hai ⏹️"

// Profit/Loss check
function profitLoss(buying, selling) {
    const diff = selling - buying;
    const sign = Math.sign(diff);
    return {
        amount: Math.abs(diff),
        type: sign === 1 ? "Fayda 🟢" : sign === -1 ? "Nuksan 🔴" : "Toot-Phoot ⚪"
    };
}
console.log(profitLoss(100, 120)); // { amount: 20, type: "Fayda 🟢" }
console.log(profitLoss(100, 80));  // { amount: 20, type: "Nuksan 🔴" }
```

---

## 15. `Math.log()` — Logarithm

Natural logarithm (**base e**) nikalo. (`ln`)

```javascript
Math.log(1);          // 0        ← ln(1) = 0
Math.log(Math.E);     // 1        ← ln(e) = 1
Math.log(Math.E**2);  // 2        ← ln(e²) = 2
Math.log(10);         // 2.302585...
Math.log(0);          // -Infinity ← ln(0) = -∞
Math.log(-1);         // NaN      ← negative ka log nahi
```

### Log Base 2 aur Base 10:

```javascript
// Natural log (base e) — default
Math.log(8);   // 2.0794...

// Base 2 log
Math.log2(8);  // 3      ← 2³ = 8
Math.log2(16); // 4      ← 2⁴ = 16
Math.log2(1);  // 0

// Base 10 log
Math.log10(100);  // 2   ← 10² = 100
Math.log10(1000); // 3   ← 10³ = 1000
Math.log10(1);    // 0

// Custom base ka log
function logBase(base, num) {
    return Math.log(num) / Math.log(base);
}
console.log(logBase(3, 27));  // 3  ← 3³ = 27
console.log(logBase(5, 125)); // 3  ← 5³ = 125
```

### Use Cases:

```javascript
// Bits needed to store N items
function bitsNeeded(n) {
    return Math.ceil(Math.log2(n));
}
console.log(bitsNeeded(8));   // 3 bits (000-111)
console.log(bitsNeeded(256)); // 8 bits

// Password strength (entropy)
function passwordEntropy(length, charsetSize) {
    return length * Math.log2(charsetSize);
}
// 8 char password, lowercase only (26 chars)
console.log(passwordEntropy(8, 26).toFixed(1));  // "37.6 bits"
// 12 char password, mixed (94 chars)
console.log(passwordEntropy(12, 94).toFixed(1)); // "78.9 bits"
```

---

## 16. `Math.exp()` — Exponential (e^x)

`e` (Euler's number) ki power `x` — `Math.E ** x` jaisa hi.

```javascript
Math.exp(0);  // 1       ← e⁰ = 1
Math.exp(1);  // 2.71828 ← e¹ = e
Math.exp(2);  // 7.38905 ← e²
Math.exp(-1); // 0.36787 ← e⁻¹ = 1/e
Math.exp(10); // 22026.4
```

### Use Cases:

```javascript
// Population growth model
function populationGrowth(initial, rate, time) {
    return initial * Math.exp(rate * time);
}
// 1 million people, 2% growth rate, 10 years
console.log(populationGrowth(1000000, 0.02, 10).toFixed(0)); // "1221403"

// Decay model (radioactive decay, etc.)
function decay(initial, halfLife, time) {
    const k = Math.log(2) / halfLife;
    return initial * Math.exp(-k * time);
}
```

---

## 17. `Math.hypot()` — Hypotenuse

Squares ka sum ka square root — directly hypotenuse calculate karta hai.

```javascript
// Math.hypot(a, b) = √(a² + b²)
Math.hypot(3, 4);     // 5      ← √(9+16) = √25 = 5
Math.hypot(5, 12);    // 13     ← √(25+144) = √169 = 13
Math.hypot(1, 1);     // 1.4142 ← √2

// 3D distance bhi calculate kar sakta hai!
Math.hypot(2, 3, 6);  // 7      ← √(4+9+36) = √49 = 7

// N numbers ke saath bhi
Math.hypot(1, 2, 3, 4); // √(1+4+9+16) = √30 = 5.477
```

### Use Cases:

```javascript
// 2D distance (cleaner syntax)
function distance2D(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}
console.log(distance2D(0, 0, 3, 4)); // 5

// 3D distance
function distance3D(x1, y1, z1, x2, y2, z2) {
    return Math.hypot(x2-x1, y2-y1, z2-z1);
}

// Vector magnitude
function vectorMagnitude(vector) {
    return Math.hypot(...vector);
}
console.log(vectorMagnitude([3, 4]));    // 5
console.log(vectorMagnitude([1, 2, 2])); // 3
```

---

## 18. Trigonometry Methods

**Angles radians mein hote hain JavaScript mein** — degrees se convert karna padega!

```javascript
// Conversion helper
const toRad = deg => deg * Math.PI / 180;
const toDeg = rad => rad * 180 / Math.PI;
```

### sin, cos, tan:

```javascript
// sin() — sine
Math.sin(0);               // 0
Math.sin(Math.PI / 2);     // 1      ← sin(90°)
Math.sin(Math.PI);         // ~0     ← sin(180°) ≈ 0
Math.sin(toRad(30));       // 0.5    ← sin(30°)
Math.sin(toRad(45));       // 0.7071 ← sin(45°)
Math.sin(toRad(60));       // 0.8660 ← sin(60°)

// cos() — cosine
Math.cos(0);               // 1
Math.cos(Math.PI);         // -1     ← cos(180°)
Math.cos(Math.PI / 2);     // ~0     ← cos(90°)
Math.cos(toRad(60));       // 0.5    ← cos(60°)

// tan() — tangent
Math.tan(0);               // 0
Math.tan(toRad(45));       // 1      ← tan(45°)
Math.tan(Math.PI / 4);     // 1
Math.tan(Math.PI / 2);     // Infinity (approximately)
```

### Inverse Trig — asin, acos, atan, atan2:

```javascript
// asin() — inverse sine, returns radians
Math.asin(0);   // 0
Math.asin(1);   // 1.5707 = π/2 = 90°
Math.asin(0.5); // 0.5235 → toDeg(0.5235) = 30°

// acos() — inverse cosine
Math.acos(1);   // 0     = 0°
Math.acos(0);   // 1.5707 = 90°
Math.acos(-1);  // 3.1415 = 180°

// atan() — inverse tangent (-π/2 to π/2)
Math.atan(1);   // 0.7853 → 45°
Math.atan(0);   // 0

// atan2(y, x) — angle between x-axis and point (x,y)
// Returns angle in radians (-π to π)
Math.atan2(1, 1);   // 0.7853 → 45°
Math.atan2(1, 0);   // 1.5707 → 90°
Math.atan2(0, -1);  // 3.1415 → 180°

// atan2 is more useful — handles all quadrants!
function angleBetween(x1, y1, x2, y2) {
    return toDeg(Math.atan2(y2 - y1, x2 - x1));
}
```

### Practical Trig Example:

```javascript
// Circle ke points (animation ke liye)
function circlePoint(cx, cy, radius, angleDeg) {
    const rad = toRad(angleDeg);
    return {
        x: cx + radius * Math.cos(rad),
        y: cy + radius * Math.sin(rad)
    };
}

// 360 points on a circle (cx=0, cy=0, r=100)
for (let angle = 0; angle < 360; angle += 45) {
    const point = circlePoint(0, 0, 100, angle);
    console.log(`${angle}°:`, point.x.toFixed(1), point.y.toFixed(1));
}
// 0°: 100.0 0.0
// 45°: 70.7 70.7
// 90°: 0.0 100.0
// etc.
```

---

## 19. `Math.clz32()` aur Bitwise Methods

```javascript
// Math.clz32() — Count Leading Zeros (32-bit integer mein)
Math.clz32(1);    // 31  ← 00000000000000000000000000000001
Math.clz32(2);    // 30  ← ...00000010
Math.clz32(1000); // 22
Math.clz32(0);    // 32

// Math.imul() — 32-bit integer multiplication
Math.imul(3, 4);  // 12
Math.imul(-5, 3); // -15

// Math.fround() — 32-bit float approximation
Math.fround(1.337); // 1.3370000123977661

// Math.clz32 use case — fast log2 for integers
function fastLog2(n) {
    return 31 - Math.clz32(n);
}
console.log(fastLog2(8));  // 3
console.log(fastLog2(16)); // 4
```

---

## 20. Practical Examples — Real Use Cases

### 🎲 Dice Game:

```javascript
function rollDice(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollMultipleDice(count, sides = 6) {
    return Array.from({ length: count }, () => rollDice(sides));
}

console.log(rollDice());         // 1-6
console.log(rollDice(20));       // D20: 1-20
console.log(rollMultipleDice(3)); // [2, 5, 1]
console.log(rollMultipleDice(3).reduce((a, b) => a + b)); // Total
```

---

### 💰 EMI Calculator:

```javascript
function calculateEMI(principal, annualRate, tenureMonths) {
    const monthlyRate = annualRate / (12 * 100);

    if (monthlyRate === 0) return principal / tenureMonths;

    const emi = principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, tenureMonths) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1);

    const totalAmount = emi * tenureMonths;
    const totalInterest = totalAmount - principal;

    return {
        emi: Math.round(emi),
        totalAmount: Math.round(totalAmount),
        totalInterest: Math.round(totalInterest)
    };
}

const loan = calculateEMI(500000, 8.5, 60); // 5L at 8.5% for 5 years
console.log("EMI:", loan.emi);           // ~10,230
console.log("Total:", loan.totalAmount); // ~613,800
console.log("Interest:", loan.totalInterest); // ~113,800
```

---

### 🌡️ Temperature Converter:

```javascript
const Temperature = {
    celsiusToFahrenheit: c => Math.round((c * 9/5) + 32),
    fahrenheitToCelsius: f => Math.round((f - 32) * 5/9),
    celsiusToKelvin:     c => Math.round(c + 273.15),
    kelvinToCelsius:     k => Math.round(k - 273.15),
};

console.log(Temperature.celsiusToFahrenheit(100)); // 212 (boiling)
console.log(Temperature.fahrenheitToCelsius(98.6)); // 37 (body temp)
console.log(Temperature.celsiusToKelvin(0));         // 273
```

---

### 📊 Statistics Helper:

```javascript
const Stats = {
    sum:     arr => arr.reduce((a, b) => a + b, 0),
    mean:    arr => Stats.sum(arr) / arr.length,
    min:     arr => Math.min(...arr),
    max:     arr => Math.max(...arr),
    range:   arr => Stats.max(arr) - Stats.min(arr),

    variance(arr) {
        const m = Stats.mean(arr);
        return Stats.mean(arr.map(x => Math.pow(x - m, 2)));
    },

    stdDev(arr) {
        return Math.sqrt(Stats.variance(arr));
    },

    median(arr) {
        const sorted = [...arr].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2
            ? sorted[mid]
            : (sorted[mid - 1] + sorted[mid]) / 2;
    }
};

const marks = [85, 92, 78, 95, 88, 72, 90, 86];
console.log("Sum:",    Stats.sum(marks));              // 686
console.log("Mean:",   Stats.mean(marks).toFixed(2));  // 85.75
console.log("Min:",    Stats.min(marks));              // 72
console.log("Max:",    Stats.max(marks));              // 95
console.log("Median:", Stats.median(marks));           // 87
console.log("StdDev:", Stats.stdDev(marks).toFixed(2)); // 7.08
```

---

### 🎨 Color Helper:

```javascript
// Hex color se RGB
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

// Random gradient
function randomGradient() {
    const r1 = randomRange(0, 255);
    const g1 = randomRange(0, 255);
    const b1 = randomRange(0, 255);
    const r2 = randomRange(0, 255);
    const g2 = randomRange(0, 255);
    const b2 = randomRange(0, 255);
    const angle = randomRange(0, 360);
    return `linear-gradient(${angle}deg, rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}))`;
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomGradient());
```

---

## 21. Quick Reference Card

| Method | Kaam | Example |
|---|---|---|
| `Math.PI` | π constant | `3.14159...` |
| `Math.E` | Euler's number | `2.71828...` |
| `Math.round(x)` | Nearest integer | `round(4.5)` → `5` |
| `Math.floor(x)` | Neeche round | `floor(4.9)` → `4` |
| `Math.ceil(x)` | Upar round | `ceil(4.1)` → `5` |
| `Math.trunc(x)` | Decimal kato | `trunc(-4.9)` → `-4` |
| `Math.abs(x)` | Positive banao | `abs(-5)` → `5` |
| `Math.max(a,b,...)` | Sabse bada | `max(3,7,2)` → `7` |
| `Math.min(a,b,...)` | Sabse chhota | `min(3,7,2)` → `2` |
| `Math.pow(b,e)` | b ki power e | `pow(2,10)` → `1024` |
| `Math.sqrt(x)` | Square root | `sqrt(25)` → `5` |
| `Math.cbrt(x)` | Cube root | `cbrt(27)` → `3` |
| `Math.random()` | 0 to <1 random | `0.7234...` |
| `Math.sign(x)` | +1, -1, ya 0 | `sign(-5)` → `-1` |
| `Math.log(x)` | Natural log | `log(E)` → `1` |
| `Math.log2(x)` | Log base 2 | `log2(8)` → `3` |
| `Math.log10(x)` | Log base 10 | `log10(100)` → `2` |
| `Math.exp(x)` | e ki power x | `exp(1)` → `2.718` |
| `Math.hypot(a,b)` | √(a²+b²) | `hypot(3,4)` → `5` |
| `Math.sin/cos/tan` | Trigonometry | radians mein |

---

### Random Number Recipes — Sabse Common:

```javascript
Math.random();                                   // 0.0 — 0.999...
Math.floor(Math.random() * 10);                 // 0 — 9
Math.floor(Math.random() * 10) + 1;             // 1 — 10
Math.floor(Math.random() * 6) + 1;              // Dice: 1-6
Math.floor(Math.random() * (max - min + 1)) + min; // min se max tak
arr[Math.floor(Math.random() * arr.length)];    // Random array element
Math.random() < 0.5;                            // 50% true/false (coin flip)
```

---

*Math object seekh liya toh calculations ke liye kabhi library nahi dhoondhnee padegi!* 🚀
