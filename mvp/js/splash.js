var splashState = {
    create: function(){
        var audio = game.add.audio('geral');
        var bg1 = game.add.sprite(0,0, 'backgroundsplash0');
        var bg2 = game.add.sprite(0,0, 'backgroundsplash1');
        var bg3 = game.add.sprite(0,0, 'backgroundsplash2');
        var logo = game.add.sprite(game.world.centerX, 220, 'logoSplash').anchor.set(.5);
        var buttonJogar = game.add.button(game.world.centerX, 420, 'buttonJogar', initGame, this, 1, 0, 2).anchor.set(.5);
        audio.play();
        if(!this.game.device.desktop){
            this.game.scale.forceOrientation(false,true,'cartelLandscape');
        } else {
            bg1.x = 0;
            bg1.y = 0;
            bg1.height = game.height;
            bg1.width = game.width;
    
            bg2.x = 0;
            bg2.y = 0;
            bg2.height = game.height;
            bg2.width = game.width;
    
            bg3.x = 0;
            bg3.y = 0;
            bg3.height = game.height;
            bg3.width = game.width;
        }

        function initGame(){
            game.state.start('map');
        }

    }
};