(function(){
    angular.module("golfriendsApp").controller("GamesCtrl", ["gameResource", GamesCtrl]);

    function GamesCtrl(gameResource){
        var vm = this;

        vm.game = {game: ""};
        vm.submitGame = function(){
            vm.games.push(vm.game)
            vm.game = {game: ""};
        };

        vm.delete = function(index){
            vm.games.splice(index, 1);
        };

        gameResource.query(function(data){
            vm.games = data;
        });
    };
})();

