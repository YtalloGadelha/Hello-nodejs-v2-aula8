function Tela1Controller(){
  
  this.nome = "Tela 1";
};

function Tela2Controller(){

  this.nome = "Tela 2";
};

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

  $routeProvider.otherwise("/tela1");
  
});