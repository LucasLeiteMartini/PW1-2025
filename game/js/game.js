import {FPS} from "./config.js";
import {space} from "./space.js";
import {ship} from "./ship.js";
import {createEnemyShip, moveEnemyShip} from "./enemyShip.js";
import {createShot, moveShot} from "./shipLaser.js";

//Vairáveis para controle de movimento
let leftPressed = false;
let rightPressed = false;

//Variáveis para controle de pause
let isPaused = false;
let gameRunning = false
let gameState

//Variável para controle de nível
let level = 1

function init(){
    gameState = setInterval(run, FPS)
}

function pause(){
    clearInterval(gameState);
}

function run(){
    space.move()
    createEnemyShip()
    moveEnemyShip(15)
    moveShot()
}

// Responsável por iniciar o jogo
window.addEventListener("keyup", (e)=>{
    if(e.key === " " && !gameRunning) {
        gameRunning = true
        init()
        document.getElementById("menu").style.display = "none"; //Oculta o menu inicial do jogo.
    }
})



// Responsável pela animação de movimento da nave
window.addEventListener("keydown", (e)=>{
    if(e.key === "ArrowRight") rightPressed = true
    if(e.key === "ArrowLeft") leftPressed = true
});

// Responsável pela animação de movimento da nave
window.addEventListener("keyup", (e)=>{
    if(e.key === "ArrowRight") rightPressed = false
    if(e.key === "ArrowLeft") leftPressed = false
})


// Responsável pela animação de movimento da nave
setInterval(()=>{
    if(rightPressed && gameRunning && !isPaused) {
        ship.changeDirection(1)
    }else if(leftPressed && gameRunning && !isPaused) {
        ship.changeDirection(-1)
    }else{
        ship.direction = 1
    }
    ship.move()

}, 5)

// Pausa e despausa o game, fazendo toggle do menu
window.addEventListener("keypress", (e)=>{
    if(e.key === "p" && isPaused){
        isPaused = false
        document.getElementById("menu").style.display = "none";
        init()
    }else if(e.key === "p" && !isPaused){
        isPaused = true
        document.getElementById("menu").style.display = "block";
        pause()
    }
})
