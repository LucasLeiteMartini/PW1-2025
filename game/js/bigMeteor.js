import {Enemy} from "./enemy.js";
import {enemyProbability} from "./config.js";

class BigMeteor extends Enemy{
    constructor(speed) {
        super(speed);
        this.element.className = "big-meteor";
        this.element.src = "assets/png/meteorBig.png"
    }
}

export const bigMeteors = []

export function createBigMeteor(speed, modifier) {
    if(Math.random() < enemyProbability.bigMeteor + modifier) bigMeteors.push(new BigMeteor(speed));
}

export function moveBigMeteor() {
    bigMeteors.forEach(b => b.move())
}