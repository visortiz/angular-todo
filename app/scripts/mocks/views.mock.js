'use strict';

angular.module(APP_NAME)
  .run(viewsMockRun);

/**
 * @ngInject
 */
function viewsMockRun($httpBackend) {
  $httpBackend.whenGET(/.html$/).passThrough();
}
