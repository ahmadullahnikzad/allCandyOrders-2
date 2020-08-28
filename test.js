const fs = require('fs')
let code = fs.readFileSync('./index.js', 'utf8')
eval(code)

let inventory = [
  { candy: "Twizzlers", inStock: 180, weeklyAverage: 200 },
  { candy: "Sour Patch Kids", inStock: 90, weeklyAverage: 100 },
  { candy: "Milk Duds", inStock: 300, weeklyAverage: 170 },
  { candy: "Now and Laters", inStock: 150, weeklyAverage: 40 }
];

let altInventory = [
  { candy: "Skittles", inStock: 70, weeklyAverage: 80 },
  { candy: "Gummy worms", inStock: 20, weeklyAverage: 10 },
  { candy: "M&Ms", inStock: 300, weeklyAverage: 280 },
  { candy: "Starburst", inStock: 100, weeklyAverage: 40 },
  { candy: "Kit Kat", inStock: 20, weeklyAverage: 90 }
]

function formatExpectation(actual, expected, args) {
   return `\nWhen called with ${args}\nexpected:\n${JSON.stringify(expected)}\ngot:\n${JSON.stringify(actual)}\n`
}

function isObject(o) {
  return typeof(o) === 'object' && o !== null
}

function deepEquals(a,b) {
  if(isObject(a) && isObject(b)) {
    let keys = Object.keys(a)
    if (keys.length !== Object.keys(b).length) {
      return false
    }
    for (key of keys) {
      if(!deepEquals(a[key], b[key])) {
        return false
      }
    }
    // if all the keys match, they're equal
    return true
  } else {
    return a === b
  }
}

function test(actual, expected, args) {
  if (deepEquals(actual, expected)) {
    console.log(`✅\tTest passed`, formatExpectation(actual, expected, args))
  } else {
    console.log('❌\tTest failed.', formatExpectation(actual, expected, args))
  }
}

let toOrder = (c) => c.inStock > c.weeklyAverage ? 0 : c.weeklyAverage * 2;
let allOrders = (i) => i.reduce((m,c) => ({...m, [c.candy]: toOrder(c)}), {})

test(allCandyOrders(inventory), allOrders(inventory), '(inventory)')
test(allCandyOrders(altInventory), allOrders(altInventory), '(alternate inventory)')
test(allCandyOrders([]), allOrders([]), '[] (empty inventory)')