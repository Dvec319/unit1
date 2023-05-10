// ForEach
// Array method for looping over arrays
// forEach: (callback) => {} (returns nothing)

const iceCreams = ["Vanilla", "Chocolate", "Strawberry", "Rocky Road"]

const callBack = (item, index) => {
    console.log(`The flavor is ${item} at index ${index}`)
};

iceCreams.forEach(callBack)

// ForEach
// ARRAY METHOD FOR LOOPING OVER ARRAYS
// forEach: (callback) => {} (returns nothing)
// callback: (item, index) => {}

// How the ForEach function looks under the hood
// iceCreams.forEach2 = function(callback){
//     console.log("forEach2")
//     for (let i = 0; i < this.length; i++){
//         callback(this[i], i)
//     }
// }

// iceCreams.forEach2(callback)

// Create our own Callbacks
console.log("---------------------------------------------------------");
console.log('---------------------------------------------------------');
console.log('---------------------------------------------------------');

const henchman = () => {
    console.log("I'm the Henchman")
};

const thief = () => {
    console.log("I'm the Thief")
};

const arsonist = () => {
    console.log("I'm the Arsonist")
};

// console.log(henchman)

const mobBoss = (employee) => {
    console.log("Go do your specialty")
    employee()
};

// using variables that have functions in them

mobBoss(henchman);
mobBoss(thief);
mobBoss(arsonist);