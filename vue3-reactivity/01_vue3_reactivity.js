/**
 * not reactivity in js
 */

 let price = 2
 let quantity = 1
 let total = price * quantity

 function printTotal() {
    console.log(`total is ${total}`)
 }
 printTotal()

 price = 5
 printTotal()

/**
 * make reactivity
 */
let dep = new Set() // to store effects

let effect = () => { total = price * quantity }

function track() { dep.add(effect) }
function trigger() { dep.forEach(effect => effect()) } 

printTotal()

quantity = 3
printTotal()

track()
trigger()
printTotal()



