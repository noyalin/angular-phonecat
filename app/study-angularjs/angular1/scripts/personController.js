/**
 * Created by Dell on 2017/3/24.
 */
angular.module('myApp', []).controller('myCtrl', function ($scope) {
    $scope.firstName = 'John';
    $scope.lastName = 'Doe';
    $scope.fullName=function () {
        return $scope.firstName+" "+$scope.lastName;
    }
});