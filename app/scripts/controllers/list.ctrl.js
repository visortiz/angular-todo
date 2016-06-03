'use strict';

/**
 * # MainCtrl
 */
angular.module(APP_NAME)
  .controller('ListCtrl', ListCtrl);

function ListCtrl($scope, list) {
  var vm = this;

  this.parallax = this.parallax || $('.parallax');
  this.modalTrigger = this.modalTrigger || $('.modal-trigger');
  this.list = list.data;

  this.initParallax = _initParallax();
  this.cleanForm = _cleanForm();
  this.saveNewNote = _saveNewNote;
  this.deleteNote = _deleteNote;

  //  ///////////////////////////////////

  function _initParallax() {
    vm.parallax.parallax();
  }

  function _cleanForm() {
    vm.title = '';
    vm.text = '';
  }

  function _saveNewNote() {
    if (!vm.title || !vm.text) return;

    vm.list.push(
      {
        id: vm.list.length + 1,
        title: vm.title,
        text: vm.text
      }
    );
    _cleanForm();
  }

  function _deleteNote(id) {
    vm.list.some(function(element, idx) {
      if (element.id === id) {
        vm.list.splice(vm.list.indexOf(element), 1);
      //   console.log(id, idx);
      //   vm.list.splice(idx, 1);
        $scope.$apply();
        $('#modal_' + id).closeModal();
        $('.lean-overlay').remove();
      }
    });
  }
}
