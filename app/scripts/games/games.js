(function(){
    angular.module("golfriendsApp").controller("GamesCtrl", ["gameResource", "$location", "auth", GamesCtrl]);

    function GamesCtrl(gameResource, auth){
        var vm = this;
        vm.game = {game: ""};
        vm.games = gameResource.all;
        vm.user = auth.user;
        vm.delete = function(game){
           gameResource.delete(game);
        };
//        gameResource.query(function(data){
//            vm.games = data;
//        });
    };
})();

