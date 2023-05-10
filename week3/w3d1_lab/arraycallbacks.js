// Array callback methods
// These are functions that take a callback as an argument 
// All except reduce and sort take the following callback
//(item, index) => {}

// forEach (callback) => nothing
// Map (callback) => array of callback return values
// Filter (callback) => array of items where callback returned true
// Some (callback) => true if callback returns true once
// Find (callback) => return the value of the first item that returns true
// FindIndex (callback) => returns the index of the first item that returns true

const nums = [1,2,3,4,5];

{
    nums.forEach((num, index) => {
        console.log(num, index)
    })
}

// MAP
// Loop over your array
// Run the callback on each item
// Take the return value of the callback
// Add it to a new array
// Returns the new array

{
    const employees = [
        {name: "Alex", position: "Worker"},
        {name: "Bob", position: "Worker"},
        {name: "Susie", position: "Worker"}
    ]

    const promotedEmployees = employees.map((employee, index) => {
        console.log(employee, index)
        
        return {
            name: employee.name,
            position: "manager"
        }
    })

    console.log(employees)
    console.log(promotedEmployees)

    console.log([1,2,3,4,5].map((num) => num + 1))
}

// Filter
// To create a new array of items that pass a test
// Pass it a callback
// Run the callback for each item
// If a truthy is returned, that item is pushed into a new array
// The new array is returned

{
    const nums = [1,2,3,4,5,6,7]

    const evenNums = nums.filter((num, index) => {
        return num % 2 === 0
    })

    console.log(evenNums)
}


// Some and every
// Some returns true if callback returns true on at least one item
// Every returns true if callback returns true on every item

{
    const nums = [1,2,3,4,5,6,7]

    const someResult = nums.some((num, index) => {
        return num % 2 === 0
    });

    const everyResult =  nums.every((num, index) => {
        return num % 2 === 0
    });

    console.log(someResult);
    console.log(everyResult);
}

// Chaining Map and Filter
// Since Map and filter return an array, you can chain them
// Start with one array
// Add one to each of them
// Multiply each item by 3
// Remove uneven items

console.log([1,2,3,4,5]
    .map(num => num + 1)
    .map(num => num * 3)
    .filter(num => num % 2 === 0)
    );

    // Find returns a value from the array
    // FindIndex returns the index of a value in the array

    {
        const dogs = ["fido", "spot", "brutus"]

        const dog = dogs.find((dog, index) => {return dog === "spot"})

        const dogIndex = dogs.findIndex((dog, index) => {return dog === "spot"})

        console.log(dog, dogIndex)
    }