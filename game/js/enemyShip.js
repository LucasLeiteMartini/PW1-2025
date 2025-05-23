import {Enemy} from "./enemy.js";
import {enemyProbability} from "./config.js";

class EnemyShip extends Enemy {
    constructor(speed) {
        super(speed);
        this.element.className = "enemy-ship"
        this.element.src = "assets/png/enemyShip.png"
    }
}

export const enemyShips = []

export function createEnemyShip(speed, modifier){
    if(Math.random() < enemyProbability.enemyShip + modifier) enemyShips.push(new EnemyShip(speed))
}

export function moveEnemyShip() {
    enemyShips.forEach(e => e.move())
}