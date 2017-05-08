angular.module('app')
	.controller('paliController', function($scope, paliService){

		$scope.isPalindrome = [];

		$scope.isNotPalindrome = [];


		$scope.checkPalindrome = function(word){
			var pureWord = word.replace(/[^A-Z0-9]/ig, "").toLowerCase();

			if (pureWord.split('').reverse().join('') === pureWord){
				$scope.checked = word + " is a palindrome!";
				$scope.isPalindrome.push(pureWord);
			} else {
				$scope.checked = word + " is NOT a palindrome!";
				$scope.isNotPalindrome.push(pureWord);
			};
		};

		$scope.setPaliSearch = function(word){
			paliService.setSearch(word);
		}

	});