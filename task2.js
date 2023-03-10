let x;

if (isNaN(x)) {
    console.log("Тип x не определён")
} else {
    if (typeof x === "number") {
        console.log("x — число");
    } else if (typeof x === "string") {
        console.log("x — строка");
    } else if (typeof x === "boolean") {
        console.log("x — логического типа");
    } else {
        console.log("Тип x не определён");
    }
}