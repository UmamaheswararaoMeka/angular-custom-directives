var app = angular.module("myApp",[])

app.controller("myController", ["$scope", function($scope){
	$scope.message = "This is message from controller";
	$scope.company= "Techminds Pvt Ltd"
	$scope.userDetails = [
		{name : "Scott Desatnick", address : "Boston, United States"},
		{name : "Adam Colson", address : " Texas, United States"},
		{name : "Tuan Bui", address : "Ohio, USA"},
		{name : "JP Poveda", address : "Colarado, Canada"}
	]

	$scope.changeCompanyName= function(){
		$scope.company="Techmind Solutions";
	}


}])

app.directive("myCustomerDetailsDirective", function(){
	return {
		restrict : 'EACM',
		templateUrl:'customerDetails.html' ,
		replace: true,
		scope: {
			companyName : '@',
			userDetails : '=',
			change : '&'
		},

		link: function(scope, elem, attrs){

				console.log("In postlink")
				console.log(scope)
				console.log(elem)
				console.log(attrs)		
				}

			}
		}
)