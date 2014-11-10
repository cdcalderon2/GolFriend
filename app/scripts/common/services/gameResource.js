(function(){
    app.factory("gameResource", ["$firebase","FIREBASE_URL", gameResource]);

    function gameResource($firebase, FIREBASE_URL){
        var ref = new Firebase(FIREBASE_URL);
        var games = $firebase(ref.child("games")).$asArray();

        return{
          all: games,
          create: function(game){
             return games.$add(game).then(function(gameRef){
                 $firebase(ref.child("user_game").child(game.creatorUID)).$push(gameRef.name());
             });
          },
          get: function(gameId){
              return $firebase(ref.child("games").child(gameId)).$asObject();
          },
          delete: function(game){
              return games.$remove(game);
          }
        };
    }
})();
