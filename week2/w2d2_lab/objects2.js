// const me = {
//     firstName: "Michael",
//     lastName: "Delvecchio",
//     age: 28,
//     email: "mdelvecchio3119@gmail.com",
//     ["place of residence"]: "Poughkeepsie"
// };

// console.log(me);
// console.log(me.firstName);
// me.age = 1028;
// console.log(me.age);
// console.log(me["place of residence"]);

// const fancyGreeting = (me) => {
//     console.log(`Greetings, ${me.firstName} ${me.lastName}`);
// };

// fancyGreeting(me);

// const monster = {
// 	name: 'Slimer',
// 	color: 'greenish',
// 	type: 'plasm or ghost or something',
// };

// console.log(monster.name);
// monster.type = "creature";
// monster.age = 6;
// console.log(monster);

// Ogres

// const ogre = {
//     name: "Smasher",
//     hitPoints: 20,
//     weapon: "club",
//     damage: 5,
//     attack: function (enemy){
//         adventurer.hitPoints -= ogre.damage;
//         console.log(`${ogre.name} landed the attack! ${enemy.name} has ${enemy.hitPoints}HP left. `);
//     }
// };
// const adventurer = {
//     name: "Billy",
//     hitPoints: 40,
//     weapon: "sword",
//     damage: 10,
//     attack: function (enemy){
//         ogre.hitPoints -= adventurer.damage;
// 	    console.log(`${adventurer.name} landed the attack! ${enemy.name} has ${enemy.hitPoints}HP left. `);
//     }
// };

// while ((adventurer.hitPoints > 0) && (ogre.hitPoints > 0)) {
//     (adventurer.attack(ogre))
//     if (ogre.hitPoints <= 0) {break}
//     (ogre.attack(adventurer))
// };

// if (ogre.hitPoints <= 0) {
//      console.log(`Good job ${adventurer.name}! You beat the ogre ${ogre.name}.`);
// }

const cat1 = {
    name: "Pudding",
    breed:"American Bobtail",
    age: 5
};

console.log(cat1.age);
console.log(cat1.breed);

const cat2 = {
    name: "Gabagool",
    breed: "Maine Coon",
    age: 3
};

// const combineCats = (mama, papa) => {
//     console.log(mama, papa)
// }

// combineCats(cat1, cat2);

const combineCats = (mama, papa) => {
    const cat3 = {
        name: mama.name + papa.name,
        breed: mama.breed + "-" + papa.breed,
        age: 1
    }
    return cat3
};

console.log(combineCats(cat1, cat2));
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(cat1, cat2)));