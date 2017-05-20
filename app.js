var app = angular.module("myApp",[])

app.controller("myController", ["$scope", function($scope){
	$scope.message = "This is message from controller";
}])

app.directive("myCustomerDetailsDirective", function(){
	return {
		restrict : 'EACM',
		template: "<h1>This is custom directive</h1>",
		replace: true
	}
})