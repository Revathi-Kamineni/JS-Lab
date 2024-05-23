// test.js (or your preferred test file name)

// Values to compare
const num = 0;      
const str = "";      
const obj = {};      
const arr = [];      
const boolTrue = true; 
const boolFalse = false; 
const nullValue = null;  
const undefinedValue = undefined; 

// Equality (==)
test('num is falsy (coercion)', () => {
    expect(num == false).toBe(true);
});

// Strict Equality (===)
test('num is strictly equal to 0', () => {
    expect(num === 0).toBe(true);
});

// Inequality (!=)
test('str is falsy (coercion)', () => {
    expect(str != "").toBe(false); 
});

// Strict Inequality (!==)
test('obj is not null', () => {
    expect(obj !== null).toBe(true);
});

// Logical AND (&&) 
test('At least one is falsy', () => {
    expect(arr.length > 0 && obj).toBe(false); 
});

// Logical OR (||)
test('At least one boolean is true', () => {
    expect(boolTrue || boolFalse).toBe(true);
});

// Truthy/Falsy Checks
test('nullValue is falsy', () => {
    expect(nullValue).toBeFalsy(); 
});

test('undefinedValue is falsy', () => {
    expect(undefinedValue).toBeFalsy();
});


// Key Points:

// Truthy/Falsy: In JavaScript, values can be loosely evaluated as "truthy" (treated as true) or "falsy" (treated as false) in logical operations.
// Falsy Values: false, 0, "" (empty string), null, undefined, NaN
// All other values are truthy: true, 1, "hello", [], {}, functions, etc.
// Equality (==) vs. Strict Equality (===):
// ==: Allows type coercion (automatic type conversion) before comparison. This can lead to surprising results (e.g., 0 == false is true).
// ===: Checks for both value and type equality. This is often preferred for more predictable behavior.
// Logical Operators: && (AND), || (OR), ! (NOT)
// &&: True only if both operands are truthy.
// ||: True if at least one operand is truthy.
// !: Flips the truthiness of a value (e.g., !true is false).
// Important Note:

// Always be cautious when relying on implicit truthy/falsy checks or using the loose equality operator (==). It's often safer to use explicit comparisons (===, !==) and explicit checks for specific values (e.g., if (value !== null && value !== undefined)).





