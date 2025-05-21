import {TAM_X} from "./config.js";
import {space} from "./space.js";

const directions = [
    "assets/png/playerLeft.png",
    "assets/png/player.png",
    "assets/png/playerRight.png"
]

class Ship {
    constructor() {
        this.element = document.createElement("img");
        this.element.id = "ship";
        this.direction = 1;
        this.element.src = directions[this.direction];
        this.element.style.bottom = "20px";
        this.element.style.left = `${TAM_X/2 - 50}px`;
        space.element.appendChild(this.element)
    }

    changeDirection(giro) {
        if(this.direction + giro >= 0 && this.direction + giro <= 2){
            this.direction = this.direction + giro;
            this.element.src = directions[this.direction]
        }
    }

    move(){
        if(this.direction === 0) this.element.style.left = `${parseInt(this.element.style.left) - 7}px`;
        if(this.direction === 2) this.element.style.left = `${parseInt(this.element.style.left) + 7}px`;
        this.element.src = directions[this.direction]
        if(parseInt(this.element.style.left) < 0){

            this.element.style.left = "0px"

        }else if(parseInt(this.element.style.left) > TAM_X - 99){

            this.element.style.left = "501px"

        }
    }
}

export const ship = new Ship();