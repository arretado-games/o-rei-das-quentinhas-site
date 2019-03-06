var mapState = {
    create: function(){
        var bg = game.add.sprite(0,0, 'backgroundMap');
        // var buttonMenu = game.make.button(game.world.centerX - 150, 420, 'buttonMenu', openMenu, this, 0, 1, 0);
    
        if(!this.game.device.desktop){
            this.game.scale.forceOrientation(false,true,'cartelLandscape');
        } else {
            bg.x = 0;
            bg.y = 0;
            bg.height = game.height;
            bg.width = game.width;
        }
    }
};