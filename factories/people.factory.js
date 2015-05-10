demoApp.factory('simpleFactory',function(){
	return function getPeople(){
		this.people = [{"First Name":"Jill","Last Name":"Smith","Score":"disqualified"},{"First Name":"Eve","Last Name":"Jackson","Score":"94"},{"First Name":"John","Last Name":"Doe","Score":"80"},{"First Name":"Adam","Last Name":"Johnson","Score":"67"}];

		return this.people;
	};
});