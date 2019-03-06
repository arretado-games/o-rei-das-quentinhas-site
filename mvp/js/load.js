var loadState = {
    preload: function(){
        var txtLoading = game.add.text(game.world.centerX, 230,'Carregando...', {font: '20px tekton', fill: '#fff'});
            txtLoading.anchor.set(.5);
        var progressBar = game.add.sprite(game.world.centerX, 250, 'progressBar');
            progressBar.anchor.set(.5);

        game.load.setPreloadSprite(progressBar);

        game.load.crossOrigin = true;

        //images - telas - cozinha

        //images - telas - splash
        game.load.image('backgroundsplash0', 'img/telas/splash/0_background.png');
        game.load.image('backgroundsplash1', 'img/telas/splash/1_background.png');
        game.load.image('backgroundsplash2', 'img/telas/splash/2_background.png');
        game.load.image('logoSplash', 'img/telas/splash/logo.png');
        game.load.spritesheet('buttonJogar', 'img/telas/splash/button_jogar.png', 320, 96);
        
        //images - telas - load
        game.load.image('backgroundLoad', 'img/telas/splash/1_background.png');
        game.load.image('part', 'img/telas/load/part.png');

        //images - telas - mapa
        game.load.image('backgroundMap', 'img/telas/mapa/background.png');

        //images - telas - pdv

        //images - itens
        game.load.image('aipim', 'img/itens/aipim.png');
        game.load.image('alho', 'img/itens/alho.png');
        game.load.image('arroz', 'img/itens/arroz.png');
        game.load.image('azeite', 'img/itens/azeite.png');
        game.load.image('batata', 'img/itens/batata.png');
        game.load.image('camarao', 'img/itens/camarao.png');
        game.load.image('carne', 'img/itens/carne.png');
        game.load.image('cebola', 'img/itens/cebola.png');
        game.load.image('feijao', 'img/itens/feijao.png');
        game.load.image('frango', 'img/itens/frango.png');
        game.load.image('linguica', 'img/itens/linguica.png');
        game.load.image('macarrao', 'img/itens/macarrao.png');
        game.load.image('marmitexAberta', 'img/itens/marmitex_aberta.png');
        game.load.image('massaLasanha', 'img/itens/massa_lasanha.png');
        game.load.image('oleo', 'img/itens/oleo.png');
        game.load.image('ovo', 'img/itens/ovo.png');
        game.load.image('peixe', 'img/itens/peixe.png');
        game.load.image('presunto', 'img/itens/presunto.png');
        game.load.image('queijo', 'img/itens/queijo.png');
        game.load.image('marmitexFechada', 'img/itens/marmitex_fechada.png');
        game.load.image('marmitexFechadaAmarelada', 'img/itens/marmitex_fechada_amarelada.png');
        game.load.image('quiabo', 'img/itens/quiabo.png');
        game.load.image('tomate', 'img/itens/tomate.png');
        
        //images - personagens - cozinha
        game.load.image('loira', 'img/personagens/cozinha/chef_1.png');
        game.load.image('gordo', 'img/personagens/cozinha/chef_2.png');
        game.load.image('banhuda', 'img/personagens/cozinha/chef_3.png');

        //images - personagens - entregadores
        game.load.image('estiloso', 'img/personagens/entregadores/ent_1.png');
        game.load.image('marrento', 'img/personagens/entregadores/ent_2.png');
        game.load.image('psico', 'img/personagens/entregadores/ent_3.png');

        //images - personagens - outros
        game.load.image('estiloso', 'img/personagens/outros/rei.png');
        game.load.image('senhorAuxilio', 'img/personagens/outros/senhor_auxilio.png');

        //sprite - mouse
        game.load.spritesheet('mouse', 'img/mouse.png', 32, 32);

        //sprite - personagens - clientes
        game.load.spritesheet('louco', 'img/personagens/cli_1.png', 32, 32);
        game.load.spritesheet('executivo', 'img/personagens/cli_2.png', 32, 32);
        game.load.spritesheet('adolecente', 'img/personagens/cli_3.png', 32, 32);
        game.load.spritesheet('vovo', 'img/personagens/cli_4.png', 32, 32);
        game.load.spritesheet('esquisito', 'img/personagens/cli_5.png', 32, 32);
        game.load.spritesheet('negao', 'img/personagens/cli_6.png', 32, 32);
        game.load.spritesheet('negona', 'img/personagens/cli_7.png', 32, 32);
        game.load.spritesheet('narigudo', 'img/personagens/cli_8.png', 32, 32);

        //audio - efeitos
        game.load.audio('atingiuMeta', 'sfx/efeitos/atingiu_meta.wav');
        game.load.audio('btnMenu', 'sfx/efeitos/botao_menu.wav');
        game.load.audio('cliente', 'sfx/efeitos/cliente.mp3');
        game.load.audio('dinheiro', 'sfx/efeitos/dinheiro.mp3');
        game.load.audio('errarCombinacao', 'sfx/efeitos/errar_combinacao.mp3');
        game.load.audio('fimDia', 'sfx/efeitos/fim_dia.mp3');
        game.load.audio('ingredientesMesaPreparo', 'sfx/efeitos/ingredientes_mesa_preparo.mp3');
        game.load.audio('lixeira', 'sfx/efeitos/lixeira.wav');
        game.load.audio('receitaNova', 'sfx/efeitos/receita_nova.wav');
        game.load.audio('selecaoItemMenu', 'sfx/efeitos/selecao_item_menu.wav');

        //audio - trilha
        game.load.audio('geral', 'sfx/trilha/geral.mp3');
    },

    create: function() {
        game.state.start('splash');
    }
};