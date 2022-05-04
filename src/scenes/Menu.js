class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    preload(){


    }
    create(){
        this.add.text(100, 100, "Ride Operator Simulator");


    }
    update(){
        this.scene.start("coasterScene");

    }

};