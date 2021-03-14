import Phaser from 'phaser';
import sndBtnOver from '../assests/sndBtnOver.wav';
import restart from '../assests/sprBtnRestart.png';
import soundDown from '../assests/sndBtnDown.wav';
import restartHover from '../assests/sprBtnRestartHover.png';


export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  preload() {
    this.load.image('sprBtnRestart', restart);
    this.load.image('sprBtnRestartHover', restartHover);
    this.load.audio('sndBtnOver', sndBtnOver);
    this.load.audio('sndBtnDown', soundDown);
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: 'red',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnRestart',
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on('pointerover', function () {
      this.btnRestart.setTexture('sprBtnRestartHover');
      this.sfx.btnOver.play();
    }, this);

    this.btnRestart.on('pointerout', function () {
      this.setTexture('sprBtnRestart');
    });

    this.btnRestart.on('pointerdown', function () {
      this.btnRestart.setTexture('sprBtnRestartDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnRestart.on('pointerup', function () {
      this.btnRestart.setTexture('sprBtnRestart');
      this.scene.start('SceneMain');
    }, this);

    // this.backgrounds = [];
    // for (let i = 0; i < 5; i++) {
    //    let keys = ["sprBg0", "sprBg1"];
    //    let key = keys[Phaser.Math.Between(0, keys.length - 1)];
    //    let bg = new ScrollingBackground(this, key, i * 10);
    //    this.backgrounds.push(bg);
    // }
  }

  update() {
    // for (let i = 0; i < this.backgrounds.length; i++) {
    //    this.backgrounds[i].update();
    // }
  }
}