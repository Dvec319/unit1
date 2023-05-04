const movie = {
    name: "Guardians of the Galaxy 3",
    // this works
    helloWorld: function(){
        console.log("I am going to see " + this.name);
    },
    // this works
    helloWorld2(){
        console.log('I am going to see ' + this.name);
    },
    // this doesn't work
    helloWorld3: () => {
        console.log('I am going to see ' + this.name);
    }
};

movie.helloWorld();
movie.helloWorld2();
movie.helloWorld3();

function whatsThis(){
    console.log(this);
};

const obj1 = {
    prop: "cheese",
    whatsThis,
}

const obj2 = {
	prop: 'bread',
	whatsThis,
};

whatsThis();
obj1.whatsThis();
obj2.whatsThis();