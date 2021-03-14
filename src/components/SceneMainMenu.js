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
      this.btnPlay.setTexture('sprBtnPlayHover');
      this.sfx.btnOver.play();
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
    // for (let i = 0; i < 5; i++) {
    //    let keys = ["sprBg0", "sprBg1"];
    //    let key = keys[Phaser.Math.Between(0, keys.length - 1)];
    //    let bg = new ScrollingBackground(this, key, i * 10);
    //    this.backgrounds.push(bg);
    // }




    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('button2');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('button1');
    });

    this.highButton = this.add.sprite(100, 200, 'button2').setInteractive();
    this.centerButton(this.highButton);

    this.highButtonText = this.add.text(0, 0, 'Scores', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.highButtonText, this.highButton);

    this.highButton.on('pointerdown', () => {
      this.scene.start('leaderboardScene');
    });
  }

  centerButton(gameObject, offset = 0) {
    const x = this.game.config.width / 6.5;
    const y = this.game.config.height / 7 - offset * 100;
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(x, y, this.game.config.width, this.game.config.height),
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
    return this;
  }

  update() {
    // for (let i = 0; i < this.backgrounds.length; i++) {
    //    this.backgrounds[i].update();
    // }
  }
}