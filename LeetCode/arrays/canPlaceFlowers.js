/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers1 = function(flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const emptyLeft = (i === 0 || flowerbed[i - 1] === 0);
            const emptyRight = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);
            if (emptyLeft && emptyRight) {
                flowerbed[i] = 1;
                count++;
                if (count >= n) return true;
            }
        }
    }
    return count >= n;
};

console.time('canPlaceFlowers1');
console.log(canPlaceFlowers1([1, 0, 1, 0, 0], 1)); // true
console.timeEnd('canPlaceFlowers1');


