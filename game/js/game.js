import {enemyProbability, FPS, points, speed, TAM_Y} from "./config.js";
import {space} from "./space.js";
import {ship} from "./ship.js";
import {createEnemyShip, enemyShips, moveEnemyShip} from "./enemyShip.js";
import {createShot, moveShot, shots} from "./shipLaser.js";
import {createSmallMeteor, moveSmallMeteor, smallMeteors} from "./smallMeteor.js";
import {bigMeteors, createBigMeteor, moveBigMeteor} from "./bigMeteor.js";
import {createEnemyUfo, enemyUfos, moveEnemyUfo} from "./ufo.js";

const pontuacao = document.getElementById("pontuacao");
const vidas = document.getElementsByClassName("vidas")



//Variáveis para controle de ações
let leftPressed = false;
let rightPressed = false;
let shotPressed = false;

//Variáveis para controle de pause
let isPaused = false;
let gameRunning = false
let gameState

// Variável para controle de cadência de tiro
let shotCooldown = 0

// Variáveis para vida e pontuação
let pointsCounter = 0;
let lifeCounter = 0;


let spdGrowth = 0.2
let spdMultiplier = 1;
let minSpd = 1
let maxSpd = 3;
let media = Math.floor((minSpd + maxSpd)/2)

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
    createEnemyShip(getRandomSpd(speed.enemyShip.min, speed.enemyShip.max))
    createSmallMeteor(getRandomSpd(speed.smallMeteor.min, speed.smallMeteor.max))
    createBigMeteor(getRandomSpd(speed.bigMeteor.min, speed.bigMeteor.max))
    createEnemyUfo(getRandomSpd(speed.ufo.min, speed.ufo.max))
    moveEnemyShip()
    moveSmallMeteor()
    moveBigMeteor()
    moveEnemyUfo()
    moveShot()
    checkOutOfBounds()
    bigMeteorCollision()
    ufoCollision()
    enemyShipCollision()
    smallMeteorCollision()
    shipCollision()

    if(lifeCounter > 3){
        pause()
        gameRunning = false
    }
}

setInterval(()=>{
    spdMultiplier += spdMultiplier * spdGrowth
    alert("speed aumentou")
}, 60000)

function getRandomSpd(minSpd, maxSpd){
    const spd = Math.random() * (maxSpd - minSpd) + minSpd;
    console.log(spd*spdMultiplier)
    return spd * spdMultiplier
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


function enemyShipCollision(){
    shots.forEach((shot,shotIndex)=>{
        enemyShips.forEach((enemyShip, enemyShipIndex)=>{
            if(checkCollision(shot, enemyShip)){
                shot.element.remove()
                enemyShip.element.remove()

                pointsCounter += points.enemyShip

                pontuacao.innerHTML = pointsCounter.toString().padStart(6,'0')
                shots.splice(shotIndex,1)
                enemyShips.splice(enemyShipIndex, 1)
            }
        })
    })
}

function ufoCollision(){
    shots.forEach((shot,shotIndex)=>{
        enemyUfos.forEach((ufo, ufoIndex)=>{
            if(checkCollision(shot, ufo)){
                shot.element.remove()
                ufo.element.remove()

                pointsCounter += points.ufo

                pontuacao.innerHTML = pointsCounter.toString().padStart(6,'0')
                shots.splice(shotIndex, 1)
                enemyUfos.splice(ufoIndex, 1)
            }
        })
    })
}

function bigMeteorCollision() {
    shots.forEach((shot,shotIndex)=>{
        bigMeteors.forEach((big, bigIndex)=>{
            if(checkCollision(shot, big)){
                shot.element.remove()
                big.element.remove()

                pointsCounter += points.bigMeteor

                pontuacao.innerHTML = pointsCounter.toString().padStart(6,'0')
                shots.splice(shotIndex,1)
                bigMeteors.splice(bigIndex, 1)
            }
        })
    })
}

function smallMeteorCollision() {
    shots.forEach((shot,shotIndex)=>{
        smallMeteors.forEach((small,smallIndex)=>{
            if(checkCollision(shot, small)){
                shot.element.remove()
                small.element.remove()

                pointsCounter += points.smallMeteor

                pontuacao.innerHTML = pointsCounter.toString().padStart(6,'0')
                shots.splice(shotIndex,1)
                smallMeteors.splice(smallIndex,1)
            }
        })
    })
}


function shipCollision(){
    enemyShips.forEach((enemyShip, enemyShipIndex) =>{
        if(checkCollision(enemyShip, ship)){
            enemyShip.element.remove()
            enemyShips.splice(enemyShipIndex,1)
            ship.isDamaged = true
            lifeCounter++

            for(let i = 0; i < lifeCounter; i++){
                vidas[i].style.display = "none"
            }

            setTimeout(()=>{
                ship.isDamaged = false
            }, 5000)
        }
    })
    bigMeteors.forEach((big,bigIndex)=>{
        if(checkCollision(big, ship)){
            big.element.remove()
            bigMeteors.splice(bigIndex,1)
            ship.isDamaged = true
            lifeCounter++

            for(let i = 0; i < lifeCounter; i++){
                vidas[i].style.display = "none"
            }

            setTimeout(()=>{
                ship.isDamaged = false
            }, 5000)
        }
    })

    enemyUfos.forEach((ufo, ufoIndex)=>{
        if(checkCollision(ufo, ship)){
            ufo.element.remove()
            enemyUfos.splice(ufoIndex,1)
            ship.isDamaged = true
            lifeCounter++

            for(let i = 0; i < lifeCounter; i++){
                vidas[i].style.display = "none"
            }
            setTimeout(()=>{
                ship.isDamaged = false
            }, 5000)
        }
    })

    smallMeteors.forEach((small,smallIndex)=>{
        if(checkCollision(small, ship)){
            small.element.remove()
            smallMeteors.splice(smallIndex,1)
            ship.isDamaged = true
            lifeCounter++

            for(let i = 0; i < lifeCounter; i++){
                vidas[i].style.display = "none"
            }
            setTimeout(()=>{
                ship.isDamaged = false
            }, 5000)
        }
    })
}

function checkCollision(obj1, obj2) {
    let rect1 = obj1.element.getBoundingClientRect();
    let rect2 = obj2.element.getBoundingClientRect();

    return (rect1.right > rect2.left &&
            rect1.left < rect2.right &&
            rect1.bottom > rect2.top &&
            rect1.top < rect2.bottom)

}

function checkOutOfBounds(){
    shots.forEach((shot,shotIndex) => {
        if(parseInt(shot.element.style.bottom) > TAM_Y){
            shot.element.remove()
            shots.splice(shotIndex,1);
        }
    })

    enemyShips.forEach((enemy, enemyShipIndex)=>{
        if(parseInt(enemy.element.style.top) > TAM_Y){
            enemy.element.remove()
            enemyShips.splice(enemyShipIndex, 1)
        }
    })

    bigMeteors.forEach((big,bigIndex) => {
        if(parseInt(big.element.style.top) > TAM_Y){
            big.element.remove()
            bigMeteors.splice(bigIndex,1)
        }
    })

    enemyUfos.forEach((ufo, ufoIndex) => {
        if(parseInt(ufo.element.style.top) > TAM_Y){
            ufo.element.remove()
            enemyUfos.splice(ufoIndex,1)
        }
    })

    smallMeteors.forEach((small,smallIndex)=>{
        if(parseInt(small.element.style.top) > TAM_Y){
            small.element.remove()
            smallMeteors.splice(smallIndex,1)
        }
    })
}

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
        if(shotCooldown % 1 === 0) {
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
        document.getElementById("menu").style.display = "table";
        pause()
    }
})

window.addEventListener('keypress', (e)=>{
    if(e.key === "r") window.location.reload()
})
