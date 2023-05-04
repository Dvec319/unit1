const key = "weapon"

const robot = {
    name: "bleepBlop",
    serial: 1,
    isEvil: false,
    ["Gas Tank"]: "full",
    [key]: "Lazers"
};

console.log(robot);
console.log(robot.weapon);
console.log(robot[key]);
console.log(robot["weapon"]);

const RobotEmpire = {
    army: [],
    build: function (){
        this.army.push({
            name: `Robot Soldier ${this.army.length}`,
            speak: () => console.log("Exterminnate"),
            attack: function(){
                console.log(`${this.name} attacks`);
            }
        })
    }
};

RobotEmpire.build();
RobotEmpire.build();
RobotEmpire.build();
RobotEmpire.army[0].attack()
console.log(RobotEmpire);