var angular = require('angular');
var ngRoute = require('angular-route');

module.exports = angular.module('tanks.dashboard', [
    ngRoute
]).config(RouteConfig);

RouteConfig.$inject = ['$routeProvider'];
function RouteConfig($routeProvider) {
    $routeProvider.when('/dashboard', {
        controller: DashboardCtrl,
        templateUrl: 'dashboard/dashboard.html'
    });
};

function DashboardCtrl($scope, $http){
  $http.get('users').then(function(response){
      $scope.users = response.data.users;
  });
    // $scope.users = [
    //     {
    //         _id: 123,
    //         userName: 'Oksi',
    //         isOnline: true
    //     },
    //     {
    //         _id: 213,
    //         userName: 'Marko',
    //         isOnline: false
    //     }
    // ];
    console.log("required!");
}
