import Phaser from 'phaser';
import image0 from '../assests/sprBg0.png';
import image1 from '../assests/sprBg1.png';
import play from '../assests/sprBtnPlay.png';
import playHover from '../assests/sprBtnPlayHover.png';
import playDown from '../assests/sprBtnPlayDown.png';
import restart from '../assests/sprBtnRestart.png';
import restartHover from '../assests/sprBtnRestartHover.png';
import restartDown from '../assests/sprBtnRestartDown.png';
import soundOver from '../assests/sndBtnOver.wav';
import soundDown from '../assests/sndBtnDown.wav';
import { ScrollingBackground } from './Entities';


export class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  preload() {
    this.load.image('sprBg0', image0);
    this.load.image('sprBg1', image1);
    this.load.image('sprBtnPlay', play);
    this.load.image('sprBtnPlayHover', playHover);
    this.load.image('sprBtnPlayDown', playDown);
    this.load.image('sprBtnRestart', restart);
    this.load.image('sprBtnRestartHover', restartHover);
    this.load.image('sprBtnRestartDown', restartDown);
    this.load.audio('sndBtnOver', soundOver);
    this.load.audio('sndBtnDown', soundDown);
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnPlay',
    );

    this.btnPlay.setInteractive();

    this.btnPlay.on('pointerover', function () {
      this.btnPlay.setTexture('sprBtnPlayHover'); // set the button texture to sprBtnPlayHover
      this.sfx.btnOver.play(); // play the button over sound
    }, this);

    this.btnPlay.on('pointerout', function () {
      this.setTexture('sprBtnPlay');
    });

    this.btnPlay.on('pointerdown', function () {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnPlay.on('pointerup', function () {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('SceneMain');
    }, this);

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'SPACE WAR', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    // this.backgrounds = [];
    // for (var i = 0; i < 5; i++) {
    //    var keys = ["sprBg0", "sprBg1"];
    //    var key = keys[Phaser.Math.Between(0, keys.length - 1)];
    //    var bg = new ScrollingBackground(this, key, i * 10);
    //    this.backgrounds.push(bg);
    // }
  }

  update() {
    // for (var i = 0; i < this.backgrounds.length; i++) {
    //    this.backgrounds[i].update();
    // }
  }
}