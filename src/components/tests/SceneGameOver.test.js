/* eslint-disable no-undef */
import SceneGameOver from '../SceneGameOver';

test('GameoverScene is a subclass of Phaser.Scene', () => {
  expect(SceneGameOver).toBeSubclassOf(Phaser.Scene);
});