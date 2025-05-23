export const FPS = 1000 / 60
export const TAM_X = 600
export const TAM_Y = 900

const intervalMs = 100
const baseScale = 0.3

export const points = {
    bigMeteor: 10,
    ufo: 20,
    enemyShip: 50,
    smallMeteor: 100
}

export const enemyProbability = {
    bigMeteor: 0.0001,
    ufo: 0.005,
    enemyShip: 0.009,
    smallMeteor: 0.005,
}

export const speed = {
    bigMeteor: {min: 1, max: 3},
    ufo: {min: 2, max: 4},
    enemyShip: {min: 2.5, max: 4.5},
    smallMeteor: {min: 3, max: 5},
}