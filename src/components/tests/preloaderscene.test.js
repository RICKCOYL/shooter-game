import preloaderScene from '../preloaderscene';

test('Preloader is a subclass of Phaser.Scene', () => {
    expect(preloaderScene).toBeSubclassOf(Phaser.Scene);
});