/* eslint-disable no-undef */
import SceneMainMenu from '../SceneMainMenu';

test('MenuScene is a subclass of Phaser.Scene', () => {
  expect(SceneMainMenu).toBeSubclassOf(Phaser.Scene);
});