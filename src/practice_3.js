//1. String

dishName = 'assorted pickles'

console.log(typeof dishName)
console.log(`I want to order ${dishName}`)

//2. Number 

count = 2

console.log(typeof count)
console.log(`${count} portions, please`)

//3. Boolean

reserve = 1
if (count > reserve) {
    isDishAvailable = false
} else {isDishAvailable = true}

console.log(typeof isDishAvailable)

//4. Function

function timeForCooking(isAvailable) {
    if (isDishAvailable === true) {
        return '15 min'
    } else {
        return '0 min. Sorry, someone ate the dish'
    }
}

console.log(typeof timeForCooking)
console.log('Waiting time - ' + timeForCooking())

//5. Object

recipientInfo = {
    name: 'Maryna',
    phoneNumber: '+380950612121',
    price: function () {
        if (isDishAvailable === false) {
            return 0
        } else {
            return 120.00
        }
    },
    massageForAdmin: function () {
console.log(`Recipient is ${this.name}, ${this.phoneNumber}. Order price is ${this.price()}`)
    }
}

console.log(typeof recipientInfo)
console.log(recipientInfo.massageForAdmin())

//6. Undefined

console.log(typeof totalPrice)

//7. Infinity

totalAmount = count / 0

console.log(totalAmount * count)

//8. BidInt

totalDishes = 123n

console.log(typeof totalDishes)

//9. Symbol

iconForDish = Symbol('green')

console.log(typeof iconForDish)
