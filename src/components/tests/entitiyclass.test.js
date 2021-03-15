/* eslint-disable no-undef */
import Entity from '../entities/entitiyclass';

test('Entity is a subclass of Phaser.GameObjects.Sprite', () => {
  expect(Entity).toBeSubclassOf(Phaser.GameObjects.Sprite);
});