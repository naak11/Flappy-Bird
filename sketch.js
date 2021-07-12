let bird;
let lastFrame = 0;
let pipes = [];
let c = false;
let score = 0;
function setup() {
    createCanvas(400, 600)
    bird = new Bird(20)
}

function draw() {
    if ((done() || c) && lastFrame == frameCount - 30) {
        endGame();
    } else if (!bird.checkEdges() && !c) {
        playGame();
    }
}


function keyPressed() {
    bird.jump();
    if(key == 'r' || key == "R"){
        window.location.reload()
    }
}

function mousePressed() {
    bird.jump();
}
