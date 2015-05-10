demoApp.config(function ($routeProvider) {
	$routeProvider
		.when('/',{
			controller: 'SearchController',
			templateUrl: 'Partials/View1.html'
		})
		.when('/view2',{
			controller: 'SearchController',
			templateUrl: 'Partials/View2.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});