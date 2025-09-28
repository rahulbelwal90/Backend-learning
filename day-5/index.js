const crypto = require("crypto");

//1. RandomBytes

const randomValues = crypto.randomBytes(8);
console.log(randomValues.toString("hex"));

// 2. createHash

const hashvalue= crypto.createHash("sha256").update("Rahul").digest("hex")
console.log(hashvalue);

const inputValue = "Rahul";
const matchValue = crypto.createHash("sha256").update(inputValue).digest("hex")

console.log(hashvalue === matchValue);


