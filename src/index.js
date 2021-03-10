import Phaser from 'phaser';
import { SceneMainMenu } from './components/SceneMainMenu';
import { SceneMain } from './components/SceneMain';
import { SceneGameOver } from './components/SceneGameOver';

const config = {
    type: Phaser.AUTO,
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