angular.module("hellobower",["ngRoute"]);


angular.module("hellobower").config(($routeProvider) => {
  
  $routeProvider.when("/tela1", {
    controller:Tela1Controller,
    templateUrl:"tela1.html",
    controllerAs:"ctl"
  });

   $routeProvider.when("/tela2", {
    controller:Tela2Controller,
    templateUrl:"tela2.html",
    controllerAs:"ctl"
  });
  
});