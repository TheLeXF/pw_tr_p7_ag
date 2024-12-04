const app = angular.module('app', []);

// Crear un controlador
app.controller('MainController', function($scope) {
  $scope.mensaje = "Hola Mundo Esto es un componente de Angular";
});
