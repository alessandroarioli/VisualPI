let r = 200;
let totalDots = 0;
let circleDots = 0;
let recordPi;

function setup() {
    createCanvas(windowWidth, 600);
    background(0);
    translate(width / 2, height / 2);
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(0, 0, r * 2, r * 2);
    rectMode(CENTER);
    rect(0, 0, r * 2, r * 2);
    recordPi = 0;
}

function draw() {
    translate(width / 2, height / 2);

    let guessedPI;

    for (let i = 0; i < 100; i++) {
        let x = random(-r, r);
        let y = random(-r, r);

        totalDots ++;

        let d = x * x + y * y;

        if (d < r * r) {
            circleDots++;
            stroke(100, 255, 0);
        } else {
            stroke(255, 0, 0);
        }
        guessedPI = 4 * (circleDots / totalDots);
        point(x, y);
    }

    let bestGuess = Math.abs(Math.PI - recordPi);
    let diff = Math.abs(Math.PI - guessedPI);

    if (diff < bestGuess) {
        bestGuess = diff;
        recordPi = guessedPI;
        document.getElementById('pi').innerText = recordPi;
    }
    
}