angular.module(APP_NAME)
    .config(listRouteConfig);

    function listRouteConfig($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/list.html',
          controller: 'ListCtrl',
          controllerAs: 'list',
          resolve: {
            files: _filesResolve
            // repos: _reposResolve,
            // user: _userResolve
          }
        })

        .otherwise({
          redirectTo: '/'
        });

      function _filesResolve($ocLazyLoad) {
        return $ocLazyLoad.load([
          'scripts/controllers/list.js',
          'scripts/filters/searchfor.js'
        ]);
      }

      // function _userResolve($http, $route, $location) {
      //   if(! $route.current.params.user) {
      //     $route.current.params.user = 'Edools';
      //   }
      //   return $http.get('https://api.github.com/users/' + $route.current.params.user)
      //     .then( function(data) { return data.data } )
      //     .catch( function(err) { return $location.path( "/?err-user" ); } );
      // }
      //
      // function _reposResolve($http, $route, $location) {
      //   if(! $route.current.params.user) {
      //     $route.current.params.user = 'Edools';
      //   }
      //   return $http.get('https://api.github.com/users/' + $route.current.params.user + '/repos')
      //     .then( function(data) { return data.data } )
      //     .catch( function(err) { return $location.path( "/?err-repo" ); } );
      // }
    }
