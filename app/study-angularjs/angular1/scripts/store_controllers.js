/**
 * Created by linyan on 2017/5/7.
 */
var bookStoreCtrls=angular.module('bookStoreCtrls',[]);

bookStoreCtrls.controller('HelloCtrl',function ($scope) {
   $scope.greeting={
       text:'Hello'
   };
   $scope.pageClass="hello";
});

bookStoreCtrls.controller('BookListCtrl',function ($scope) {
    $scope.books=[
        {title:"《Angular》",author:"Noya"},
        {title:"《Angular2》",author:"Noya2"},
        {title:"《Angular4》",author:"Noya4"}
    ];
    $scope.pageClass="list";
});