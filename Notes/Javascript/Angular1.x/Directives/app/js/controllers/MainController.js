'use strict';

app.controller('MainController', ['$scope', function($scope){
  $scope.text = 'Sup';
  $scope.overwatch = {
    title: 'Overwatch',
    price: 60,
    rating: '10/10'
  };
}]);
