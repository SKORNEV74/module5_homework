let myMap = new Map([
    ["bottle", "milk"],
    [23, false],
    [['a'], "text"]
]);

for (let elem of myMap) {
    console.log(`Ключ — ${elem[0]}, значение — ${elem[1]}`);
}