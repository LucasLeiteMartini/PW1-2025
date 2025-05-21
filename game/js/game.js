import {FPS} from "./config.js";
import {space} from "./space.js";
import {ship} from "./ship.js";
import {createEnemyShip, enemyShips, moveEnemyShip} from "./enemyShip.js";
import {createShot, moveShot, shots} from "./shipLaser.js";

//Vairáveis para controle de ações
let leftPressed = false;
let rightPressed = false;
let shotPressed = false;

//Variáveis para controle de pause
let isPaused = false;
let gameRunning = false
let gameState

//Variável para controle de velocidade
let speed = 2

// Variável para controle de cadência de tiro
let shotCooldown = 0

/**
 * Função chamada para começar o jogo.
 * Guarda o retorno de setInterval para que seja possível manejar o pausar/despausar do jogo
 */
function init(){
    gameState = setInterval(run, FPS)
}

/** Função chamada quando o jogo é pausado. */
function pause(){
    clearInterval(gameState);
}

/** Chamada dentro de init, é responsável por manter as animações de movimento não controladas pelo jogador.
 * Responsável também por chamar outras funções como checkCollision e checkOutOfBounds
 */
function run(){
    space.move()
    createEnemyShip(Math.floor(Math.random() * 3) + 1)
    moveEnemyShip();
    moveShot()
    checkOutOfBounds()
}

// Responsável por iniciar o jogo
function start(e){
    if(e.key === " " && !gameRunning){
        gameRunning = true
        init()
        document.getElementById("menu").style.display = "none"
        window.removeEventListener('keyup', start)
    }
}

window.addEventListener('keyup', start)


// Responsável por alternar movimento/tiro da nave
window.addEventListener("keydown", (e)=>{
    if(e.key === "ArrowRight") rightPressed = true
    if(e.key === "ArrowLeft") leftPressed = true
    if(e.key === " ") shotPressed = true
});

// Responsável por alternar movimento/tiro da nave
window.addEventListener("keyup", (e)=>{
    if(e.key === "ArrowRight") rightPressed = false
    if(e.key === "ArrowLeft") leftPressed = false
    if(e.key === " ") shotPressed = false
})


// Responsável por alternar movimento/tiro da nave
setInterval(()=>{
    if(rightPressed && gameRunning && !isPaused) {
        ship.changeDirection(1)
    }else if(leftPressed && gameRunning && !isPaused) {
        ship.changeDirection(-1)
    }else{
        ship.direction = 1
    }
    ship.move()

    if(shotPressed && gameRunning && !isPaused) {
        shotCooldown++
        if(shotCooldown % 15 === 0) {
            createShot()
        }
    }

}, FPS)

// Pausa e despausa o game, fazendo toggle do menu
window.addEventListener("keypress", (e)=>{
    if(e.key === "p" && isPaused && gameRunning) {
        isPaused = false
        document.getElementById("menu").style.display = "none";
        init()
    }else if(e.key === "p" && !isPaused && gameRunning) {
        isPaused = true
        document.getElementById("menu").style.display = "block";
        pause()
    }
})


function checkCollision(obj1, obj2) {

}

function checkOutOfBounds(){
    shots.forEach((shot,shotIndex) => {
        if(parseInt(shot.element.style.bottom) > 900){
            shot.element.remove()
            shots.splice(shotIndex,1);
        }
    })

    enemyShips.forEach((enemyShip, enemyShipIndex)=>{
        if(parseInt(enemyShip.element.style.top) > 900){
            enemyShip.element.remove()
            enemyShips.splice(enemyShipIndex, 1)
        }
    })
}