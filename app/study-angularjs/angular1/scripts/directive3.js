/**
 * Created by Dell on 2017/5/9.
 */
var myModule = angular.module('myModule', []);
myModule.controller('myCtrl', function ($scope) {
    $scope.loadData = function () {
        console.log("加载数据中...");
    }
});

myModule.controller('myCtrl2', function ($scope) {
    $scope.loadData2 = function () {
        console.log("加载数据中2...");
    }
});

myModule.directive("loader",function () {
   return{
       restrict:'AE',
       link:function (scope, element, attr) {
           element.bind("mouseenter",function () {
               //scope.loadData();//调用loadData
               //scope.$apply("loadData()");//调用loadData
               //注意坑：驼峰会被转换成小写
               scope.$apply(attr.howtoload);//指令复用
           })
       }
   } 
});