angular.module('app')
	.controller('apiController', function($scope, $http, paliService, apiService) {
		apiService.setJson(paliService.getSearch()).then(function() {
			$scope.obj = apiService.getJson();
			console.log($scope.obj);
		});

		
		
	});