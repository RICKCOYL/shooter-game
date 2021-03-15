import Phaser from 'phaser';
import SceneMainMenu from './components/SceneMainMenu';
import SceneMain from './components/SceneMain';
import SceneGameOver from './components/SceneGameOver';
import BootScene from './components/bootsscene';
import Preloaderscene from './components/preloaderscene';
import formStringElement from './components/form';
import state from './components/state';
import leaderboardScene from './components/leaderboard';
import './style.css';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    BootScene,
    Preloaderscene,
    SceneMainMenu,
    SceneMain,
    SceneGameOver,
    leaderboardScene,
  ],
  pixelArt: true,
  roundPixels: true,
};


document.body.innerHTML = formStringElement;

const { playerNameForm } = document;
playerNameForm.addEventListener('submit', e => {
  e.preventDefault();
  const playerName = e.target.elements['player-name'].value;
  state.user = playerName;
  document.body.innerHTML = '';
  setTimeout(() => {
    window.game = new Phaser.Game(config);
  }, 1000);
});