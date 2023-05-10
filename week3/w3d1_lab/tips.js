const me = {
    name: "Michael Delvecchio",
    age: 28
};

console.log(me);

console.table(me);

for (let i = 0; i < 10; i++) {
    console.group("outer loop" + i)
    console.log(i)

    for (let j = 0; j < 10; j++) {
        console.group("inner loop" + j)
        console.log(j)
        console.groupEnd("inner loop" + j)
    }

    console.groupEnd("outer loop" + i)
};

function problem () {
    console.count("problem")
    console.log("hey")
    console.count('problem');
    console.log('hey');
    console.count('problem');
    console.log('hey');
    console.count('problem');
    cheese()
    console.count('problem');
    console.log('hey');
    console.count('problem');
}

problem()