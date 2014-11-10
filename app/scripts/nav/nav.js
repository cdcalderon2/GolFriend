/**
 * Created by carlos on 11/9/2014.
 */

'use strict';

app.controller('NavCtrl', function ($scope, $location, gameResource, auth) {
    $scope.signedIn = auth.signedIn;
    $scope.logout = auth.logout;
    $scope.user = auth.user;
    $scope.game = {url: ""};

    $scope.submitGame = function () {
        $scope.game.creator = $scope.user.profile.username;
        $scope.game.creatorUID = $scope.user.uid;
        gameResource.create($scope.game).then(function (ref) {
            $location.path('/game/' + ref.name());
//            $scope.game = {game: ""};
        });
    };

});


//
///**
// * Created by carlos on 11/9/2014.
// */
//(function(){
//    'use strict';
//    app.controller("NavCtrl", ["gameResource", NavCtrl]);
//    function NavCtrl(gameResource){
//        var vm = this;
//        vm.game = {game: ""};
//        vm.submitGame = function(){
//            gameResource.create(vm.game).then(function(ref){
//                $location.path("/games/" + ref.name())
//            });
//        };
//    };
//});