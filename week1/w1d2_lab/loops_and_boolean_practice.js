// Loop It

for (let i = 1; i <= 15; i++) {
    console.log("hi")
};

for (let i = 1; i <= 30; i++) {
    console.log("YEP!")
};

// Booleans and Loops Part 1

for (let i = 1; i <= 10; i++) {
    let some_num = Math.floor(Math.random() * 40);
    if (some_num >= 10 && some_num <= 20) {
        console.log("that's an okay number")
    } else if (some_num < 10 ) {
        console.log("that's a small number")
    } else if (some_num > 20) {
        console.log("that's a big number")
    }
};

const fave_day = 'Friday'

for (let i = 1; i <= 10; i++) {
    if (fave_day.to === 'Saturday' || fave_day === 'Sunday') {
        console.log("I like the weekend")
    } else if (fave_day === 'Monday' || fave_day === 'Tuesday' || fave_day === 'Wednesday' || fave_day === 'Thursday' || fave_day === 'Friday') {
        console.log("Give me a good 'ol weekday")
    } else (console.log("Hey! That's not a day of the week!"))
};