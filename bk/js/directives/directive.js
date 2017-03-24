/*************************
▼ カスタムディレクティブの定義
**************************/

portfolioApp.directive('navCommon',function(){

  return {
    restrict: 'AE',
    templateUrl: 'common/navcommon.html', 
    replace: true

  };

});

portfolioApp.directive('footerCommon',function(){

  return {
    restrict: 'AE',
    templateUrl: 'common/footercommon.html', 
    replace: true

  };

});



