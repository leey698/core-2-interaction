// STRINGS
// --------------------------

console.log('\n\nSTRINGS\n\n\n');

console.log('A string with single quotes'); // single quote
console.log("A string with double quotes"); // double quotes
console.log(`A string with back ticks`); // back tick
console.log('A ' + 'string ' + 'in ' + 'pieces'); // concatenation

// NUMBERS
// --------------------------

console.log('\n\nNUMBERS\n\n\n');

console.log(3); // number
console.log(3 + 3); // addition
console.log(3 - 3); // subtraction
console.log(3 * 3); // multiplication
console.log(3 / 3); // division
console.log(10 % 3); // modulo

// STRINGS & NUMBERS
// --------------------------

console.log('\n\nSTRINGS & NUMBERS\n\n\n');

console.log('100 * 50'); // numbers in a string
console.log('100 * 50 equals ' + 100 * 50); // adding number to a string
console.log(100 * 50 + '25'); // adding string to a number
console.log(`The year was ${ 2024-333} 333 years ago`); // template string

// BOOLEAN
// --------------------------

console.log('\n\nBOOLEANS\n\n\n');

console.log(true, false); // true and false
console.log('3 < 4 : ',3 < 4); // less than
console.log('4 > 10 : ',4 > 10); // greater than
console.log('2 >= 2 : ',2 >=2); // greater or equal to
console.log('6 <= 3 : ', 6 <= 3); // less than or equal to
console.log('8 + 2 == 5 + 5 : ', 8 + 2 == 5 + 5); //equal to
console.log("'tomato' != 'tomato')", 'tomato' != 'tomato'); // unequal to

// VARIABLES
// --------------------------

console.log('\n\nVARIABLES\n\n\n');

var studentLoanDebt = 800;
console.log('studentLoanDebt : ', studentLoanDebt);

studentLoanDebt = studentLoanDebt - 100;
console.log('studentLoanDebt : ', studentLoanDebt);

studentLoanDebt = studentLoanDebt + 50;
console.log('studentLoanDebt : ', studentLoanDebt);

// ARRAYS (a list of things)
// --------------------------

var myFavouriteColours = [
    'yellowgreen', 
    'fuchsia', 
    'gainsboro'
];
console.log('myFavouriteColours : ', myFavouriteColours);
console.log('myFavouriteColours[1] : ', myFavouriteColours[1]);

// OBJECTS
// --------------------------

console.log('\n\nOBJECTS\n\n\n');

var me = {
    firstName: 'Bryant',
    lastName: 'Wells',
    age: 33,
    likesMayo: false,
};
console.log(me);
console.log("me['firstName'] : ", me['firstName']); // bracket notation

// ARRAY OF OBJECTS
// --------------------------

console.log('\n\nARRAY OF OBJECTS\n\n\n')

var us = [
    {
        firstName: 'Jinhyeok',
        lastName: 'Jang'
    },
    {
        firstName: 'Jennifer',
        lastName: 'Lee',
    },
    {
        firstName: 'Minsung',
        lastName: 'Cho',
    },
];

console.log(us);
console.log(us[0]);
console.log(us[0]['lastName']);
