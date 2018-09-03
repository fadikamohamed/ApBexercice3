var form = angular.module('validForm', []);
form.run(['$rootScope', function($rootScope) {
  $rootScope.transfMess = [];
}]);
form.controller('formCtrl', ['$scope', function($scope) {
  $scope.regexName = /^[a-z]*$/i;
  $scope.regexMail = /^[a-zA-Z.]*[@][a-zA-Z]*[.](fr|com|org|net)$/;
  $scope.regexSubject = /[\d]*/;
  $scope.resultTestName = true;
  $scope.resultTestMail = true;
  $scope.resultTestSubject = true;
  $scope.testName = function(){
    $scope.resultTestNameError = $scope.form.name.$error.pattern;
    $scope.resultTestNameValid = $scope.form.name.$valid.pattern;
  }
  $scope.testMail = function(){
    $scope.resultTestMailError = $scope.form.email.$error.pattern;
    $scope.resultTestMailValid = $scope.form.email.$valid.pattern;
  }
  $scope.testSubject = function(){
    $scope.resultTestSubjectError = $scope.form.subject.$error.pattern;
    $scope.resultTestSubjectValid = $scope.form.subject.$valid.pattern;
  }
}]);

form.controller('saveForm', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
  $scope.foo1 = function(){
  $http.get('assets/data/messages.json').success(function(data) {
    $scope.saveMessage = data;
    $rootScope.transfMess = [$scope.userName, $scope.userEmail, $scope.userSubject]
    $scope.saveMessage.push([transfMess]);
    console.log(transfMess);
  });
}

  }
]);
