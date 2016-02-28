describe('calculator', function () {

  beforeEach(module('calculatorApp'));

  var $controller;
  var $scope;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;

    $scope = {};
    controller = $controller('CalculatorController', { $scope: $scope });      
  }));

  describe('sum', function () {
    it('1 + 1 should equal 2', function () {
      $scope.x = 1;
      $scope.y = 2;
      $scope.sum();
      expect($scope.z).toBe(3);
    }); 
  });

  describe('square', function() {
    it('returns 100', function() {
      $scope.x = 10;

      $scope.square();

      expect($scope.z).toBe(100);
    });
  });
});
