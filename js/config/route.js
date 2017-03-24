var portfolioApp = angular.module('portfolioApp',['ngRoute']);

/**********************
▼ルーティング設定
************************/

portfolioApp.config(function($routeProvider) {
    
    $routeProvider
    
    .when('/', {

        templateUrl: 'pages/main.html',  
        controller: 'mainController'

    })
    
    .when('/about', {

        templateUrl: 'pages/about.html',
        controller: 'secondController'

    })

    .when('/portfolio', {

        templateUrl: 'pages/portfolio.html',
        controller: 'secondController'

    })

    .when('/contact', {

        templateUrl: 'pages/contact.html',
        controller: 'secondController'

    })
    
});
