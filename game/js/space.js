import {TAM_X, TAM_Y} from "./config.js";

class Space{
    constructor(){
        this.element = document.getElementById("space");
        this.element.style.width = `${TAM_X}px`;
        this.element.style.height = `${TAM_Y}px`;
        this.element.style.backgroundPositionY = "0px";
    }

    move(){
        this.element.style.backgroundPositionY = `${parseInt(this.element.style.backgroundPositionY + 1)}px`;
    }
}

export const space = new Space();