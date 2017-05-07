/**
 * Created by linyan on 2017/5/7.
 */
var userInfoModule = angular.module('userInfoModule', []);
userInfoModule.controller('UserInfoCtrl', function ($scope) {
    $scope.userInfo = {
        email: "1375162594@qq.com",
        password: 123456,
        autoLogin: true
    };
    $scope.getFormData = function () {
        console.log($scope.userInfo)
    };
    $scope.setFormData = function () {
        $scope.userInfo = {
            email: "110@qq.com",
            password: 1234567,
            autoLogin: false
        };
    };
    $scope.retFormData = function () {
        $scope.userInfo = {
            email: "1375162594@qq.com",
            password: 123456,
            autoLogin: true
        };
    }
});