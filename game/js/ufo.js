import {Enemy} from "./enemy.js";

class Ufo extends Enemy {
    constructor(speed) {
        super(speed);
        this.element.className = "enemy-ufo";
        this.element.src = "assets/png/enemyUFO.png";
    }
}

export const enemyUfos = []

export function createEnemyUfo(speed) {
    if(Math.random() < 0.04) enemyUfos.push(new Ufo(speed));
}

export function moveEnemyUfo() {
    enemyUfos.forEach(u => u.move())
}