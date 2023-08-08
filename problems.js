function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let oddArr = [];
    for (let i = 1; i < arr.length; i += 2) {
        oddArr.push(arr[i]);
    }
    return oddArr;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    let oddArr = [];
    for (let i = 1; i < arr.length; i+=2) {
        oddArr.unshift(arr[i]);
    }
    return oddArr;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let powerArr = [];
    for (let i = 1; i < arr.length; i *= 2) {
        powerArr.push(arr[i]);
    }
    return powerArr;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let powerArr = [];
    for (let i = 1; i < arr.length; i *= n) {
        powerArr.push(arr[i]);
    }
    return powerArr;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let halfArr = [];
    for (let i = 0; i < arr.length / 2; i ++) {
        halfArr.push(arr[i]);
    }
    return halfArr;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    let secondArr = [];
    const middle = Math.ceil(arr.length / 2);
    for (let i = middle; i < arr.length; i ++) {
        secondArr.push(arr[i]);
    }
    return secondArr;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}