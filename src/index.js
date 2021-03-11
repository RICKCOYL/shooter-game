import Phaser from 'phaser';
import { SceneMainMenu } from './components/SceneMainMenu';
import { SceneMain } from './components/SceneMain';
import { SceneGameOver } from './components/SceneGameOver';
import BootScene from './components/bootsscene';
import Preloaderscene from './components/preloaderscene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "black",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 0 }
        }
    },
    scene: [
        BootScene,
        Preloaderscene,
        SceneMainMenu,
        SceneMain,
        SceneGameOver
    ],
    pixelArt: true,
    roundPixels: true
};

const game = new Phaser.Game(config);