function quicksort(arr) {
    let stack = [];
    stack.push(0);
    stack.push(arr.length - 1);

    while (stack.length > 0) {
        let high = stack.pop();
        let low = stack.pop();

        let pivot = arr[high];
        let i = low - 1;

        // Partitioning logic inside the same function
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap elements
            }
        }

        // Move the pivot element to the correct position
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        let pivotIndex = i + 1;

        // Push the left subarray onto the stack
        if (pivotIndex - 1 > low) {
            stack.push(low);
            stack.push(pivotIndex - 1);
        }

        // Push the right subarray onto the stack
        if (pivotIndex + 1 < high) {
            stack.push(pivotIndex + 1);
            stack.push(high);
        }
    }

    return arr;
}
