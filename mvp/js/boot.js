var bootState = {
    preload: function() {
        game.load.image('progressBar', 'img/telas/load/progressBar.png')
    }, 

    create: function() {
        game.state.start('load')
    }
};