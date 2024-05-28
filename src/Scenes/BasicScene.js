class BasicScene extends Phaser.Scene {

    constructor() {
        super("ExampleScene");
    }

    preload() {
        this.load.setPath('./assets/');

        this.load.image('player', 'jumper/PNG/Enemies/springMan_stand.png');
    }

    create() {
        //create the player sprite
        this.playerSprite = this.physics.add.sprite(30, 560, "player", "player");

        //default keys for player movement and shooting
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update() {


        if (this.aKey.isDown) { //Move the player left
            this.playerSprite.setAccelerationX(-100);
        } else if (this.dKey.isDown) { //Move the player right
            this.playerSprite.setAccelerationX(100);
        } else { //Stop the player when no keys are pressed
            this.playerSprite.setAccelerationX(0);
            this.playerSprite.setDragX(100);
        }

        if (this.wKey.isDown) { //Move the player up
            this.playerSprite.setAccelerationY(-100);
        } else if (this.sKey.isDown) { //Move the player down
            this.playerSprite.setAccelerationY(100);
        } else { //Stop the player when no keys are pressed
            this.playerSprite.setAccelerationY(0);
            this.playerSprite.setDragY(100);
        }

        //if the player goes off screen teleport them to the center
        if (this.playerSprite.x < 0 || this.playerSprite.x > 800 || this.playerSprite.y < 0 || this.playerSprite.y > 600) {
            this.playerSprite.x = 400;
            this.playerSprite.y = 300;
        }
    }
}