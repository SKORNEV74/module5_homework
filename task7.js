let arr7 = [1, 2, 4, 0, null, "5", {}, undefined, NaN, true, "", []];

let odd = 0, even = 0, zero = 0, other = 0;

arr7.forEach(function (item, index, array){
    if (isNaN(item) || item === undefined || item === null ||
        typeof item === "string" || typeof item === "object" || typeof item === "boolean") {
        other++;
    } else if (item === 0) {
        zero++;
    } else {
        (item % 2 === 0) ? even++ : odd++;
    }
});

console.log(`odd: ${odd}, even: ${even}, zero: ${zero}, other: ${other}`);