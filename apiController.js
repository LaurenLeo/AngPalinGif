angular.module('app')
	.controller('apiController', function($scope, $http, paliService, apiService) {
		apiService.setJson(paliService.getSearch()).then(function() {
			var results = apiService.getJson();
			$scope.obj = results.data.data;
			console.log($scope.obj);
		});

		
		
	});