'use strict';

/**
 * Filter of main page.
 */
angular
.module(APP_NAME)
.filter('searchFor', function(){
  return function(arr, filterString){
    if (!filterString) {
      return arr;
    }

    var result = [];
    filterString = filterString.toLowerCase();
    angular.forEach(arr, function(item) {
      if (item.name.toLowerCase().indexOf(filterString) !== -1) {
        result.push(item);
      }
    });
    return result;
  };
});
