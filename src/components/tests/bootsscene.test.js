import BootScene from '../bootsscene';


test('BootScene is a subclass of Phaser.Scene', () => {
    expect(BootScene).toBeSubclassOf(Phaser.Scene);
});