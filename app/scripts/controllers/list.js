'use strict';

/**
 * # MainCtrl
 */
angular.module(APP_NAME)
  .controller('ListCtrl', ListCtrl);

  function ListCtrl() {

    $(document).ready(function(){
      $('.parallax').parallax();
    });

  }
