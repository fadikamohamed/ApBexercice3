'use strict'
//Déclaration de l'application routeApp
var routeApp = angular.module('routeApp', [
  //Dépendances du module
  'ngRoute', 'routeAppControllers']);

//Configuration du module principal : routeApp
routeApp.config(function($routeProvider) {

  //Systeme de routage
  $routeProvider
  .when('/home', {
    templateUrl: 'assets/partials/home.html',
    controller: 'homeCtrl'
  })
  .when('/contact', {
    templateUrl: 'assets/partials/contact.html',
    controller: 'formCtrl'
  })
  .otherwise({
    redirectTo: '/contact'
  });
});

//Définition des controleurs
var routeAppControllers = angular.module('routeAppControllers', []);

//controleur de la page d'acceuil
routeAppControllers.controller('homeCtrl', ['$scope',
  function($scope) {
    $scope.message = "Bienvenue sur la page d'acceuil";
  }
]);


//Controleur de la page de contact
routeAppControllers.controller('formCtrl', ['$scope', function($scope) {
  $scope.regexName = /^[a-z ]*$/;
  $scope.regexMail = /^[a-zA-Z.]*[@][a-zA-Z]*[.](fr|com|org|net)$/;
  $scope.regexSubject = /^[.]*$/;
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

routeAppControllers.controller('saveForm', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
  $scope.foo1 = function() {

  $http.post('assets/data/messages.json', saveMessage).success(function(data) {
    $rootScope.transfMess = [$scope.userName, $scope.userEmail, $scope.userSubject]
    $scope.saveMessage.push([$rootScope.transfMess]);
    console.log($rootScope.transfMess);
  });
}
}]);
