// Callbacks
// The Pattern of passing a Function as an Argument to another Function
// (function) => {}

// setTimeout
// passed a function as an argument (callback)
// invoke that function after a certain period of time
// (callback, timeToExecute) => {}

setTimeout(() => {
    console.log('hi')
}, 2000);

// setInterval
// pass a function and time amount
// invoke that function repeatedly by that time interval
// (callback, timeToExecute) => {}

setInterval(() => {
	console.log('goodbye');
}, 1000);