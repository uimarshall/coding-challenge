
function linearSearch(list, target){
    /* return the index position of the target if found, else returns null */
    for (let i in range(0, list.length)) {
        if (list[i]== target) {
            return i
            
        }
        
    }


    return null

}

function range(startAt, size) {
    return [...Array(size).keys()].map(i => i + startAt);
}

// const range = (start, end, length = end - start + 1) =>
//   Array.from({ length }, (_, i) => start + i)
// console.log(range(0,5));


function verify(index){
    if (index !== null) {
        console.log("target found at index: ", index);
        
    }else{
        console.log("Target does not exist!");

    }

}

let lists = [1,2,3,4,5,6,7,8,9,10]
let output = linearSearch(lists, 3)
verify(output);