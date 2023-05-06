// Set Alarm

const setAlarm = (employed, vacationing) => {
    if (employed && vacationing) {
        return false;
    } else if (employed == false && vacationing == false) {
        return false;
    } else if (employed == false && vacationing) {
        return false;
    } else (employed && vacationing == false)
        return true;
}

console.log(setAlarm(true, true)) // => returns false
console.log(setAlarm(false, false)) // => returns false
console.log(setAlarm(false, true)) // => returns false
console.log(setAlarm(true, false)) // => returns true

// Odd Number Count

{
    const oddNumberCount = (num) => {
        let array = []
        for (let i = 0; i < num; i++) {
            if (i %2 !== 0) {
                array.push(i)
            }
        }

        console.log(array.length)
    }

    oddNumberCount(7)
    oddNumberCount(16)

}

// Disemvoweling Trolls

{
    const trollsBeGone = (str) => {
        let newString  = str.replace(/[aeiou]/ig, "");
        return newString
    }

    console.log(trollsBeGone('This website is for losers LOL'));
}