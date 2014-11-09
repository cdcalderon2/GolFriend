/**
 * Created by carlos on 11/9/2014.
 */

(function (){
    "use strict";
    angular.module("gameResourceMock", ["ngMockE2E"]);

    angular.module("gameResourceMock").run(function($httpBackend){
        var games = [
            {
                "gameId": 1,
                "name": "Plano Nov 7 Game"
            },
            {
                "gameId": 2,
                "name": "Dallas Aug-15 Birthday Game"
            }
        ];

        var gameUrl = "/api/games"

        $httpBackend.whenGET('../views/games.html').passThrough();

        $httpBackend.whenGET(gameUrl).respond(games);
        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();
    })

})();
