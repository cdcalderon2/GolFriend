/**
 * Created by carlos on 11/9/2014.
 */
'use strict';

app.controller('AuthCtrl', function($scope, $location, $firebase,  auth, user){
    if(user){
        $location.path('/');
    }
    $scope.login = function(){
        auth.login($scope.user).then(function(){
            $location.path('/');
        }, function(error){
            $scope.error = error.toString();
        });
    };

    $scope.register = function(){
        auth.register($scope.user).then(function(user){
            return auth.login($scope.user).then(function(){
                user.username = $scope.user.username;
                return auth.createProfile(user);
            }).then(function(){
                $location.path('/');
            });
        }, function(error){
            $scope.error = error.toString();
        });
    };
});