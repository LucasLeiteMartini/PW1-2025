import {Enemy} from "./enemy.js";

class EnemyShip extends Enemy {
    constructor(speed) {
        super(speed);
        this.element.className = "enemy-ship"
        this.element.src = "assets/png/enemyShip.png"
    }
}

export const enemyShips = []

export function createEnemyShip(speed){
    if(Math.random() < 0.04) enemyShips.push(new EnemyShip(speed))
}

export function moveEnemyShip() {
    enemyShips.forEach(e => e.move())
}