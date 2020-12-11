//forEach();
// var numbers = [45, 4, 9, 16, 25];
// numbers.forEach(getElement);

// function getElement(value, index, array) {
//     console.log(index, value);
//     console.log(array);
// }

//map()
// var numbers = [45, 4, 9, 16, 25];
// var numbers2 = numbers.map(getElement);
// console.log(numbers2);

// function getElement(value, index, array) {
//     return value * 2;
// }

//filter()
// var numbers = [45, 4, 9, 16, 25];
// var numbers2 = numbers.filter(getElement);
// console.log(numbers2);

// function getElement(value, index, array) {
//     return value > 19;
// }

//reduce()
// var numbers = [45, 4, 9, 16, 25];
// var sum = numbers.reduce(getElement);
// console.log(sum);

// function getElement(total, value, index, array) {
//     if (value > 18) {
//         return total + value;
//     }
//     return total + 0;
// }

//every()
// var numbers = [45, 4, 9, 16, 25];
// console.log(numbers.every(getElement));

// function getElement(value, index, array) {
//     return value > 9;
// }


//some()
// var numbers = [45, 4, 9, 16, 25];
// console.log(numbers.some(getElement));

// function getElement(value, index, array) {
//     return value >= 16;
// }

//indexOf()
// var numbers = [45, 16, 9, 16, 25];
// console.log(numbers.indexOf(16));
// console.log(numbers.indexOf(16, 4));

//lastIndexOf()
// var numbers = [45, 16, 9, 16, 25];
// console.log(numbers.lastIndexOf(16));

find()
var numbers = [2, 24, 17, 19, 25];
console.log(numbers.find(getElement));

function getElement(value, index, array) {
    return value >= 16;
}

//findIndex()
var numbers = [2, 24, 17, 19, 25];
console.log(numbers.findIndex(getElement));

function getElement(value, index, array) {
    return value >= 16;
}