import {space} from "./space.js";
import {ship} from "./ship.js";

class ShipLaser {
    constructor() {
        this.element = document.createElement("img");
        this.element.className = "ship-shot"
        this.element.src = "assets/png/laserGreen.png"
        this.element.style.bottom = "98px"
        this.element.style.left = `${ship.element.offsetLeft + ship.element.width/2 - 1}px`
        space.element.appendChild(this.element)
    }

    move(){
        this.element.style.bottom = `${parseInt(this.element.style.bottom) + 15}px`
    }

}

export const shots = []

export function createShot(){
    shots.push(new ShipLaser())
}

export function moveShot(){
    shots.forEach(shot => shot.move())
}