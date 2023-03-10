let arr6 = [1, 2, 1];

let answer;

for (let i = 1; i < arr6.length; i++) {
    if (arr6[0] === arr6[i]) {
        answer = true;
    } else {
        answer = false;
        break;
    }
}

console.log(answer);