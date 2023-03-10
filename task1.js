let num = +prompt("Введите число:");

if (isNaN(num)) {
    console.log("Упс, кажется, вы ошиблись")
} else if (typeof num === "number") {
    console.log((num % 2 === 0) ? "Четное" : "Нечетное");
}