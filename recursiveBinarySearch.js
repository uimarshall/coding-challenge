
function recurBinarySearch(list, target){
    if (list.length == 0) {
        return false    
    } else {
        let midPoint = Math.floor(list.length/2)
        if (list[midPoint] == target) {
            return true    
        }else{
            if (list[midPoint] < target) {
                return recurBinarySearch(list.slice(list[midPoint+1]), target)
                
            }else{
                return recurBinarySearch(list.slice(0, list[midPoint]), target)
            }
        }
    }
    
}

// *****************************************************************

//_________________________________________________BEGIN notes

    // Step 1. Get length of array 
    // Step 2. Find mid point
    // Step 3. Compare if mid point is lower or higher than searched number
    // Step 4. lop off unneeded side
    // Step 5. go to step 1
//_________________________________________________END notes

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 44, 55];

function getMidPoint(arr, searchNumb) {
    var length = arr.length;
    var midPoint = Math.floor(length / 2);
    var newArr = arr;
    console.log(arr);
    console.log("array midpoint value: " + arr[midPoint]);

    if (arr[midPoint] > searchNumb) {

        var newArr = arr.slice(0, midPoint);
        return getMidPoint(newArr, searchNumb);

    } else if (arr[midPoint] < searchNumb) {

        var newArr = arr.slice(midPoint + 1, arr.length);
        return getMidPoint(newArr, searchNumb);

    } else {
        return midPoint;
    }
}

function verify(result) { 
    console.log("Target found: ", result);
 }

let numbers = [1,2,3,4,5,6,7,8,9,10]
let array = [1,2,3,4,5,6,7,8,9,10,20,11,15,12]
// let output = recurBinarySearch(numbers, 7)
let output1 = getMidPoint(numbers, 5)
// let output2 = recurBinarySearch(arr, 11)
// verify(output);
verify(output1);
// verify(output2);