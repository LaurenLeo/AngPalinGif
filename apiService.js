angular.module('app')
	.factory('apiService', function($http){
		var results = {};

		return {
			setJson: setJson,
			getJson: getJson
		}

		

		function setJson(w) {
			var promise = $http.get('http://api.giphy.com/v1/gifs/search?q=' + w + '&api_key=dc6zaTOxFJmzC')
				.then(function(response){
					results = response;
					console.log(results);
				}, function (error){
					console.log(error);
				});
			return promise;
		}

		function getJson(){
			return results;
		}
	})