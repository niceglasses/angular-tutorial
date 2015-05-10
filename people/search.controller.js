demoApp.controller('SearchController', function ($scope, simpleFactory) {
	$scope.people = [{"First Name":"Jill","Last Name":"Smith","Score":"disqualified"},{"First Name":"Eve","Last Name":"Jackson","Score":"94"},{"First Name":"John","Last Name":"Doe","Score":"80"},{"First Name":"Adam","Last Name":"Johnson","Score":"67"}];

	$scope.addPerson = function () {
		$scope.people.push({
			"First Name": $scope.newPerson.firstname,
			"Last Name": $scope.newPerson.lastname,
			"Score": $scope.newPerson.score
		});
	};
});