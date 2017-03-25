/**********************
▼コントローラーの設定
************************/

portfolioApp.controller('mainController',['$scope',function($scope){

    $scope.msg = 'Welcome to This Project';

  }]);


portfolioApp.controller('secondController',['$scope',function($scope){

    $scope.msg = 'Welcome to This Project';

  }]);



portfolioApp.controller('portfolioController',['$scope','portfolioService',function($scope,portfolioService){

    $scope.portfolio = portfolioService.portfolio;

  }]);

