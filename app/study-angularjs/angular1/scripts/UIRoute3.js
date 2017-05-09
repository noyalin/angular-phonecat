var routeApp=angular.module('routeApp',['ui.router']);
routeApp.config(function ($stateProvider,$urlRouterProvider) {
   $urlRouterProvider.otherwise('/index');
   $stateProvider
       .state('index',{
           url:'/index',
           views:{
               '':{

               }
           }
       })
});