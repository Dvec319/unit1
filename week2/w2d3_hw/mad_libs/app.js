

console.log("Connection successful")

const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: ""
}

const startMadLib = () => {
    words.number = prompt("Give me a number please");
    words.adjective = prompt("Give me an adjective please");
    words.pluralNoun = prompt("Give me a plural noun please");
    words.adverb = prompt("Give me an adverb please");
    words.anotherAdjective = prompt("Finally, one more adjective please");
}

startMadLib()

console.log(words)

alert(`Once upon a time a group of ${words.number} General Assembly graduates got together and made a startup called ${words.adjective}. Their goal was to create smart ${words.pluralNoun}. They approached the challenge ${words.adverb} which ultimately lead them to ${words.anotherAdjective} fame.`)