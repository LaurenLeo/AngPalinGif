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
	.directive('isPali', function() {
		return {
			restrict: 'E',
			template: '<li ng-repeat="word in isPalindrome" class="item" ng-click="setPaliSearch(word)"><button class="yes">{{ word }}</button></li>',
			replace: true
		}
	})
	.directive('notPali', function() {
		return {
			restrict: 'E',
			template: '<li ng-repeat="word in isNotPalindrome" class="item" ng-click="setPaliSearch(word)"><button class="no">{{ word }}</button></li>',
			replace: true
		}
	});
