'use strict';

/**
 * # ListCtrl
 */
angular.module(APP_NAME)
  .controller('ListCtrl', ListCtrl);

function ListCtrl($scope, list) {
  var vm = this;

  this.parallax = this.parallax || $('.parallax');
  this.modalTrigger = this.modalTrigger || $('.modal-trigger');
  this.list = list.data;
  this.formModel = {};

  this.initParallax = _initParallax();
  this.saveNote = _saveNote;
  this.editNote = _editNote;
  this.deleteNote = _deleteNote;

  //  ///////////////////////////////////

  function _initParallax() {
    vm.parallax.parallax();
  }

  function _saveNote() {
    if (!vm.formModel.title || !vm.formModel.text) return;

    if (vm.formModel.id) { _updateNote(); }
    else { _createNote(); }
    _cleanForm();

    ////////

    function _updateNote() {
      var note = _findNoteById(vm.formModel.id);
      note.title = vm.formModel.title;
      note.text = vm.formModel.text;
    }

    function _createNote() {
      vm.list.push( {
        id: vm.list.length + 1,
        title: vm.formModel.title,
        text: vm.formModel.text
      });
    }
  }

  function _editNote(id) {
    var note = _findNoteById(id);
    vm.formModel.id = note.id;
    vm.formModel.title = note.title;
    vm.formModel.text = note.text;
    _goTop();
  }

  function _deleteNote(id) {
    var note = _findNoteById(id)
    vm.list.splice(vm.list.indexOf(note), 1);
    $scope.$apply();
    $('#modal_' + id).closeModal();
    $('.lean-overlay').remove();
  }

  function _findNoteById(id) {
    var note;
    vm.list.some(function (element) {
      if (element.id === id) {
        note = element;
        return true;
      }
    });
    return note;
  }

  function _cleanForm() {
    vm.formModel = {};
  }

  function _goTop() {
    var body = body || $('body');
    var element = angular.element(vm.parallax);
    angular.element(body).animate({scrollTop: element.offset().top}, "slow");
  }
}
