(function(){
    angular.module("golfriendsApp").controller("GamesCtrl", ["gameResource", GamesCtrl]);

    function GamesCtrl(gameResource){
        var vm = this;
        vm.game = {game: ""};
        vm.games = gameResource.get();
        vm.submitGame = function(){
           gameResource.save(vm.game, function(ref){
               vm.games[ref.name] = vm.game;
               vm.game = {game: ""};
           });

        };

        vm.delete = function(gameId){
            //vm.games.splice(index, 1);
            gameResource.delete({id: gameId}, function(){
           delete vm.games[gameId];
            });
        };

//        gameResource.query(function(data){
//            vm.games = data;
//        });
    };
})();

