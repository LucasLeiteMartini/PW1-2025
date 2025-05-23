import {TAM_X} from "./config.js";
import {space} from "./space.js";

export class Enemy {
    constructor(speed){
        this.element = document.createElement("img");
        this.element.style.top = "-20px"
        this.element.style.left = `${randomPosition()}px`
        this.speed = speed;
        space.element.appendChild(this.element)
    }

    move(){
        this.element.style.top = `${parseInt(this.element.style.top) + this.speed}px`
    }
}


function randomPosition(){
    let pos = Math.random() * TAM_X;
    while(pos > 502 || pos < 0){
        pos = Math.random() * TAM_X;
    }
    return pos;
}
