
// function fibonacci(n){
//     if (n == 0 || n == 1)
// 			return n;
// 		return fibonacci(n - 1) + fibonacci(n - 2);

// }
// console.log(fibonacci(10));

// function fibonacciSequence(n){
//     let  numbers = [0, 1]

//     while (numbers[-1] < n){

//          numbers.push(numbers[-1] + numbers[-2])
//     }
       

//     return numbers
// }
  

//  // O(N) Complexity
// function sumEvenFibonacciNumbers(n){
//     let sequence = fibonacciSequence(n)
//     for (let n of n in sequence) {
//         if (n % 2 === 0){
//             // return Math.sum(n)
//             sequence.push(n)
//         }
//     }
//     return arrSum(sequence)
    
// }

// const arrSum = arr => arr.reduce((a,b) => a + b, 0)
// sum = array.reduce((pv, cv) => pv + cv, 0);

function sumEvenFibonacciNumbers(n) {
  let nums = [1, 2];
  nums = fibonacciSequence(n, nums);
  let sum = 0;
  for(let i in nums){
    if(nums[i]%2===0){
      sum = sum + nums[i]
    }
  }
  return sum;
}

function fibonacciSequence(n, sequence){
  let num = sequence[sequence.length-1] + sequence[sequence.length-2];
  sequence.push(num);
  if(sequence.length<n){
    return fibonacciSequence(n, sequence);
  }else{
    return sequence;
  }
}



// function sumOddFibsNums(n) {
//   // Perform checks for the validity of the input
//   if (n <= 0) return 0;

//   // Create an array of fib numbers till num
//   const arrFib = [1, 1];
//   let nextFib = 0;

//   // We put the new Fibonacci numbers to the front so we
//   // don't need to calculate the length of the array on each
//   // iteration
//   while ((nextFib = arrFib[0] + arrFib[1]) <= n) {
//     arrFib.unshift(nextFib);
//   }

//   // We filter the array to get the odd numbers and reduce them to get their sum.
//   return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
// }


// ******************som of odd***************************
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// ***************Hackerrank Solution*************
function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        let sumEven = 0n
        let prevNum = 1n
        let currNum = 1n
        while (currNum <= n) {
          if (currNum % 2n === 0n) {
            sumEven += currNum
          }
          [prevNum, currNum] = [currNum, currNum + prevNum]
        }
        console.log(sumEven.toString())
    }
    
    

}

// test here
// test here
console.log(sumEvenFibonacciNumbers(100));
// console.log(sumOddFibsNums(1000));
// console.log(fiboEvenSum(10));
   
   

