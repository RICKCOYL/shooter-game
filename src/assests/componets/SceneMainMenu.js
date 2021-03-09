import Phaser from 'phaser';
import image0 from '../images/sprBg0.png';
import playHover from '../images/sprBtnPlayHover.png';
import playDown from '../images/sprBtnPlayDown.png';
import restart from '../images/sprBtnRestart.png';
import restartHover from '../images/sprBtnRestartHover.png';
import restartDown from '../images/sprBtnRestartDown.png';
import soundOver from '../audio/sndBtnOver.wav';
import soundDown from '../audio/sndBtnDown.wav';



class SceneMainMenu extends Phaser.Scene {
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


export default SceneMainMenu;