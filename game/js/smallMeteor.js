import {Enemy} from "./enemy.js";
import {enemyProbability} from "./config.js";

class SmallMeteor extends Enemy{
    constructor(speed) {
        super(speed);
        this.element.className = "small-meteor"
        this.element.src = "assets/png/meteorSmall.png"
    }
}

export const smallMeteors = []

export function createSmallMeteor(speed, modifier) {
    if(Math.random() < enemyProbability.smallMeteor + modifier) smallMeteors.push(new SmallMeteor(speed))
}

export function moveSmallMeteor() {
    smallMeteors.forEach(m => {m.move()})
}