var angular = require('angular');
require('angular-route');
var dashboard = require('./dashboard/index');

module.exports = angular.module('tanks', [
    'ngRoute',
    dashboard.name
]).config(RouteConfig);

RouteConfig.$inject = ['$routeProvider', '$locationProvider'];
function RouteConfig($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html'
        })
        .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
}
