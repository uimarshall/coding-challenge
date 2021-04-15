# coding-challenge

## Algorithm

A set of steps or instructions for completing a tasks.

- It should have a clearly defined problem statement, inputs and outputs
- The steps in Algorithm need to be in a very specific order
- The steps also need to be distinct; you shouldn't be able to break it into further sub-tasks.
- Algorithms should produce a result
- Algorithms should actually complete and not take an infinite amount of time

We must ensure `Correctness` and `Efficiency` of `Algorithms`

### Correctness

`Correctness`: means for all inputs must generate the desired output and the Algorithm must terminate.

### Efficiency

Effeciency is measured in terms of `Time complexity` and `Space Complexity`

<h6>`Time complexity`</h6>

- Is a measure of how long it takes the Algorithm to run or complete.
- The less time it takes, the more efficient you are.

<h6>`Space complexity`</h6>

It deals with the amount space or memory taken in the computer by the Algorithm

## Big O
It is the theoretical definition of the complexity of an algorithm as a function of the size. It simplifies the growth rate into a single variable. 

E.g O(n): This represents Order of magnitude of complexity.
Big O measures complexity as the input size grows.It's a function of the size,
for instance we can search from size 1-10, 1-1000...
Big O measures how an algorithm performs in a worst case senario.

## Polynomial Runtime O(n^k)

Algorithm with polynomial runtime are considered as efficient algorithms



## Linear or Sequential Search

>Time Complexity => O(n)

### Algorithm for Linear search
> Example: Say you want to search for 5(the target) in a range from 1-10
1. Start at the beginning
2. Compare the current value to target(5)
3. Move sequentially
4. Reach end of list

## Facts concerning Linear search

- As the range of values get s larger, the running time gets larger.
- The running time directly proportional to the no of tries in searching for the target.
- It does not require sorting since you're just looking  for a target element.

## Binary Search(:35)

>Time Complexity => O(logn)


In Binary search, we search a `list` to find the `position`(index) of the `search term` we're looking for.

- It requires sorting so as to divide the range to lower and higher bounds
- The middle will be the first element to be compared with the target
- Depending on whether the middle element is lower or higher than the middle;
- You can then decide to search in the lower or higher bound.

## Understanding O(logn)

Exponent => 2^3 = 8
Logarithm => log2 `8` = 3;
`Log 8 base 2 = 3` means how many times will i divide `8` by `2` to get `1` => 3
1. 8/2 = 4
2. 4/2 = 2
3. 2/2 = 1, the division is `3 times`.