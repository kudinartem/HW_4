// Task No1

let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4,12, 1];

let arr3 = arr1.length >= arr2.length ? arr1 : arr2;
for(i = 0; i < Math.min(arr1.length, arr2.length); i++) {
   arr3[i] = arr1[i] * arr2[i];
}
console.log(arr3);

// Task No2

let arr = [4,2,34,4,1,12,1,4];
let arrRepeats = [];

for(k = 0; k < arr.length; k++) {
   for(n = 0; n < k; n++) {
      if (arr[n] === arr[k] && !arrRepeats.includes(arr[k])) {
         arrRepeats.push(arr[k]);
      }
   }
}
console.log(arrRepeats);

//Task No3

let word = String(prompt('Enter your word:'));
let letter = String(prompt('Choose the letter:'));
let number = 0;

for(r = 0; r < word.length; r++) {
   if (word[r] === letter) {
      number++;
   }
}
console.log(`The string contains the following number of '${letter}' letter: ${number}`)


