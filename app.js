angular.module('app', ['ngRoute', 'ngAnimate'])
	.config(function($routeProvider){
		$routeProvider.when('/palindrome', {
			templateUrl: 'views/pali.html',
			controller: 'paliController'
		})
		.when('/giphy', {
			templateUrl: 'views/giphy.html',
			controller: 'apiController'
		})
		.otherwise('/palindrome');
	})
	// .directive('name', function() {
	// 	return {

	// 	}
	// })
	// .directive('name2', function() {
	// 	return {

	// 	}
	// });