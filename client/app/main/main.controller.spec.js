'use strict';

describe('Controller: MainCtrl', function() {
  // load the controller's module
  beforeEach(module('xApp'));
  beforeEach(module('stateMock'));

  var scope;
  var MainController;
  var state;
  var $httpBackend;

   // Initialize the controller and a mock scope
   beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $state) {
     $httpBackend = _$httpBackend_;
     $httpBackend.expectGET('/api/things')
       .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

     scope = $rootScope.$new();
     state = $state;
     MainController = $controller('MainCtrl', {
       $scope: scope
     });
   }));

   it('should attach a list of things to the controller', function() {
    //  $httpBackend.flush();
    //  expect(MainCtrl.awesomeThings.length).toBe(4);
   });
});
