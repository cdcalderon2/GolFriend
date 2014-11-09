(function(){
    angular.module("common.services").factory("gameResource", ["$resource", gameResource]);

    function gameResource($resource){
        //return $resource("/api/games/:gameId");
        return $resource("https://golfriends.firebaseio.com/games/:id.json")
    }
})();
