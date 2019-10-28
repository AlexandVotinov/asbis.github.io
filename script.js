var app = angular.module('winnersApp', ['ngGrid']);

app.controller('NgGridController', function($scope, $http){
    $http.get('olympicWinnersSmall.json').success(function(dat) {
        $scope.data = dat;
        
    });
    
    $scope.gridOptions = {data: 'data'};
     
});