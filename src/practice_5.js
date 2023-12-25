// створити масив з цифрами [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9];

let numbers = [1, 1, 1, 2, 3, 4, 5, 5, 66, 6, 6, 7, 77, 8, 8, 8888, 9];

// перебрати масив і до кожного числа додати 5, і вивести результат в консоль

for (let n of numbers) {
    console.log(n+5)
};

// створити на базі масиву Set унікальних значень

let uniqueNumbers = new Set(numbers);

// ітерувати через сет і кожне число збільшити на 2, далі вивести суму всіх елементів

let sum = 2 * uniqueNumbers.size;

uniqueNumbers.forEach((unit) => {
    sum += unit;
});

console.log('Сума всіх унікальних елементів, збільшених на 2: ' + sum);

// створити мапу з літерами алфівіту, і значеннями з сету {"a" : 1, "b" : 2 ....}

let m = new Map();
let a = Array.from(uniqueNumbers.values());

m.set("a", a[0]);
m.set("b", a[1]);
m.set("c", a[2]);
m.set("d", a[3]);
m.set("e", a[4]);
m.set("f", a[5]);
m.set("g", a[6]);
m.set("h", a[7]);
m.set("i", a[8]);
m.set("j", a[9]);
m.set("k", a[10]);
m.set("l", a[11]);

// зробити конкатенацію ключів з мапи. 

let text = "";

for (let key of m.keys()) {
text += key;
};

console.log(text);