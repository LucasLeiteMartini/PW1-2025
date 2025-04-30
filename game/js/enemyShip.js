import {PROB_ENEMY_SHIP, TAM_X} from "./config.js";
import {space} from "./space.js";

class EnemyShip {
    constructor(){
        this.element = document.createElement("img");
        this.element.className = "enemy-ship"
        this.element.src = "assets/png/enemyShip.png"
        this.element.style.top = "-20px"
        this.element.style.left = `${parseInt(Math.random() * TAM_X)}px`
        space.element.appendChild(this.element)
    }

    move(){
        this.element.style.top = `${parseInt(this.element.style.top) + 1}px`
    }
}

const enemyShip = []

export const createEnemyShip = () => {
    if(Math.random() < PROB_ENEMY_SHIP) enemyShip.push(new EnemyShip())
}

export const moveEnemyShip = () => {
    enemyShip.forEach(e => e.move())
}