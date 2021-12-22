function pairwise(arr, arg) {
    let pairIndices = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] ==arg
                && !pairIndices.includes(i)
                && !pairIndices.includes(j)) {
                pairIndices.push(i, j);
                break;
            }
        }
    }
    return pairIndices.reduce((sum, curr) => sum + curr, 0)
}

console.log(pairwise([1,4,2,3,0,5],7))