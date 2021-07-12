function done() {
    return bird.checkEdges()
}

function playGame() {
    background(130);
    noStroke();
    bird.show();
    bird.update();

    let hit = false;
    let thit = false;
    lastFrame = frameCount;
    
    for(let p of pipes){
        p.show();
        p.update();
        if(p.x <= bird.x && p.state){
            score += 0.5;
            p.state = false;
        }
        thit = collideRectCircle(p.x, p.y, p.w, p.h, bird.x, bird.y, bird.r)
        if(thit == true){
            hit = thit;
        }
    }

    if (frameCount % (width / 2) == 0) {
        newPipe(pipes, 125)
        if (frameCount > width) {
            pipes.shift()
            pipes.shift()
        }
    }
    if (frameCount <= width) {
        push();
        textAlign(CENTER, CENTER);
        fill(0);
        text('Press any key or click/tap to jump', width / 2, height - 20);
        pop();
    }
    if (hit) {
        c = true;
    }
    push();
    textAlign(CENTER, CENTER);
    fill(0);
    text(`Score : ${score} `, width / 2, 20);
    pop();
}

function endGame() {
    background(255 / 1, 255 / 3, 0, 50);
    c = false;
    let txtsize = 30;
    fill(255, 0, 0)
    textAlign(CENTER, CENTER);
    textSize(txtsize*2);
    text('GAME OVER', width/2, height/3);
    textSize(txtsize);
    translate(width / 2, height / 3*2);
    text('Press R* to restart \n or Reload', 0, 0);
    textSize(txtsize / 2);
    text("*Case doesn't matter", 0, txtsize * 1.5)
    noLoop();
}

function newPipe(arr, space) {
    let h1 = int(random(height - space));
    let y2 = int(h1 + space);
    let h2 = int(height - y2);

    arr.push(new Pipe(width, 0, h1))
    arr.push(new Pipe(width, y2, h2))
}
