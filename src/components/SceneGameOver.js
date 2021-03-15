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

    this.btnRestart.on('pointerover', () => {
      this.btnRestart.setTexture('sprBtnRestartHover');
      this.sfx.btnOver.play();
    }, this);

    this.btnRestart.on('pointerout', () => {
      this.btnRestart.setTexture('sprBtnRestart');
    });

    this.btnRestart.on('pointerdown', () => {
      this.btnRestart.setTexture('sprBtnRestartDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnRestart.on('pointerup', () => {
      this.btnRestart.setTexture('sprBtnRestart');
      this.scene.start('SceneMain');
    }, this);

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
}