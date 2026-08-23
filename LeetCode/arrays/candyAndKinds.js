var kidsWithCandies2 = function (candies, extraCandies) {
    let maxCandies = candies[0];
    for (let i = 1; i < candies.length; i++) {
        if (candies[i] > maxCandies) {
            maxCandies = candies[i];
        }
    }
    return candies.map(candy => candy + extraCandies >= maxCandies);
};

var kidsWithCandies3 = function (candies, extraCandies) {
    let maxCandies = candies[0];
    for (let i = 1; i < candies.length; i++) {
        if (candies[i] > maxCandies) {
            maxCandies = candies[i];
        }
    }

    const result = new Array(candies.length);
    for (let i = 0; i < candies.length; i++) {
        result[i] = candies[i] + extraCandies >= maxCandies;
    }
    
    return result;
};

console.time('kidsWithCandies3');
console.log(kidsWithCandies3([2,3,5,1,3], 3)); // [true, true, true, false, true]
console.timeEnd('kidsWithCandies3');

// Test and compare performance
console.time('kidsWithCandies2');
console.log(kidsWithCandies2([2,3,5,1,3], 3)); // [true, true, true, false, true]
console.timeEnd('kidsWithCandies2');
