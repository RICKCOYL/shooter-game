import Phaser from 'phaser';
import image0 from '../images/sprBg0.png';
import image1 from '../images/sprBg1.png';
import explosions from '../images/sprExplosion.png';
import enemy0 from '../images/sprEnemy0.png';
import enemy1 from '../images/sprEnemy1.png';
import enemy2 from '../images/sprEnemy2.png';
import enemyLaser0 from '../images/sprLaserEnemy0.png';
import playerLaser from '../images/sprLaserPlayer.png';
import player from '../images/sprPlayer.png';
import explodeEffect0 from '../audio/sndExplode0.wav';
import explodeEffect1 from '../audio/sndExplode1.wav';
import laserSound from '../audio/sndLaser.wav';
import { Player, GunShip, CarrierShip, ChaserShip } from './Entities';




export default class SceneMain extends Phaser.Scene {
    constructor() {
        super({ key: "SceneMain" });
    }
    preload() {
        this.load.image("sprBg0", image0);
        this.load.image("sprBg1", image1);
        this.load.spritesheet("sprExplosion", explosions, {
            frameWidth: 32,
            frameHeight: 32
        });

        this.load.spritesheet("sprEnemy0", enemy0, {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.image("sprEnemy1", enemy1);
        this.load.spritesheet("sprEnemy2", enemy2, {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.image("sprLaserEnemy0", enemyLaser0);
        this.load.image("sprLaserPlayer", playerLaser);
        this.load.spritesheet("sprPlayer", player, {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.audio("sndExplode0", explodeEffect0);
        this.load.audio("sndExplode1", explodeEffect1);
        this.load.audio("sndLaser", laserSound);
    }

    create() {
        this.anims.create({
            key: "sprEnemy0",
            frames: this.anims.generateFrameNumbers("sprEnemy0"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "sprEnemy2",
            frames: this.anims.generateFrameNumbers("sprEnemy2"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "sprExplosion",
            frames: this.anims.generateFrameNumbers("sprExplosion"),
            frameRate: 20,
            repeat: 0
        });

        this.anims.create({
            key: "sprPlayer",
            frames: this.anims.generateFrameNumbers("sprPlayer"),
            frameRate: 20,
            repeat: -1
        });

        this.sfx = {
            explosions: [
                this.sound.add("sndExplode0"),
                this.sound.add("sndExplode1")
            ],
            laser: this.sound.add("sndLaser")
        };

        this.player = new Player(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            "sprPlayer"
        );

        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.enemies = this.add.group();
        this.enemyLasers = this.add.group();
        this.playerLasers = this.add.group();



        this.time.addEvent({
            delay: 1000,
            callback: function () {
                var enemy = null;

                if (Phaser.Math.Between(0, 10) >= 3) {
                    enemy = new GunShip(
                        this,
                        Phaser.Math.Between(0, this.game.config.width),
                        0
                    );
                }
                else if (Phaser.Math.Between(0, 10) >= 5) {
                    if (this.getEnemiesByType("ChaserShip").length < 5) {

                        enemy = new ChaserShip(
                            this,
                            Phaser.Math.Between(0, this.game.config.width),
                            0
                        );
                    }
                }
                else {
                    enemy = new CarrierShip(
                        this,
                        Phaser.Math.Between(0, this.game.config.width),
                        0
                    );
                }

                if (enemy !== null) {
                    enemy.setScale(Phaser.Math.Between(10, 20) * 0.1);
                    this.enemies.add(enemy);
                }
            },
            callbackScope: this,
            loop: true
        });

    }

    update() {
        this.player.update();

        if (this.keyW.isDown) {
            this.player.moveUp();
        }
        else if (this.keyS.isDown) {
            this.player.moveDown();
        }

        if (this.keyA.isDown) {
            this.player.moveLeft();
        }
        else if (this.keyD.isDown) {
            this.player.moveRight();
        }

        for (var i = 0; i < this.enemies.getChildren().length; i++) {
            var enemy = this.enemies.getChildren()[i];

            enemy.update();
        }
    }
};