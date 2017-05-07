/**
 *
 * Created by linyan on 2017/5/7.
 */
var MyCssModule = angular.module("MyCssModule", []);
MyCssModule.controller("CssCtrl", function ($scope) {
    $scope.color = "red";
    $scope.setGreen = function () {
        $scope.color = "green";
    }
});