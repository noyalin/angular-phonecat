/**
 * Created by Dell on 2017/3/24.
 */
/*
 angular.module('myApp', []).controller('myCtrl', function ($scope,$timeout) {
 var updateClock=function () {
 $scope.clock = new Date();
 $timeout(function () {
 updateClock();
 },1000);
 };
 updateClock();
 });
 */

//优化
angular.module('myApp', []).controller('myCtrl', function ($scope) {
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function () {
        $scope.clock.now = new Date();
    };
    setInterval(function () {
        $scope.$apply(updateClock)
    }, 1000);
    updateClock();

});