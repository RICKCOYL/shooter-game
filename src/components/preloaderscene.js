import Phaser from 'phaser';
import explosions from '../assests/sprExplosion.png';
import enemy0 from '../assests/sprEnemy0.png';
import enemy1 from '../assests/sprEnemy1.png';
import enemy2 from '../assests/sprEnemy2.png';
import enemyLaser0 from '../assests/sprLaserEnemy0.png';
import playerLaser from '../assests/sprLaserPlayer.png';
import player from '../assests/sprPlayer.png';
import explodeEffect0 from '../assests/sndExplode0.wav';
import explodeEffect1 from '../assests/sndExplode1.wav';
import laserSound from '../assests/sndLaser.wav';
import image0 from '../assests/sprBg0.png';
import image1 from '../assests/sprBg1.png';
import play from '../assests/sprBtnPlay.png';
import playHover from '../assests/sprBtnPlayHover.png';
import playDown from '../assests/sprBtnPlayDown.png';
import restart from '../assests/sprBtnRestart.png';
import restartHover from '../assests/sprBtnRestartHover.png';
import restartDown from '../assests/sprBtnRestartDown.png';
import button1 from '../assests/blue_button02.png';
import button2 from '../assests/blue_button03.png';
import soundOver from '../assests/sndBtnOver.wav';
import soundDown from '../assests/sndBtnDown.wav';

export default class preloaderScene extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    preload() {

        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        this.load.image('explosions', explosions);

        this.load.image('enemy0', enemy0);
        this.load.image('enemy1', enemy1);
        this.load.image('enemyLaser0', enemyLaser0);
        this.load.image('player', player);

        this.load.image('enemy2', enemy2);
        this.load.image('playerLaser', playerLaser);

        this.load.image('explodeEffect0', explodeEffect0);
        this.load.image('explodeEffect1', explodeEffect1);
        this.load.image('laserSound', laserSound);
        this.load.image('image0', image0);
        this.load.image('image1', image1);
        this.load.image('play', play);
        this.load.image('playHover', playHover);
        this.load.image('playDown', playDown);
        this.load.image('restart', restart);
        this.load.image('restartHover', restartHover);
        this.load.image('restartDown', restartDown);

        this.load.audio('soundOver', soundOver);
        this.load.audio('soundDown', soundDown);
        this.load.audio('explosions', explosions);

        this.load.image('button1', button1);
        this.load.image('button2', button2);

        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();

        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);


        const loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff',
            },
        });
        loadingText.setOrigin(0.5, 0.5);

        const percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff',
            },
        });
        percentText.setOrigin(0.5, 0.5);

        const assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff',
            },
        });
        assetText.setOrigin(0.5, 0.5);

        this.load.on('progress', (value) => {
            percentText.setText(`${parseInt(value * 100, 10)}%`);
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });

        this.load.on('fileprogress', (file) => {
            assetText.setText(`Loading asset: ${file.key}`);
        });

        this.load.on('complete', () => {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            this.ready();
        });

        this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
    }

    init() {
        this.readyCount = 0;
    }

    ready() {
        this.readyCount += 1;
        if (this.readyCount === 2) {
            this.scene.start('SceneMain');
        }

    }
}