/* eslint-disable no-undef */
import SceneMain from '../SceneMain';

test('MainScene is a subclass of Phaser.Scene', () => {
  expect(SceneMain).toBeSubclassOf(Phaser.Scene);
});