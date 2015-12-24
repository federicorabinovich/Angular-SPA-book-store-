var app = angular.module('app', ['ngRoute','routeResolverServices', 'ngAnimate', 'relativeDate'])
.config(['$routeProvider', '$controllerProvider', 'routeResolverProvider', function($routeProvider, $controllerProvider, routeResolverProvider) {

	app.controllerProvider = $controllerProvider;
	var route = routeResolverProvider.route;


  $routeProvider
	.when('/', route.resolve('Home'))
	.when('/detail/:param', route.resolve('Detail'))
	.otherwise({
	  redirectTo: '/'
  });

}]);
