var RandomizedSet = function () {
  this.nums = []; // Stores values
  this.map = new Map(); // Stores {value -> index}
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false; // If value already exists, return false

  this.nums.push(val); // Add value to array
  this.map.set(val, this.nums.length - 1); // Store index in map
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false; // If value doesn't exist, return false

  let index = this.map.get(val); // Get index of the value
  let lastElement = this.nums[this.nums.length - 1]; // Get last element

  // Swap last element with element to remove
  this.nums[index] = lastElement;
  this.map.set(lastElement, index); // Update index of last element in map

  // Remove last element
  this.nums.pop();
  this.map.delete(val); // Remove value from map
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let randomIndex = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomIndex];
};

// Example Usage:
let obj = new RandomizedSet();
console.log(obj.insert(1)); // true
console.log(obj.remove(2)); // false
console.log(obj.insert(2)); // true
console.log(obj.getRandom()); // Randomly returns 1 or 2
console.log(obj.remove(1)); // true
console.log(obj.getRandom()); // Returns 2
