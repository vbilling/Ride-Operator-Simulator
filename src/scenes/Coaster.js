//const { Phaser } = require("../../lib/phaser");

class Coaster extends Phaser.Scene{
    constructor(){
        super("coasterScene");
    }
    preload(){
        this.load.image('coaster background', "./assets/coaster_sky.png");
        this.load.image('ball', "./assets/ball.png");
        this.load.image('coaster platform', "./assets/coaster_platform.png");


    }
    create(){
        this.add.image(0, 0, 'coaster background').setOrigin(0,0);

        path = { t: 0, vec: new Phaser.Math.Vector2() };

        points = [];

        //the coordinates for all the points of the curve
        points.push(new Phaser.Math.Vector2(0, 200));
        points.push(new Phaser.Math.Vector2(50, 230));
        points.push(new Phaser.Math.Vector2(200, 400));
        points.push(new Phaser.Math.Vector2(450, 150));
        points.push(new Phaser.Math.Vector2(670, 500));
        points.push(new Phaser.Math.Vector2(1000, 530));

        //var platforms = this.physics.add.staticGroup();
        curve = new Phaser.Curves.Spline(points)


        //will draw the line of the track
        graphics = this.add.graphics();
        graphics.clear();
        graphics.lineStyle(1, 0xffffff, 1); 
        curve.draw(graphics, 64);
        graphics.fillStyle(0x00ff00, 1);
        this.tracks = this.physics.add.existing(graphics);
        this.tracks.body.setImmovable(true);
        this.tracks.body.allowGravity = false;
        
    
        this.tweens.add({
            targets: path,
            t: 1,
            ease: 'Sine.easeInOut',
            duration: 4000,
            //unsure if this is doing anything rn
            //timeScale: 2,
            //if the object goes back and forth on path
            yoyo: false,
            repeat: -1
        });


        this.ball = this.physics.add.image(50, 50, 'ball');



        console.log('tracks:', this.tracks);

        //this.physics.add.collider(this.ball.body, this.tracks.body);



    }
    update(){

        //all from making the path
        graphics.clear();

    
        //just draws the line where the curve is
        curve.draw(graphics, 64); 


    
        //displays the cureve points
        //for (var i = 0; i < points.length; i++)
        //{
            //graphics.fillCircle(points[i].x, points[i].y, 8);
        //}
    
        curve.getPoint(path.t, path.vec); //curve.getPoint
    
        graphics.fillStyle(0xff0000, 1);
        graphics.fillCircle(path.vec.x, path.vec.y - 10, 8);
        //graphics.fillCircle(this.car1.x - 20, path.vec.y - 10, 8);

        //arcade physics with the ball
        //if(this.ball.body.touching.down){
            //console.log('true');
            //this.ball.body.allowGravity = false;
        //};





    }

};