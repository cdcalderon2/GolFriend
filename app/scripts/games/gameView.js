/**
 * Created by carlos on 11/9/2014.
 */

(function(){
   app.controller("GameViewCtrl", ["gameResource", "$routeParams", "auth", GameViewCtrl]);

   function GameViewCtrl(gameResource, $routeParams, auth){
       var vm = this;
       vm.game = gameResource.get($routeParams.gameId);
//       vm.players = gameResource.players($routeParams.gameId);
//
//       vm.user = auth.user;
//       vm.signedIn = auth.signedIn;
//
//       vm.addPlayer = function(){
//           if(vm.playerName || vm.playerName === ""){
//               return;
//           }
////
////           var player = {
////              name: vm.playerName,
////              playerUserName: vm
////
////           };
//       }
   };
})();