import Phaser from 'phaser';
import SceneMainMenu from './assests/componets/SceneMainMenu';
import SceneMain from './assests/componets/SceneMain';
import SceneGameOver from './assests/componets/SceneGameOver';
import { Entity, Player } from './assests/componets/Entities';

const config = {
    type: Phaser.WEBGL,
    width: 480,
    height: 640,
    backgroundColor: "black",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 0 }
        }
    },
    scene: [
        SceneMainMenu,
        SceneMain,
        SceneGameOver
    ],
    pixelArt: true,
    roundPixels: true
};


const game = new Phaser.Game(config);
