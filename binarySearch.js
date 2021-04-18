
function binarySearch(list, searchTerm){
    list = list.sort((a, b) => a - b)
  let  firstElemInList = 0
  let  lastElemInList = list.length - 1
    // Loop thru the list from start-end
    while (firstElemInList <= lastElemInList) {
        let midPoint = Math.floor((firstElemInList + lastElemInList)/2)
        // Is the midPoint elem == to the target elem we're looking for
        if (list[midPoint] === searchTerm) {
            return midPoint //Best case Scenario
            
        } else if(list[midPoint] < searchTerm) {
            // discard all element below(left) the midPoint
            firstElemInList = midPoint + 1

            
        }else{
            lastElemInList = midPoint -1


        }
        
    }

    return null
        
}

function verify(index){
    if (index !== null) {
        console.log("target found at index: ", index);
        
    }else{
        console.log("Target does not exist!");

    }

}

let lists = [1,2,3,4,5,6,7,8,9,10]
let arr = [1,2,3,4,5,6,7,8,9,10,20,11,15,12]
let output = binarySearch(lists, 7)
let output1 = binarySearch(lists, 20)
let output2 = binarySearch(arr, 11)
verify(output);
verify(output1);
verify(output2);
// numbers.sort((a, b) => a - b);
console.log(arr.sort((a, b) => a - b));