import {space} from "./space.js";
import {ship} from "./ship.js";

class ShipLaser {
    constructor() {
        this.element = document.createElement("img");
        this.element.className = "ship-shot"
        this.element.src = "assets/png/laserGreen.png"
        this.element.style.bottom = "98px"
        this.element.style.left = `${ship.element.offsetLeft + 45}px`
        space.element.appendChild(this.element)
    }

    move(){
        this.element.style.bottom = `${parseInt(this.element.style.bottom) + 20}px`
    }

}

const shots = []

export function createShot(){
    shots.push(new ShipLaser())
}

export function moveShot(){
    shots.forEach(shot => shot.move())
}