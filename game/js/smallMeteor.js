import {Enemy} from "./enemy.js";

class SmallMeteor extends Enemy{
    constructor(speed) {
        super(speed);
        this.element.className = "small-meteor"
        this.element.src = "assets/png/meteorSmall.png"
    }
}

export const smallMeteors = []

export function createSmallMeteor(speed) {
    if(Math.random() < 0.04) smallMeteors.push(new SmallMeteor(speed))
}

export function moveSmallMeteor() {
    smallMeteors.forEach(m => {m.move()})
}