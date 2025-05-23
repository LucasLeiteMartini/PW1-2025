import {Enemy} from "./enemy.js";

class BigMeteor extends Enemy{
    constructor(speed) {
        super(speed);
        this.element.className = "big-meteor";
        this.element.src = "assets/png/meteorBig.png"
    }
}

export const bigMeteors = []

export function createBigMeteor(speed) {
    if(Math.random() < 0.04) bigMeteors.push(new BigMeteor(speed));
}

export function moveBigMeteor() {
    bigMeteors.forEach(b => b.move())
}