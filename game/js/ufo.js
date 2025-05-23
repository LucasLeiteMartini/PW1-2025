import {Enemy} from "./enemy.js";
import {enemyProbability} from "./config.js";

class Ufo extends Enemy {
    constructor(speed) {
        super(speed);
        this.element.className = "enemy-ufo";
        this.element.src = "assets/png/enemyUFO.png";
    }
}

export const enemyUfos = []

export function createEnemyUfo(speed, modifier) {
    if(Math.random() < enemyProbability.ufo + modifier) enemyUfos.push(new Ufo(speed));
}

export function moveEnemyUfo() {
    enemyUfos.forEach(u => u.move())
}