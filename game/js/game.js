import {FPS} from "./config.js";
import {space} from "./space.js";
import {ship} from "./ship.js";
import {createEnemyShip, moveEnemyShip} from "./enemyShip.js";

function init(){
    setInterval(run, FPS)
}

function run(){
    space.move()
    console.log("oi")
    ship.move()
    createEnemyShip()
    moveEnemyShip()
}

window.addEventListener("keydown", (e)=>{
    if(e.key === "ArrowLeft") ship.changeDirection(-1)
    if(e.key === "ArrowRight") ship.changeDirection(+1)
});

init()