# Classes and Objects Challenge Answer

::: danger STOP
Danger zone, do not proceed unless you gave it your all!
:::

::: details Click me to view the code
::: code-group
```js [Class]
class CharacterCreation { 
    constructor(name, charClass, level) { 
        this.name = name; 
        this.charClass = charClass; 
        this.level = level; 
    } 
    greeting() { 
        return `Hello my name is ${this.name} and im a level ${this.level} ${this.charClass}` 
    } 
    attack() { 
        if (this.charClass === "Wizard") { 
            return `${this.name} casts FIREBALL!` 
        } 
        else if (this.charClass === "Barbarian") { 
            return `${this.name} swings an axe!` 
        } 
        else if (this.charClass === "Rogue") { 
            return `${this.name} Attacks with a dagger` 
        } 
        else if (this.charClass === "Ranger") { 
            return `${this.name} Fires an arrow` 
        } 
        else if (this.charClass === "Fighter") { 
            return `${this.name} Swings a sword` 
        } else { 
            return `Hey, check for spelling on the ${this.charClass} charClass` 
        } 
    } 
} 
module.exports = { CharacterCreation }
```
```js [Character Creation]
const { CharacterCreation } = require("./Character-Creation.class")
let Wizard = new CharacterCreation("Gandolf", "Wizard", 5)
console.log(Wizard.attack());
```

:::