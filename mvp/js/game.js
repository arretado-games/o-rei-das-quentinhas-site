var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO);

    game.state.add('boot', bootState);
    game.state.add('load', loadState);
    game.state.add('splash', splashState);
    game.state.add('map', mapState);
    game.state.add('kitchen', kitchenState);
    game.state.add('pdv', pdvState);
    game.state.add('end', endState);  

    game.state.start('boot');