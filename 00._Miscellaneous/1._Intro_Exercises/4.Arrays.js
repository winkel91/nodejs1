// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
const lettersb = letters.slice(1,2);
console.log(lettersb);
// show b in the console 


// --------------------------------------
// Exercise 2 - Array Positioning

const friends = ["Ven1","Ven2","Ven3"];

// What a lonely array. Add at least 3 friend objects to it.  


// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 
s1 = significantMathNumbers.indexOf(1729);
console.log(s1);

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];
diet.splice(2, 0, "hamburger", "soda", "pizza");
console.log(diet);
// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket




// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 
diet.splice(-1);
console.log(diet);




// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  
dinnerTray = diet.map((x) => x);
console.log(dinnerTray);


// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];
let x = 0;
for (x = 1; x < lettersExpanded.length; x+=2) {
    console.log(lettersExpanded[x]);
}
// log every second char in the array starting from b



// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];
const discardedNumbers = [];
let i = 0;
for(i=0; i < numbers.length; i++) {
    if( numbers[i] > 6 || numbers[i] < 0) {
        console.log(numbers[i])
    } else {
        discardedNumbers.push(numbers[i])
    }

}
console.log(discardedNumbers);

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

// --------------------------------------


