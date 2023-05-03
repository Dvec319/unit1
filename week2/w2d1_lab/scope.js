// Scope

// var cheese = "gouda" // global scope

// function someFunction (){
//     var bread = "rye" // local scope
// }

// {
//     var vegetable = "Brocolli" // var is not block scoped, this could be called outside the brackets and work
// }

// let and const block scoped
// they exist within the block {} they are created in only

// global
// const cheese = "gouda";
// let five = 5

// {
//     five = 3
// }

// {
//     const bread = "rye" // won't work outside of the {} - will come back as not defined it called upon
// }

let addNums;

{
    const five = 5
    addNums = (x) => x + five
}

{
    const six = 6
    console.log(addNums(six))
}