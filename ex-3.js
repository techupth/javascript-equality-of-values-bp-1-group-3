function isPlainObject(value) {
  if(typeof(value) === 'object'){
    return true
  } else if(typeof(value) === 'array') {
    return false
  } else if(typeof(value) === 'null') {
    return false
  } else {
    return "This is not an object."
  }
}

// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);

// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false
