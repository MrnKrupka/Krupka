//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//Варіант 1:
//Спробувала застосувати функцію перевірки наявності дублікатів в масиві і за допомогою неї перебрати масив.

function containsDuplicateValues(nums) {
    let countOfDublicate = {}
    
    for (let number of nums) {
        if (countOfDublicate[number]) {
            return true;
        } else {
            countOfDublicate[number] = 1;
        }
    }
    return false;
};

//2. Варіант 2:
//Порівняти кількість цифр у вихідному масиві і в сеті унікальних значень, створеному на основі того ж масиву.

function counterUniques(nums) {
    let numsSize = nums.length;
    let uniqueNums = new Set(nums);
    let uniqueSize = uniqueNums.size;
    
    if (numsSize !== uniqueSize) {
    return true
    } else {
    return false
    };
};


//Застосування на прикладах в задачці:
//1. очікується true
let nums = [1,2,3,1];
console.log(containsDuplicateValues(nums) + ' - v1');
console.log(counterUniques(nums) + ' - v2');


//2. очікується false

nums = [1,2,3,4];
console.log(containsDuplicateValues(nums) + ' - v1');
console.log(counterUniques(nums) + ' - v2');

//3. очікується true

nums = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicateValues(nums) + ' - v1');
console.log(counterUniques(nums) + ' - v2');