// basic for loop


for(let i = 0; i < 10; i++) {
    console.log(i)
}
// starting at 0, count up to 9 and log every increment

for(let i = 0; i <= 10; i++) {
    console.log('going to annoy ' + i + 'time(s)')
}

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

for (let i = 0; i < 11; i++) {
    if(i%2 === 0) {
        console.log(i)
    }
}

let count = 0;
for (let i = 0; i <= 10; i++) {
    if (i%2 === 0) {
        count  = count + i
    }
}
console.log(count)