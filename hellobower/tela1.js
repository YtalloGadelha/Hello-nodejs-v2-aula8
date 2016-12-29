// tela1.js
function Tela1Controller(){
  this.comp1=" do SPA no controle 1";
}
angular.module("hellobower").config(($routeProvider) => {
  
  $routeProvider.when("/tela1", {
    controller:Tela1Controller,
    templateUrl:"tela1.html",
    controllerAs:"ctl"
  });

  $routeProvider.otherwise("/tela1");
  
});
