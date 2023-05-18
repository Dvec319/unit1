class Battler {
	constructor(name, hp, def, att) {
		this.name = name;
		this.hp = hp;
		this.def = def;
		this.att = att;
		this.moves = ['attack'];
	}

	// this function simulates an attach, takes another battler object
	attack(opponent) {
		console.log(`${this.name} attacks`);
		const damage = Math.floor(Math.random() * this.att);
		const finalDamage = opponent.def > damage ? 0 : damage - opponent.def;
		opponent.hp -= finalDamage;
		console.log(
			`${opponent.name} took ${finalDamage} damage and has ${opponent.hp} life left`
		);
	}
}
// mage inherits from Battle
class Mage extends Battler {
	constructor(name, hp, def, att) {
		// super is calling the parent constructor
		super(name, hp, def, att);
		this.moves.push('spell');
	}

	spell(opponent) {
		console.log(`${this.name} casts a spell`);
		const damage = Math.floor(Math.random() * this.att);
		const finalDamage = opponent.def > damage ? 0 : damage - opponent.def;
		opponent.hp -= finalDamage;
		console.log(
			`${opponent.name} took ${finalDamage} damage and has ${opponent.hp} life left`
		);
	}
}

// goblin inherits from Battle
class Goblin extends Battler {
	constructor(name, hp, def, att) {
		// super is calling the parent constructor
		super(name, hp, def, att);
		this.moves.push('breathFire');
	}

	breathFire(opponent) {
		console.log(`${this.name} Breaths Fire`);
		const damage = Math.floor(Math.random() * this.att);
		const finalDamage = opponent.def > damage ? 0 : damage - opponent.def;
		opponent.hp -= finalDamage;
		console.log(
			`${opponent.name} took ${finalDamage} damage and has ${opponent.hp} life left`
		);
	}
}

const merlin = new Mage('Merlin', 10, 3, 5);
const leroyJenkins = new Goblin('Leroy Jenkins', 10, 2, 6);

while (true) {
	// merlin attacks leroy jenkins
	{
		// generate a random index of merlins move array
		const index = Math.floor(Math.random() * merlin.moves.length);
		// call the function that matches that index
		const attackString = merlin.moves[index];
		merlin[attackString](leroyJenkins);
	}

	if (leroyJenkins.hp <= 0) {
		console.log('merlin wins');
		break;
	}

	// merlin attacks leroy jenkins
	{
		// generate a random index of merlins move array
		const index = Math.floor(Math.random() * leroyJenkins.moves.length);
		// call the function that matches that index
		const attackString = leroyJenkins.moves[index];
		leroyJenkins[attackString](merlin);
	}

	if (merlin.hp <= 0) {
		console.log('Leroy Jenkins wins');
		break;
	}
}
