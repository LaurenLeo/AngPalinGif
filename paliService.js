angular.module('app')
	.factory('paliService', function(){
		return {
			setSearch: setSearch,
			getSearch: getSearch
		}

		var searchInput = "";

		function setSearch(word){
			searchInput = word;
		}

		function getSearch() {
			return searchInput;
		}
	});