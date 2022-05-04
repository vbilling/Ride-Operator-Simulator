let config = {
    type: Phaser.CANVAS, 
    width: 960, 
    height: 720, 
    scene: [ Menu, Coaster], 
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: "arcade", 
        arcade: {
            gravity: {y: 100},
        },
    },
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// background around window
document.body.style.backgroundColor = "#ffb963";

// from this tutorial https://phaser.io/examples/v3/view/paths/curves/cubic-bezier-curve
var curve;
var path;
var points;
var graphics;