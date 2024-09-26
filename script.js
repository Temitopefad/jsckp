//Reverse a String: Write a function that reverses a given string.

// function reverse(str) {
    
//         let reversed = '';
//         for (let i = str.length - 1; i >= 0; i--) {
//           reversed += str[i];
//         }
//         return reversed;
//       }
//       console.log(reverse('helloworld'));
      
//Count Characters: Create a function that counts the number of characters in a string.

// function countnum(Str) {
//     return Str.length 
//     }
//     console.log(countnum('helloworld'));

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.


// function capitalizeWords(sentence) {
//     return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// let exampleSentence = "hello, world! welcome to coding.";
// console.log(capitalizeWords(exampleSentence)); 

//Find Maximum and Minimum: Write functions to find  the  maximum and minimum values in an array of numbers.
// arr = [3, 5, 7, 2, 8];
// function findMax(arr) {
//     return Math.max(...arr);
// }

// console.log(findMax(arr)); 
// `   `
// function findMin(arr){
// return Math.min(...arr);
// }

// console.log(findMin(arr));

//Sum of Array: Create a function that calculates the sum of all elements in an array.
  
// let arr = [3, 5, 7, 2, 8];
// function calcsum(arr){
//     return arr.reduce((acc, curr) =>acc + curr, 0);
// }
// console.log(calcsum(arr));

//Filter Array: Implement a function that filters out elements from an array based on a given condition.
// let arr = [3,4,5,7,9,2]
// function condition(arr ) {

// return arr.filter(condition) 

//     }
//     let result = condition (arr = arr => 5)
//     console.log(condition(result))

//Factorial: Write a function to calculate the factorial of a given number.

// function factorial(n) {
//     // Base case: factorial of 0 or 1 is 1
//     if (n === 0 || n === 1) {
//       return 1;
//     }
//     // if not 
//     return n * factorial(n - 1);
//   }
  
//   console.log(factorial(6));  
  
//Prime Number Check: Create a function to check if a number is prime or not.  

// function primecheck(n){
//     for (let i = 2; i <= Math.sqrt(n) ; i++) {
//         if (n % i === 0) {
//             return false ;
//         }
        
//     }
//     return true ;

// } console.log(primecheck(35))
// console.log(primecheck(13))
    
//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
// function fibonacciSequence(n) {
//     const sequence = [];
//     let a = 0, b = 1;
//     for (let i = 0; i < n; i++) {
//         sequence.push(a);
//         [a, b] = [b, a + b]; // Swap values
//     }
//     return sequence;
// }
// console.log(fibonacciSequence(10));




