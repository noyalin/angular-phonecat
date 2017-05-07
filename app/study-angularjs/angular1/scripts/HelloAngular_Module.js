/**
 * Created by Dell on 2017/3/24.
 */
/*
 1.1、$apply 方法作用：Scope提供$apply方法传播Model的变化
 1.2、$apply方法使用情景：AngularJS 外部的控制器（DOM 事件、外部的回调函数如 jQuery UI 空间等）
 调用了 AngularJS 函数之后，必须调用$apply。在这种情况下，你需要命令 AngularJS 刷新自已（模型、视图等） ，$apply 就是用来做这件事情的。
 1.3、$apply方法注意事项：只要可以，请把要执行的代码和函数传递给$apply去执行，而不要自已执行那些函数然后再调用$apply。
 */
/* No:效果是：两秒之后，页面的name 和 age都没有变化，原因是页面无法传播model的变化
 var myModule = angular.module("HelloAngular", []);
 myModule.controller("helloAngular", ['$scope',"$timeout",
 function HelloAngular($scope,$timeout) {
 $scope.name = "oldName";
 $scope.age=20;
 setTimeout(function(){
 $scope.name = "newName";
 $scope.age="21";
 },2000);
 }]);
 */

//Yes
var myModule = angular.module("HelloAngular", []);
myModule.controller("helloAngular", function ($scope) {
    $scope.name = "oldName";
    $scope.age = 20;
    setTimeout(function () {
        $scope.$apply(function () {
            $scope.name = "newName";
            $scope.age = "21";
        });
    }, 2000);
});