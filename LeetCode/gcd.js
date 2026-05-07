const gcd1 = (a,b) => {
    while(b !== 0) {
        let re = b;
        b = a % b;
        a = re;
    }
    return a;
}

const gcd2 = (a,b) => {
    const data =  (a,b) => {
        if(b === 0) return a;
        return gcd2(b, a % b);
    }
    return data(a,b);
}


console.time('gcd1');
console.log(gcd1(48,18)); // 6
console.timeEnd('gcd1');

console.time('gcd2');
console.log(gcd2(48,18)); // 6
console.timeEnd('gcd2');