'use strict';

app.controller('MainController', ['$scope', function($scope){
  $scope.text = 'Upvote or Downvote?';
  $scope.games = [
    {
      title: 'Overwatch',
      price: 60,
      rating: '10/10',
      likes: 0,
      dislikes: 0
    },
    {
      title: 'Diablo 3',
      price: 50,
      rating: '8/10',
      likes: 0,
      dislikes: 0
    },
    {
      title: 'The Last of Us',
      price: 25,
      rating: '9/10',
      likes: 0,
      dislikes: 0
    }
  ];
  $scope.plusOne = function(index){
    $scope.games[index].likes += 1;
  };
  $scope.minusOne = function(index){
    $scope.games[index].dislikes += 1;
  }
}]);
