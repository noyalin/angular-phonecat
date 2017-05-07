/**
 * Created by linyan on 2017/5/7.
 */
var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls'
]);

bookStoreApp.config(function ($routeProvider) {
    $routeProvider
        .when('/hello', {
            templateUrl: 'tpls/hello.html',
            controller: 'HelloCtrl'
        })
        .when('/list', {
            templateUrl: 'tpls/booklist.html',
            controller: 'BookListCtrl'
        })
        .otherwise({
            redirectTo: '/hello'
        });
});


