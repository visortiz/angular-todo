'use strict';

angular.module(APP_NAME)
  .directive('alertMsg', alertMsg);

/**
 * @ngInject
 */
function alertMsg() {
  return {
    template: _buildModal(),
    transclude: true,
    restrict: 'E',
    scope: {
      noteId: '@id',
      noteTitle: '@title',
      deleteNote: '&deleteNote'
    },
    link: _link
  };

  //  ///////////////

  function _buildModal() {
    return    '<a class="modal-trigger waves-effect waves-light btn blue" data-target="modal_{{noteId}}"><i class="material-icons right">delete</i>delete</a>'
            + '<div id="modal_{{noteId}}" class="modal">'
              + '<div class="modal-content">'
                + '<h4>Delete Note?</h4>'
                + '<p>Are you sure you want to delete note \'{{noteTitle}}\'?</p>'
                + '</div>'
                + '<div class="modal-footer">'
                  + '<a class="modal-action delete-note waves-effect waves-green btn-flat">Delete</a>'
                  + '<a class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>'
                + '</div>'
              + '</div>';
  }

  function _link(scope, element, attrs) {
    $('.modal-trigger').leanModal();

    $(element).find('.delete-note').bind('click', function() {
      scope.deleteNote({ id: parseInt(attrs.id) });
    })
  }
}
