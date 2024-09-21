function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number>();

    for (let i: number = 0; i < nums.length; i++) {
        const complement = target - nums[i];  // Calculate the complement
        
        // Check if the complement is already in the map
        if (map.has(complement)) {
            return [map.get(complement)!, i];  // Return indices if found
        }
        
        // Store the current number and its index in the map
        map.set(nums[i], i);
    }

    // Optional: In case no solution is found (though not required by problem statement)
    return [];
}
