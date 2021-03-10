import Phaser from 'phaser';
import image0 from '../assests/sprBg0.png';
import playHover from '../assests/sprBtnPlayHover.png';
import playDown from '../assests/sprBtnPlayDown.png';
import restart from '../assests/sprBtnRestart.png';
import restartHover from '../assests/sprBtnRestartHover.png';
import restartDown from '../assests/sprBtnRestartDown.png';
import soundOver from '../assests/sndBtnOver.wav';
import soundDown from '../assests/sndBtnDown.wav';

export class SceneMainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "SceneMainMenu" });
    }

    preload() {
        this.load.image("sprBtnPlay", image0);
        this.load.image("sprBtnPlayHover", playHover);
        this.load.image("sprBtnPlayDown", playDown);
        this.load.image("sprBtnRestart", restart);
        this.load.image("sprBtnRestartHover", restartHover);
        this.load.image("sprBtnRestartDown", restartDown);

        this.load.audio("sndBtnOver", soundOver);
        this.load.audio("sndBtnDown", soundDown);
    }

    create() {
        this.scene.start("SceneMain");
    }
}
