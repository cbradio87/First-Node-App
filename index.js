const u = require("underscore");
const s = require("faker");
const quote = require("inspirational-quotes")
var months = ["Jan", "Feb", "March", "April"];
months = u.shuffle(months);
displayMonths();
console.log(quote.getRandomQuote());
var randomName = s.name.findName();
console.log(randomName);

function displayMonths(){
  for (month of months) {
    console.log(month);
  }
}