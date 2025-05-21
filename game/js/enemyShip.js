import {PROB_ENEMY_SHIP, TAM_X} from "./config.js";
import {space} from "./space.js";

class EnemyShip {
    constructor(speed){
        this.element = document.createElement("img");
        this.element.className = "enemy-ship"
        this.element.src = "assets/png/enemyShip.png"
        this.element.style.top = "-20px"
        this.element.style.left = `${randomPosition()}px`
        this.speed = speed;
        space.element.appendChild(this.element)
    }

    move(){
        this.element.style.top = `${parseInt(this.element.style.top) + this.speed}px`
    }
}

export const enemyShips = []

export const createEnemyShip = (speed) => {
    if(Math.random() < 0.04) enemyShips.push(new EnemyShip(speed))
}

/**
 * Posição aleatória gerada para a nave inimiga. É gerada novamente se estiver fora dos limites.
 */
function randomPosition(){
    let pos = Math.random() * TAM_X;
    while(pos > 502 || pos < 0){
        pos = Math.random() * TAM_X;
    }
    return pos;
}

/**
 * Faz um loop que move individualmente cada nave dentro do array.
*/
export const moveEnemyShip = () => {
    enemyShips.forEach(e => e.move())
}

