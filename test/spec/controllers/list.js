'use strict';

describe('Directive: alert-msg', function () {

  beforeEach(angular.mock.module('angularTodo'));

  var element,
      scope,
      $compile;

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  it('Inject the button to modal in the page', function () {
    element = angular.element('<div><alert-msg data-id="1" data-title="Title" delete-note="list.deleteNote(id)"></alert-msg></div>');
    element = $compile(element)(scope);

    expect(element.find('a.btn').hasClass('modal-trigger'));
  });
});
