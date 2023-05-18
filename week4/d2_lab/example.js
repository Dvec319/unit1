class Person {
	constructor(hat, outfit) {
		this.hat = hat;
		this.outfit = outfit;
	}

	greeting() {
		console.log(
			`HELLO!!! I am wearing a ${this.hat.description} and a ${this.outfit.description}`
		);
	}
}

class Hat {
	constructor(description) {
		this.description = description;
	}
}

class Outfit {
	constructor(description) {
		this.description = description;
	}
}

const alex = new Person(new Hat('Top Hat'), new Outfit('Black Suit'));
const becky = new Person(new Hat('Bonnet'), new Outfit('Sundress'));

alex.greeting();
becky.greeting();
