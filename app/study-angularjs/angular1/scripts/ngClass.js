/**
 * Created by linyan on 2017/5/7.
 */
var MyCssModule = angular.module("MyCssModule", []);
MyCssModule.controller("HeaderController", function ($scope) {
    $scope.isError = false;
    $scope.isWaring = false;
    $scope.messagesText="click";
    $scope.showError = function () {
        $scope.messagesText="This is an error";
        $scope.isError=true;
        $scope.isWaring=false;
    };
    $scope.showWaring= function () {
        $scope.messagesText="just a waring";
        $scope.isError=false;
        $scope.isWaring=true;
    };
});