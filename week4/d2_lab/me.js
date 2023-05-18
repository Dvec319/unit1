class Me {
    constructor(name){
        this.name = name;
        this.age = 28
        this.hobby = "video games"
        
    }

    greeting(){
        console.log(`Hello! I'm ${this.name}`)
    }

    sparetime(){
        console.log(`Oh I like ${this.hobby} a lot! What about you?`)
    }


}

const me = new Me("Michael")

console.log(me)

me.greeting()
me.sparetime()