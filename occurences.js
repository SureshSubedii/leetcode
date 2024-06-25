/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

    let count = new Map()

    for ( let i = 0; i < arr.length ; i++){
            count.set(arr[i], (count.get(arr[i]) || 0) + 1 )
    }
    const result = Array.from(count.values());
    console.log(new Set(result).size)
    return (new Set(result).size) === result.length;
    
};
console.log(uniqueOccurrences([11,22,22,3,3,3]))

//Alternative