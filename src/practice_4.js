// 1
for (let i = 1; i <= 100; i++) {
    if (((i % 3) || (i % 5)) === 0) {
        console.log("FizzBuzz") 
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

// 2
for (let i = 1; i <= 100; i++) {
    console.log(
        ((i % 15)  ? "" : "FizzBuzz") + (i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i
        )
}