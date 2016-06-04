angular.module(APP_NAME)
    .config(listRouteConfig);

function listRouteConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/list.html',
      controller: 'ListCtrl',
      controllerAs: 'list',
      resolve: {
        files: _filesResolve,
        list: _listResolve
      }
    })

    .otherwise({
      redirectTo: '/'
    });

  function _filesResolve($ocLazyLoad) {
    return $ocLazyLoad.load([
      'scripts/controllers/list.ctrl.js',
      'scripts/directives/alert-msg.js'
    ]);
  }

  function _listResolve($http) {
    return $http.get('/list/');
  }
}
