/**
 * Created by linyan on 2017/5/7.
 */
var myShow = angular.module("myShow", []);
myShow.controller("myCtrl", function ($scope) {
    $scope.menuState={show:false};
    $scope.toggleMenu = function () {
        $scope.menuState.show=!$scope.menuState.show;
    };

});