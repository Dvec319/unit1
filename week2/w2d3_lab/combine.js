// Looping over nested arrays/objects

{
    const foo = {
        someArray: [1,2,3]
    }

    // for of loop
    for (let element of foo.someArray) {
        console.log(element)
    }

    // traditional for loop
    for (let i = 0; i < foo.someArray.length; i++) {
        console.log(foo.someArray[i])
    }

    // forEach (array callback)
    foo.someArray.forEach((element, index) => {
        console.log(element)
        console.log(foo.someArray[index])
    })
}

{
    const foo = [
			['0,0', '0,1', '0,2'],
			['1,0', '1,1', '1,2'],
			['2,0', '2,1', '2,2'],
		];

        // for of loop
        for (let row of foo) {
            for (let element of row) {
                console.log(element)
            }
        }

        // traditional loop
        for (let i = 0; i < foo.length; i++) {
            for (let j = 0; j < foo[i].length; j++) {
                console.log(foo[i][j])
            }
        }

        // forEach

        foo.forEach((row, i) => {
            row.forEach((element, j) => {
                console.log(element)
                console.log(foo[i][j])
            })
        })
}

{
    const summonServant = () => {
			return {
				bagOfStuff: ['clothes', 'food', 'keys'],
			};
		};

        console.log(summonServant)
        console.log(summonServant())
        console.log(summonServant().bagOfStuff)
        console.log(summonServant().bagOfStuff[1])
}

{
    const summonServant = () => {
			return {
				hat: {
					color: 'black',
				},
			};
		};

        console.log(summonServant)
        console.log(summonServant())
        console.log(summonServant().hat)
        console.log(summonServant().hat.color)
}

{
    const summonServant = () => {
			return {
				washFeet: () => {
					console.log('washing...');
				},
			};
		};

        console.log(summonServant);
		console.log(summonServant());
		console.log(summonServant().washFeet);
		summonServant().washFeet();
}

{
    const wizard = {
			summonImp: () => {
				return {
					color: 'black',
				};
			},
		};

        console.log(wizard)
        console.log(wizard.summonImp)
        console.log(wizard.summonImp())
        console.log(wizard.summonImp().color)
}

{
    const wizard = {
			generateSpell: () => {
				return () => {
					console.log('fireball');
				};
			},
		};

        console.log(wizard)
        console.log(wizard.generateSpell)
        console.log(wizard.generateSpell())
        wizard.generateSpell()()
}

{
    const bag = [
			1,
			'apple',
			() => {
				return {
					name: 'bob',
				};
			},
		];

        console.log(bag)
        console.log(bag[2])
        console.log(bag[2]())
        console.log(bag[2]().name)
}

{
    const bag = [
			1,
			'apple',
			() => {
				return () => {
					console.log('fireball!');
				};
			},
		];

        console.log(bag)
        console.log(bag[2])
        console.log(bag[2]())
        bag[2]()();
}

// object object object

{
    const house = {
        size: "large",
        kitchen: {
            microwave: true,
            stove: true,
            fridge: {
                food: "carrots",
                freezer: true
            }
        }
    }
}

// object object array

{
    const car = {
        make: "dodge",
        model: "dart",
        parts: {
            wheels: [1,2,3,4],
            doors: [1,2,3,4]
        }
    }
}

// object object function

{
    const kitchen = {
        island: {
            sink: () => {
                console.log("I'm washing my hands!")
            }
        }
    }
}

// object array object

{
    const car = {
        doors: [1,2,3,4, {
            color: "blue",
            closed: true
        }]
    }
}

// object array array

{

}

// object array function

{
    const garage = {
        items: ["car", garageDoorButton = () => {
            console.log("Use this to open or close the garage door!")
        }, "toolbox"]
    }
}

{
    const state = {
        counter: [0, function(x){
            this[0] = x
        }]
    }
}

// onject function object

{
    const parents = {
        haveChild: (name) => {
            return {
                name
            }
        }
    }
}

// object function array

{
    const alex = {
        getKeys: () => {return ["Front Door", "Garage"]}
    }
}

// object function function

{
    const teenager = {
        getLearnersPermit: () => {
            return () => {
            console.log("got my drivers license")
        };
    },
};

    teenager.getLearnersPermit()();
}

// array object object

{
    const movies = [{name: "movie1", runtime: "2 hours", star: {name: "Chris Pratt"} },]
}

{
    const friends = [{
        name: "bob",
        pet: {
            name: "ruff",
            species: "dog"
        }
    }]
}

{
    const wizard = {
			summonImp: () => {
				return {
					belongings: ['fire', 'sulfur', 'pear'],
				};
			},
		};

        console.log(wizard)
        console.log(wizard.summonImp)
        console.log(wizard.summonImp())
        console.log(wizard.summonImp().belongings)
        console.log(wizard.summonImp().belongings[1])
}

{
    const wizard = {
			summonImp: () => {
				return {
					friend: {
						name: 'Bob',
					},
				};
			},
		};

        console.log(wizard)
        console.log(wizard.summonImp)
        console.log(wizard.summonImp())
        console.log(wizard.summonImp().friend)
        console.log(wizard.summonImp().friend.name)
}

{
    const wizard = {
			summonImp: () => {
				return {
					attack: () => {
						console.log('attacking!!');
					},
				};
			},
		};

        console.log(wizard)
        console.log(wizard.summonImp)
        console.log(wizard.summonImp())
        console.log(wizard.summonImp().attack)
        wizard.summonImp().attack()
}

{
    const bag = [
			1,
			'apple',
			() => {
				return {
					belongings: ['shoes', 'glasses'],
				};
			},
		];

        console.log(bag)
        console.log(bag[2])
        console.log(bag[2]())
        console.log(bag[2]().belongings)
        console.log(bag[2]().belongings[1])
}

{
    const bag = [
			1,
			'apple',
			() => {
				return {
					friend: {
						name: 'sally',
					},
				};
			},
		];

        console.log(bag)
        console.log(bag[2]);
		console.log(bag[2]());
		console.log(bag[2]().friend);
		console.log(bag[2]().friend.name);
}

{
    const bag = [
			1,
			'apple',
			() => {
				return {
					fireball: () => {
						console.log('whoosh');
					},
				};
			},
		];

        console.log(bag);
		console.log(bag[2]);
        console.log(bag[2]())
		console.log(bag[2]().fireball);
		bag[2]().fireball();
}