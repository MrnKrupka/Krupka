//Write a function that reverses a string. The input string is given as an array of characters s.
//You must do this by modifying the input array in-place with O(1) extra memory.

//Варіант 1:
//Якщо говорити про те, що умова in-place не є критичною, то можна скористатися вбудованим методом обертання масиву.

function reverseArr(s) {
    s.reverse();
    return s;
};

//Варіант 2:
//Якщо все ж таки умова in-place критична, то можна використати наступну функцію обертання масиву.

function reverseArrV2(s) {
    let startSymb = 0;
    let endSymb = s.length - 1;
    
    while (startSymb < endSymb) {
        let temp = s[startSymb];

        s[startSymb] = s[endSymb];
        s[endSymb] = temp;

        startSymb++;
        endSymb--;
    }
    return s;
};

//Застосування на прикладах в задачці:
//1. очікується ["o","l","l","e","h"]
let s = ["h","e","l","l","o"];
console.log(reverseArr(s)); //v1

s = ["h","e","l","l","o"];
console.log(reverseArrV2(s)); //v2

//2. очікується ["h","a","n","n","a","H"]
s = ["H","a","n","n","a","h"];
console.log(reverseArr(s)); //v1

s = ["H","a","n","n","a","h"];
console.log(reverseArrV2(s)); //v2
