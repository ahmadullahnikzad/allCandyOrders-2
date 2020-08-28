// This is the same inventory as before. No need to modify it.
let inventory = [
  { candy: "Twizzlers", inStock: 180, weeklyAverage: 200 },
  { candy: "Sour Patch Kids", inStock: 90, weeklyAverage: 100 },
  { candy: "Milk Duds", inStock: 300, weeklyAverage: 170 },
  { candy: "Now and Laters", inStock: 150, weeklyAverage: 40 }
];
// function candyOrderQuantity(inventory,candy){
//   for(let i=0;i<inventory.length;i++){
//     if(inventory[i].candy===candy&&inventory[i].inStock<inventory[i].weeklyAverage){
//       return inventory[i].weeeklyAveerage*2;
//     }
//   }
//   return 0;
// }
// complete the allCandyOrders function


/* 

allCandyOrders should return an order object,

The keys are the names of the candies and the values are the amounts to be ordered that week. 

The amount to order each week should use the same formula as the candyOrderQuantity function.

Formula:
- if inStock is greater than weeklyAverage, order 0
- if instock is less than weeklyAverage, order 2 times the weeklyAverage

Example input/output:

allCandyOrders(inventory)
-> 
{
  "Twizzlers": 400,
  "Sour Patch Kids": 200,
  "Milk Duds": 0,
  "Now and Laters": 0
}

*/

function allCandyOrders( inventory ){

    let orders = {};

    for ( let i=0;i<inventory.length;i++){
        // need to check each item for inStock > weeklyAverage
        let obj = inventory[i];
        if ( obj.inStock > obj.weeklyAverage ){
            // create orders key with value 0
            orders[obj.candy] = 0;
        } else { 
            // create orders key with value 2 * weeklyAverage
            orders[obj.candy] = 2 * obj.weeklyAverage;
        }

    }
    return orders
}

// This is to run the tests. You can ignore it but don't delete it!
require('./test.js');(void 0);
