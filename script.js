const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here let result = [];
    let current_chunk = [];
    let current_sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (current_sum + arr[i] > n) {
            result.push(current_chunk);
            current_chunk = [arr[i]];
            current_sum = arr[i];
        } else {
            current_chunk.push(arr[i]);
            current_sum += arr[i];
        }
    }
    
    if (current_chunk.length > 0) {
        result.push(current_chunk);
    }
    
    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
